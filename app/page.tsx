import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Soluciones from "@/components/Soluciones";
import HowWeWork from "@/components/HowWeWork";
import ParaQuien from "@/components/ParaQuien";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Soluciones />
      <div id="como-trabajamos">
        <HowWeWork />
      </div>
      <ParaQuien />
      <FinalCTA />
    </>
  );
}
