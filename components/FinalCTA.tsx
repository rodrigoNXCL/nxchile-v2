import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--bg)]">
      <div className="container-premium text-center max-w-4xl mx-auto">
        <span className="inline-block mb-6 text-xs font-bold tracking-widest uppercase text-[var(--accent)]">
          Próximo paso
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
          Construyamos una operación más clara.
        </h2>

        <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed">
          Ya sea que necesites GastosNX, TransNX o una solución desarrollada a tu medida, partimos entendiendo tu operación real.
          <br className="hidden sm:block" />
          Sin contratos largos. Sin promesas vacías. Solo tecnología que ordena.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="/contacto"
            className="btn-primary inline-block px-12 py-5 text-lg rounded-full shadow-xl shadow-green-900/10"
          >
            Solicitar evaluación gratuita
          </Link>

          <p className="text-base sm:text-lg text-[#475569] font-medium">
            También puedes ir directo a nuestros productos:{" "}
            <a
              href="https://gastos.nxchile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] font-semibold underline underline-offset-4 hover:text-[#0F172A] transition-colors"
            >
              GastosNX
            </a>
            <span className="mx-2 text-[#94A3B8]">·</span>
            <a
              href="https://trans.nxchile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] font-semibold underline underline-offset-4 hover:text-[#0F172A] transition-colors"
            >
              TransNX
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
