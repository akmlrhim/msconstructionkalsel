import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import { COMPANY } from "../../data/mock";

function Counter({ to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, to, duration]);

  return <span ref={nodeRef}>0</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-32 bg-[#FAF8F5] border-t border-[#1F2D3D]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {COMPANY.stats.map((stat, index) => {
            // Extract numbers safely
            const numValue = parseInt(stat.value.replace(/[^0-9]/g, ""), 10);
            const suffix = stat.value.replace(/[0-9]/g, "");

            return (
              <div key={index} className="flex flex-col items-center md:items-start gap-3">
                <div className="text-[#F1C453] text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
                <div className="text-6xl md:text-7xl font-serif text-[#1F2D3D] font-light">
                  <Counter to={numValue} duration={2.5} />
                  {suffix && <span className="text-[#1F2D3D]/50">{suffix}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
