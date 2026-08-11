import Image from "next/image";

const casos = [
  {
    id: 1,
    titulo: "GastosNX",
    rubro: "Empresas de transporte y servicios",
    problema: "Los gastos operacionales estaban repartidos entre boletas, fotografías, WhatsApp y carpetas. Encontrar un respaldo tomaba tiempo y muchas veces la información no estaba disponible cuando se necesitaba.",
    solucion: "Desarrollo de una plataforma simple para registrar y respaldar gastos desde computador o móvil.",
    resultado: "Información organizada. Respaldos disponibles cuando se necesitan. Menos tiempo buscando documentos."
  },
  {
    id: 2,
    titulo: "Transporte y Logística",
    rubro: "Transporte de carga",
    problema: "Control manual de gastos, peajes, combustible y rendiciones. Información dispersa entre conductores y administración.",
    solucion: "Estructuración de procesos y herramientas de control operacional.",
    resultado: "Mayor visibilidad de costos. Mejor seguimiento operacional. Menos trabajo administrativo."
  },
  {
    id: 3,
    titulo: "Operación y trazabilidad",
    rubro: "Agroindustria y exportación",
    problema: "Procesos comerciales y operativos fragmentados. Falta de trazabilidad, consistencia y herramientas adaptadas a la realidad del negocio.",
    solucion: "Diseño de soluciones digitales a medida con enfoque en calidad, operación y responsividad.",
    resultado: "Mejor control operacional. Información más clara. Proyectos más alineados con la escala del negocio."
  },
  {
    id: 4,
    titulo: "Distribuidor Comercial",
    rubro: "Distribución y ventas en terreno",
    problema: "Pedidos, rutas, clientes y seguimiento gestionados manualmente. Dependencia excesiva de WhatsApp.",
    solucion: "Diseño de plataforma orientada a vendedores y operación comercial.",
    resultado: "Información centralizada. Mejor seguimiento comercial. Menos tareas repetitivas."
  },
  {
    id: 5,
    titulo: "Servicios con Reservas",
    rubro: "Clínicas, centros médicos y servicios profesionales",
    problema: "Reservas realizadas mediante formularios complejos o múltiples canales. Consultas perdidas. Abandono durante el proceso.",
    solucion: "Rediseño del flujo de contacto y reserva.",
    resultado: "Menos fricción para el cliente. Mayor probabilidad de contacto. Mejor experiencia de atención."
  }
];

export default function ExperienciaReal() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a]">
            Experiencia <span className="text-[var(--color-accent)]">aplicada</span>
          </h2>
          <p className="text-slate-600 text-lg mt-3">
            Problemas reales que ya hemos resuelto en distintos rubros.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {casos.map((c) => (
            <article key={c.id} className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_35px_65px_-35px_rgba(15,23,42,0.24)]">
              <div className="mb-6">
                <span className="inline-flex rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {c.rubro}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-[#0f172a]">{c.titulo}</h3>
              </div>
              <div className="space-y-6 text-slate-600">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Problema</p>
                  <p className="mt-2 text-sm leading-7">{c.problema}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Solución</p>
                  <p className="mt-2 text-sm leading-7">{c.solucion}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Resultado</p>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[#0f172a]">{c.resultado}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
