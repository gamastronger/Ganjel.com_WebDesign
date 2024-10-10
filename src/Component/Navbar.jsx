import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);


  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Scroll handler to hide/show navbar
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`py-4 px-8 flex items-center justify-between text-[#e2e2b6] shadow-lg transition-transform duration-300 fixed top-0 w-full z-50 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-[40px]" src={logo} alt="Logo" />
          <span className="ml-3 text-xl font-bold text-white">Grafistix</span>
        </div>

        {/* Links for Desktop */}
        <div className="hover-[#17A9E8] hidden md:flex items-center gap-8 text-lg text-white font-mono">
          <a href="/" className="hover:text-[#6eacda] transition duration-300">
            Beranda
          </a>
          <a
            href="/portofolio"
            className="hover:text-[#6eacda] transition duration-300"
          >
            Portofolio
          </a>
          <a
            href="/layanan"
            className="hover:text-[#6eacda] transition duration-300"
          >
            Layanan
          </a>
          <a
            href="/pemesanan"
            className="hover:text-[#6eacda] transition duration-300"
          >
            Pemesanan
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="block md:hidden" onClick={handleSidebar}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Sidebar for Mobile */}
        {sidebarVisible && (
          <aside
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
            onClick={handleSidebar}
          >
            <div
              className="absolute top-0 right-0 w-54 h-auto bg-[#14203D] shadow-lg p-6 rounded-l-xl transform transition-transform duration-300 ease-in-out"
              style={{
                transform: sidebarVisible
                  ? "translateX(1%)"
                  : "translateX(100%)",
              }}
            >
              {/* Close Button */}
              <button className="flex justify-end mb-4" onClick={handleSidebar}>
                <svg
                  className="w-8 h-8 text-[#D9F0FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              {/* Mobile Links */}
              <ul className="flex flex-col text-[#FFFFFF] gap-6">  
                <li>
                  <a
                    href="/"
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="/portofolio"
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="/layanan"
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Layanan
                  </a>
                </li>
                <li>
                  <a
                    href="/pemesanan"
                    onClick={handleSidebar}
                    className="text-lg hover:text-[#6eacda] transition duration-300"
                  >
                    Pemesanan
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
      <div className="pt-10 md:pt-12 lg:pt-14"></div>
    </div>
  );
};

export default Navbar;
