import Hero from "../components/sections/Hero";
import ServicesBento from "../components/sections/ServicesBento";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import StatsCounter from "../components/sections/StatsCounter";
import Workflow from "../components/sections/Workflow";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-[#FAF8F5]">
      <Hero />
      <ServicesBento />
      <FeaturedProjects />
      <Workflow />
      <WhyChooseUs />
      <StatsCounter />
      <Contact />
    </div>
  );
}
