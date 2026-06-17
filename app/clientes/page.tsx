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
    <section className="py-20 bg-white">
      <div className="container-custom max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Clientes
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Empresas que confían en NXChile para ordenar y fortalecer su operación.
        </p>

        {/* Lista de clientes */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {clientes.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20 flex items-center gap-4"
            >
              <div className="text-4xl">{c.icono}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{c.nombre}</h3>
                <p className="text-gray-500 text-sm">{c.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Portal de clientes */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Portal de clientes</h2>
          <p className="text-gray-600 mb-6">
            Accede a tu historial, trabajos realizados y seguimiento de proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1B5E20] text-white px-6 py-2 rounded-full hover:bg-[#2E7D32] transition-colors">
              Iniciar sesión
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Solicitar acceso
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Próximamente: portal con seguimiento detallado de tus proyectos.
          </p>
        </div>
      </div>

      {/* Cinta de logos (fuera del contenedor para que sea de ancho completo) */}
      <ClientMarquee />
    </section>
  );
}
