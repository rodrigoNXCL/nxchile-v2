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
    titulo: "Exportadora Surberries",
    rubro: "Exportación de alimentos",
    problema: "Información comercial dispersa. Fichas técnicas, documentación y presencia comercial poco estandarizada.",
    solucion: "Desarrollo de activos digitales, fichas comerciales y estructura de comunicación.",
    resultado: "Información consistente. Mejor presentación comercial. Mayor facilidad para compartir información con clientes y compradores."
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experiencia <span className="text-[#1B5E20]">aplicada</span>
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Problemas reales que ya hemos resuelto en distintos rubros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casos.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20"
            >
              <div className="mb-2">
                <span className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wider">
                  {c.rubro}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{c.titulo}</h3>
              </div>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Problema</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.problema}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Solución</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{c.solucion}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Resultado</p>
                  <p className="text-gray-900 font-medium text-sm leading-relaxed">{c.resultado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
