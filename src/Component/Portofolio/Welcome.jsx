import bgwelcome from "../../assets/bgwelcome.png";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before the animation starts (optional)
  }, []);

  return (
    <div
      className={`items-center justify-center px-8 py-20 pb-10 md:mt-4 xl:mt-2 lg:py-24 transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${bgwelcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Animasi background bergerak perlahan ke bawah
        animation: "bgMove 20s linear infinite",
      }}
    >
      <div className="text-center">
        {/* Animasi untuk judul dengan efek floating */}
        <h1
          className={`font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-8 text-white transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 floating" : "opacity-0 -translate-y-10"
          }`}
        >
          Portofolio Kami
        </h1>

        {/* Animasi untuk paragraf dengan efek floating */}
        <p
          className={`text-lg lg:text-xl mb-5 lg:mb-8 text-slate-300 transition-all duration-1000 ease-out transform delay-200 ${
            isVisible ? "opacity-100 translate-y-0 floating" : "opacity-0 -translate-y-10"
          }`}
        >
          Jelajahi karya terbaik kami dalam desain logo, banner, merchandise, dan banyak lagi.
        </p>
      </div>

      {/* Style CSS untuk background dan floating */}
      <style jsx>{`
        @keyframes bgMove {
          0% {
            background-position: center top;
          }
          100% {
            background-position: center bottom;
          }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
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
    </div>
  );
};

export default Welcome;
