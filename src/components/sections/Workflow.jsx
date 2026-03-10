import { ChevronRight } from "lucide-react";
import { PROCESS_STEPS, ADVANTAGES } from "../../data/mock";

export default function Workflow() {
  return (
    <>
      <section id="layanan" className="pt-16 pb-14 lg:pt-24 lg:pb-24 bg-[#FAF8F5] text-[#1F2D3D]">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="mb-10 lg:mb-20">
            <span className="text-md md:text-lg font-sans text-[#57161B] mb-3 block font-semibold">
              Layanan Kami
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#1F2D3D]">
              Nilai Tambah Kami
            </h2>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto">
            {ADVANTAGES.map((adv, index) => (
              <div
                key={index}
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
                  <p className="text-xs sm:text-md font-sans font-medium text-[#1F2D3D]/70 group-hover:text-[#FAF8F5]/75 transition-colors duration-300">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#1F2D3D] text-[#FAF8F5] py-16 lg:py-32 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 lg:mb-24">
            <span className="text-sm md:text-md font-sans text-[#F1C453] mb-3 block font-semibold">
              Tahapan Pengerjaan
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#FAF8F5] uppercase tracking-wide">
              Workflow
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[#FAF8F5]/10 -translate-x-1/2" />

            <div className="flex flex-col gap-4 md:gap-16">
              {PROCESS_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={step.num} className="relative flex md:items-center w-full">

                    <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 w-11 h-11 bg-[#1F2D3D] border border-[#F1C453] rounded-full items-center justify-center z-10">
                      <span className="text-[#F1C453] font-serif text-md">{step.num}</span>
                    </div>

                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right md:ml-0" : "md:ml-auto md:pl-16"}`}>

                      <div className="flex items-start gap-3 md:hidden mb-3">
                        <div className="w-7 h-7 flex-shrink-0 bg-[#1F2D3D] border border-[#F1C453] rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-[#F1C453] font-serif text-sm leading-none">{step.num}</span>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/8 rounded-xl p-4">
                          <h3 className="text-sm font-serif tracking-wider uppercase text-[#FAF8F5] mb-1.5 leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-md font-sans text-[#FAF8F5]/65 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      <div className={`hidden md:block bg-white/5 border border-white/8 rounded-xl p-6 lg:p-8 ${isEven ? "md:mr-2" : "md:ml-2"}`}>
                        <h3 className="text-xl lg:text-2xl font-serif tracking-wider uppercase text-[#FAF8F5] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm font-sans text-[#FAF8F5]/65 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}