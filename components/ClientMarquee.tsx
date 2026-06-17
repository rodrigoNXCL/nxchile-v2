"use client";

const clients = [
  {
    name: "Distribuidora Logística",
    logo: "/images/clientes/ac_logo.png",
  },
  {
    name: "Servicios Profesionales",
    logo: "/images/clientes/bastcon.jpg",
  },
  {
    name: "Comercio Retail",
    logo: "/images/clientes/muevo.jpg",
  },
  {
    name: "Consultora Operacional",
    logo: "/images/clientes/qpq_logo.jpg",
  },
  {
    name: "Transporte y Logística",
    logo: "/images/clientes/RCCServicios.jpeg",
  },
  {
    name: "Fintech",
    logo: "/images/clientes/sanAndres.png",
  },
  {
    name: "Agroindustria",
    logo: "/images/clientes/vmp.png",
  },
  {
    name: "Educación",
    logo: "/images/clientes/Surberries_Logo.png",
  },
];

export default function ClientMarquee() {
  const doubledClients = [...clients, ...clients];

  return (
    <div className="w-full bg-white border-t border-b border-gray-100 py-4 overflow-hidden marquee-container">
      <div className="flex animate-marquee items-center gap-12">
        {doubledClients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
