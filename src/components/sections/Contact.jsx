import { COMPANY } from "../../data/mock";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo MS-Construction, saya ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/${COMPANY.phone}?text=${encodeURIComponent(text)}`);
  };

  const contacts = [
    { icon: MapPin, label: "Alamat", value: COMPANY.address },
    { icon: Phone, label: "Telepon", value: COMPANY.phoneDisplay },
    { icon: Mail, label: "Email", value: `hello@${COMPANY.instagram}.com` },
  ];

  const fields = [
    { name: "name", label: "Nama Lengkap", type: "text" },
    { name: "email", label: "Alamat Email", type: "email" },
  ];

  return (
    <section id="contact" className="py-16 md:py-28 bg-[#1F2D3D] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-[#F1C453]/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#FAF8F5]/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">

        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <span className="text-sm md:text-md font-sans font-semibold text-[#F1C453] mb-2 block">
              Hubungi Kami
            </span>
            <h2 className="text-2xl md:text-5xl font-serif text-[#FAF8F5] leading-tight">
              Mulai Proyek Anda
            </h2>
          </div>
          <p className="text-[#FAF8F5]/50 font-sans text-xs md:text-base leading-relaxed max-w-xs md:text-right">
            Kami siap mewujudkan visi Anda. Mari ciptakan sesuatu yang luar biasa bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 items-start">

          <div className="lg:col-span-2 flex flex-col gap-5 md:gap-8">
            <div className="flex flex-col gap-3">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 md:gap-4 p-3.5 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F1C453]/50 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 md:w-11 md:h-11 flex-shrink-0 rounded-lg bg-white/8 group-hover:bg-[#F1C453] flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#FAF8F5] group-hover:text-[#1F2D3D] transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong className="block text-sm md:text-base uppercase text-[#FAF8F5]/35 mb-0.5">
                      {label}
                    </strong>
                    <p className="font-sans text-xs md:text-base text-[#FAF8F5]/75 leading-[1.3] md:leading-[1.4] m-0">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-36 md:h-56 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 grayscale opacity-50 hover:opacity-90 hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6577413544433!2d114.80413884350224!3d-3.4332079876504564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6822a7ecb076f%3A0xddbd24d81e877035!2sKomplek%20Balitra%20Jaya%20Permai%2C%20Jl.%20Berlin%20No.5%2C%20Loktabat%20Utara%2C%20Kec.%20Banjarbaru%20Utara%2C%20Kota%20Banjar%20Baru%2C%20Kalimantan%20Selatan%2070714!5e0!3m2!1sid!2sid!4v1773138548280!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#F1C453] via-[#e6b840] to-[#F1C453]/30" />

            <div className="p-6 md:p-10">
              <div className="flex items-center justify-between mb-7 md:mb-10">
                <div>
                  <h3 className="text-base md:text-2xl font-bold font-sans text-[#FAF8F5] mb-1">Kirim Pesan</h3>
                </div>
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#F1C453]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#F1C453]" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                {fields.map(({ name, label, type }) => (
                  <div key={name} className="relative">
                    <div className={`border-b transition-colors duration-300 ${focused === name ? "border-[#F1C453]" : "border-white/12"}`}>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder=" "
                        className="w-full bg-transparent py-3 px-0 text-[11px] md:text-base font-sans text-[#FAF8F5] focus:outline-none peer"
                      />
                      <label className="absolute left-0 top-3 text-[#FAF8F5]/35 text-xs md:text-md transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs md:peer-focus:text-md peer-focus:text-[#F1C453] peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-md peer-placeholder-shown:text-[#FAF8F5]/35 pointer-events-none">
                        {label}
                      </label>
                    </div>
                  </div>
                ))}

                <div className="relative">
                  <div className={`border-b transition-colors duration-300 ${focused === "message" ? "border-[#F1C453]" : "border-white/12"}`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      rows={4}
                      placeholder=" "
                      className="w-full bg-transparent py-3 px-0 text-[11px] md:text-base font-sans text-[#FAF8F5] focus:outline-none resize-none peer"
                    />
                    <label className="absolute left-0 top-3 text-[#FAF8F5]/35 text-xs md:text-md transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs md:peer-focus:text-md peer-focus:text-[#F1C453] peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs md:peer-placeholder-shown:text-md peer-placeholder-shown:text-[#FAF8F5]/35 pointer-events-none">
                      Detail Proyek
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-1 w-full bg-[#F1C453] hover:bg-[#e6b840] active:scale-[0.98] text-[#1F2D3D] font-sans text-xs md:text-sm font-bold py-2 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Kirim via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}