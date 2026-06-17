import ProblemGrid from "@/components/ProblemGrid";

export default function ProblemasPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Problemas <span className="text-[#1B5E20]">que resolvemos</span>
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Estos son los problemas operativos que enfrentan las empresas y que nosotros resolvemos con tecnología a medida.
        </p>
        <ProblemGrid />
      </div>
    </section>
  );
}
