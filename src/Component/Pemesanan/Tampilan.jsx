import { CheckIcon } from "@heroicons/react/20/solid";
import backgroundImage from '../../assets/bgpemesanan.png'; 
import { useState } from "react";

const packages = [
  {
    title: "Paket HEMAT",
    oldPrice: "350.000",
    newPrice: "120.000",
    description: "Solusi praktis mulai bisnis kalau budget masih tipis.",
    features: [
      "1 Pilihan Konsep Desain",
      "Proses Cepat 1-2 Hari",
      "Bisa Revisi Hingga 3x",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
    ],
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
  },
  {
    title: "Paket CERMAT",
    oldPrice: "420.000",
    newPrice: "220.000",
    description: "Bisa punya pilihan, meski modal masih pas-pasan.",
    features: [
      "2 Pilihan Konsep Desain",
      "Proses Cepat 1-2 Hari",
      "Bebas Revisi Sepuasnya",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
    ],
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
  },
  {
    title: "Paket KILAT",
    oldPrice: "620.000",
    newPrice: "300.000",
    description: "Solusi andalan, desain berkesan secara instan.",
    features: [
      "2 Pilihan Konsep Desain",
      "Proses Instan 1-24 Jam",
      "Bebas Revisi Sepuasnya",
      "File HD (JPG | PNG | PDF)",
      "File Master EPS (CDR/AI)",
    ],
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:-mt-12 lg:-mt-10">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Harga Spesial
          </h2>
          <p className="text-center mt-6 text-lg leading-8 text-gray-400">
            Dapatkan desain grafis profesional dengan harga terjangkau, revisi
            sepuasnya, dan hasil cepat untuk meningkatkan citra bisnis Anda!
          </p>
        </div>

        {/* Tiga Paket */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-3xl bg-gradient-to-tr from-[#FFFFFF] from-60% via-[#BDE2FF] via-80% to-[#FFFFFF] to-90% text-gray-900 p-8 ring-1 ring-gray-200 lg:flex lg:flex-col lg:justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{pkg.title}</h3>
                <ul className="mt-6 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
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
                  className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  AMBIL PROMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
    <div className="bg-indigo-950 rounded-xl text-white mt-16 mx-5 mb-4 md:mx-20 md:-mb-8 md:mt-24 py-10 px-4 md:px-8 lg:px-20">
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
              Astro is a lightweight, fast, and highly flexible front-end
              framework that allows you to build static sites with ease. It is
              optimized for performance and developer experience.Benar! Kami
              membuat konten Instagram yang menarik dan visual yang estetis,
              termasuk postingan, cerita, dan highlights. Desain kami dirancang
              untuk meningkatkan kehadiran media sosial Anda dan menarik lebih
              banyak pengikut dengan tetap menjaga gaya merek yang konsisten dan
              kreatif.
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
    </div>
  );
};

export default Tampilan;
