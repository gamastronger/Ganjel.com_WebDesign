import React, { useEffect, useState } from 'react';
import bgpanjang from '../../assets/bgwcmpanjang.png';

const Welcome = () => {
  const [dots, setDots] = useState([]);
  const [textVisible, setTextVisible] = useState(false);

  // Create random dots
  useEffect(() => {
    const dotCount = 35; // Number of dots
    const dotElements = [];
    for (let i = 0; i < dotCount; i++) {
      const delay = Math.random() * 8; // Random delay for each dot
      const left = Math.random() * 100; // Random position across the width
      const size = Math.random() * 4 + 2; // Random size of the dots
      dotElements.push({ delay, left, size });
    }
    setDots(dotElements);

    // Trigger text animation on component load
    setTimeout(() => {
      setTextVisible(true);
    }, 300); // Delay before text appears
  }, []);

  return (
    <>
      <section
        className="relative px-6 py-16 md:mt-4 xl:mt-2 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${bgpanjang})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'bgMove 20s linear infinite', // Added background move animation
        }}
      >
        {/* Floating dots animation */}
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute bg-[#4FCAFF] rounded-full opacity-75"
            style={{
              bottom: '-10%', // Start from below the section
              left: `${dot.left}%`, // Random horizontal position
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `floatUp ${5 + dot.size}s ease-in infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          ></div>
        ))}

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16">
          {/* Text Section */}
          <center>
            <div className="lg:w-1/2 lg:mt-0">
              <h1
                className={`text-[40px] md:text-5xl lg:text-6xl font-bold font-sans mb-6 leading-tight transition-opacity duration-1000 ease-out transform ${
                  textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                Desain Berkelas, Hasil Tuntas -{" "}
                <span className="text-[#38BDF8]">Hanya di Grafistix</span>
              </h1>
              <p
                className={`font-sans text-slate-400 text-[15px] md:text-[20px] lg:text-1 mb-8 leading-relaxed text-justify transition-opacity duration-1000 ease-out transform ${
                  textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                Platform desain grafis online yang mengutamakan kualitas dan
                kepuasan pelanggan. Kami menghadirkan solusi desain profesional,
                mulai dari logo hingga materi branding, yang dikerjakan dengan
                cepat, efisien, dan tanpa ribet.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://wa.me/6283112080715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-sans bg-[#17A9E8] text-blue-950 px-6 py-3 font-bold rounded-lg hover:text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:scale-105 hover:text-black transition transform ${
                    textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  Konsultasi Gratis
                </a>

                <a
                  href="/layanan"
                  className={`font-sans text-center bg-transparent border border-[#38BDF8] text-[#38BDF8] px-6 py-3 rounded-md font-semibold hover:bg-[#8CDDFF] transition-all duration-500 ease-in-out hover:scale-105 hover:text-black transition transform flex items-center justify-center ${
                    textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    minHeight: '50px', // Atur tinggi minimal jika diperlukan
                  }}
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </center>
        </div>

        <style jsx>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-150vh); /* Move up beyond the visible area */
              opacity: 0;
            }
          }

          @keyframes bgMove {
            0% {
              background-position: center top; /* Start from the top */
            }
            100% {
              background-position: center bottom; /* Move to the bottom */
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Welcome;
