import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-28 pb-20 sm:pt-40 sm:pb-32">
      <div className="container-premium relative z-10 text-center">

        <span className="inline-block mb-8 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-white bg-[var(--accent)] rounded-full shadow-lg shadow-green-900/10">
          Tecnología operacional
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
          Tecnología que ordena.<br className="hidden sm:block" />
          Operaciones que escalan.
        </h1>

        <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
          Digitalizamos procesos, centralizamos información y eliminamos el caos manual.
          Tenemos productos listos para usar y también construimos soluciones a la medida de tu operación.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/contacto" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg rounded-full shadow-xl shadow-green-900/10">
            Solicitar evaluación gratuita
          </Link>
          <Link
            href="#soluciones"
            className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg rounded-full bg-white border border-gray-200"
          >
            Ver nuestros productos
          </Link>
        </div>

      </div>
    </section>
  );
}
