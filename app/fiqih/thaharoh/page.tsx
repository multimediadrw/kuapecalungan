import Link from 'next/link';

export default function ThaharohPage() {
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
        <h1 className="text-3xl font-bold">Thaharoh (Bersuci)</h1>
        <p className="text-emerald-100 mt-2">Panduan lengkap tentang bersuci dalam Islam</p>
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
          <h1 className="text-4xl font-bold mb-4">Thaharoh (Bersuci)</h1>
          <p className="text-xl text-emerald-100">Panduan lengkap tentang bersuci dalam Islam</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💧 Pengertian Thaharoh</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thaharoh secara bahasa berarti bersih atau suci. Sedangkan secara istilah syariat, thaharoh adalah 
            membersihkan diri dari hadats (hadas) dan najis dengan cara yang telah ditentukan oleh syariat Islam.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              <strong>Hadats</strong> adalah keadaan tidak suci yang menghalangi seseorang untuk melakukan ibadah tertentu 
              seperti shalat, sedangkan <strong>najis</strong> adalah kotoran yang harus dihilangkan.
            </p>
          </div>
        </section>

        {/* Dalil dan Hadits */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Dalil Al-Qur'an dan Hadits</h2>
          
          {/* Ayat Al-Qur'an */}
          <div className="mb-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-lg mb-3">
              <p className="text-right text-2xl leading-loose mb-4 font-arabic text-gray-800">
                يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا قُمْتُمْ إِلَى ٱلصَّلَوٰةِ فَٱغْسِلُوا۟ وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى ٱلْمَرَافِقِ وَٱمْسَحُوا۟ بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى ٱلْكَعْبَيْنِ
              </p>
              <p className="text-sm text-emerald-700 font-semibold mb-2">QS. Al-Maidah (5): 6</p>
              <p className="text-gray-700 leading-relaxed">
                "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan shalat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan sapulah kepalamu dan (basuhlah) kedua kakimu sampai ke kedua mata kaki."
              </p>
            </div>
          </div>

          {/* Hadits 1 */}
          <div className="mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Hadits Shahih</span>
                <span className="text-sm text-gray-600">HR. Bukhari & Muslim</span>
              </div>
              <p className="text-right text-xl leading-loose mb-4 font-arabic text-gray-800">
                لَا يَقْبَلُ اللَّهُ صَلَاةَ أَحَدِكُمْ إِذَا أَحْدَثَ حَتَّى يَتَوَضَّأَ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Laa yaqbalullahu shalaata ahadikum idzaa ahdatsa hattaa yatawadha'a"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Allah tidak menerima shalat salah seorang di antara kalian yang berhadats (batal wudhu) hingga ia berwudhu."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                📚 <strong>Sumber:</strong> HR. Bukhari no. 135 dan Muslim no. 225
              </p>
            </div>
          </div>

          {/* Hadits 2 */}
          <div className="mb-6">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Hadits Shahih</span>
                <span className="text-sm text-gray-600">HR. Muslim</span>
              </div>
              <p className="text-right text-xl leading-loose mb-4 font-arabic text-gray-800">
                الطَّهُورُ شَطْرُ الْإِيمَانِ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Ath-thuhuru syathrul iimaan"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Bersuci adalah separuh dari iman."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                📚 <strong>Sumber:</strong> HR. Muslim no. 223
              </p>
            </div>
          </div>
        </section>

        {/* Macam-macam Hadats */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Macam-macam Hadats</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Hadats Kecil (Hadats Ashghar)</h3>
              <p className="text-gray-700 mb-2">Penyebab hadats kecil:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Keluar sesuatu dari dua jalan (qubul dan dubur)</li>
                <li>Hilang akal karena tidur, gila, atau pingsan</li>
                <li>Bersentuhan kulit antara laki-laki dan perempuan yang bukan mahram</li>
                <li>Menyentuh kemaluan dengan telapak tangan</li>
              </ul>
              <p className="text-gray-700 mt-2">
                <strong>Cara mensucikan:</strong> Berwudhu
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Hadats Besar (Hadats Akbar)</h3>
              <p className="text-gray-700 mb-2">Penyebab hadats besar:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Keluar mani karena syahwat (mimpi basah atau hubungan suami istri)</li>
                <li>Bersetubuh (jimak)</li>
                <li>Haid (bagi wanita)</li>
                <li>Nifas (darah setelah melahirkan)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                <strong>Cara mensucikan:</strong> Mandi wajib (janabah)
              </p>
            </div>
          </div>
        </section>

        {/* Wudhu */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚿 Wudhu</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Wudhu (6 Rukun)</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Niat</strong> - Di dalam hati saat membasuh wajah</li>
              <li><strong>Membasuh wajah</strong> - Dari tempat tumbuhnya rambut kepala hingga dagu, dari telinga ke telinga</li>
              <li><strong>Membasuh kedua tangan</strong> - Sampai siku</li>
              <li><strong>Mengusap sebagian kepala</strong> - Minimal sehelai rambut</li>
              <li><strong>Membasuh kedua kaki</strong> - Sampai mata kaki</li>
              <li><strong>Tertib</strong> - Berurutan sesuai urutan di atas</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Sunnah Wudhu</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Membaca basmalah di awal wudhu</li>
              <li>Membasuh kedua telapak tangan 3 kali</li>
              <li>Berkumur-kumur 3 kali</li>
              <li>Memasukkan air ke hidung (istinsyaq) 3 kali</li>
              <li>Mengusap seluruh kepala</li>
              <li>Mengusap kedua telinga</li>
              <li>Mendahulukan anggota yang kanan</li>
              <li>Membasuh setiap anggota 3 kali</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="text-lg font-bold text-gray-800 mb-2">⚠️ Hal yang Membatalkan Wudhu</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Keluar sesuatu dari qubul atau dubur (kencing, buang air besar, kentut)</li>
              <li>Hilang akal (tidur nyenyak, pingsan, mabuk, gila)</li>
              <li>Bersentuhan kulit dengan lawan jenis yang bukan mahram</li>
              <li>Menyentuh kemaluan dengan telapak tangan tanpa penghalang</li>
            </ul>
          </div>
        </section>

        {/* Mandi Wajib */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛁 Mandi Wajib (Janabah)</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Mandi Wajib (2 Rukun)</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Niat</strong> - Di dalam hati untuk menghilangkan hadats besar</li>
              <li><strong>Meratakan air ke seluruh tubuh</strong> - Termasuk rambut dan kulit</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Tata Cara Mandi Wajib yang Sempurna</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Niat di dalam hati</li>
              <li>Membaca basmalah</li>
              <li>Membasuh kedua telapak tangan 3 kali</li>
              <li>Membasuh kemaluan dan kotoran yang ada di badan</li>
              <li>Berwudhu seperti wudhu untuk shalat</li>
              <li>Menyiram kepala 3 kali sambil meratakan air ke seluruh rambut</li>
              <li>Menyiram seluruh badan, dimulai dari sisi kanan kemudian kiri</li>
              <li>Membasuh kedua kaki</li>
            </ol>
          </div>
        </section>

        {/* Tayammum */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🏜️ Tayammum</h2>
          
          <p className="text-gray-700 mb-4">
            Tayammum adalah bersuci menggunakan debu yang suci sebagai pengganti wudhu atau mandi wajib 
            ketika tidak ada air atau tidak mampu menggunakan air.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Syarat Boleh Tayammum</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Tidak ada air atau air tidak mencukupi</li>
              <li>Sakit yang akan bertambah parah jika menggunakan air</li>
              <li>Cuaca sangat dingin dan tidak ada alat pemanas air</li>
              <li>Air terlalu jauh dan dikhawatirkan ketinggalan shalat berjamaah</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Tayammum (5 Rukun)</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Niat</li>
              <li>Meletakkan kedua telapak tangan ke tanah/debu suci</li>
              <li>Mengusap wajah</li>
              <li>Mengusap kedua tangan sampai siku</li>
              <li>Tertib</li>
            </ol>
          </div>
        </section>

        {/* Najis */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧹 Najis dan Cara Mensucikannya</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Macam-macam Najis</h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-gray-800">1. Najis Berat (Mughalladzah)</p>
                  <p className="text-gray-700">Contoh: Najis anjing dan babi</p>
                  <p className="text-gray-700 text-sm">Cara mensucikan: Dibasuh 7 kali, salah satunya dengan tanah/debu</p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-gray-800">2. Najis Sedang (Mutawassithah)</p>
                  <p className="text-gray-700">Contoh: Kencing, kotoran manusia, darah, nanah</p>
                  <p className="text-gray-700 text-sm">Cara mensucikan: Dibasuh dengan air hingga hilang warna, bau, dan rasanya</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-gray-800">3. Najis Ringan (Mukhaffafah)</p>
                  <p className="text-gray-700">Contoh: Kencing bayi laki-laki yang belum makan selain ASI</p>
                  <p className="text-gray-700 text-sm">Cara mensucikan: Cukup diperciki air hingga basah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar thaharoh, silakan hubungi ustadz kami
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
