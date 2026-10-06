import { test } from "node:test";
import assert from "node:assert/strict";

import { buildEmailHtml, createRateLimiter, escapeHtml, validateContact } from "./contact.mjs";

const valid = {
  name: "Ana Pérez",
  email: "ana@empresa.co",
  company: "Taller Ana",
  message: "Quiero información sobre la plataforma.",
  consent: true,
};

test("accepts a valid message", () => {
  const result = validateContact(valid);
  assert.equal(result.ok, true);
  assert.equal(result.data.name, "Ana Pérez");
});

test("requires explicit consent (boolean true)", () => {
  assert.equal(validateContact({ ...valid, consent: false }).ok, false);
  assert.equal(validateContact({ ...valid, consent: "true" }).ok, false);
  assert.equal(validateContact({ ...valid, consent: undefined }).ok, false);
});

test("rejects invalid email, empty name, short and long messages", () => {
  assert.equal(validateContact({ ...valid, email: "no-es-correo" }).ok, false);
  assert.equal(validateContact({ ...valid, name: "   " }).ok, false);
  assert.equal(validateContact({ ...valid, message: "hola" }).ok, false);
  assert.equal(validateContact({ ...valid, message: "x".repeat(5001) }).ok, false);
});

test("honeypot marks the request as a bot", () => {
  const result = validateContact({ ...valid, website: "http://spam.example" });
  assert.equal(result.ok, false);
  assert.equal(result.isBot, true);
});

test("tolerates non-object bodies", () => {
  assert.equal(validateContact(null).ok, false);
  assert.equal(validateContact("texto").ok, false);
});

test("escapes HTML in every user field", () => {
  assert.equal(escapeHtml(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");

  const html = buildEmailHtml({
    name: "<script>alert(1)</script>",
    email: "a@b.co",
    company: '<img src=x onerror="y">',
    message: '<a href="https://phish.example">Haz clic</a>',
  });
  assert.equal(html.includes("<script>"), false);
  assert.equal(html.includes("<img"), false);
  assert.equal(html.includes('<a href="https://phish.example">'), false);
});

test("rate limiter allows max hits per window, per key", () => {
  let now = 0;
  const allow = createRateLimiter({ max: 2, windowMs: 1000, now: () => now });

  assert.equal(allow("1.1.1.1"), true);
  assert.equal(allow("1.1.1.1"), true);
  assert.equal(allow("1.1.1.1"), false);
  assert.equal(allow("2.2.2.2"), true);

  now = 1000;
  assert.equal(allow("1.1.1.1"), true);
});
