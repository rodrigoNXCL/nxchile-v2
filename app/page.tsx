import Hero from "@/components/Hero";
import ProblemGrid from "@/components/ProblemGrid";
import PorQueOcurre from "@/components/PorQueOcurre";
import QueHacemos from "@/components/QueHacemos";
import CasosReales from "@/components/CasosReales";
import ClientesHome from "@/components/ClientesHome";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemGrid />
      <PorQueOcurre />
      <QueHacemos />
      <CasosReales />
      <ClientesHome />
      <FinalCTA />
    </>
  );
}
