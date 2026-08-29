import Link from "next/link";

type Product = {
  name: string;
  tag: string;
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  secondary: string;
  accent: "green" | "slate";
};

const products: Product[] = [
  {
    name: "GastosNX",
    tag: "Producto listo",
    title: "Deja de perder gastos antes de la renta",
    description:
      "Captura y organiza boletas y gastos operacionales desde el celular en segundos. Ideal para pymes y contadores en Chile. Sin papeles. Sin boletas perdidas.",
    benefits: [
      "Foto de la boleta en el momento",
      "Respaldo digital con trazabilidad",
      "Exportación lista para tu contador",
    ],
    ctaLabel: "Conocer GastosNX",
    ctaHref: "https://gastos.nxchile.com",
    secondary: "Prueba gratis disponible",
    accent: "green",
  },
  {
    name: "TransNX",
    tag: "Producto listo",
    title: "Control operacional de transporte",
    description:
      "Rutas, evidencia fotográfica, stock de materiales y liquidación de kilometraje. Para operaciones de courier, carga y flotas frutícolas.",
    benefits: [
      "App Chofer Android nativa (GPS en background)",
      "Control de stock de materiales por destino",
      "Liquidación de KM auditada",
    ],
    ctaLabel: "Conocer TransNX",
    ctaHref: "https://trans.nxchile.com",
    secondary: "Agenda una demo gratuita",
    accent: "slate",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]"
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

export default function Soluciones() {
  return (
    <section id="soluciones" className="py-24 sm:py-32 bg-[var(--bg)] scroll-mt-24">
      <div className="container-premium">

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-5 py-2 text-xs font-bold tracking-[0.25em] uppercase text-white bg-[var(--accent)] rounded-full shadow-md">
            Nuestras soluciones
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
            Nuestras soluciones
          </h2>
          <p className="text-lg sm:text-xl text-[#334155] leading-relaxed font-medium max-w-3xl mx-auto">
            Productos listos para ordenar tu operación desde el día uno.
            También desarrollamos sistemas a medida cuando lo necesitas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(15,23,42,0.22)] hover:border-[var(--accent)]/30"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                  {p.name}
                </span>
                <span className="inline-block px-3 py-1 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--accent)] bg-[var(--accent)]/10 rounded-full">
                  {p.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4 leading-tight">
                {p.title}
              </h3>

              <p className="text-[#475569] leading-relaxed mb-6 text-base">
                {p.description}
              </p>

              <ul className="space-y-3 mb-8">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#0F172A] text-sm sm:text-base">
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a
                  href={p.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-base rounded-full shadow-lg shadow-green-900/10"
                >
                  {p.ctaLabel}
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <p className="mt-3 text-sm text-[#475569] font-medium">
                  {p.secondary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl text-[#334155] leading-relaxed font-medium mb-6">
            ¿Tu operación necesita algo más específico?
            <br className="hidden sm:block" />
            También desarrollamos soluciones a medida según tu flujo real.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full border-2 border-[#0F172A] text-[#0F172A] bg-transparent hover:bg-[#0F172A] hover:text-white transition-colors duration-250"
          >
            Hablar de una solución a medida
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
