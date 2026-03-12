import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { ArrowLeft, Calendar, MapPin, User, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Find project by id
    const foundProject = PROJECTS.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#FAF8F5] to-[#EAE5D9]">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#1F2D3D] mb-4">Proyek Tidak Ditemukan</h2>
        <p className="text-sm md:text-base text-gray-600 mb-8">Maaf, proyek yang Anda cari tidak tersedia.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#F1C453] text-[#1F2D3D] px-6 py-3 rounded-xl font-bold hover:bg-[#e0b542] transition-colors"
        >
          <ArrowLeft size={20} />
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#FAF8F5] via-white to-[#EAE5D9] min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1F2D3D] transition-colors mb-8 font-medium text-sm md:text-base"
        >
          <ArrowLeft size={20} />
          Kembali
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[35vh] md:h-[60vh] rounded-3xl overflow-hidden mb-8 md:mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
            <span className="text-[#F1C453] font-semibold text-xs md:text-lg mb-2">
              {project.category}
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-serif font-medium leading-tight max-w-4xl">
              {project.title}
            </h1>
          </div>
        </motion.div>

      </div>

      {project.processPhotos && project.processPhotos.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
          <div className="mb-8 md:mb-10">
            <span className="text-xs md:text-lg font-sans font-medium text-gray-500 mb-2 block">
              Galeri
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-[#1F2D3D]">
              Proses Pekerjaan
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.processPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(photo)} // Trigger lightbox
              >
                <img
                  src={photo}
                  alt={`Proses ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah tertutup jika gambar yang ditekan
          />
        </div>
      )}
    </div>
  );
}