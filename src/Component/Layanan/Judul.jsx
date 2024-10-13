import bg from "../../assets/bglayanan-.png";
import pict from "../../assets/Layanan.png";

const Judul = () => {

  return (
    <div
      className="mt-6 md:mt-4 xl:mt-2 py-10 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto text-center px-6 xl:px-8 md:mt-6 xl:pt-6 md:mx-5">
        <p className="text-4xl md:text-5xl xl:text-[65px] font-semibold tracking-tight">
          Layanan Grafistix
        </p>
        <p className="pt-4 xl:pt-7 text-[15px] md:text-lg">
          Kami adalah pilihan tepat untuk Anda yang membutuhkan desain grafis
          profesional, kreatif, dan berkualitas.
        </p>
        <div className="pt-8 md:pt-12 xl:pt-14 flex justify-center">
          <img className="" src={pict} alt="Layanan Grafistix" />
        </div>
      </div>
      <div className="mx-auto px-6 xl:px-8 mt-8 md:pt-10 xl:pt-9 text-[15px] text-white md:text-lg md:text-center md:mx-5">
        <p className="text-xl md:text-4xl xl:text-[45px] font-medium tracking-tight">
          Selalu Siap Melayani Anda
        </p>
        <p className="pt-4 xl:pt-7">
          Wujudkan ide-ide Anda menjadi kenyataan dengan sentuhan desain
          profesional, bekerja sama secara fleksibel dan mudah.
        </p>
      </div>
    </div>
  );
};

export default Judul;