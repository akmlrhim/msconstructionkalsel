import { motion } from "framer-motion";
import { PROJECTS } from "../../data/mock";
import { ChevronRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-[#1F2D3D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg font-sans font-medium text-[#F1C453] mb-2 md:mb-3 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-5xl lg:text-6xl font-serif font-medium text-[#FAF8F5]"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {PROJECTS.map((project, index) => (
            <ProjectCard project={project} key={project.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative min-w-[80vw] md:min-w-0 snap-center h-[300px] md:h-[480px] overflow-hidden rounded-2xl flex-shrink-0 cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[#F1C453] text-xs md:text-md font-sans font-semibold mb-1 md:mb-2 block">
              {project.category} · {project.year}
            </span>
            <h3 className="text-base md:text-lg text-white font-sans font-bold leading-tight capitalize">
              {project.title}
            </h3>
            <p className="text-white/55 text-xs md:text-md mt-0.5 md:mt-1">
              {project.location}
            </p>
          </div>

          <div className="w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-full bg-[#F1C453] flex items-center justify-center text-[#1F2D3D] shadow-md transition-transform duration-300 group-hover:scale-110">
            <span className="text-sm md:text-lg leading-none"><ChevronRight /></span>
          </div>
        </div>
      </div>
    </motion.div >
  );
}