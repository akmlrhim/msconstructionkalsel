import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHY_CHOOSE_US } from "../../../data/mock";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir) => ({ zIndex: 0, x: dir < 0 ? 40 : -40, opacity: 0 }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next >= WHY_CHOOSE_US.length) next = 0;
      if (next < 0) next = WHY_CHOOSE_US.length - 1;
      return next;
    });
  };

  return (
    <section
      id="why-us"
      className="relative py-12 lg:py-20 bg-[#1F2D3D] text-[#FAF8F5] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FAF8F5 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-12">
        <div className="mb-6 md:mb-10">
          <span className="text-md md:text-lg font-sans font-semibold text-[#F1C453] mb-1.5 block">
            Keunggulan Kami
          </span>
          <h2 className="text-xl md:text-4xl lg:text-5xl font-serif text-[#FAF8F5] leading-snug">
            Kenapa Memilih MS Construction?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
          <div className="flex flex-col gap-3 md:gap-5">
            <p className="text-[#FAF8F5]/70 font-sans text-xs md:text-base leading-relaxed max-w-sm">
              Lebih dari sekadar spesifik, kami menyediakan layanan dengan gaya desain minimalis yang fleksibel dan
              berfokus pada kualitas hidup keluarga Anda.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:bg-[#F1C453] hover:border-[#F1C453] hover:text-[#1F2D3D]"
                >
                  <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:bg-[#F1C453] hover:border-[#F1C453] hover:text-[#1F2D3D]"
                >
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>

              <span className="text-[#FAF8F5] text-sm md:text-md font-sans tabular-nums">
                <span className="text-[#F1C453] font-semibold">{String(currentIndex + 1).padStart(2, "0")}</span>
                {"-"}
                {String(WHY_CHOOSE_US.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px]">
            <AnimatePresence
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.15 },
                }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 md:p-8 relative backdrop-blur-sm">
                  <div className="absolute -top-3.5 right-4 md:right-7 w-7 h-7 md:w-10 md:h-10 bg-[#F1C453] flex items-center justify-center rounded-full shadow-md">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#1F2D3D]" />
                  </div>
                  <p className="text-[#FAF8F5] font-sans text-xs md:text-md lg:text-base leading-relaxed pt-0.5">
                    "{WHY_CHOOSE_US[currentIndex]}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
