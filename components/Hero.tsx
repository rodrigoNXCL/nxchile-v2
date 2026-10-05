import Link from "next/link";

function ArrowRight() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
      {/* Aura sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(27,94,32,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 text-center">
        <span className="tag-pill mb-8 bg-[var(--accent)] text-white shadow-[var(--shadow-soft)]">
          Tecnología operacional
        </span>

        <h1 className="display-hero mx-auto mb-7 max-w-5xl text-balance">
          Tecnología que ordena.
          <br className="hidden sm:block" />
          Operaciones que escalan.
        </h1>

        <p className="body-lg mx-auto mb-11 max-w-2xl font-medium text-[var(--text-secondary)] text-pretty">
          Digitalizamos procesos, centralizamos información y eliminamos el caos manual.
          Tenemos productos listos para usar y también construimos soluciones a la medida
          de tu operación.
        </p>

        <div className="mb-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/contacto" className="btn-primary px-7 py-4 text-base">
            Solicitar evaluación gratuita
            <ArrowRight />
          </Link>
          <Link href="#soluciones" className="btn-secondary px-7 py-4 text-base">
            Ver nuestros productos
          </Link>
        </div>

        {/* Tira de productos */}
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm">
          <span className="text-[var(--text-tertiary)]">Productos</span>
          {[
            { name: "RindeNX", href: "https://rinde.nxchile.com" },
            { name: "GastosNX", href: "https://gastos.nxchile.com" },
            { name: "TransNX", href: "https://trans.nxchile.com" },
            { name: "QualityNX", href: "https://quality.nxchile.com" },
          ].map((p, i) => (
            <span key={p.name} className="flex items-center gap-2">
              {i > 0 && <span className="text-[var(--text-tertiary)]">·</span>}
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--text-primary)] underline-offset-4 transition-colors duration-200 hover:text-[var(--accent)] hover:underline"
              >
                {p.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}