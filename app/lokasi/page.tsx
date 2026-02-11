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
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d109.71234567890123!3d-6.912345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7024e123456789%3A0x123456789abcdef0!2sKUA%20Pecalungan!5e0!3m2!1sid!2sid!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="p-4 bg-gray-50 border-t">
              <a
                href="https://maps.app.goo.gl/gMUcFLTf6WBGyXbm9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center"
              >
                📍 Buka di Google Maps
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                  Jl. Raya Pecalungan No. 123<br />
                  Pecalungan, Batang<br />
                  Jawa Tengah 51281
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
              href="mailto:kuapecalungan15@gmail.com"
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
