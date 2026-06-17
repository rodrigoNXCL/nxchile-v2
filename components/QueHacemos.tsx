export default function QueHacemos() {
  const soluciones = [
    {
      icon: "🌐",
      title: "Sitios web que convierten",
      description: "Creamos la presencia digital que tus clientes buscan. Información clara, actualizada y accesible desde cualquier dispositivo."
    },
    {
      icon: "⚙️",
      title: "Sistemas a medida",
      description: "Automatizamos procesos manuales y eliminamos la dependencia de planillas. Tu operación funciona sin intervención constante."
    },
    {
      icon: "📱",
      title: "Aplicaciones útiles",
      description: "Herramientas móviles y web que simplifican tareas específicas: cotizaciones, reservas, seguimiento de pedidos y más."
    },
    {
      icon: "🔧",
      title: "Herramientas que resuelven",
      description: "Desde un formulario hasta un panel de control. Construimos lo que necesitas, sin tecnología innecesaria."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ¿Qué <span className="text-[#1B5E20]">hacemos</span>?
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Construimos herramientas a medida para resolver problemas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {soluciones.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20 text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
