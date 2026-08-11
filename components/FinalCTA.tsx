import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="container-premium text-center">
        <span className="inline-block mb-6 text-xs font-bold tracking-widest uppercase text-[var(--accent)]">
          Próximo paso
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
          Construyamos una operación más clara.
        </h2>
        
        <p className="text-xl text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed">
          Sin contratos largos. Sin promesas vacías. Solo soluciones técnicas diseñadas para integrarse a tu flujo real y medir su impacto desde el inicio.
        </p>
        
        <Link href="/contacto" className="btn-primary inline-block px-12 py-5 text-lg rounded-full shadow-xl shadow-green-900/10">
          Agendar llamada estratégica
        </Link>
      </div>
    </section>
  );
}