import { motion } from "framer-motion";
import { PROCESS_STEPS, ADVANTAGES } from "../../data/mock";

export default function Workflow() {
  return (
    <>
      <section id="layanan" className="pt-16 pb-14 lg:pt-24 lg:pb-24 bg-[#FAF8F5] text-[#1F2D3D]">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-10 lg:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-md md:text-lg font-sans text-[#57161B] mb-3 block font-semibold"
            >
              Layanan Kami
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#1F2D3D]"
            >
              Nilai Tambah Kami
            </motion.h2>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
            {ADVANTAGES.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#F3EFE8] border border-[#1F2D3D]/8 rounded-xl px-4 py-3.5 md:px-10 md:py-6 flex items-center gap-4 md:gap-6 hover:bg-[#1F2D3D] transition-colors duration-300 cursor-default"
              >
                <div className="w-9 h-9 md:w-13 md:h-13 flex-shrink-0 bg-[#F1C453] rounded-lg flex items-center justify-center">
                  <span className="text-[#1F2D3D] font-serif font-bold text-md md:text-xl leading-none">
                    {index + 1}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-xl font-serif font-medium tracking-wide text-[#1F2D3D] group-hover:text-[#F1C453] transition-colors duration-300 leading-snug mb-0.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-base font-sans font-medium text-[#1F2D3D]/70 group-hover:text-[#FAF8F5]/75 transition-colors duration-300">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="relative overflow-hidden bg-[#1F2D3D] text-[#FAF8F5] py-16 lg:py-32 px-5 md:px-12">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#FAF8F5 2px, transparent 2px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-12 lg:mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-md font-sans text-[#F1C453] mb-3 block font-semibold"
            >
              Tahapan Pengerjaan
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#FAF8F5] uppercase tracking-wide"
            >
              Workflow
            </motion.h2>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[#FAF8F5]/10 -translate-x-1/2" 
            />

            <div className="flex flex-col gap-4 md:gap-16">
              {PROCESS_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={step.num} 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative flex md:items-center w-full"
                  >

                    <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-11 h-11 bg-[#1F2D3D] border border-[#F1C453] rounded-full items-center justify-center z-10">
                      <span className="text-[#F1C453] font-serif text-md">{step.num}</span>
                    </div>

                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right md:ml-0" : "md:ml-auto md:pl-16"}`}>

                      <div className="flex items-start gap-3 md:hidden mb-3">
                        <div className="w-7 h-7 flex-shrink-0 bg-[#1F2D3D] border border-[#F1C453] rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-[#F1C453] font-serif text-sm leading-none">{step.num}</span>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/8 rounded-xl p-4 backdrop-blur-sm">
                          <h3 className="text-sm font-serif tracking-wider uppercase text-[#FAF8F5] mb-1.5 leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-base font-sans text-[#FAF8F5]/65 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className={`hidden md:block bg-white/5 border border-white/8 rounded-xl p-6 lg:p-8 backdrop-blur-sm ${isEven ? "md:mr-2" : "md:ml-2"}`}>
                        <h3 className="text-xl lg:text-2xl font-serif tracking-wider uppercase text-[#FAF8F5] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-base font-sans text-[#FAF8F5]/65 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}