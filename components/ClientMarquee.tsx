"use client";

import Image from "next/image";

const clients = [
  { src: "/images/clientes/ac_logo.png", alt: "AC Constructores y Consultores" },
  { src: "/images/clientes/bastcon.jpg", alt: "Bastcon" },
  { src: "/images/clientes/RCCServicios.jpeg", alt: "RCC Servicios" },
  { src: "/images/clientes/Surberries_Logo.png", alt: "Surberries" },
  { src: "/images/clientes/sanAndres.png", alt: "Transportes San Andrés" },
  { src: "/images/clientes/vmp.png", alt: "Transportes VMP" },
  { src: "/images/clientes/muevo.jpg", alt: "Transportes Muevo" },
  { src: "/images/clientes/qpq_logo.jpg", alt: "QPQ" },
];

export default function ClientMarquee() {
  return (
    <section className="border-y border-gray-100 bg-[var(--surface)]">
      <div className="container-wide py-12 text-center sm:py-14">
        <p className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-[var(--text-secondary)] text-pretty">
          Empresas que ya ordenaron su operación con NXChile, incluyendo usuarios de
          <span className="font-medium text-[var(--text-primary)]"> RindeNX</span>,{" "}
          <span className="font-medium text-[var(--text-primary)]">GastosNX</span> y{" "}
          <span className="font-medium text-[var(--text-primary)]">TransNX</span>.
        </p>
      </div>

      <div className="relative flex overflow-hidden pb-12">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="relative h-12 w-32 flex-shrink-0 opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:w-44"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 55s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}