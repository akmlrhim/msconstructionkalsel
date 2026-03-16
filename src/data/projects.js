import cover1 from "../assets/project/1/cover.webp";
import cover2 from "../assets/project/2/cover.webp";

const proc1 = Object.values(
  import.meta.glob("../assets/project/1/progress/*.webp", { eager: true, import: "default" }),
);
const result1 = Object.values(
  import.meta.glob("../assets/project/1/result/*.webp", { eager: true, import: "default" }),
);
const design1 = Object.values(
  import.meta.glob("../assets/project/1/design/*.webp", { eager: true, import: "default" }),
);

export const PROJECTS = [
  {
    id: 15326981,
    title: "Building : Mr. Agus Budianto",
    image: cover1,
    description:
      "Proyek Pembangunan Khusus Hunian Mr. Agus Budianto di JL. MARKISA adalah studi kasus yang menunjukkan komitmen kami pada integritas struktural dan transparansi pelaksanaan, dokumentasi proyek ini mencakup seluruh tahapan, mulai dari rencana teknis terperinci yang mencakup Denah Pondasi, Sloof, dan Struktur Balok Baja hingga desain Rencana Atap yang lengkap, serta didukung oleh log visual ekstensif berupa foto dan video progres lapangan (tertanggal dari Juni hingga September 2020).",
    wide: true,
    dark: false,
    designPhotos: design1,
    processPhotos: proc1,
    resultPhotos: result1,
  },
  {
    id: 3162890879,
    title: "Desain & Bulding : Mrs. Dira",
    image: cover2,
    wide: true,
    dark: false,
  },
];
