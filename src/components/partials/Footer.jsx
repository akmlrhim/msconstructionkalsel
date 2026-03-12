import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS } from "../../data/mock";
import logo from "../../assets/logo.png";
import { ChevronRight, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2D3D] text-[#FAF8F5] pt-12 pb-6 md:pt-24 md:pb-10">

      {/* Top CTA Bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 mb-10 md:mb-20">
        <div className="rounded-xl bg-[#F1C453] px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs md:text-md font-sans font-semibold text-[#1F2D3D]/60 mb-1">
              Siap Membangun?
            </p>
            <h3 className="text-md md:text-3xl font-sans font-bold text-[#1F2D3D] leading-tight">
              Konsultasikan proyek Anda <br className="hidden md:block" /> bersama kami.
            </h3>
          </div>

          <a
            href={`https://wa.me/${COMPANY.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-shrink-0 bg-[#1F2D3D] text-[#F1C453] font-sans text-[10px] md:text-xs uppercase font-bold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-black transition-colors w-fit"
          >
            <span>Hubungi Kami</span>
            <ChevronRight size={14} className="md:w-4 md:h-4" />
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-10 md:pb-16 border-b border-white/10">

          <div>
            <Link to="/" className="inline-block mb-4 md:mb-6">
              <img src={logo} alt="MS-Construction" loading="lazy" className="h-8 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-[#FAF8F5]/50 font-sans text-xs md:text-base leading-relaxed mb-6 md:mb-8 max-w-xs">
              {COMPANY.slogan}. {COMPANY.tagline}. Melayani jasa desain dan konstruksi terpercaya di Kalimantan.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { id: "instagram", Icon: Instagram },
                { id: "linkedin", Icon: Linkedin },
                { id: "twitter", Icon: Twitter },
              ].map(({ id, Icon }) => (
                <a
                  key={id}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={id}
                  className="p-2 md:p-2.5 rounded-full border border-white/10 text-[#FAF8F5]/40 hover:border-[#F1C453] hover:text-[#F1C453] hover:bg-white/5 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Nav col */}
            <div>
              <h4 className="text-xs md:text-md font-sans uppercase font-bold text-[#F1C453] mb-4 md:mb-6">
                Studio
              </h4>
              <ul className="space-y-1 md:space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs md:text-base font-sans text-[#FAF8F5]/50 hover:text-[#FAF8F5] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact col */}
            <div>
              <h4 className="text-xs md:text-md font-sans uppercase font-bold text-[#F1C453] mb-4 md:mb-6">
                Kontak
              </h4>
              <ul className="space-y-4 md:space-y-5 font-sans text-xs md:text-md text-[#FAF8F5]/50">
                <li className="flex items-center gap-3 group">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F1C453] transition-colors duration-300">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-[#F1C453] group-hover:text-[#1F2D3D] transition-colors duration-300" />
                  </div>
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-[#FAF8F5] self-center transition-colors">
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F1C453] transition-colors duration-300">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#F1C453] group-hover:text-[#1F2D3D] transition-colors duration-300" />
                  </div>
                  <span className="leading-relaxed self-center text-[#FAF8F5]/40 flex-1">
                    {COMPANY.addressShort}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-xs md:text-md font-sans text-[#FAF8F5]/20 font-medium">
            &copy; {new Date().getFullYear()} MS Construction. All Rights Reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs md:text-md font-sans text-[#FAF8F5]/20 font-medium hover:text-[#FAF8F5]/60 transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}