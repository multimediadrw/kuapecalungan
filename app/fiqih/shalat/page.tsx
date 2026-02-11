import Link from 'next/link';

export default function ShalatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-6">
        <Link href="/fiqih" className="inline-flex items-center text-white mb-4">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>
        <h1 className="text-3xl font-bold">Shalat</h1>
        <p className="text-emerald-100 mt-2">Panduan lengkap tentang shalat dalam Islam</p>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/fiqih" className="inline-flex items-center text-white mb-4 hover:text-emerald-100">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Fiqih
          </Link>
          <h1 className="text-4xl font-bold mb-4">Shalat</h1>
          <p className="text-xl text-emerald-100">Panduan lengkap tentang shalat dalam Islam</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🕌 Pengertian Shalat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shalat secara bahasa berarti doa. Sedangkan secara istilah syariat, shalat adalah ibadah yang 
            tersusun dari beberapa perkataan dan perbuatan yang dimulai dengan takbir dan diakhiri dengan salam, 
            dengan syarat-syarat tertentu.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              Shalat adalah tiang agama dan merupakan ibadah pertama yang akan dihisab pada hari kiamat.
            </p>
          </div>
        </section>

        {/* Syarat Wajib Shalat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Syarat Wajib Shalat</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Islam</strong> - Beragama Islam</li>
            <li><strong>Baligh</strong> - Sudah dewasa (mimpi basah bagi laki-laki, haid bagi perempuan)</li>
            <li><strong>Berakal</strong> - Tidak gila</li>
            <li><strong>Suci dari haid dan nifas</strong> - Khusus bagi wanita</li>
            <li><strong>Sudah sampai dakwah</strong> - Sudah mengetahui kewajiban shalat</li>
          </ol>
        </section>

        {/* Syarat Sah Shalat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Syarat Sah Shalat (9 Syarat)</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Suci dari hadats kecil dan besar</strong> - Sudah berwudhu atau mandi wajib</li>
            <li><strong>Suci badan dari najis</strong></li>
            <li><strong>Suci pakaian dari najis</strong></li>
            <li><strong>Suci tempat shalat dari najis</strong></li>
            <li><strong>Menutup aurat</strong> - Laki-laki: pusar sampai lutut, Wanita: seluruh tubuh kecuali wajah dan telapak tangan</li>
            <li><strong>Sudah masuk waktu shalat</strong></li>
            <li><strong>Menghadap kiblat</strong> - Ke arah Ka'bah</li>
            <li><strong>Mengetahui mana yang fardhu dan sunnah</strong></li>
            <li><strong>Tidak melakukan hal yang membatalkan shalat</strong></li>
          </ol>
        </section>

        {/* Rukun Shalat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Rukun Shalat (13 Rukun)</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li><strong>Niat</strong> - Di dalam hati sesuai shalat yang dikerjakan</li>
            <li><strong>Berdiri bagi yang mampu</strong> - Dalam shalat fardhu</li>
            <li><strong>Takbiratul ihram</strong> - Mengucapkan "Allahu Akbar" di awal shalat</li>
            <li><strong>Membaca surat Al-Fatihah</strong> - Di setiap rakaat</li>
            <li><strong>Ruku' dengan tuma'ninah</strong> - Membungkuk dengan tenang</li>
            <li><strong>I'tidal dengan tuma'ninah</strong> - Berdiri tegak setelah ruku'</li>
            <li><strong>Sujud dua kali dengan tuma'ninah</strong> - Menyentuhkan 7 anggota tubuh ke lantai</li>
            <li><strong>Duduk di antara dua sujud dengan tuma'ninah</strong></li>
            <li><strong>Duduk tasyahud akhir</strong></li>
            <li><strong>Membaca tasyahud akhir</strong></li>
            <li><strong>Membaca shalawat kepada Nabi Muhammad SAW</strong> - Dalam tasyahud akhir</li>
            <li><strong>Salam yang pertama</strong> - Mengucapkan "Assalamu'alaikum warahmatullah"</li>
            <li><strong>Tertib</strong> - Melakukan rukun secara berurutan</li>
          </ol>
        </section>

        {/* Waktu Shalat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⏰ Waktu Shalat Lima Waktu</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">1. Subuh (2 rakaat)</h3>
              <p className="text-gray-700">Dari terbit fajar shadiq sampai terbit matahari</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">2. Dhuhur (4 rakaat)</h3>
              <p className="text-gray-700">Dari tergelincir matahari (setelah zenith) sampai bayangan sama panjang dengan bendanya</p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">3. Ashar (4 rakaat)</h3>
              <p className="text-gray-700">Dari bayangan lebih panjang dari bendanya sampai matahari terbenam</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">4. Maghrib (3 rakaat)</h3>
              <p className="text-gray-700">Dari terbenam matahari sampai hilang mega merah</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">5. Isya (4 rakaat)</h3>
              <p className="text-gray-700">Dari hilang mega merah sampai terbit fajar shadiq</p>
            </div>
          </div>
        </section>

        {/* Hal yang Membatalkan Shalat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Hal yang Membatalkan Shalat</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Berbicara dengan sengaja (selain bacaan shalat)</li>
            <li>Bergerak banyak yang tidak ada hubungannya dengan shalat</li>
            <li>Makan dan minum dengan sengaja</li>
            <li>Terbuka aurat</li>
            <li>Berpaling dari arah kiblat</li>
            <li>Meninggalkan salah satu rukun atau syarat shalat dengan sengaja</li>
            <li>Tertawa terbahak-bahak</li>
            <li>Hadats (batal wudhu)</li>
            <li>Terkena najis yang tidak dimaafkan</li>
            <li>Niat membatalkan shalat</li>
          </ul>
        </section>

        {/* Shalat Sunnah */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Shalat Sunnah</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shalat Sunnah Rawatib</h3>
              <p className="text-gray-700 mb-2">Shalat sunnah yang dikerjakan sebelum atau sesudah shalat fardhu:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>2 rakaat sebelum Subuh</li>
                <li>4 rakaat sebelum Dhuhur dan 2 rakaat sesudahnya</li>
                <li>2 rakaat sesudah Maghrib</li>
                <li>2 rakaat sesudah Isya</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shalat Sunnah Lainnya</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><strong>Shalat Dhuha</strong> - 2-12 rakaat, waktu pagi hari</li>
                <li><strong>Shalat Tahajud</strong> - Minimal 2 rakaat, di sepertiga malam terakhir</li>
                <li><strong>Shalat Witir</strong> - Minimal 1 rakaat, setelah Isya</li>
                <li><strong>Shalat Tarawih</strong> - 20 rakaat, di bulan Ramadhan</li>
                <li><strong>Shalat Istikharah</strong> - 2 rakaat, untuk meminta petunjuk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar shalat, silakan hubungi ustadz kami
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
