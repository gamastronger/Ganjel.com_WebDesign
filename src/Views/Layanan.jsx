import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Judul from "../Component/Layanan/Judul";
import Logo from "../Component/Layanan/Logo";
import Custom from "../Component/Layanan/Custom";
import Ig from "../Component/Layanan/Ig";
import Merch from "../Component/Layanan/Merch";

function Beranda() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0F172A] text-slate-200">
        <Navbar />
        <Judul />
        <Logo />
        <Custom />
        <Ig />
        <Merch />
        <Footer />
      </div>
    </div>
  );
}
export default Beranda;