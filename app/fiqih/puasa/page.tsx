import { AlertTriangle, BookOpen, CheckCircle, Library, Mosque, Target } from 'lucide-react';

import Link from 'next/link';

export default function PuasaPage() {
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
        <h1 className="text-3xl font-bold">Puasa</h1>
        <p className="text-emerald-100 mt-2">Panduan lengkap tentang puasa dalam Islam</p>
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
          <h1 className="text-4xl font-bold mb-4">Puasa</h1>
          <p className="text-xl text-emerald-100">Panduan lengkap tentang puasa dalam Islam</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌙 Pengertian Puasa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Puasa secara bahasa berarti menahan diri. Sedangkan secara istilah syariat, puasa adalah menahan diri 
            dari makan, minum, dan segala yang membatalkannya, mulai dari terbit fajar shadiq sampai terbenam matahari, 
            dengan niat karena Allah SWT.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              Puasa Ramadhan adalah salah satu rukun Islam yang wajib dilaksanakan oleh setiap Muslim yang telah memenuhi syarat.
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
                يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ
              </p>
              <p className="text-sm text-emerald-700 font-semibold mb-2">QS. Al-Baqarah (2): 183</p>
              <p className="text-gray-700 leading-relaxed">
                "Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa."
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
                مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Man shaama ramadhana imaanan wahtisaaban ghufira lahu maa taqaddama min dzanbihi"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Barangsiapa berpuasa Ramadhan karena iman dan mengharap pahala dari Allah, maka diampuni dosa-dosanya yang telah lalu."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Bukhari no. 38 dan Muslim no. 760
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
                إِذَا جَاءَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Idzaa jaa'a ramadhanu futtihat abwaabul jannati wa ghuliqat abwaabun naari wa shuffidatisy syayaathiin"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Apabila datang bulan Ramadhan, maka dibukakan pintu-pintu surga, ditutup pintu-pintu neraka, dan setan-setan dibelenggu."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Bukhari no. 1899 dan Muslim no. 1079
              </p>
            </div>
          </div>
        </section>

        {/* Syarat Wajib Puasa */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Syarat Wajib Puasa</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Islam</strong> - Beragama Islam</li>
            <li><strong>Baligh</strong> - Sudah dewasa</li>
            <li><strong>Berakal</strong> - Tidak gila</li>
            <li><strong>Mampu</strong> - Kuat untuk berpuasa</li>
            <li><strong>Mukim</strong> - Tidak sedang dalam perjalanan jauh</li>
            <li><strong>Suci dari haid dan nifas</strong> - Khusus bagi wanita</li>
          </ol>
        </section>

        {/* Rukun Puasa */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Target className="w-6 h-6 text-emerald-600" /> Rukun Puasa (2 Rukun)</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>Niat</strong>
              <p className="ml-6 mt-1 text-gray-600">
                Niat puasa Ramadhan dilakukan di malam hari sebelum terbit fajar. Niat cukup di dalam hati, 
                namun lebih baik diucapkan: <em>"Nawaitu shauma ghadin 'an ada'i fardhi syahri Ramadhaana 
                haadzihis sanati lillahi ta'ala"</em> (Saya niat puasa esok hari untuk menunaikan fardhu Ramadhan 
                tahun ini karena Allah Ta'ala).
              </p>
            </li>
            <li>
              <strong>Menahan diri dari hal-hal yang membatalkan puasa</strong>
              <p className="ml-6 mt-1 text-gray-600">
                Dari terbit fajar shadiq sampai terbenam matahari
              </p>
            </li>
          </ol>
        </section>

        {/* Hal yang Membatalkan Puasa */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-emerald-600" /> Hal yang Membatalkan Puasa</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">1. Makan dan Minum dengan Sengaja</h3>
              <p className="text-gray-700 text-sm">Memasukkan sesuatu ke dalam perut melalui mulut atau hidung</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">2. Muntah dengan Sengaja</h3>
              <p className="text-gray-700 text-sm">Jika tidak sengaja, puasa tidak batal</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">3. Haid dan Nifas</h3>
              <p className="text-gray-700 text-sm">Wanita yang haid atau nifas wajib membatalkan puasa dan mengqadha di hari lain</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">4. Jimak (Hubungan Suami Istri)</h3>
              <p className="text-gray-700 text-sm">Wajib qadha dan kafarat (membayar denda)</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">5. Keluar Mani karena Syahwat</h3>
              <p className="text-gray-700 text-sm">Dengan sengaja, seperti onani</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">6. Murtad (Keluar dari Islam)</h3>
              <p className="text-gray-700 text-sm">Semua ibadah menjadi batal</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800">7. Gila atau Pingsan</h3>
              <p className="text-gray-700 text-sm">Sepanjang hari dari fajar hingga maghrib</p>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-600" /> Hal yang Tidak Membatalkan Puasa</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Makan atau minum karena lupa</li>
              <li>Muntah tidak sengaja</li>
              <li>Mimpi basah</li>
              <li>Berbekam atau donor darah</li>
              <li>Mandi atau berenang (selama air tidak masuk ke perut)</li>
              <li>Mencicipi makanan tanpa ditelan</li>
              <li>Berkumur dan memasukkan air ke hidung saat wudhu (tidak berlebihan)</li>
              <li>Menelan ludah sendiri</li>
            </ul>
          </div>
        </section>

        {/* Fidyah dan Kafarat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Fidyah dan Kafarat</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fidyah</h3>
              <p className="text-gray-700 mb-2">
                Denda yang wajib dibayar oleh orang yang tidak mampu berpuasa karena alasan yang dibenarkan syariat 
                (sakit permanen, usia lanjut).
              </p>
              <p className="text-gray-700 font-semibold">
                Besaran: Memberi makan 1 orang miskin untuk setiap hari yang tidak dipuasa (sekitar 3,5 liter beras atau senilai uang)
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kafarat</h3>
              <p className="text-gray-700 mb-2">
                Denda yang wajib dibayar karena membatalkan puasa dengan jimak (hubungan suami istri).
              </p>
              <p className="text-gray-700 font-semibold mb-2">Urutan kafarat:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                <li>Memerdekakan budak (jika ada)</li>
                <li>Jika tidak mampu: Puasa 2 bulan berturut-turut</li>
                <li>Jika tidak mampu: Memberi makan 60 orang miskin</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Puasa Sunnah */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Puasa Sunnah</h2>
          
          <div className="space-y-3">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">1. Puasa Senin dan Kamis</h3>
              <p className="text-gray-700 text-sm">Setiap hari Senin dan Kamis</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">2. Puasa Ayyamul Bidh</h3>
              <p className="text-gray-700 text-sm">Tanggal 13, 14, 15 setiap bulan Hijriyah</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">3. Puasa 6 Hari di Bulan Syawal</h3>
              <p className="text-gray-700 text-sm">Setelah Idul Fitri, boleh berturut-turut atau terpisah</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">4. Puasa Hari Arafah</h3>
              <p className="text-gray-700 text-sm">Tanggal 9 Dzulhijjah (bagi yang tidak haji)</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">5. Puasa Asyura dan Tasu'a</h3>
              <p className="text-gray-700 text-sm">Tanggal 9 dan 10 Muharram</p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-bold text-gray-800">6. Puasa Bulan Sya'ban</h3>
              <p className="text-gray-700 text-sm">Terutama pertengahan bulan Sya'ban</p>
            </div>
          </div>

          <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-gray-800 mb-2">🚫 Hari yang Diharamkan Berpuasa</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
              <li>Hari Raya Idul Fitri (1 Syawal)</li>
              <li>Hari Raya Idul Adha (10 Dzulhijjah)</li>
              <li>Hari Tasyriq (11, 12, 13 Dzulhijjah)</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar puasa, silakan hubungi ustadz kami
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
