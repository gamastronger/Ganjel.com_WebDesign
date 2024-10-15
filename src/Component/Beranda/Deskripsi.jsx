import React, { useEffect, useRef } from "react";
import foto4 from "../../assets/gimage.jpeg";
import corel from "../../assets/corel.png";
import ilustrator from "../../assets/ilustrator.png";
import indesign from "../../assets/indesign.png";
import netflixLogo from "../../assets/photoshop.png";
import Inkscape from "../../assets/Inkscape.png";
import affinity from "../../assets/affinity.png";
import poster from "../../assets/poster bawah.png";
import kualitas from "../../assets/iquliaty.png";
import profesional from "../../assets/iprofesional.png";
import kreatif from "../../assets/ikreatif.png";
import totalitas from "../../assets/itotality.png";
import ontime from "../../assets/iontime.png";
import fastrespon from "../../assets/iresponse.png";
import klien1 from "../../assets/klien/klien1.jpeg";
import klien6 from "../../assets/klien/klien6.jpeg";
import klien2 from "../../assets/klien/klien2.jpeg";
import klien3 from "../../assets/klien/klien3.jpeg";
import klien4 from "../../assets/klien/klien4.jpeg";
import klien5 from "../../assets/klien/klien5.jpeg";
import klien7 from "../../assets/klien/klien7.jpeg";
import klien8 from "../../assets/klien/klien8.jpeg";
import klien9 from "../../assets/klien/klien9.jpeg";



const Deskripsi = () => {
  const testimonialRef = useRef(null);

  useEffect(() => {
    const container = testimonialRef.current;

    const scrollTestimonials = () => {
      container.scrollBy({ left: 2, behavior: "smooth" });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(scrollTestimonials, 30); // Scroll speed
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="animated-gradient-bg text-black py-16 px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 items-center gap-12">
          {/* Text Section */}
          <div className="lg:pl-14">
            <h1 className="font-helvetica font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-5 text-[#0D255E]">
              Jasa Desain Grafis & Pengolahan Visual
            </h1>
            <p className="font-sans text-lg lg:text-xl mb-5 lg:mb-8 text-justify">
              Jasa Desain Grafis berpengalaman yang menangani klien dari berbagai daerah. Kami melayani secara online dan tatap muka langsung.
            </p>
            <a href="/portofolio" className="font-sans bg-[#14203D] text-[#CCDBFF] px-6 py-3 font-bold rounded-lg hover:text-white hover:bg-gradient-to-r from-[#132859] to-[#193678] shadow-lg">
              Selengkapnya
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-[450px] lg:ml-10">
            <img src={foto4} alt="Grafistix Hero" className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="max-w-screen-xl mx-auto py-8 md:pt-12">
        <div className="grid grid-cols-6 gap-8 justify-center">
          {[corel, ilustrator, indesign, netflixLogo, Inkscape, affinity].map((logo, idx) => (
            <img key={idx} src={logo} alt={`Logo ${idx}`} className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          ))}
        </div>
        <p className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] p-6 rounded-lg flex flex-col items-center justify-center h-24 font-sans text-center text-lg lg:text-xl mt-11">
          Software terbaik yang membantu Grafistix untuk menciptakan Desain dan berinovasi
        </p>
      </div>

      {/* Why Grafistix Section */}
      <div className="mt-0 text-center">
        <h2 className="font-bold text-3xl lg:text-5xl mb-5 lg:mb-8 text-[#03346E]">Kenapa harus Grafistix?</h2>
        <p className="text-lg lg:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto">
          Kami adalah pilihan tepat untuk Anda yang membutuhkan desain grafis profesional, kreatif, dan berkualitas. Dengan layanan cepat dan hasil yang memuaskan.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Berkualitas", description: "Grafistix menyediakan layanan desain grafis berkualitas tinggi dengan fokus pada kreativitas, keahlian, dan kepuasan klien.", icon: kualitas },
            { title: "Profesional", description: "Di Grafistix, kami menjamin layanan desain grafis yang profesional, didukung oleh tim ahli yang berkomitmen untuk memenuhi kebutuhan klien dengan tepat dan efisien.", icon: profesional },
            { title: "Kreatif", description: "Grafistix mengedepankan kekreatifan dalam setiap proyek desain grafis, menciptakan solusi unik yang memperkuat identitas dan visi merek klien.", icon: kreatif },
            { title: "Totalitas", description: "Di Grafistix, kami berkomitmen pada totalitas layanan desain grafis, memastikan setiap detail dikerjakan dengan dedikasi penuh untuk mencapai hasil terbaik bagi klien.", icon: totalitas },
            { title: "On Time", description: "Grafistix selalu mengutamakan penyelesaian proyek desain grafis tepat waktu, memastikan kepuasan klien tanpa mengorbankan kualitas.", icon: ontime },
            { title: "Fast Response", description: "Grafistix memberikan layanan desain grafis dengan fast response, siap merespon kebutuhan klien dengan cepat dan efisien.", icon: fastrespon }
          ].map((item) => (
            <div key={item.title} className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] hover:bg-[#D6F1FF] hover:text-black p-6 rounded-lg flex flex-col items-center justify-center h-58 shadow-lg transition-transform hover:scale-105">
              <img src={item.icon} alt={item.title} className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl lg:text-2xl mb-2">{item.title}</h3>
              <p className="text-sm lg:text-base text-center text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section with Auto-Scrolling Testimonials */}
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 mt-16">
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Apa kata klien kami
        </h2>
        <p className="mt-2 text-lg leading-7 text-gray-600">
          Dengar langsung dari bisnis yang mempercayai layanan kami.
        </p>
      </div>

      <div
        ref={testimonialRef}
        className="scroll-pl-6 mt-10 flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
        style={{ whiteSpace: "nowrap" }}
      >
        {[
          {
            name: "Gumi",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Layanan desain grafis berkualitas.",
            image: klien1 // Add John's profile image
          },
          {
            name: "Itis",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Pelayanan ramah, responsif, revisi cepat.",
            image: klien2 // Add Jane's profile image
          },
          {
            name: "Plufy",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Portofolio mengesankan, keahlian beragam proyek.",
            image: klien3 // Add Emily's profile image
          },
          {
            name: "Qyuu",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Kualitas visual unggul, bisnis menonjol.",
            image: klien4 // Add Michael's profile image
          },
          {
            name: "Alex",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Efisien, tepat waktu, sesuai brief.",
            image: klien5 // Add Sara's profile image
          },
          {
            name: "Anggam",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Hasil desain Grafistix sesuai visi dan sangat memuaskan!",
            image: klien6 // Add Sara's profile image
          },
          {
            name: "Muti",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Desainnya luar biasa dan tepat waktu!",
            image: klien7 // Add Sara's profile image
          },
          {
            name: "Gang",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Kolaborasi hebat, hasilnya mengesankan!",
            image: klien8 // Add Sara's profile image
          },
          {
            name: "Octo",
            company: "Universitas Negeri Surabaya",
            role: "Mahasiswa",
            feedback: "Solusi desain kreatif dan profesional, saya puas!",
            image: klien9 // Add Sara's profile image
          },
          
        ].map((client, index) => (
          <div key={index} className="min-w-[200px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] flex-shrink-0 inline-block">
            <div className="mx-auto max-w-xs flex flex-col items-center justify-between border rounded-lg p-4 shadow-md space-y-4">
              <img 
                src={client.image} 
                alt={client.name} 
                className="w-16 h-16 object-cover rounded-full mb-2" 
              />
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-900">{client.name}</h3>
                <p className="text-xs text-gray-500">{client.role} {client.company}</p>
                <p className="mt-1 text-xs text-gray-600 leading-5">{client.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* Poster Section */}
      <div className="mt-12 md:mt-13 text-center">
        <img className="w-[110%] md:w-[130%] lg:w-[115%] mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform" src={poster} alt="Refa Setyagama Abdillah" />
      </div>

      {/* Background Animation Styles */}
      <style jsx>{`
        .animated-gradient-bg {
          background: linear-gradient(45deg, #38BDF8, #A6E4FF, #FFFFFF, #A6E4FF);
          background-size: 400% 400%;
          animation: gradientAnimation 10s ease infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-appear-0 { animation-delay: 0.2s; }
        .logo-appear-1 { animation-delay: 0.4s; }
        .logo-appear-2 { animation-delay: 0.6s; }
        .logo-appear-3 { animation-delay: 0.8s; }
        .logo-appear-4 { animation-delay: 1s; }
        .logo-appear-5 { animation-delay: 1.2s; }

        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </div>
  );
};

export default Deskripsi;
