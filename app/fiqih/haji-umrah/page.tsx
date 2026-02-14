import { 1, 2, 3, 4, 5, 6, 7, 8, AlertTriangle, BookOpen, CheckCircle, Library, Mosque, Target } from 'lucide-react';

import Link from 'next/link';

export default function HajiUmrahPage() {
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
        <h1 className="text-3xl font-bold">Haji & Umrah</h1>
        <p className="text-emerald-100 mt-2">Panduan lengkap haji dan umrah</p>
      </div>

      <div className="hidden md:block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/fiqih" className="inline-flex items-center text-white mb-4 hover:text-emerald-100">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Fiqih
          </Link>
          <h1 className="text-4xl font-bold mb-4">Haji & Umrah</h1>
          <p className="text-xl text-emerald-100">Panduan lengkap tentang haji dan umrah</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian Haji */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🕋 Pengertian Haji</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Haji secara bahasa berarti menyengaja atau menuju. Sedangkan secara istilah syariat, haji adalah 
            menyengaja mengunjungi Ka'bah untuk melakukan ibadah tertentu pada waktu tertentu dengan syarat-syarat tertentu.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              Haji adalah rukun Islam kelima yang wajib dilaksanakan sekali seumur hidup bagi yang mampu.
            </p>
          </div>
        </section>

        {/* Dalil dan Hadits */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-emerald-600" /> Dalil Al-Qur'an dan Hadits</h2>
          
          {/* Ayat Al-Qur'an */}
          <div className="mb-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-lg mb-3">
              <p className="text-right text-2xl leading-loose mb-4 font-arabic text-gray-800">
                وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ مَنِ ٱسْتَطَاعَ إِلَيْهِ سَبِيلًا
              </p>
              <p className="text-sm text-emerald-700 font-semibold mb-2">QS. Ali Imran (3): 97</p>
              <p className="text-gray-700 leading-relaxed">
                "Dan (di antara) kewajiban manusia terhadap Allah adalah melaksanakan ibadah haji ke Baitullah, yaitu bagi orang-orang yang mampu mengadakan perjalanan ke sana."
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
                مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Man hajja lillahi falam yarfuts walam yafsuk raja'a kayaumi waladathu ummuhu"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Barangsiapa berhaji karena Allah, tidak berkata rafats (kotor) dan tidak berbuat fasik, maka ia kembali (bersih dari dosa) seperti hari dilahirkan ibunya."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Bukhari no. 1521 dan Muslim no. 1350
              </p>
            </div>
          </div>

          {/* Hadits 2 */}
          <div className="mb-6">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Hadits Shahih</span>
                <span className="text-sm text-gray-600">HR. Bukhari & Muslim</span>
              </div>
              <p className="text-right text-xl leading-loose mb-4 font-arabic text-gray-800">
                الْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Al-hajjul mabruuru laisa lahu jazaa'un illal jannah"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Haji mabrur tidak ada balasan baginya kecuali surga."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Bukhari no. 1773 dan Muslim no. 1349
              </p>
            </div>
          </div>
        </section>

        {/* Syarat Wajib Haji */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Syarat Wajib Haji</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Islam</strong></li>
            <li><strong>Baligh</strong> - Sudah dewasa</li>
            <li><strong>Berakal</strong> - Tidak gila</li>
            <li><strong>Merdeka</strong> - Bukan budak</li>
            <li><strong>Mampu (Istitha'ah)</strong> - Mampu secara fisik, finansial, dan keamanan perjalanan</li>
            <li><strong>Mahram bagi wanita</strong> - Didampingi suami atau mahram</li>
          </ol>
        </section>

        {/* Rukun Haji */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Target className="w-6 h-6 text-emerald-600" /> Rukun Haji (6 Rukun)</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li><strong>Ihram</strong> - Niat melakukan haji dan memakai pakaian ihram</li>
            <li><strong>Wukuf di Arafah</strong> - Berada di Arafah pada tanggal 9 Dzulhijjah</li>
            <li><strong>Thawaf Ifadhah</strong> - Mengelilingi Ka'bah 7 kali setelah wukuf</li>
            <li><strong>Sa'i</strong> - Berjalan antara Safa dan Marwah 7 kali</li>
            <li><strong>Tahalul</strong> - Mencukur atau memotong rambut</li>
            <li><strong>Tertib</strong> - Melakukan rukun secara berurutan</li>
          </ol>
        </section>

        {/* Wajib Haji */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-emerald-600" /> Wajib Haji</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Ihram dari miqat</strong> - Memulai ihram dari tempat yang ditentukan</li>
            <li><strong>Mabit (bermalam) di Muzdalifah</strong> - Setelah wukuf di Arafah</li>
            <li><strong>Mabit di Mina</strong> - Pada malam hari tasyriq (11, 12, 13 Dzulhijjah)</li>
            <li><strong>Melontar jumrah</strong> - Melempar kerikil ke tiga jumrah</li>
            <li><strong>Thawaf wada'</strong> - Thawaf perpisahan sebelum pulang</li>
          </ul>
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <strong>Catatan:</strong> Jika meninggalkan wajib haji, wajib membayar dam (denda berupa menyembelih kambing).
            </p>
          </div>
        </section>

        {/* Macam-macam Haji */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 Macam-macam Haji</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Haji Ifrad</h3>
              <p className="text-gray-700">Melakukan haji saja tanpa umrah. Ihram hanya untuk haji.</p>
            </div>

            <div className="bg-green-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Haji Qiran</h3>
              <p className="text-gray-700">Melakukan haji dan umrah sekaligus dengan satu ihram. Wajib menyembelih hewan kurban (dam).</p>
            </div>

            <div className="bg-purple-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Haji Tamattu'</h3>
              <p className="text-gray-700">Melakukan umrah terlebih dahulu, kemudian haji dengan ihram terpisah. Wajib menyembelih hewan kurban (dam).</p>
            </div>
          </div>
        </section>

        {/* Umrah */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Umrah</h2>
          <p className="text-gray-700 mb-4">
            Umrah adalah ibadah haji kecil yang dapat dilakukan kapan saja sepanjang tahun (kecuali pada hari-hari haji).
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rukun Umrah (4 Rukun)</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li><strong>Ihram</strong> - Niat umrah dan memakai pakaian ihram</li>
              <li><strong>Thawaf</strong> - Mengelilingi Ka'bah 7 kali</li>
              <li><strong>Sa'i</strong> - Berjalan antara Safa dan Marwah 7 kali</li>
              <li><strong>Tahalul</strong> - Mencukur atau memotong rambut</li>
            </ol>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              <strong>Keutamaan Umrah:</strong> Umrah di bulan Ramadhan pahalanya setara dengan haji bersama Rasulullah SAW.
            </p>
          </div>
        </section>

        {/* Larangan Ihram */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🚫 Larangan Selama Ihram</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Untuk Semua</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                <li>Memakai wewangian</li>
                <li>Memotong kuku</li>
                <li>Memotong rambut</li>
                <li>Berburu hewan darat</li>
                <li>Menikah atau menikahkan</li>
                <li>Jimak (hubungan suami istri)</li>
                <li>Berciuman dengan syahwat</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Khusus Laki-laki</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                <li>Memakai pakaian berjahit</li>
                <li>Menutup kepala</li>
              </ul>
              <h3 className="font-bold text-gray-800 mb-2 mt-4">Khusus Wanita</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                <li>Memakai cadar (penutup wajah)</li>
                <li>Memakai sarung tangan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar haji dan umrah, silakan hubungi ustadz kami
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
