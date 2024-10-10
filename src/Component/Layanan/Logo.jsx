import slogo from "../../assets/slogo.png";
import logo from "../../assets/slogo+.png";

const Logo = () => {
  return (
    <div className="relative bg-[#0F172A] flex flex-col xl:flex-row items-center justify-center text-white px-4 -mt-1 md:pt-8 xl:px-24 mb-20 xl:mt-20 xl:mb-20 overflow-hidden">
      <div className="xl:flex xl:flex-row xl:space-x-8 w-full flex justify-center pt-20 pb-14 md:pb-12 md:pt-20 xl:-mt-28 relative z-10">
        {/* sketsa logo */}
        <div className="absolute xl:static mt-24 md:mt-40 xl:mt-36 xl:-mr-12 w-48 h-32 md:w-[350px] md:h-[250px] xl:w-[320px] xl:h-[200px] bg-slate-300 rounded-lg shadow-lg opacity-70 transform rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-blue-400 blur-xl rounded-lg"></div>{" "}
          {/* Blue Blur */}
          <img
            src={slogo}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        {/* logo jadi */}
        <div className="relative xl:mt-20 xl:static w-48 h-32 md:w-[350px] md:h-[250px] xl:w-[320px] xl:h-[200px] bg-slate-300 rounded-lg shadow-lg transform rotate-[5deg] hover:rotate-0 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-xl">
          <div className="absolute inset-0 -z-10 bg-blue-400 opacity-60 blur-xl rounded-lg"></div>{" "}
          {/* Blue Blur */}
          <img
            src={logo}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Text dan Button Section */}
      <div className="md:text-left mt-20 md:mt-44 mx-2 md:mx-28 xl:mx-0 xl:-mt-1 xl:pl-16 text-[14px] md:text-xl xl:text-lg text-white relative z-10">
        <h2 className="text-3xl md:text-4xl xl:text-5xl xl:font-semibold transition-transform duration-500 hover:scale-105 hover:text-blue-400">
          Desain Logo
        </h2>
        <p className="text-gray-400 xl:text-white mt-4 xl:pt-4 xl:pb-3">
          Setiap logo kami desain secara kustom dan unik untuk mencerminkan
          karakter serta visi bisnis Anda, menciptakan kesan pertama yang tak
          terlupakan. Dapatkan logo yang mencerminkan nilai serta tujuan bisnis
          Anda hanya di Grafistix!
        </p>
        <div className="group mt-4">
          <a
            href="/pemesanan"
            className="inline-flex items-center justify-center px-6 py-2 bg-[#6eacda] text-black font-medium border border-gray-700 hover:bg-blue-700 rounded-lg transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
          >
            Pilih Desain
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;