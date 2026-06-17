import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#E8F5E9] border-t border-green-200/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué está <span className="text-[#1B5E20]">frenando</span> tu empresa hoy?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Si reconoces alguno de estos problemas, probablemente exista una mejor forma de hacer las cosas.
            <br />
            Hablemos y encontremos la solución.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#1B5E20] text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:bg-[#2E7D32] transition-all duration-200 hover:-translate-y-0.5"
          >
            Solicitar evaluación
          </Link>
        </div>
      </div>
    </section>
  );
}
