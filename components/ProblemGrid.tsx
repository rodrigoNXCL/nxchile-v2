"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const problems = [
  {
    id: 1,
    title: "Tus clientes te buscan y no encuentran información.",
    description: "Tus clientes buscan respuestas antes de contactarte. Si no las encuentran, siguen buscando.",
    image: "/images/problema1.png",
    alt: "Persona buscando una empresa en Google",
    link: "/contacto"
  },
  {
    id: 2,
    title: "Todo pasa por WhatsApp.",
    description: "Cuando WhatsApp se transforma en tu sistema de gestión, aparecen errores, retrasos y dependencia de una sola persona.",
    image: "/images/problema2.png",
    alt: "Múltiples chats de WhatsApp abiertos",
    link: "/contacto"
  },
  {
    id: 3,
    title: "Tu empresa funciona entre planillas.",
    description: "La información está dispersa y cada tarea requiere más tiempo del necesario.",
    image: "/images/problema3.png",
    alt: "Excel, correos y papeles desordenados",
    link: "/contacto"
  },
  {
    id: 4,
    title: "Las reservas o consultas se pierden.",
    description: "Cada consulta no atendida a tiempo es una oportunidad que puede terminar en otra empresa.",
    image: "/images/problema4.png",
    alt: "Agenda manual y mensajes pendientes",
    link: "/contacto"
  },
  {
    id: 5,
    title: "No tienes control de tus gastos operacionales.",
    description: "Los gastos existen. El problema aparece cuando no encuentras el respaldo.",
    image: "/images/problema5.png",
    alt: "Boletas, carpetas y respaldos perdidos",
    link: "/contacto"
  },
  {
    id: 6,
    title: "Tu negocio depende demasiado de ti.",
    description: "Si todo depende de una sola persona, crecer se vuelve cada vez más difícil.",
    image: "/images/problema6.png",
    alt: "Dueño respondiendo todo al mismo tiempo",
    link: "/contacto"
  }
];

export default function ProblemGrid() {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Problemas <span className="text-[#1B5E20]">que resolvemos</span>
          </h2>
          <p className="text-gray-500 text-lg mt-3">
            ¿Te identificas con alguno?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((p) => {
            const imageFailed = failedImages.includes(p.id);

            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Contenedor de imagen - ahora con altura fija pero sin recorte */}
                <div className="relative w-full bg-gray-100" style={{ paddingBottom: '56.25%' }}>
                  {!imageFailed ? (
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover"
                      onError={() => setFailedImages(prev => [...prev, p.id])}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                      <div className="text-center p-4">
                        <span className="text-4xl block mb-2">🖼️</span>
                        <span className="text-sm">Imagen no disponible</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {p.description}
                  </p>
                  <Link
                    href={p.link}
                    className="inline-flex items-center text-[#1B5E20] font-medium hover:text-[#2E7D32] transition-colors"
                  >
                    Ver solución
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
