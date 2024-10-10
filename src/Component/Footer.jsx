import { Link } from "react-router-dom";
import ig from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import linked from "../assets/linked.png";
import footerBg from "../assets/bgfooter2.png";

const Footer = () => {
  return (
    <footer
      className="text-justify bg-cover bg-center text-white py-10 px-8 lg:px-16"
      style={{
        backgroundImage: `url(${footerBg})`, // Menggunakan gambar sebagai background
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Grafistix</h3>
            <p className="text-sm mb-4">
              Kami menyediakan solusi desain grafis yang cepat, kreatif, dan
              terjangkau dengan jaminan kepuasan.
            </p>
            <p className="text-sm">
              Dapatkan desain berkualitas untuk kebutuhan Anda dengan layanan
              yang profesional.
            </p>
          </div>

          {/* Layanan Kami */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-1">
              {[
                { name: "Desain Logo", icon: "🎨" },
                { name: "Desain Custom", icon: "🌟" },
                { name: "Desain Instagram", icon: "📱" },
                { name: "Desain Merchandise", icon: "🎁" },
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-lg">{service.icon}</span>
                  <a
                    href="/layanan"
                    className="ml-3 hover:text-[#6eacda] transition duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <span className="text-lg">✉</span>
                <a
                  href="mailto:info@grafistix.com"
                  className="ml-3 hover:text-[#6eacda] transition duration-300"
                >
                  refanjie02@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📞</span>
                <a
                  href="tel:+6283112080715"
                  className="ml-3 hover:text-[#6eacda] transition duration-300"
                >
                  +62 831-1208-0715
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-lg">📍</span>
                <p className="ml-3">Jl. Ketintang, Ketintang, Kec. Gayungan, Surabaya</p>
              </li>
            </ul>
          </div>

          {/* Berlangganan */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Berlangganan</h3>
            <p className="text-sm mb-4">
              Dapatkan tips desain, penawaran, dan update terbaru langsung ke
              inbox Anda.
            </p>
            <div className="group mt-4">
              <a
                href="/pemesanan"
                className="inline-flex items-center justify-center px-10 py-2 bg-[#6eacda] text-black font-bold border border-gray-700 hover:bg-blue-700 rounded-full transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
              >
                Mulai
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        {/* Tombol */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Grafistix. All rights reserved.
          </p>

          {/* Social Media */}
          <ul className="flex space-x-6">
            {[
              {
                name: "Facebook",
                icon: fb,
                url: "https://facebook.com",
              },
              {
                name: "Instagram",
                icon: ig,
                url: "https://www.instagram.com/mutiangell_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              },
              {
                name: "LinkedIn",
                icon: linked,
                url: "https://linkedin.com",
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8"
                  />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="group mt-4">
              <a
                href="https://wa.me/6283112080715"
                className="inline-flex items-center justify-center px-6 py-2 bg-[#6eacda] text-black font-bold border border-gray-700 rounded-full transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
              >
                Konsultasi Gratis
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
