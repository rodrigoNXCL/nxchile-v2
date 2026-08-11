import ClientMarquee from "@/components/ClientMarquee";

const clientes = [
  {
    nombre: "Distribuidora Logística",
    descripcion: "Optimización de pedidos y trazabilidad",
    icono: "🚚"
  },
  {
    nombre: "Servicios Profesionales",
    descripcion: "Landing page y sistema de reservas",
    icono: "📋"
  },
  {
    nombre: "Comercio Retail",
    descripcion: "Control de inventario y ventas",
    icono: "🏬"
  },
  {
    nombre: "Consultora Operacional",
    descripcion: "Automatización de reportes y paneles",
    icono: "📊"
  }
];

export default function ClientesPage() {
  return (
    <section className="bg-[var(--color-background)] px-4 py-16 sm:px-0 sm:py-24">
      <div className="container-custom mx-auto max-w-6xl">
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">Clientes premium</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#0f172a] mb-4">
                Operaciones que ganan enfoque, control y crecimiento.
              </h1>
              <p className="text-slate-600 text-lg leading-8">
                Equipos exigentes eligen NXChile para convertir complejidad en procesos claros, control total y resultados medibles.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--color-border)] bg-white p-6 shadow-[0_35px_70px_-40px_rgba(15,23,42,0.18)] sm:p-10">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">
                Valor estratégico
              </p>
              <h2 className="text-3xl font-semibold text-[#0f172a] mb-4">
                Información clara para decisiones más seguras.
              </h2>
              <p className="text-slate-600 leading-7">
                Nuestro enfoque es entregar visibilidad real sobre tus proyectos y procesos sin distracciones.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[28px] bg-[var(--color-background)] border border-[var(--color-border)] p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-2">Control</p>
                  <p className="text-slate-600">Guía clara para mantener el pulso de tu operación.</p>
                </div>
                <div className="rounded-[28px] bg-[var(--color-background)] border border-[var(--color-border)] p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-2">Transparencia</p>
                  <p className="text-slate-600">Proyectos visibles y entregables medibles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {clientes.map((c, i) => (
            <article
              key={i}
              className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_25px_50px_-35px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(15,23,42,0.22)] sm:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-accent)]/10 text-3xl text-[var(--color-accent)]">
                  {c.icono}
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a]">{c.nombre}</h3>
              </div>
              <p className="text-slate-600 leading-7">{c.descripcion}</p>
            </article>
          ))}
        </div>

        <div className="premium-panel mt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">Portal exclusivo</p>
              <h2 className="text-3xl font-semibold text-[#0f172a] mb-3">Portal de clientes</h2>
              <p className="text-slate-600 leading-7">
                Accede a tu historial, proyectos y seguimiento con una experiencia diseñada para operaciones de alto rendimiento.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <button className="btn-primary w-full">Iniciar sesión</button>
              <button className="btn-secondary w-full">Solicitar acceso</button>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#64748b]">
            Próximamente: portal con seguimiento detallado de tus proyectos.
          </p>
        </div>
      </div>

      <ClientMarquee />
    </section>
  );
}
