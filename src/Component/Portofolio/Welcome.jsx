import bgwelcome from "../../assets/bgwelcome.png";

const Welcome = () => {
  return (
    <div
      className="items-center justify-center px-8 py-20 lg:py-24"
      style={{
        backgroundImage: `url(${bgwelcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h1 className="font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-8 text-white">
          Portofolio Kami
        </h1>
        <p className="text-lg lg:text-xl mb-5 lg:mb-8 text-slate-300">
          Jelajahi karya terbaik kami dalam desain logo, banner, merchandise,
          dan banyak lagi.
        </p>
      </div>
    </div>
  );
};

export default Welcome;