import Link from 'next/link';
import Image from 'next/image';
import MobileHeader from './components/MobileHeader';
import FAQ from './components/FAQ';

export default function Home() {
  const menuItems = [
    {
      title: 'Materi Fiqih',
      description: 'Pelajari fiqih dasar',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/fiqih',
    },
    {
      title: 'Tanya Ustadz',
      description: 'Konsultasi gratis',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/kontak',
    },
    {
      title: 'Lokasi KUA',
      description: 'Temukan lokasi kami',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/lokasi',
    },
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden min-h-screen bg-gray-50">
        <MobileHeader />
        
        {/* Menu Cards */}
        <div className="px-4 -mt-4">
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="px-4 mt-6 space-y-4 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Informasi Penting</h2>
            <Link href="/fiqih" className="text-emerald-600 text-sm font-semibold flex items-center">
              Lihat Semua
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="flex space-x-3 overflow-x-auto pb-2">
            <div className="flex-shrink-0 w-64 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Jadwal Shalat</h3>
              <p className="text-emerald-100 text-sm mb-4">Lihat jadwal shalat hari ini</p>
              <Link href="/fiqih" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                Lihat Jadwal
              </Link>
            </div>

            <div className="flex-shrink-0 w-64 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Layanan Nikah</h3>
              <p className="text-emerald-100 text-sm mb-4">Informasi pendaftaran nikah</p>
              <Link href="/kontak" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-bold text-gray-800 mb-3">Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/fiqih" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Fiqih</span>
              </Link>
              <Link href="/kontak" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Tanya Jawab</span>
              </Link>
              <Link href="/lokasi" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Lokasi</span>
              </Link>
              <Link href="/kontak" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Hubungi</span>
              </Link>
            </div>
          </div>

          {/* FAQ Section - Mobile */}
          <div className="px-4 mt-6 pb-20">
            <FAQ />
          </div>
        </div>
      </div>

      {/* Desktop View - Keep Original Design */}
      <div className="hidden md:block min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg p-4">
                <Image
                  src="/logo-kemenag.png"
                  alt="Logo Kementerian Agama"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Selamat Datang di KUA Pecalungan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-50">
              Tanya Jawab Fiqih Dasar & Layanan Keagamaan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fiqih"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Pelajari Fiqih
              </Link>
              <Link
                href="/kontak"
                className="bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors shadow-lg"
              >
                Tanya Ustadz
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <Link href="/fiqih" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Materi Fiqih
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Pelajari fiqih dasar mulai dari thaharoh, shalat, puasa, dan lainnya
                </p>
              </Link>

              {/* Card 2 */}
              <Link href="/kontak" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Tanya Jawab
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Ajukan pertanyaan seputar fiqih kepada ustadz kami
                </p>
              </Link>

              {/* Card 3 */}
              <Link href="/lokasi" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Lokasi KUA
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Temukan lokasi kantor kami dan jam operasional
                </p>
              </Link>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Layanan Nikah
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Informasi dan pendaftaran layanan pernikahan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Desktop */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Punya Pertanyaan Seputar Fiqih?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Jangan ragu untuk bertanya kepada ustadz kami. Kami siap membantu menjawab pertanyaan Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Ajukan Pertanyaan
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
