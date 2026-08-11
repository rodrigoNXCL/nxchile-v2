export default function PremiumStats() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Valor operativo
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
            Soluciones claras para operar mejor, con más control y menos fricción.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              value: "01",
              label: "Diseño a medida",
              description: "Sistemas pensados para la realidad operativa de cada negocio.",
            },
            {
              value: "02",
              label: "Información útil",
              description: "Datos claros para decisiones más rápidas y seguras.",
            },
            {
              value: "03",
              label: "Ejecución simple",
              description: "Procesos más ordenados, con menos ruido y mejor seguimiento.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-[32px] border border-[var(--color-border)] bg-white p-8 text-center shadow-[0_30px_60px_-30px_rgba(15,23,42,0.16)] sm:p-10">
              <div className="mb-5 text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl">{item.value}</div>
              <div className="mb-3 text-lg font-semibold text-[#0f172a]">{item.label}</div>
              <p className="text-base leading-7 text-[#475569]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
