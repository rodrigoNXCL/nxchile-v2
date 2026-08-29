const segments = [
  {
    title: "Pymes y empresas en crecimiento",
    description:
      "Operaciones que están escalando y necesitan ordenar procesos antes de que el caos las frene.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h.01" /><path d="M9 13h.01" /><path d="M9 17h.01" />
        <path d="M15 9h.01" /><path d="M15 13h.01" /><path d="M15 17h.01" />
      </svg>
    ),
  },
  {
    title: "Transporte, courier y logística",
    description:
      "Rutas, evidencia, stock y rendiciones. Control real sobre lo que pasa en la calle y en la ruta.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Flotas frutícolas y agroindustria",
    description:
      "Operaciones de temporada con alta rotación. Trazabilidad, evidencia y liquidación de kilómetros auditada.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2v10l7 4" />
        <path d="M12 2c-3 3-3 7 0 10s7 3 10 0" />
      </svg>
    ),
  },
  {
    title: "Contadores y estudios contables",
    description:
      "Clientes que llegan con sus boletas y gastos desordenados. Les damos respaldo digital listo para cerrar el mes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="13" x2="17" y2="13" />
        <line x1="15" y1="17" x2="17" y2="17" />
      </svg>
    ),
  },
  {
    title: "Empresas que necesitan ordenar procesos con tecnología",
    description:
      "Cualquier operación harta del papel, el WhatsApp y las planillas. Empezamos por entender el flujo real.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function ParaQuien() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container-premium">

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-5 py-2 text-xs font-bold tracking-[0.25em] uppercase text-white bg-[var(--accent)] rounded-full shadow-md">
            Para quién trabajamos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
            Liberamos trabas operacionales en distintos tipos de empresas
          </h2>
          <p className="text-lg sm:text-xl text-[#334155] leading-relaxed font-medium max-w-3xl mx-auto">
            Atendemos desde pymes hasta operaciones más complejas. El foco siempre es el mismo: eliminar el caos manual y darte control real.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {segments.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-gray-200 bg-[#FAFAFA] p-7 sm:p-8 transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[#475569] leading-relaxed text-sm sm:text-base">
                {s.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
