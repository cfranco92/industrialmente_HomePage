"use client";

import { FormEvent, useState } from "react";
import styles from "./contact-form.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactEmail = "info@industrialmente.co";

const initialValues = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [feedback, setFeedback] = useState<string | null>(null);

  function updateValue(field: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (feedback) {
      setFeedback(null);
    }
  }

  function buildMailtoUrl(payload: typeof initialValues) {
    const subject = payload.company
      ? `Nuevo contacto desde industrialmente.co - ${payload.company}`
      : `Nuevo contacto desde industrialmente.co - ${payload.name}`;

    const body = [
      "Hola Industrialmente,",
      "",
      "Comparto mis datos para conversar sobre una necesidad o proyecto.",
      "",
      `Nombre: ${payload.name}`,
      `Correo: ${payload.email}`,
      `Empresa: ${payload.company || "No informada"}`,
      "",
      "Mensaje:",
      payload.message,
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      message: values.message.trim(),
      website: values.website.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFeedback("Completa nombre, correo y mensaje antes de continuar.");
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setFeedback("Ingresa un correo valido antes de enviar el mensaje.");
      return;
    }

    if (payload.message.length < 10) {
      setFeedback("Escribe un mensaje un poco mas detallado.");
      return;
    }

    if (payload.website) {
      setFeedback("Gracias. Preparamos tu mensaje.");
      return;
    }

    window.location.href = buildMailtoUrl(payload);
    setFeedback(
      `Abrimos tu aplicacion de correo con el mensaje preparado. Si no se abre, escribe a ${contactEmail}.`,
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.heading}>
        <h3>Escribenos</h3>
        <p>
          Preparamos un correo con tu informacion para que lo envies desde tu
          aplicacion de email sin copiar ni pegar.
        </p>
      </div>

      <label className={styles.field}>
        <span>Nombre</span>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(event) => updateValue("name", event.target.value)}
          placeholder="Tu nombre"
          autoComplete="name"
          required
          maxLength={120}
        />
      </label>

      <label className={styles.field}>
        <span>Correo</span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          placeholder="tu@empresa.com"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={160}
        />
      </label>

      <label className={styles.field}>
        <span>Empresa</span>
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={(event) => updateValue("company", event.target.value)}
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
          maxLength={160}
        />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        <span>Sitio web</span>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>Mensaje</span>
        <textarea
          name="message"
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          placeholder="Describe brevemente tu necesidad o proyecto."
          rows={6}
          required
          minLength={10}
          maxLength={1200}
        />
      </label>

      <button type="submit" className={styles.submit}>
        Preparar correo
      </button>

      {feedback ? (
        <p className={styles.feedback} aria-live="polite">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
