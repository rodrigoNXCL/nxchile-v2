const segments = [
  {
    title: "Pymes y empresas en crecimiento",
    description:
      "Operaciones que están escalando y necesitan ordenar procesos antes de que el caos las frene.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" />
        <path d="M9.5 10h.01M14.5 10h.01M9.5 14h.01M14.5 14h.01" />
      </svg>
    ),
  },
  {
    title: "Transporte, courier y logística",
    description:
      "Rutas, evidencia, stock y rendiciones. Control real sobre lo que pasa en la calle y en la ruta.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="14" height="12" rx="1" />
        <polygon points="15 9 19 9 22 12 22 16 15 16 15 9" />
        <circle cx="6" cy="18.5" r="2" /><circle cx="18" cy="18.5" r="2" />
      </svg>
    ),
  },
  {
    title: "Flotas frutícolas y agroindustria",
    description:
      "Operaciones de temporada con alta rotación. Trazabilidad, evidencia y liquidación de kilómetros auditada.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    title: "Contadores y estudios contables",
    description:
      "Clientes que llegan con sus boletas y gastos desordenados. Les damos respaldo digital listo para cerrar el mes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="2.5" width="16" height="19" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h3" />
      </svg>
    ),
  },
  {
    title: "Empresas que necesitan ordenar procesos con tecnología",
    description:
      "Cualquier operación harta del papel, el WhatsApp y las planillas. Empezamos por entender el flujo real.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="21 12 17 12 14.5 20 9.5 4 7 12 3 12" />
      </svg>
    ),
  },
];

export default function ParaQuien() {
  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <span className="tag-pill mb-6 bg-[var(--accent-subtle)] text-[var(--accent)]">
            Para quién trabajamos
          </span>
          <h2 className="display-section mb-6 text-balance">
            Liberamos trabas operacionales en distintos tipos de empresas
          </h2>
          <p className="body-lg text-[var(--text-secondary)] text-pretty">
            Atendemos desde pymes hasta operaciones más complejas. El foco siempre es el
            mismo: eliminar el caos manual y darte control real.
          </p>
        </div>

        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {segments.map((s) => (
            <li
              key={s.title}
              className="group rounded-[var(--radius-lg)] border border-gray-200/70 bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/25 hover:shadow-[var(--shadow-card)] sm:p-7"
            >
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                {s.icon}
              </span>
              <h3 className="mb-2.5 text-lg font-semibold leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-[var(--text-secondary)] text-pretty">
                {s.description}
              </p>
            </li>
          ))}

          <li className="flex items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-gray-300 p-6 text-center sm:p-7">
            <p className="text-[0.9rem] leading-relaxed text-[var(--text-tertiary)]">
              Tu rubro no aparece aquí.
              <br />
              <span className="text-[var(--text-secondary)]">
                Cuéntanos y lo evaluamos contigo.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}