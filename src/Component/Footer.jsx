import { Link } from "react-router-dom";
import ig from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import linked from "../assets/linked.png";



const Footer = () => {
  return (
    <footer className="text-justify bg-gradient-to-r from-[#021526] via-[#03346e] to-[#021526] text-white py-10 px-8 lg:px-16">
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
                    href="#"
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
            <div className="flex space-x-2">
              <Link to="/Pemesanan">
                <button className="bg-[#6eacda] hover:bg-[#e2e2b6] text-black font-bold py-2 px-10 rounded-full transition duration-300">
                  Mulai
                </button>
              </Link>
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
                url: "https://instagram.com",
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

          <a 
            href="https://wa.me/6283112080715"
            className="bg-[#6eacda] hover:bg-[#e2e2b6] text-black font-bold py-2 px-6 rounded-full transition duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Konsultasi Gratis
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;