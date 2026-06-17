const clients = [
  { name: "Distribuidora Logística", icon: "🚚" },
  { name: "Servicios Profesionales", icon: "📋" },
  { name: "Comercio Retail", icon: "🏬" },
  { name: "Consultora Operacional", icon: "📊" },
  { name: "Transporte y Logística", icon: "🚛" },
  { name: "Inmobiliaria", icon: "🏢" },
];

export default function ClientLogoBanner() {
  // Duplicamos la lista para el efecto de desplazamiento continuo
  const allClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-6 border-t border-gray-100">
      <div className="flex gap-12 animate-scroll whitespace-nowrap">
        {allClients.map((c, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-700 flex-shrink-0">
            <span className="text-3xl">{c.icon}</span>
            <span className="text-sm font-medium">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
