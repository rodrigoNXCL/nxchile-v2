export default function Contrasts() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Menos</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li>✓ Pasos</li>
              <li>✓ Fricción</li>
              <li>✓ Tiempo perdido</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Más</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li>✓ Control</li>
              <li>✓ Eficiencia</li>
              <li>✓ Oportunidades</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
