import React, { useRef, useState } from "react";
import Custom1 from "../../assets/imgcustom/icustom1.png";
import Custom2 from "../../assets/imgcustom/icustom2.png";
import Custom3 from "../../assets/imgcustom/icustom3.png";
import Custom4 from "../../assets/imgcustom/icustom4.png";
import Custom5 from "../../assets/imgcustom/icustom5.png";
import Custom6 from "../../assets/imgcustom/icustom6.png";
import Custom7 from "../../assets/imgcustom/icustom7.png";


const Custom = () => {
  const portfolioItems = [
    { id: 1, image: Custom1 },
    { id: 2, image: Custom2 },
    { id: 3, image: Custom3 },
    { id: 4, image: Custom4 },
    { id: 5, image: Custom5 },
    { id: 6, image: Custom6 },
    { id: 7, image: Custom7 },
  ];

  const scrollRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null); // Track hovered image

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
    <div className="py-16 pt-0 md:pt-6 pb-0 -mb-1">
      <h2 className="text-center text-4xl sm:text-5xl font-sans font-bold text-white mb-4 md:mb-8">
        Desain Custom
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        <button onClick={scrollLeft} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#03346e] text-white p-2 rounded-full hover:bg-[#021526] transition-all">
          &#10094;
        </button>

        <button onClick={scrollRight} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#03346e] text-white p-2 rounded-full hover:bg-[#021526] transition-all">
          &#10095;
        </button>

        {/* Scrollable container for portfolio items */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 p-4"
          style={{ scrollbarWidth: 'none' }} // Hide scrollbar for Firefox
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`snap-center flex-none w-40 h-60 sm:w-48 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 transition-transform duration-300 transform 
              ${hoveredId === item.id ? 'scale-125 z-10' : 'scale-95'} overflow-hidden relative`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt=""
                className={`w-full h-3/4 object-cover transition-opacity duration-300 ${
                  hoveredId && hoveredId !== item.id ? 'opacity-50' : 'opacity-100'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Custom;
