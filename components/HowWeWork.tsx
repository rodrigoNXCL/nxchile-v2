"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento operativo",
    description:
      "Analizamos tu negocio actual para detectar cuellos de botella. No buscamos reinventar, sino ordenar lo que ya tienes.",
    tags: ["Reunión estratégica", "Mapeo de flujos", "1-2 semanas"],
  },
  {
    number: "02",
    title: "Diseño de solución",
    description:
      "Definimos la arquitectura y validamos el flujo con tu equipo antes de construir.",
    tags: ["Prototipo funcional", "Validación con tu equipo", "Ajustes en tiempo real"],
  },
  {
    number: "03",
    title: "Desarrollo iterativo",
    description:
      "Construimos en ciclos cortos. Recibes avances funcionales para probar en tu operación real, no en teoría.",
    tags: ["Sprints semanales", "Entregas parciales", "Feedback continuo"],
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Puesta en marcha con capacitación. Documentamos todo y acompañamos a tu equipo.",
    tags: ["Capacitación", "Documentación", "Soporte técnico"],
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="bg-[var(--surface)] py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <span className="tag-pill mb-6 bg-[var(--accent-subtle)] text-[var(--accent)]">
            Metodología
          </span>
          <h2 className="display-section mb-6 text-balance">
            De la idea a la operación real.
          </h2>
          <p className="body-lg text-[var(--text-secondary)] text-pretty">
            Un flujo transparente que aplicamos tanto en nuestros productos
            como en los desarrollos a medida.
          </p>
        </div>

        <ol className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <li key={step.number} className="group relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
              {index !== steps.length - 1 && (
                <span
                  className="absolute left-[23px] top-14 h-[calc(100%-3.5rem)] w-px bg-gray-200 sm:left-[27px]"
                  aria-hidden="true"
                />
              )}

              <span
                className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border text-base font-bold tabular-nums transition-all duration-300 sm:h-14 sm:w-14 ${
                  activeStep === index
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-lg"
                    : "border-gray-200 bg-[var(--surface)] text-[var(--text-tertiary)] group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
                }`}
              >
                {step.number}
              </span>

              <div
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`flex-1 rounded-[var(--radius-lg)] border px-6 py-6 transition-all duration-300 sm:px-8 sm:py-7 ${
                  activeStep === index
                    ? "border-[var(--accent)]/25 bg-[var(--bg)]"
                    : "border-gray-200/70 bg-[var(--surface)]"
                }`}
              >
                <h3 className="display-card mb-3">{step.title}</h3>
                <p className="mb-5 text-[0.95rem] leading-relaxed text-[var(--text-secondary)] text-pretty">
                  {step.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-gray-200/80 bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}