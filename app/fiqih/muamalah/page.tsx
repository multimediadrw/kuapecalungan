import Link from 'next/link';

export default function MuamalahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile & Desktop Header */}
      <div className="md:hidden bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-6">
        <Link href="/fiqih" className="inline-flex items-center text-white mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>
        <h1 className="text-3xl font-bold">Muamalah</h1>
        <p className="text-emerald-100 mt-2">Panduan fiqih muamalah dalam Islam</p>
      </div>

      <div className="hidden md:block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/fiqih" className="inline-flex items-center text-white mb-4 hover:text-emerald-100">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Fiqih
          </Link>
          <h1 className="text-4xl font-bold mb-4">Muamalah</h1>
          <p className="text-xl text-emerald-100">Panduan fiqih muamalah dalam Islam</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🤝 Pengertian Muamalah</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Muamalah adalah aturan-aturan Allah SWT yang mengatur hubungan antar manusia dalam urusan duniawi, 
            seperti jual beli, hutang piutang, sewa menyewa, dan transaksi ekonomi lainnya.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              Prinsip dasar muamalah adalah <strong>saling ridha (rela)</strong>, <strong>tidak ada unsur penipuan</strong>, 
              dan <strong>tidak merugikan salah satu pihak</strong>.
            </p>
          </div>
        </section>

        {/* Jual Beli */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Jual Beli (Ba'i)</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Jual Beli</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Penjual dan Pembeli</strong> - Berakal dan baligh</li>
              <li><strong>Barang yang diperjualbelikan</strong> - Halal, bermanfaat, dan jelas</li>
              <li><strong>Harga</strong> - Jelas dan disepakati</li>
              <li><strong>Ijab Qabul</strong> - Pernyataan jual beli dari kedua belah pihak</li>
            </ol>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Syarat Sah Jual Beli</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Kedua belah pihak ridha (rela)</li>
              <li>Barang dan harga jelas</li>
              <li>Barang dapat diserahkan</li>
              <li>Barang milik penjual atau diberi kuasa</li>
              <li>Barang halal dan bermanfaat</li>
              <li>Tidak ada unsur penipuan (gharar)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">🚫 Jual Beli yang Diharamkan</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Jual beli barang haram (khamr, babi, narkoba)</li>
              <li>Jual beli yang mengandung riba</li>
              <li>Jual beli yang mengandung gharar (ketidakjelasan)</li>
              <li>Jual beli dengan penipuan</li>
              <li>Jual beli barang curian</li>
              <li>Jual beli najsy (pura-pura menawar tinggi)</li>
            </ul>
          </div>
        </section>

        {/* Riba */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Riba</h2>
          <p className="text-gray-700 mb-4">
            Riba adalah pengambilan tambahan dari harta pokok atau modal secara batil. Riba adalah dosa besar 
            yang sangat diharamkan dalam Islam.
          </p>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Macam-macam Riba</h3>
              <div className="space-y-3 mt-3">
                <div>
                  <h4 className="font-bold text-gray-800">1. Riba Fadhl</h4>
                  <p className="text-gray-700 text-sm">Menukar barang sejenis dengan kadar berbeda. Contoh: menukar 1 kg emas dengan 1,2 kg emas.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">2. Riba Nasi'ah</h4>
                  <p className="text-gray-700 text-sm">Penundaan penyerahan barang sejenis dengan tambahan. Contoh: hutang 1 juta, bayar 1,2 juta.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">3. Riba Qardh</h4>
                  <p className="text-gray-700 text-sm">Hutang yang ditarik manfaat oleh pemberi hutang.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hutang Piutang */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💳 Hutang Piutang (Qardh)</h2>
          <p className="text-gray-700 mb-4">
            Qardh adalah memberikan harta kepada orang lain untuk dimanfaatkan dan dikembalikan dengan yang serupa.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Hukum Hutang Piutang</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Bagi pemberi hutang:</strong> Sunnah (dianjurkan) untuk menolong</li>
              <li><strong>Bagi penerima hutang:</strong> Mubah (boleh) jika benar-benar membutuhkan</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">📝 Adab Hutang Piutang</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Ditulis dan disaksikan</li>
              <li>Niat baik untuk mengembalikan</li>
              <li>Mengembalikan tepat waktu</li>
              <li>Pemberi hutang tidak boleh meminta tambahan</li>
              <li>Jika mampu, lebihkan sedikit saat mengembalikan (tanpa diperjanjikan)</li>
            </ul>
          </div>
        </section>

        {/* Sewa Menyewa */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏠 Sewa Menyewa (Ijarah)</h2>
          <p className="text-gray-700 mb-4">
            Ijarah adalah akad pemindahan hak guna atas barang atau jasa dalam waktu tertentu dengan pembayaran upah sewa.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Ijarah</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Penyewa dan yang menyewakan</li>
              <li>Barang atau jasa yang disewakan</li>
              <li>Upah sewa</li>
              <li>Ijab qabul</li>
            </ol>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Syarat Sah Ijarah</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Kedua belah pihak ridha</li>
              <li>Barang/jasa yang disewakan jelas dan bermanfaat</li>
              <li>Upah sewa jelas dan disepakati</li>
              <li>Waktu sewa ditentukan</li>
              <li>Barang bukan barang yang cepat rusak (makanan, dll)</li>
            </ul>
          </div>
        </section>

        {/* Syirkah */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🤝 Kerjasama (Syirkah)</h2>
          <p className="text-gray-700 mb-4">
            Syirkah adalah akad kerjasama antara dua orang atau lebih dalam suatu usaha dengan kesepakatan pembagian keuntungan.
          </p>

          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-800">1. Syirkah 'Inan</h3>
              <p className="text-gray-700 text-sm">Kerjasama dengan modal dari semua pihak</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-800">2. Syirkah Mudharabah</h3>
              <p className="text-gray-700 text-sm">Kerjasama antara pemilik modal dengan pengelola</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-800">3. Syirkah Wujuh</h3>
              <p className="text-gray-700 text-sm">Kerjasama tanpa modal, berdasarkan kepercayaan</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-800">4. Syirkah Abdan</h3>
              <p className="text-gray-700 text-sm">Kerjasama dalam pekerjaan/jasa</p>
            </div>
          </div>
        </section>

        {/* Prinsip Ekonomi Islam */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ Prinsip Ekonomi Islam</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded">
              <h3 className="font-bold text-gray-800 mb-2">✅ Yang Dianjurkan</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                <li>Jujur dalam transaksi</li>
                <li>Adil dalam timbangan</li>
                <li>Menepati janji</li>
                <li>Tolong-menolong</li>
                <li>Mencari rezeki halal</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <h3 className="font-bold text-gray-800 mb-2">❌ Yang Dilarang</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                <li>Riba</li>
                <li>Gharar (ketidakjelasan)</li>
                <li>Maysir (judi)</li>
                <li>Penipuan</li>
                <li>Monopoli yang merugikan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar muamalah, silakan hubungi ustadz kami
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Tanya Ustadz
          </Link>
        </div>
      </div>
    </div>
  );
}
