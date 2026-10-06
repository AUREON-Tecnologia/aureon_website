// Production server for aureontec.com (Railway): serves the Vite build and the contact form endpoint.
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { Resend } from "resend";

import { buildEmailHtml, createRateLimiter, validateContact } from "./contact.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = Number(process.env.PORT || 8080);

const config = {
  resendApiKey: process.env.RESEND_API_KEY || "",
  contactTo: process.env.CONTACT_TO || "",
  contactFrom: process.env.CONTACT_FROM || "",
};
const contactEnabled = Boolean(config.resendApiKey && config.contactTo && config.contactFrom);
const resend = contactEnabled ? new Resend(config.resendApiKey) : null;

const log = (level, message, extra = {}) =>
  console[level === "error" ? "error" : "log"](
    JSON.stringify({ level, message, time: new Date().toISOString(), ...extra }),
  );

if (!contactEnabled) {
  log("warn", "Contact form disabled: set RESEND_API_KEY, CONTACT_TO and CONTACT_FROM.");
}

const app = express();
app.disable("x-powered-by");
// Railway terminates TLS in front of the app: trust one proxy hop so req.ip is the visitor's IP.
app.set("trust proxy", 1);

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Strict-Transport-Security", "max-age=31536000");
  next();
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

// 5 messages per IP every 15 minutes.
const contactLimiter = createRateLimiter({ max: 5, windowMs: 15 * 60 * 1000 });

app.post("/api/send-email", express.json({ limit: "20kb" }), async (req, res) => {
  if (!contactEnabled) {
    return res.status(503).json({ message: "El formulario no está disponible en este momento." });
  }

  if (!contactLimiter(req.ip)) {
    log("warn", "contact rate limited", { ip: req.ip });
    return res
      .status(429)
      .json({ message: "Has enviado varios mensajes seguidos. Intenta de nuevo en unos minutos." });
  }

  const result = validateContact(req.body);
  if (result.isBot) {
    log("warn", "contact honeypot triggered", { ip: req.ip });
    return res.status(200).json({ success: true });
  }
  if (!result.ok) {
    return res.status(400).json({ message: result.error });
  }

  const { data } = result;
  const { error } = await resend.emails.send({
    from: config.contactFrom,
    to: config.contactTo.split(",").map((address) => address.trim()),
    replyTo: data.email,
    subject: `Nuevo contacto: ${data.name}`.slice(0, 150),
    html: buildEmailHtml(data),
  });

  if (error) {
    log("error", "contact email failed", { error: error.message ?? String(error) });
    return res.status(502).json({ message: "No pudimos enviar tu mensaje. Intenta de nuevo más tarde." });
  }

  log("info", "contact email sent");
  return res.status(200).json({ success: true });
});

// Malformed JSON and oversized bodies.
app.use("/api", (err, _req, res, _next) => {
  const status = err.status === 413 ? 413 : 400;
  return res.status(status).json({ message: "Solicitud inválida." });
});

app.use(express.static(DIST_DIR, { extensions: ["html"], maxAge: "1h" }));

app.use((_req, res) => {
  res.status(404).sendFile(path.join(DIST_DIR, "404.html"), (err) => {
    if (err) res.status(404).type("text").send("Página no encontrada");
  });
});

app.listen(PORT, () => log("info", `aureon-website listening on port ${PORT}`, { contactEnabled }));
