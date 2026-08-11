"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento operativo",
    description:
      "Analizamos tu negocio actual para detectar cuellos de botella. No buscamos reinventar, sino ordenar lo que ya tienes.",
    tags: ["Reunión estratégica", "Mapeo de flujos", "1-2 semanas"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño de solución",
    description:
      "Definimos la arquitectura técnica y la interfaz de usuario. Validamos el flujo con tu equipo antes de escribir una sola línea de código.",
    tags: ["Prototipo funcional", "Validación de UX", "Ajustes en tiempo real"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Desarrollo iterativo",
    description:
      "Construimos la solución en ciclos cortos. Recibes avances funcionales para probar en tu operación real, no en teoría.",
    tags: ["Sprints semanales", "Entregas parciales", "Feedback continuo"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Puesta en marcha con capacitación incluida. No te dejamos solo: documentamos todo y aseguramos que tu equipo domine la herramienta.",
    tags: ["Capacitación", "Documentación", "Soporte técnico"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container-premium">
        
        {/* HEADER DE SECCIÓN REDISEÑADO (ALTO IMPACTO) */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          {/* Badge Sólido para resaltar "Metodología" */}
          <span className="inline-block mb-6 px-5 py-2 text-xs font-bold tracking-[0.25em] uppercase text-white bg-[var(--accent)] rounded-full shadow-md">
            Metodología
          </span>
          
          {/* Título Gigante y Oscuro */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
            De la idea a la operación real.
          </h2>
          
          {/* Subtítulo con peso visual */}
          <p className="text-lg sm:text-xl text-[#334155] leading-relaxed font-medium max-w-3xl mx-auto">
            Un flujo de trabajo transparente diseñado para garantizar resultados tangibles y un sistema funcional desde el primer día.
          </p>
        </div>

        {/* Timeline Vertical */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex gap-6 sm:gap-10 mb-12 last:mb-0 group`}
            >
              {/* Línea conectora */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[1.7rem] sm:left-[2.1rem] top-14 w-px h-full bg-gray-100" />
              )}

              {/* Icono/Número */}
              <div className="flex-shrink-0 relative z-10 pt-1">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 border ${
                    activeStep === index
                      ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-lg scale-110"
                      : "bg-white text-[var(--accent)] border-gray-200"
                  }`}
                >
                  {activeStep === index ? step.icon : <span className="text-lg font-bold">{step.number}</span>}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-grow">
                <div
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                    activeStep === index
                      ? "bg-[#FAFAFA] border-[var(--accent)]/30 shadow-md"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed mb-5 text-base sm:text-lg">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 font-medium border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}