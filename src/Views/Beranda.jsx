import Welcome from "../Component/Beranda/Welcome";
import Navbar from "../Component/Navbar";
import Deskripsi from "../Component/Beranda/Deskripsi";
import Footer from "../Component/Footer";

function Beranda() {
  return (
    <div className="bg-[#0F172A] blur(10%) min-h-screen">
      <div className="text-slate-200">
        <Navbar />
        <Welcome />
        <Deskripsi />
        <Footer />
      </div>
    </div>
  );
}

export default Beranda;