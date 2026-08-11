"use client";

import { useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "bedd3dce-72f7-448f-8b03-3b36a4454d27",
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[var(--color-background)] px-4 py-16 sm:px-0 sm:py-24">
      <div className="container-custom">
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Contacto
            </p>
            <h1 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl md:text-5xl">
              Activa tu próxima ventaja operativa ahora.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Cuéntanos tu desafío y te mostraremos un camino más ágil, confiable y enfocado para tu operación.
            </p>
          </div>

          <div className="rounded-[32px] border border-[var(--color-border)] bg-white p-6 shadow-[0_35px_70px_-40px_rgba(15,23,42,0.18)] sm:p-10">
            <div className="space-y-6">
              <div className="rounded-[28px] bg-[var(--color-background)] p-6 shadow-sm border border-[var(--color-border)]">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">Enfoque premium</p>
                <p className="text-slate-600 leading-7">
                  Un acercamiento tranquilo, estratégico y diseñado para que tu operación gane claridad sin ruido visual.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[24px] bg-[#f8fafc] px-5 py-4 text-slate-700">
                  <p className="font-semibold">Diagnóstico orientado a valor</p>
                  <p className="text-sm">Identificamos oportunidades reales para mejorar tu operación.</p>
                </div>
                <div className="rounded-[24px] bg-[#f8fafc] px-5 py-4 text-slate-700">
                  <p className="font-semibold">Recomendaciones claras</p>
                  <p className="text-sm">Te entregamos un camino simple para avanzar sin complicaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="premium-panel">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <h2 className="text-3xl font-semibold text-[#0f172a] mb-4">Cuéntanos tu desafío</h2>
                <p className="text-slate-600 leading-7">
                  Nuestro equipo revisa tu caso y te propone una solución operativa clara, rápida y alineada con tus objetivos.
                </p>
              </div>
              <div className="space-y-3 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5 sm:p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">¿Qué recibirás?</p>
                <ul className="space-y-3 text-slate-600">
                  <li>✅ Diagnóstico directo a tu operación</li>
                  <li>✅ Recomendaciones que puedes aplicar rápido</li>
                  <li>✅ Un plan claro para reducir la manualidad</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4 text-sm text-[#111827] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(28,106,63,0.12)]"
                  required
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4 text-sm text-[#111827] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(28,106,63,0.12)]"
                  required
                />
              </div>

              <textarea
                rows={5}
                placeholder="Cuéntanos tu desafío"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-3xl border border-[var(--color-border)] bg-white px-5 py-4 text-sm text-[#111827] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(28,106,63,0.12)]"
                required
              ></textarea>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <div className="rounded-3xl bg-[#ecfdf5] p-4 text-sm text-[var(--color-accent-strong)]">
                  ✅ Mensaje enviado correctamente. Te responderemos pronto.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-3xl bg-[#fef2f2] p-4 text-sm text-[#b91c1c]">
                  ❌ Error al enviar. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-sm text-[#6b7280]">
              <p>Email: contacto@nxchile.com</p>
              <p>Tel: +56 9 7741 2178</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
