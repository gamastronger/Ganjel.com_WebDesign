import React, { useRef, useState } from "react";
import imerch1 from "../../assets/imerch/imerch1.png";
import imerch2 from "../../assets/imerch/imerch2.png";
import imerch3 from "../../assets/imerch/imerch3.png";
import imerch4 from "../../assets/imerch/imerch4.png";
import imerch5 from "../../assets/imerch/imerch5.png";
import imerch6 from "../../assets/imerch/imerch6.png";
import imerch7 from "../../assets/imerch/imerch7.png";

const Merch = () => {
  const portfolioItems = [
    { id: 1, image: imerch1 },
    { id: 2, image: imerch2 },
    { id: 3, image: imerch3 },
    { id: 4, image: imerch4 },
    { id: 5, image: imerch5 },
    { id: 6, image: imerch6 },
    { id: 7, image: imerch7 },
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
    <div className="py-16 pt-0 md:pt-6 pb-5 md:pb-12 lg:pb-20 -mb-5">
      <h2 className="text-center text-4xl sm:text-5xl font-sans font-bold text-white mb-4 md:mb-8">
        Desain Merchandise
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
              className={`snap-center flex-none w-40 h-60 sm:w-48 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-96 transition-transform duration-300 transform 
              ${hoveredId === item.id ? "scale-125 z-10" : "scale-95"} overflow-hidden relative`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt=""
                className={`w-full h-3/4 object-cover transition-opacity duration-300 ${
                  hoveredId && hoveredId !== item.id ? "opacity-50" : "opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;
