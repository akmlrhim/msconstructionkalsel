import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import ImageSkeleton from "../components/ui/ImageSkeleton";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1F2D3D] transition-colors mb-8 font-medium text-sm md:text-base group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          Kembali
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[40vh] md:h-[65vh] rounded-3xl overflow-hidden mb-10 shadow-2xl"
        >
          <ImageSkeleton
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pointer-events-none">
            <span className="text-[#F1C453] font-semibold text-xs md:text-lg mb-2 uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-serif font-medium leading-tight max-w-4xl">
              {project.title}
            </h1>
          </div>
        </motion.div>

        {project.description && (
          <div className="mb-12">
            <p className="text-gray-700 text-sm md:text-base font-sans leading-relaxed text-justify">
              {project.description}
            </p>
          </div>
        )}

        {/* Design / Render Photos */}
        {project.designPhotos && project.designPhotos.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="mb-10">
              <span className="text-xs md:text-sm font-sans font-bold text-[#F1C453] uppercase tracking-widest mb-2 block">
                Galeri
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F2D3D]">Design / Render</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {project.designPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  className="aspect-square rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-black/5 will-change-transform"
                  onClick={() => setSelectedImage(photo)}
                >
                  <ImageSkeleton
                    src={photo}
                    alt={`Design ${idx + 1}`}
                    className="w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Process Photos */}
        {project.processPhotos && project.processPhotos.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F2D3D]">Proses Pekerjaan</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {project.processPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  className="aspect-square rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-black/5 will-change-transform"
                  onClick={() => setSelectedImage(photo)}
                >
                  <ImageSkeleton
                    src={photo}
                    alt={`Proses ${idx + 1}`}
                    className="w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Result Photos */}
        {project.resultPhotos && project.resultPhotos.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1F2D3D]">Hasil</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {project.resultPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  className="aspect-square rounded-2xl overflow-hidden group cursor-pointer ring-1 ring-black/5 will-change-transform"
                  onClick={() => setSelectedImage(photo)}
                >
                  <ImageSkeleton
                    src={photo}
                    alt={`Hasil ${idx + 1}`}
                    className="w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Preview Full"
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
