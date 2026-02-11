import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-emerald-600 font-bold text-4xl">K</span>
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
                <span className="text-3xl">📖</span>
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
                <span className="text-3xl">💬</span>
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
                <span className="text-3xl">📍</span>
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
                <span className="text-3xl">🕌</span>
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
  );
}
