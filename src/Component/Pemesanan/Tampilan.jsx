import { CheckIcon } from "@heroicons/react/20/solid";
import backgroundImage from '../../assets/bgpemesanan.png'; 
import icon from '../../assets/icon.png';
import { useState } from "react";

const packages = [
  {
    title: "Paket HEMAT",
    oldPrice: "350.000",
    newPrice: "120.000",
    description: (
      <span>
        Solusi praktis mulai bisnis kalau budget masih tipis. Pesan melalui 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com" className="font-bold text-blue-500" target="_blank" rel="noopener noreferrer"> refanjie02@gmail.com</a>
      </span>
    ),
    features: [
      "1 Pilihan Konsep Desain",
      "Proses Cepat 1-2 Hari",
      "Revisi Hingga 3x",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
      "Revisi Hingga 5x.",
      "2 Pilihan Konsep Desain." 
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com",
  },
  {
    title: "Paket CERMAT",
    oldPrice: "420.000",
    newPrice: "220.000",
    description: (
      <span>
        Bisa punya pilihan, meski modal masih pas-pasan. Pesan melalui 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com" className="font-bold text-blue-500" target="_blank" rel="noopener noreferrer"> refanjie02@gmail.com</a>
      </span>
    ),
    features: [
      "2 Pilihan Konsep Desain",
      "Proses Cepat 1-2 Hari",
      "Revisi Hingga 5x",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
      "Proses Instan 1-24 Jam.",
      "Bebas Revisi Sepuasnya.",
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com",
  },
  {
    title: "Paket KILAT",
    oldPrice: "620.000",
    newPrice: "300.000",
    description: (
      <span>
        Solusi andalan, desain berkesan secara instan. Pesan melalui 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com" className="font-bold text-blue-500" target="_blank" rel="noopener noreferrer"> refanjie02@gmail.com</a>
      </span>
    ),
    features: [
      "2 Pilihan Konsep Desain",
      "Proses Instan 1-24 Jam",
      "Prioritas Layanan",
      "Bebas Revisi Sepuasnya",
      "Sertifikat Kepemilikan Desain",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
    ],
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=refanjie02@gmail.com",
  },
];

const Tampilan = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  
  return (
    <div
      className="py-24 sm:py-32 text-white xl:mt-2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Pilihan Paket */}
      <div className="mx-auto px-5 md:px-10 xl:px-8 md:-mt-12 xl:-mt-10">
        <div className="mx-auto sm:text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white text-4xl xl:text-5xl">
            Harga Spesial
          </h2>
          <p className="text-center mt-6 text-lg text-gray-400 text-sm md:px-20">
            Dapatkan desain grafis profesional dengan harga terjangkau, revisi
            sepuasnya, dan hasil cepat untuk meningkatkan citra bisnis Anda!
          </p>
        </div>

        {/* Tiga Paket */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 mx-2 xl:mx-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-3xl bg-gradient-to-tr from-[#FFFFFF] from-60% via-[#BDE2FF] via-80% to-[#FFFFFF] to-90% text-gray-900 p-8 ring-1 ring-gray-200 xl:flex xl:flex-col xl:justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{pkg.title}</h3>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      {feature === "Bebas Revisi Sepuasnya." || feature === "Revisi Hingga 5x." || feature === "2 Pilihan Konsep Desain." || feature === "Proses Instan 1-24 Jam." || feature === "3 Pilihan Konsep Desain." ? (
                        <img src={icon} alt="Icon" className="h-6 w-6" /> 
                      ) : (
                        <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">{pkg.description}</p>
              </div>
              <div className="mt-8">
                <p className="text-sm line-through text-red-500">{pkg.oldPrice}</p>
                <p className="text-5xl font-bold text-gray-900">
                  {pkg.newPrice}
                </p>
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
                >
                  AMBIL PROMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-indigo-950 rounded-xl text-white mt-16 mx-6 mb-4 md:mx-10 md:-mb-8 md:mt-24 py-10 px-4 md:px-8 xl:mx-14 xl:px-12">
        <h2 className="text-center text-3xl font-bold mb-8">
            Jawaban dari semua pertanyaan
        </h2>
        <div className="mx-auto px-4">
          {/* FAQ 1 */}
          <div className="border-b border-gray-700">
              <button
                className="flex justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggle(1)}
              >
                <span>Layanan apa saja yang ditawarkan oleh Grafistix?</span>
                <span>{open === 1 ? "-" : "+"}</span>
              </button>
              {open === 1 && (
                <div className="pb-4 text-gray-400">
                  Grafistix menyediakan berbagai layanan desain grafis profesional,
                  termasuk desain logo, desain kustom, pembuatan konten Instagram,
                  dan desain merchandise. Kami fokus pada penyediaan visual kreatif
                  dan berkualitas tinggi yang sesuai dengan kebutuhan bisnis Anda.
                </div>
              )}
            </div>
            {/* FAQ 2 */}
            <div className="border-b border-gray-700">
              <button
                className="flex justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggle(2)}
              >
                <span>Bagaimana proses desain logo di Grafistix?</span>
                <span>{open === 2 ? "-" : "+"}</span>
              </button>
              {open === 2 && (
                <div className="pb-4 text-gray-400">
                  Proses desain logo kami dimulai dengan memahami visi dan
                  nilai-nilai merek Anda. Kami kemudian membuat desain kustom dan
                  unik yang mencerminkan identitas bisnis Anda. Setelah kami
                  menyajikan beberapa konsep, kami akan bekerja sama dengan Anda
                  untuk merevisi hingga desain akhir sesuai dengan harapan Anda.
                </div>
              )}
            </div>
            {/* FAQ 3 */}
            <div className="border-b border-gray-700">
              <button
                className="flex justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggle(3)}
              >
                <span>
                  Apakah saya bisa mendapatkan desain yang disesuaikan dengan
                  preferensi saya?
                </span>
                <span>{open === 3 ? "-" : "+"}</span>
              </button>
              {open === 3 && (
                <div className="pb-4 text-gray-400">
                  Tentu saja! Grafistix menawarkan layanan desain kustom di mana
                  kami bekerja sama dengan Anda untuk mewujudkan ide-ide Anda. Baik
                  untuk materi promosi, konten media sosial, atau kemasan produk,
                  kami akan menyesuaikan desain dengan spesifikasi dan gaya merek
                  Anda.
                </div>
              )}
            </div>
            {/* FAQ 4 */}
            <div className="border-b border-gray-700">
              <button
                className="flex justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggle(4)}
              >
                <span>Apakah Grafistix juga mendesain konten Instagram?</span>
                <span>{open === 4 ? "-" : "+"}</span>
              </button>
              {open === 4 && (
                <div className="pb-4 text-gray-400">
                  Benar! Kami
                  membuat konten Instagram yang menarik dan visual yang estetis,
                  termasuk postingan, cerita, dan highlights. Desain kami dirancang
                  untuk membantu Anda terhubung dengan audiens dan memperkuat brand
                  Anda di media sosial.
                </div>
              )}
            </div>
            {/* FAQ 5 */}
            <div className="border-b border-gray-700">
              <button
                className="flex justify-between w-full py-4 text-left focus:outline-none"
                onClick={() => toggle(5)}
              >
                <span>
                  Berapa lama waktu yang dibutuhkan untuk menerima desain saya?
                </span>
                <span>{open === 5 ? "-" : "+"}</span>
              </button>
              {open === 5 && (
                <div className="pb-4 text-gray-400">
                  Waktu pengerjaan tergantung pada tingkat kompleksitas proyek.
                  Untuk desain logo standar, prosesnya biasanya memakan waktu
                  sekitar 5-7 hari kerja. Untuk desain custom, konten media sosial,
                  atau merchandise, kami akan memberikan perkiraan waktu yang lebih
                  akurat setelah mendiskusikan detail proyek dengan Anda.
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tampilan;
