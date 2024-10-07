import { CheckIcon } from "@heroicons/react/20/solid";

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
    link: "https://wa.me/6283112080715",
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
    link: "https://wa.me/6283112080715",
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
    link: "https://wa.me/6283112080715",
  },
  
];

const Tampilan = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0F172A] from-60% via-[#18334F] via-80% to-[#0F172A] to-90% py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:-mt-12 lg:-mt-10">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Harga Spesial
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Dapatkan desain grafis profesional dengan harga terjangkau, revisi
            sepuasnya, dan hasil cepat untuk meningkatkan citra bisnis Anda!
          </p>
        </div>

        {/* Tiga Paket */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.title} className="rounded-3xl bg-gradient-to-tr from-[#FFFFFF] from-60% via-[#BDE2FF] via-80% to-[#FFFFFF] to-90% text-gray-900 p-8 ring-1 ring-gray-200 lg:flex lg:flex-col lg:justify-between">
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
                  className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  AMBIL PROMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tampilan;
