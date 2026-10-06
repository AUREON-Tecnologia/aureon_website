// Contact form: validation, HTML escaping and a small in-memory rate limiter.
// Kept free of Express so it can be unit-tested in isolation.

export const LIMITS = {
  name: 100,
  email: 200,
  company: 150,
  messageMin: 10,
  messageMax: 5000,
};

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

/** Escapes the five HTML-significant characters so user input is rendered as text in the email. */
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const asText = (value) => (typeof value === "string" ? value.trim() : "");

/**
 * Validates the request body.
 * Returns { ok: true, data } or { ok: false, error } with a message safe to show the visitor.
 * `isBot: true` means the honeypot was filled: the caller should answer 200 and send nothing.
 */
export function validateContact(body) {
  const input = body && typeof body === "object" ? body : {};

  if (asText(input.website)) {
    return { ok: false, isBot: true };
  }

  const data = {
    name: asText(input.name),
    email: asText(input.email),
    company: asText(input.company),
    message: asText(input.message),
  };

  if (!data.name || data.name.length > LIMITS.name) {
    return { ok: false, error: "Escribe tu nombre (máximo 100 caracteres)." };
  }
  if (!EMAIL_RE.test(data.email) || data.email.length > LIMITS.email) {
    return { ok: false, error: "Escribe un correo electrónico válido." };
  }
  if (data.company.length > LIMITS.company) {
    return { ok: false, error: "El nombre de la empresa es demasiado largo." };
  }
  if (data.message.length < LIMITS.messageMin || data.message.length > LIMITS.messageMax) {
    return { ok: false, error: "El mensaje debe tener entre 10 y 5000 caracteres." };
  }
  if (input.consent !== true) {
    return {
      ok: false,
      error: "Debes aceptar la Política de Tratamiento de Datos Personales para enviar el mensaje.",
    };
  }

  return { ok: true, data };
}

export function buildEmailHtml(data, receivedAt = new Date()) {
  const row = (label, value) =>
    `<p><strong>${label}:</strong> ${escapeHtml(value || "—")}</p>`;

  return [
    "<h2>Nuevo contacto desde aureontec.com</h2>",
    row("Nombre", data.name),
    row("Correo", data.email),
    row("Empresa", data.company),
    "<p><strong>Mensaje:</strong></p>",
    `<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    `<p style="color:#64748b;font-size:12px">Recibido: ${escapeHtml(receivedAt.toISOString())}. ` +
      "El remitente aceptó la Política de Tratamiento de Datos Personales.</p>",
  ].join("\n");
}

/**
 * Fixed-window limiter per key (client IP). In-memory on purpose: one instance, low traffic.
 * If the site ever runs on several replicas, move this to Redis.
 */
export function createRateLimiter({ max, windowMs, now = () => Date.now() }) {
  const hits = new Map();

  return function isAllowed(key) {
    const t = now();
    const entry = hits.get(key);

    if (!entry || t >= entry.resetAt) {
      hits.set(key, { count: 1, resetAt: t + windowMs });
      if (hits.size > 10_000) {
        for (const [k, v] of hits) if (t >= v.resetAt) hits.delete(k);
      }
      return true;
    }

    entry.count += 1;
    return entry.count <= max;
  };
}
