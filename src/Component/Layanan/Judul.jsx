import React from "react";
import model from "../../Assets/angel 2.png";
import bgwelcome from "../../Assets/bgwelcome.png";

const services = [
  {
    id: 1,
    title: "Desain Logo",
    description:
      "Kami menyediakan layanan desain logo profesional yang unik dan menarik untuk merek Anda.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Custom",
    description:
      "Desain banner yang kreatif dan informatif untuk mempromosikan produk atau layanan Anda.",
    icon: "🌟",
  },
  {
    id: 3,
    title: "Desain Instagram",
    description:
      "Desain instagram yang menarik dan disesuaikan dengan kebutuhan Anda.",
    icon: "📱",
  },
  {
    id: 4,
    title: "Desain Merchandise",
    description:
      "Layanan desain merchandise untuk acara, promosi, atau kebutuhan lainnya.",
    icon: "🎁",
  },
];

const Judul = () => {
  return (
    <section
      className="px-6 py-16 lg:py-20"
      style={{
        backgroundImage: `url(${bgwelcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "20vh",
      }}
    >
      <div className="relative h-auto md:h-screen flex flex-col items-center justify-center text-white md:-mb-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full px-2 lg:px-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={model}
              alt="Hero"
              className="w-[80%] md:w-[80%] lg:w-[80%] h-auto object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center mb-10 md:mb-20 lg:text-left lg:pl-18">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-8">
              Layanan Grafistix
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Desain Berkelas, Hasil Tuntas - Hanya di Grafistix!
            </p>
            <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-tr rounded-lg from-[#0F172A] from-60% via-[#14203D] via-80% to-[#0F172A] to-90% text-black py-12 md:py-20 mb-10 md:mb-12 relative">
        <div className="absolute inset-0 pointer-events-none bg-noise opacity-10"></div>
        <div className="container mx-auto px-8 lg:mb-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-center mb-8 md:mb-14 text-white tracking-tight">
            Desain Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#E5F6FF] rounded-xl shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr from-[#D6F1FF] to-[#70D4FF] border border-transparent hover:border-gradient-to-r from-[#38BDF8] to-[#60A5FA]"
              >
                {/* Icon Section */}
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-b from-[#e0f7fa] to-[#b2ebf2] rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  <span className="text-6xl md:text-7xl text-[#0f172a]">
                    {service.icon}
                  </span>
                </div>

                {/* Title Section */}
                <h3 className="text-xl md:text-2xl font-bold text-[#021526] mb-4">
                  {service.title}
                </h3>

                {/* Description Section */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Button Section */}
                <button className="mt-6 bg-[#021526] text-white py-2 px-6 rounded-full hover:bg-[#03346e] transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judul;
