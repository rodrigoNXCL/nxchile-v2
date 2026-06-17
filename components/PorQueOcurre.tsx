export default function PorQueOcurre() {
  const causas = [
    {
      icon: "📋",
      title: "Procesos manuales",
      description: "Tareas repetitivas que consumen tiempo y generan errores. Cada paso requiere intervención humana, lo que frena la velocidad y la escalabilidad."
    },
    {
      icon: "🛠️",
      title: "Herramientas genéricas",
      description: "Excel, WhatsApp, correos... son útiles para empezar, pero cuando el negocio crece, se convierten en un caos. No están diseñadas para procesos operativos complejos."
    },
    {
      icon: "🎯",
      title: "Falta de control",
      description: "Sin visibilidad clara de lo que sucede, es imposible tomar decisiones rápidas. La información está dispersa y no hay trazabilidad de las acciones."
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ¿Por qué <span className="text-[#1B5E20]">ocurre</span>?
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Estos son los motivos detrás de los problemas operativos que enfrentan las empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {causas.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
