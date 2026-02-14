import { AlertTriangle, BookOpen, CheckCircle, Library, Church, Target } from 'lucide-react';

import Link from 'next/link';

export default function ZakatPage() {
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
        <h1 className="text-3xl font-bold">Zakat</h1>
        <p className="text-emerald-100 mt-2">Panduan lengkap tentang zakat dalam Islam</p>
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
          <h1 className="text-4xl font-bold mb-4">Zakat</h1>
          <p className="text-xl text-emerald-100">Panduan lengkap tentang zakat dalam Islam</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pengertian */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Pengertian Zakat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zakat secara bahasa berarti tumbuh, berkembang, bersih, dan suci. Sedangkan secara istilah syariat, 
            zakat adalah mengeluarkan sebagian harta tertentu yang telah mencapai nisab dan haul kepada orang-orang 
            yang berhak menerimanya.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-gray-700">
              Zakat adalah salah satu rukun Islam yang wajib dilaksanakan dan memiliki peran penting dalam 
              mensucikan harta dan jiwa, serta membantu kaum dhuafa.
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
                وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَمَا تُقَدِّمُوا۟ لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ ٱللَّهِ
              </p>
              <p className="text-sm text-emerald-700 font-semibold mb-2">QS. Al-Baqarah (2): 110</p>
              <p className="text-gray-700 leading-relaxed">
                "Dan dirikanlah shalat dan tunaikanlah zakat. Dan segala kebaikan yang kamu kerjakan untuk dirimu, kamu akan mendapatkannya di sisi Allah."
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
                مَا نَقَصَ مَالُ عَبْدٍ مِنْ صَدَقَةٍ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Maa naqasha maalu 'abdin min shadaqah"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Harta seorang hamba tidak akan berkurang karena sedekah."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Muslim no. 2588 dan Tirmidzi no. 2029 (Shahih)
              </p>
            </div>
          </div>

          {/* Hadits 2 */}
          <div className="mb-6">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Hadits Shahih</span>
                <span className="text-sm text-gray-600">HR. Bukhari</span>
              </div>
              <p className="text-right text-xl leading-loose mb-4 font-arabic text-gray-800">
                مَنْ آتَاهُ اللَّهُ مَالًا فَلَمْ يُؤَدِّ زَكَاتَهُ مُثِّلَ لَهُ مَالُهُ يَوْمَ الْقِيَامَةِ شُجَاعًا أَقْرَعَ
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                "Man aataahullahu maalan falam yu'addi zakaatahu mutstsila lahu maaluhu yaumal qiyaamati syujaa'an aqra'a"
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Artinya:</strong> "Barangsiapa yang Allah berikan harta kepadanya namun ia tidak menunaikan zakatnya, maka pada hari kiamat hartanya akan diwujudkan menjadi ular berbisa yang melilit lehernya."
              </p>
              <p className="text-sm text-gray-600 mt-3">
                <Library className="w-4 h-4 text-emerald-600 inline" /> <strong>Sumber:</strong> HR. Bukhari no. 1403
              </p>
            </div>
          </div>
        </section>

        {/* Macam-macam Zakat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Macam-macam Zakat</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Zakat Fitrah</h3>
              <p className="text-gray-700 mb-2">
                Zakat yang wajib dikeluarkan oleh setiap Muslim pada bulan Ramadhan sebelum shalat Idul Fitri.
              </p>
              <div className="mt-3 space-y-2">
                <p className="text-gray-700"><strong>Waktu:</strong> Boleh dibayar sejak awal Ramadhan, paling lambat sebelum shalat Idul Fitri</p>
                <p className="text-gray-700"><strong>Besaran:</strong> 2,5 kg atau 3,5 liter makanan pokok (beras) per jiwa</p>
                <p className="text-gray-700"><strong>Boleh diganti:</strong> Dengan uang senilai harga beras tersebut</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Zakat Mal (Harta)</h3>
              <p className="text-gray-700 mb-2">
                Zakat yang dikeluarkan dari harta yang telah mencapai nisab dan haul (satu tahun).
              </p>
            </div>
          </div>
        </section>

        {/* Jenis Zakat Mal */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💎 Jenis-jenis Zakat Mal</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">1. Zakat Emas dan Perak</h3>
              <p className="text-gray-700 text-sm mb-1"><strong>Nisab Emas:</strong> 85 gram</p>
              <p className="text-gray-700 text-sm mb-1"><strong>Nisab Perak:</strong> 595 gram</p>
              <p className="text-gray-700 text-sm"><strong>Kadar Zakat:</strong> 2,5%</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">2. Zakat Uang dan Surat Berharga</h3>
              <p className="text-gray-700 text-sm mb-1"><strong>Nisab:</strong> Setara dengan harga 85 gram emas</p>
              <p className="text-gray-700 text-sm"><strong>Kadar Zakat:</strong> 2,5%</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">3. Zakat Perniagaan (Dagang)</h3>
              <p className="text-gray-700 text-sm mb-1"><strong>Nisab:</strong> Setara dengan harga 85 gram emas</p>
              <p className="text-gray-700 text-sm"><strong>Kadar Zakat:</strong> 2,5% dari modal + keuntungan</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">4. Zakat Pertanian</h3>
              <p className="text-gray-700 text-sm mb-1"><strong>Nisab:</strong> 653 kg (5 wasaq)</p>
              <p className="text-gray-700 text-sm mb-1"><strong>Kadar Zakat:</strong></p>
              <ul className="list-disc list-inside text-gray-700 text-sm ml-4">
                <li>10% jika diairi dengan air hujan/sungai (tanpa biaya)</li>
                <li>5% jika diairi dengan biaya (irigasi, pompa)</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">5. Zakat Hewan Ternak</h3>
              <p className="text-gray-700 text-sm mb-1">Unta, sapi, kambing/domba yang digembalakan</p>
              <p className="text-gray-700 text-sm"><strong>Nisab:</strong> Berbeda-beda tergantung jenis dan jumlah</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="text-lg font-bold text-gray-800">6. Zakat Rikaz (Harta Karun)</h3>
              <p className="text-gray-700 text-sm mb-1">Harta terpendam dari zaman dahulu</p>
              <p className="text-gray-700 text-sm"><strong>Kadar Zakat:</strong> 20% (tanpa nisab dan haul)</p>
            </div>
          </div>
        </section>

        {/* Syarat Wajib Zakat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-emerald-600" /> Syarat Wajib Zakat Mal</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li><strong>Islam</strong> - Beragama Islam</li>
            <li><strong>Merdeka</strong> - Bukan budak</li>
            <li><strong>Milik Penuh</strong> - Harta benar-benar milik sendiri</li>
            <li><strong>Mencapai Nisab</strong> - Harta telah mencapai batas minimum</li>
            <li><strong>Mencapai Haul</strong> - Harta telah dimiliki selama 1 tahun (kecuali zakat pertanian dan rikaz)</li>
            <li><strong>Bebas dari Hutang</strong> - Harta bersih setelah dikurangi hutang</li>
            <li><strong>Lebih dari Kebutuhan Pokok</strong> - Harta tersisa setelah kebutuhan dasar terpenuhi</li>
          </ol>
        </section>

        {/* Penerima Zakat */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">👥 8 Golongan Penerima Zakat (Asnaf)</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">1</span>
              <div>
                <h3 className="font-bold text-gray-800">Fakir</h3>
                <p className="text-gray-700 text-sm">Orang yang tidak memiliki harta dan tidak mampu bekerja</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">2</span>
              <div>
                <h3 className="font-bold text-gray-800">Miskin</h3>
                <p className="text-gray-700 text-sm">Orang yang memiliki harta namun tidak mencukupi kebutuhan</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">3</span>
              <div>
                <h3 className="font-bold text-gray-800">Amil</h3>
                <p className="text-gray-700 text-sm">Orang yang bertugas mengumpulkan dan mendistribusikan zakat</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">4</span>
              <div>
                <h3 className="font-bold text-gray-800">Muallaf</h3>
                <p className="text-gray-700 text-sm">Orang yang baru masuk Islam dan perlu dikuatkan imannya</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">5</span>
              <div>
                <h3 className="font-bold text-gray-800">Riqab (Budak)</h3>
                <p className="text-gray-700 text-sm">Budak yang ingin memerdekakan dirinya</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">6</span>
              <div>
                <h3 className="font-bold text-gray-800">Gharim</h3>
                <p className="text-gray-700 text-sm">Orang yang berhutang untuk kepentingan yang baik</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">7</span>
              <div>
                <h3 className="font-bold text-gray-800">Fisabilillah</h3>
                <p className="text-gray-700 text-sm">Orang yang berjuang di jalan Allah (dakwah, pendidikan, dll)</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded">
              <span className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full font-bold text-lg">8</span>
              <div>
                <h3 className="font-bold text-gray-800">Ibnu Sabil</h3>
                <p className="text-gray-700 text-sm">Musafir yang kehabisan bekal di perjalanan</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-emerald-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h3>
          <p className="text-gray-600 mb-4">
            Jika ada yang ingin ditanyakan seputar zakat, silakan hubungi ustadz kami
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
