import React, { useRef, useState } from "react";
import logo1 from "../../assets/imglogo/postlog1.png";
import logo2 from "../../assets/imglogo/postlog2.png";
import logo3 from "../../assets/imglogo/postlog3.png";
import logo4 from "../../assets/imglogo/postlog4.png";
import logo5 from "../../assets/imglogo/postlog5.png";
import logo6 from "../../assets/imglogo/postlog6.png";
import logo7 from "../../assets/imglogo/postlog7.png";

const Logo = () => {
  const portfolioItems = [
    { id: 1, image: logo1 },
    { id: 2, image: logo2 },
    { id: 3, image: logo3 },
    { id: 4, image: logo4 },
    { id: 5, image: logo5 },
    { id: 6, image: logo6 },
    { id: 7, image: logo7 },
  ];

  const scrollRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-16">
      <h2 className="text-center text-4xl sm:text-5xl font-sans font-bold text-white mb-4 md:mb-8">
        Desain Logo
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#03346e] text-white p-2 rounded-full hover:bg-[#021526] transition-all"
        >
          &#10094;
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#03346e] text-white p-2 rounded-full hover:bg-[#021526] transition-all"
        >
          &#10095;
        </button>

        {/* Scrollable container for portfolio items */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 p-4"
          style={{ scrollbarWidth: "none" }} // Hide scrollbar for Firefox
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`snap-center flex-none w-64 md:w-80 h-96 transition-transform duration-300 transform 
              ${
                hoveredId === item.id ? "scale-125 z-10" : "scale-95"
              } overflow-hidden relative`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt=""
                className={`w-full h-3/4 object-cover transition-opacity duration-300 ${
                  hoveredId && hoveredId !== item.id
                    ? "opacity-50"
                    : "opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;
