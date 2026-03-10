import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div className="font-sans bg-[#FAF8F5] text-[#1F2D3D] antialiased selection:bg-[#F1C453] selection:text-[#FAF8F5]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
