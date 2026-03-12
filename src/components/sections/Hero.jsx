import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[600px] w-full flex items-center overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 -top-[10%] h-[120%] w-full"
      >
        <img
          src="https://i.ibb.co.com/SDpt5CtT/Gemini-Generated-Image-nuqw53nuqw53nuqw-1.png"
          alt="Luxury Architecture"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1F2D3D]/95 via-[#1F2D3D]/70 to-black/20" />

      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl pt-16 md:pt-0">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#FAF8F5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[0.95] font-serif mb-5 md:mb-6 tracking-normal drop-shadow-sm"
          >
            Provide <br />
            <span className="text-[#F1C453]">The Best</span> <br />
            Design Work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#FAF8F5]/80 font-sans text-xs sm:text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-lg"
          >
            MS Construction hadir sebagai kontraktor terpercaya di Kalimantan Selatan.
            Melayani jasa konstruksi dan desain rumah sejak 2013.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <a
              href="#projects"
              className="bg-[#F1C453] text-[#1F2D3D] px-6 py-3 md:px-8 md:py-3 text-xs md:text-sm font-sans font-bold transition-all duration-300 hover:bg-[#FAF8F5] rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Lihat Proyek Kami
            </a>
            <a
              href="#services"
              className="text-xs md:text-sm font-semibold text-[#FAF8F5] transition-all duration-300 hover:text-[#F1C453] px-6 py-3 md:px-8 md:py-3 border border-[#FAF8F5]/30 hover:border-[#F1C453] rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              Layanan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
