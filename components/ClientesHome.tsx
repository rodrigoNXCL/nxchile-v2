import ClientMarquee from "@/components/ClientMarquee";

export default function ClientesHome() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="container-custom text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-accent)] mb-4">
          Aliados selectos
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] max-w-3xl mx-auto mb-8">
          Socios que ya eligieron operar con claridad.
        </h2>
        <p className="mx-auto max-w-xl text-lg text-[#475569] mb-10">
          Experiencias compradas por empresas que buscan resultados reales sobre la mesa.
        </p>

        <ClientMarquee />
      </div>
    </section>
  );
}
