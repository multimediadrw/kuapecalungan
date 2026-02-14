'use client';
import Link from 'next/link';
import { Droplet, Church, Moon, Coins, Landmark, Handshake, Lightbulb } from 'lucide-react';

const fiqihCategories = [
  {
    id: 1,
    title: 'Thaharoh (Bersuci)',
    slug: 'thaharoh',
    description: 'Pelajari tentang tata cara bersuci, wudhu, mandi wajib, dan tayammum',
    icon: <Droplet className="w-12 h-12 text-emerald-600" />,
  },
  {
    id: 2,
    title: 'Shalat',
    slug: 'shalat',
    description: 'Panduan lengkap tentang shalat lima waktu, shalat sunnah, dan tata caranya',
    icon: <Church className="w-12 h-12 text-emerald-600" />,
  },
  {
    id: 3,
    title: 'Puasa',
    slug: 'puasa',
    description: 'Ketentuan puasa Ramadhan, puasa sunnah, dan hal-hal yang membatalkan puasa',
    icon: <Moon className="w-12 h-12 text-emerald-600" />,
  },
  {
    id: 4,
    title: 'Zakat',
    slug: 'zakat',
    description: 'Penjelasan tentang zakat fitrah, zakat mal, dan tata cara penyalurannya',
    icon: <Coins className="w-12 h-12 text-emerald-600" />,
  },
  {
    id: 5,
    title: 'Haji & Umrah',
    slug: 'haji-umrah',
    description: 'Rukun dan syarat haji serta umrah, beserta tata cara pelaksanaannya',
    icon: <Landmark className="w-12 h-12 text-emerald-600" />,
  },
  {
    id: 6,
    title: 'Muamalah',
    slug: 'muamalah',
    description: 'Fiqih muamalah meliputi jual beli, hutang piutang, dan transaksi lainnya',
    icon: <Handshake className="w-12 h-12 text-emerald-600" />,
  },
];

export default function FiqihPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Materi Fiqih Dasar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelajari ilmu fiqih dasar yang penting untuk kehidupan sehari-hari sebagai seorang Muslim
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fiqihCategories.map((category) => (
            <Link
              key={category.id}
              href={`/fiqih/${category.slug}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-emerald-500"
            >
              <div className="mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {category.title}
              </h2>
              <p className="text-gray-600">
                {category.description}
              </p>
              <div className="mt-4 text-emerald-600 font-semibold flex items-center">
                Pelajari Lebih Lanjut
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-emerald-50 rounded-lg p-8 border border-emerald-200">
          <div className="flex items-start space-x-4">
            <Lightbulb className="w-10 h-10 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Butuh Penjelasan Lebih Detail?
              </h3>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan khusus atau membutuhkan penjelasan lebih detail tentang materi fiqih, 
                jangan ragu untuk menghubungi ustadz kami melalui halaman kontak.
              </p>
              <Link
                href="/kontak"
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
              >
                Hubungi Ustadz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
