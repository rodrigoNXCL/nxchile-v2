const casos = [
  {
    problema: "Distribuidora manejaba 200 pedidos diarios por WhatsApp, con errores y demoras.",
    solucion: "Sistema web con formulario de pedidos y panel de seguimiento.",
    resultado: "Reducción del 70% en tiempo de procesamiento y 0 errores de pedidos."
  },
  {
    problema: "Empresa de servicios sin sitio web, perdían clientes por falta de información.",
    solucion: "Landing page con catálogo de servicios y formulario de contacto.",
    resultado: "+40% de leads calificados en 3 meses."
  },
  {
    problema: "Empresa de logística con planillas manuales que generaban errores en inventario.",
    solucion: "Sistema de gestión de inventario con escaneo de códigos.",
    resultado: "Inventario actualizado en tiempo real, reducción de mermas del 15%."
  }
];

export default function CasosReales() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Casos <span className="text-[#1B5E20]">reales</span>
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            Problema → Solución → Resultado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow hover:border-[#1B5E20]/20"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wide">
                    Problema
                  </p>
                  <p className="text-gray-700 text-sm">{c.problema}</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wide">
                    Solución
                  </p>
                  <p className="text-gray-700 text-sm">{c.solucion}</p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wide">
                    Resultado
                  </p>
                  <p className="text-gray-900 font-medium text-sm">{c.resultado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
