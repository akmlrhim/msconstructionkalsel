import { motion } from "framer-motion";
import { SERVICES } from "../../../data/mock";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesBento() {
  return (
    <section
      id="services"
      className="py-20 md:py-24 bg-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-20 flex flex-col lg:flex-row justify-between lg:items-end gap-6 md:gap-10">
          <div>
            <span className="text-xs md:text-sm font-sans uppercase font-medium text-[#F1C453] mb-3 md:mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#1F2D3D]">Our Expertise</h2>
          </div>
          <p className="max-w-md text-[#1F2D3D]/70 text-sm md:text-base leading-relaxed hidden md:block">
            From visionary architecture to meticulous interiors, we merge beauty with functionality.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {SERVICES.map((service, index) => {
            let colSpan = "col-span-1";
            let rowSpan = "row-span-1";

            if (index === 0) {
              colSpan = "md:col-span-2";
            } else if (index === 1) {
              rowSpan = "md:row-span-2";
            } else if (index === 3) {
              colSpan = "md:col-span-1";
            }

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`relative group bg-[#1F2D3D] rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between transition-colors duration-500 hover:bg-[#16212d] ${colSpan} ${rowSpan}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105 opacity-20 group-hover:opacity-40"
                  style={{
                    backgroundImage: `url(${service.image || "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=1500&auto=format&fit=crop"})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3D] via-[#1F2D3D]/70 to-[#1F2D3D]/20 group-hover:via-[#1F2D3D]/50 transition-all duration-500 z-0"></div>

                <div className="z-10 text-[#FAF8F5] relative flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs uppercase font-sans font-semibold text-[#F1C453]">0{index + 1}</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#F1C453] group-hover:border-[#F1C453]">
                    <span className="text-[#FAF8F5] group-hover:text-[#1F2D3D] text-sm transition-colors duration-500">
                      <ChevronRight />
                    </span>
                  </div>
                </div>

                <div className="z-10 relative mt-auto">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-[#FAF8F5] mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#FAF8F5]/70 text-xs md:text-sm font-sans line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
