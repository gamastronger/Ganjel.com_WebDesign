import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Judul from "../Component/Layanan/Judul";

function Beranda() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0F172A] text-slate-200">
        <Navbar />
        <Judul />
        <Footer />
      </div>
    </div>
  );
};
export default Beranda;
