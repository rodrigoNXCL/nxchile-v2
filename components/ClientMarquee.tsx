"use client";

import Image from "next/image";

const clients = [
  { src: "/images/clientes/ac_logo.png", alt: "AC Logo" },
  { src: "/images/clientes/bastcon.jpg", alt: "Bastcon" },
  { src: "/images/clientes/RCCServicios.jpeg", alt: "RCC" },
  { src: "/images/clientes/Surberries_Logo.png", alt: "Surberries" },
  { src: "/images/clientes/sanAndres.png", alt: "San Andres" },
  { src: "/images/clientes/vmp.png", alt: "VMP" },
  { src: "/images/clientes/muevo.jpg", alt: "Muevo" },
  { src: "/images/clientes/qpq_logo.jpg", alt: "QPQ" },
];

export default function ClientMarquee() {
  return (
    <div className="w-full bg-white border-y border-gray-100 py-12 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        {/* Contenedor animado */}
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Duplicamos la lista para el loop infinito */}
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="relative h-14 w-36 sm:h-16 sm:w-48 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}