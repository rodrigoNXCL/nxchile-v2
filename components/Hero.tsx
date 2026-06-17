import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: texto */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-[#1B5E20] px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-green-200/50">
              <span className="w-2 h-2 bg-[#1B5E20] rounded-full"></span>
              PROBLEMAS REALES
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              ¿Qué está <span className="text-[#1B5E20]">frenando</span> tu empresa hoy?
            </h1>

            {/* Lista de problemas */}
            <div className="mt-6 space-y-3 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <span className="text-[#1B5E20] text-xl">✓</span>
                Sitios web inexistentes.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#1B5E20] text-xl">✓</span>
                Procesos manuales.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#1B5E20] text-xl">✓</span>
                Información dispersa.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#1B5E20] text-xl">✓</span>
                WhatsApp convertido en sistema de gestión.
              </p>
            </div>

            {/* Descripción breve */}
            <p className="mt-6 text-gray-600 text-lg">
              Desarrollamos soluciones a medida para resolver esos problemas.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="bg-[#1B5E20] text-white px-8 py-3.5 rounded-full font-medium text-center shadow-md hover:shadow-lg hover:bg-[#2E7D32] transition-all duration-200 hover:-translate-y-0.5"
              >
                Solicitar evaluación
              </Link>
              <Link
                href="/casos"
                className="border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-medium text-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Ver casos reales
              </Link>
            </div>
          </div>

          {/* Columna derecha: imagen */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <Image
                src="/images/hero-before-after.png"
                alt="Antes: caos operativo (WhatsApp, Excel, correos) / Después: procesos organizados y control"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Sombra decorativa */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#1B5E20]/5 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
