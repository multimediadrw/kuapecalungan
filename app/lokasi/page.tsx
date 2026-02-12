export default function LokasiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Lokasi KUA Pecalungan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan lokasi kantor kami dan informasi jam operasional
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 relative">
          <div className="aspect-video bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8758428!2d109.8561624!3d-7.0379214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70160603d717cb%3A0x8612336c78ef32f8!2sKantor%20Urusan%20Agama%20(KUA)%20Pecalungan!5e0!3m2!1sid!2sid!4v1739342400000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Floating Button */}
            <div className="absolute top-4 right-4 z-10">
              <a
                href="https://maps.app.goo.gl/gMUcFLTf6WBGyXbm9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-emerald-600 font-semibold px-4 py-2.5 rounded-lg shadow-lg inline-flex items-center gap-2 transition-all hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="hidden sm:inline">Buka di Google Maps</span>
                <span className="sm:hidden">Maps</span>
              </a>
            </div>
          </div>
          {/* Bottom Info Bar */}
          <div className="bg-emerald-50 px-4 py-3 border-t border-emerald-100">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Jl. Sideleg Kidul Selokarto, Bojosari, Pecalungan, Batang</span>
              </div>
              <a
                href="https://maps.app.goo.gl/gMUcFLTf6WBGyXbm9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
              >
                Lihat rute
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-4xl">📍</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Alamat</h2>
                <p className="text-gray-600">
                  XV65+RFH, Jl. Sideleg Kidul Selokarto, Bojosari<br/>
                  Kec. Pecalungan, Kabupaten Batang<br/>
                  Jawa Tengah 51262, Indonesia
                </p>
              </div>
            </div>


          </div>

          {/* Operating Hours Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-4xl">🕐</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Jam Pelayanan</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Senin</span>
                <span className="text-gray-600">08:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Selasa</span>
                <span className="text-gray-600">08:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Rabu</span>
                <span className="text-gray-600">08:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Kamis</span>
                <span className="text-gray-600">08:00 - 15:00 WIB</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Jumat</span>
                <span className="text-gray-600">08:00 - 11:00 WIB</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold text-gray-800">Sabtu</span>
                <span className="text-red-600 font-semibold">Tutup</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-800">Minggu</span>
                <span className="text-red-600 font-semibold">Tutup</span>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <p className="text-sm text-gray-700">
                <strong>Catatan:</strong> Pada hari libur nasional dan cuti bersama, kantor tutup.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-emerald-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Butuh Bantuan?</h3>
          <p className="mb-6 text-emerald-50">
            Hubungi kami melalui telepon atau WhatsApp untuk informasi lebih lanjut
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kua.pecalungan@kemenag.go.id"
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
            >
              📧 Email Kami
            </a>
            <a
              href="https://wa.me/6285117737315"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors inline-flex items-center justify-center"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
