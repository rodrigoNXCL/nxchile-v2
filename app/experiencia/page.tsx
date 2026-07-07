import ExperienciaReal from "@/components/ExperienciaReal";

export default function ExperienciaPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experiencia <span className="text-[#1B5E20]">aplicada</span>
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Problemas reales que ya hemos resuelto.
        </p>
        <ExperienciaReal />
      </div>
    </section>
  );
}
