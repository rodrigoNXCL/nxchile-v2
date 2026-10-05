import Link from "next/link";
import ProductLogo from "@/components/ProductLogo";
import { products, ecosystemFlow, type Product } from "@/data/productos";

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[var(--accent)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function StatusPill({ product }: { product: Product }) {
  const isReady = product.status === "listo";
  return (
    <span
      className={`tag-pill ${
        isReady
          ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
          : "bg-[var(--surface-muted)] text-[var(--text-secondary)]"
      }`}
    >
      {product.statusLabel ?? "Producto listo"}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="hover-lift group flex flex-col rounded-[var(--radius-lg)] border border-gray-200/70 bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] hover:border-[var(--accent)]/25 hover:shadow-[var(--shadow-lift)] sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <ProductLogo product={product} />
        <StatusPill product={product} />
      </div>

      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
        {product.tagline}
      </p>

      <h3 className="display-card mb-4 text-[var(--text-primary)]">
        {product.name === "GastosNX"
          ? "Los gastos que no son factura, respaldados"
          : product.name === "TransNX"
          ? "La operación de transporte, en una mesa"
          : "La historia de calidad de cada lote"}
      </h3>

      <p className="mb-7 text-[0.95rem] leading-relaxed text-[var(--text-secondary)] text-pretty">
        {product.description}
      </p>

      <ul className="mb-8 space-y-3">
        {product.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm leading-snug text-[var(--text-primary)]">
            <CheckIcon />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-gray-100 pt-6">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-[0.95rem]"
        >
          {product.ctaLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <p className="mt-3 text-center text-xs text-[var(--text-tertiary)]">
          {product.secondary}
        </p>
      </div>
    </article>
  );
}

function FeaturedProduct({ product }: { product: Product }) {
  const steps = ["Asignar", "Registrar", "Adjuntar", "Revisar", "Aprobar", "Cuadrar", "Cerrar"];

  return (
    <article className="relative overflow-hidden rounded-[var(--radius-xl)] border border-gray-200/70 bg-[var(--surface)] shadow-[var(--shadow-card)]">
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        {/* Contenido */}
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <ProductLogo product={product} priority />
            <StatusPill product={product} />
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {product.tagline}
          </p>

          <h3 className="display-section mb-6 text-balance">
            Rendiciones que llegan{" "}
            <span className="text-[var(--accent)]">cuadradas</span>, todos los meses.
          </h3>

          <p className="body-lg mb-8 max-w-xl text-[var(--text-secondary)] text-pretty">
            {product.description}
          </p>

          <ul className="mb-9 space-y-3.5">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-[var(--text-primary)]">
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 py-3.5"
            >
              {product.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <span className="text-sm text-[var(--text-tertiary)]">{product.secondary}</span>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent-subtle)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent)]">
            {product.complement}
          </p>
        </div>

        {/* Mock del flujo */}
        <div className="relative flex flex-col justify-center border-t border-gray-100 bg-[var(--surface-muted)]/60 p-8 sm:p-10 lg:border-l lg:border-t-0">
          <div className="mb-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              El flujo completo
            </p>
            <p className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              Siete pasos. Debe igual a Haber.
            </p>
          </div>

          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-bold text-[var(--accent)] shadow-sm ring-1 ring-gray-200">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="h-6 w-px bg-gray-300" aria-hidden="true" />
                  )}
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)]">{step}</span>
                {i === steps.length - 1 && (
                  <span className="ml-auto rounded-md bg-[var(--accent)]/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    Asiento
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

export default function Soluciones() {
  const featured = products.find((p) => p.featured)!;
  const rest = products.filter((p) => !p.featured);

  return (
    <section id="soluciones" className="scroll-mt-24 bg-[var(--bg)] py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <span className="tag-pill mb-6 bg-[var(--accent-subtle)] text-[var(--accent)]">
            Nuestras soluciones
          </span>
          <h2 className="display-section mb-6 text-balance">
            Cuatro productos listos. Una misma obsesión: que el orden se note.
          </h2>
          <p className="body-lg text-[var(--text-secondary)] text-pretty">
            Cada producto resuelve una traba operacional concreta. Y cuando lo que necesitas
            es distinto, lo construimos a medida.
          </p>
        </div>

        <div className="mb-8 sm:mb-10">
          <FeaturedProduct product={featured} />
        </div>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mb-20">
          {rest.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Ecosistema */}
        <div className="rounded-[var(--radius-lg)] border border-gray-200/70 bg-[var(--surface)] p-7 shadow-[var(--shadow-card)] sm:p-9">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Ecosistema NX
            </p>
            <h3 className="display-card mb-3 text-balance">
              RindeNX y GastosNX trabajan juntos
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)] text-pretty">
              RindeNX controla el fondo y cierra la rendición. Los gastos que no siguen el
              flujo de una factura pasan a GastosNX para quedar registrados y respaldados.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemFlow.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="rounded-[var(--radius-md)] bg-[var(--surface-muted)] px-5 py-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[0.65rem] font-bold tabular-nums text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {step.label}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--text-tertiary)]">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A medida */}
        <div className="mt-14 text-center sm:mt-16">
          <p className="body-lg mb-7 text-[var(--text-secondary)] text-pretty">
            ¿Tu operación necesita algo más específico?
            <br className="hidden sm:block" />
            También desarrollamos soluciones a medida según tu flujo real.
          </p>
          <Link
            href="/contacto"
            className="btn-secondary px-7 py-3.5 text-[0.95rem] hover:text-white hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)]"
          >
            Hablar de una solución a medida
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}