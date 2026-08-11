import ExperienciaReal from "@/components/ExperienciaReal";
import Image from "next/image";

export default function ExperienciaPage() {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="grid gap-10 items-center mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-4">
              Experiencia aplicada
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0f172a] leading-tight">
              Historias de operaciones que dejaron atrás el caos.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Descubre cómo equipos como el tuyo ganaron control, eliminaron fricción y convirtieron la información en ventaja.
            </p>
          </div>
        </div>

        <ExperienciaReal />
      </div>
    </section>
  );
}
