import Link from "next/link";
import { products } from "@/data/productos";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--bg)] py-20 sm:py-28 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="tag-pill mb-6 bg-[var(--accent-subtle)] text-[var(--accent)]">
            Próximo paso
          </span>
          <h2 className="display-section mb-6 text-balance">
            Construyamos una operación más clara.
          </h2>
          <p className="body-lg mb-11 text-[var(--text-secondary)] text-pretty">
            Ya sea que necesites RindeNX, GastosNX, TransNX o QualityNX —o una solución
            desarrollada a tu medida— partimos entendiendo tu operación real.
            <br className="hidden sm:block" />
            Sin contratos largos. Sin promesas vacías. Solo tecnología que ordena.
          </p>
          <Link href="/contacto" className="btn-primary px-9 py-4 text-base">
            Solicitar evaluación gratuita
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            También puedes ir directo a nuestros productos
          </p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {products.map((p) => (
              <a
                key={p.slug}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5 rounded-[var(--radius-md)] border border-gray-200/70 bg-[var(--surface)] px-4 py-5 text-center transition-all duration-250 hover:-translate-y-0.5 hover:border-[var(--accent)]/25 hover:shadow-[var(--shadow-card)]"
              >
                <span className="text-[0.95rem] font-semibold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                  {p.name}
                </span>
                <span className="text-xs text-[var(--text-tertiary)]">{p.tagline}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}