import Hero from "../components/sections/Home/Hero";
import ServicesBento from "../components/sections/Home/ServicesBento";
import FeaturedProjects from "../components/sections/Home/FeaturedProjects";
import StatsCounter from "../components/sections/Home/StatsCounter";
import Workflow from "../components/sections/Home/Workflow";
import WhyChooseUs from "../components/sections/Home/WhyChooseUs";
import Contact from "../components/sections/Home/Contact";

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
