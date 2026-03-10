import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, COMPANY } from "../../data/mock";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1F2D3D]/10 shadow-sm py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="z-50 block"
          >
            <img
              src={logo}
              alt="MS-Construction"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium font-sans capitalize transition-colors duration-300 ${isScrolled
                  ? "text-[#1F2D3D]/80 hover:text-[#F1C453]"
                  : "text-[#FAF8F5]/90 hover:text-[#F1C453]"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${COMPANY.phone}`}
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-2.5 text-sm font-sans font-semibold transition-all duration-300 rounded-sm ${isScrolled
                ? "bg-[#1F2D3D] text-[#FAF8F5] hover:bg-[#F1C453] hover:text-[#1F2D3D]"
                : "bg-[#F1C453] text-[#1F2D3D] hover:bg-[#FAF8F5]"
                }`}
            >
              Konsultasi
            </a>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 rounded-full ${isScrolled || isOpen ? "bg-[#1F2D3D]" : "bg-[#FAF8F5]"
                } ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            ></span>
            <span
              className={`block w-6 h-[2px] transition-all duration-300 rounded-full ${isScrolled || isOpen ? "bg-[#1F2D3D]" : "bg-[#FAF8F5]"
                } ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-[2px] transition-all duration-300 rounded-full ${isScrolled || isOpen ? "bg-[#1F2D3D]" : "bg-[#FAF8F5]"
                } ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            ></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#FAF8F5] flex flex-col justify-center items-center gap-6 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={() => setIsOpen(false)}
                className="text-md font-sans font-medium capitalize text-[#1F2D3D] hover:text-[#F1C453] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href={`https://wa.me/${COMPANY.phone}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-8 py-3 bg-[#1F2D3D] text-[#FAF8F5] font-sans font-semibold text-sm hover:bg-[#F1C453] hover:text-[#1F2D3D] transition-colors rounded-sm shadow-md"
            >
              Mulai Proyek
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
