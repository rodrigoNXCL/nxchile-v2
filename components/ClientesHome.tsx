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

export default function ClientesHome() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empresas que <span className="text-[#1B5E20]">confían</span> en NXChile
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Proyectos reales, resultados medibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientes.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20 text-center"
            >
              <div className="text-5xl mb-4">{c.icono}</div>
              <h3 className="text-xl font-semibold text-gray-900">{c.nombre}</h3>
              <p className="text-gray-500 text-sm mt-1">{c.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/clientes"
            className="inline-flex items-center text-[#1B5E20] font-medium hover:text-[#2E7D32] transition-colors"
          >
            Ver todos los clientes
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
