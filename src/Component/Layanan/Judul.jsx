import bg from "../../assets/bglayanan.png";
import pict from "../../assets/layanan.png";

const Judul = () => {
  return (
    <div
      className="py-10 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto text-center px-6 2xl:px-8 md:mt-6 2xl:mt-16 md:mx-5">
        <p className="text-4xl md:text-5xl 2xl:text-[65px] font-semibold tracking-tight">
          Layanan Grafistix
        </p>
        <p className="pt-4 2xl:pt-8 text-[15px] md:text-lg">
          Kami adalah pilihan tepat untuk Anda yang membutuhkan desain grafis
          profesional, kreatif, dan berkualitas.
        </p>
        <div className="pt-8 md:pt-12 2xl:pt-16 flex justify-center">
          <img className="" src={pict} alt="Layanan Grafistix" />
        </div>
      </div>
      <div className="mx-auto px-6 2xl:px-8 mt-8 md:pt-10 2xl:pt-12 text-[15px] text-white md:text-lg md:text-center md:mx-5">
        <p className="text-2xl md:text-4xl 2xl:text-[45px] font-medium tracking-tight">
          Selalu Siap Melayani Anda
        </p>
        <p className="pt-4 2xl:pt-7">
          Wujudkan ide-ide Anda menjadi kenyataan dengan sentuhan desain
          profesional, bekerja sama secara fleksibel dan mudah.
        </p>
        <div className="pt-4 2xl:pt-7">
          <button className="border border-gray-700 px-6 py-2 rounded-lg hover:bg-transparent hover:border-white transition text-align:center">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Judul;
