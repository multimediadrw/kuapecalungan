'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apakah layanan KUA Pecalungan gratis?',
      answer: 'Ya, semua layanan di KUA Pecalungan 100% GRATIS dan tidak dipungut biaya apapun. Ini sesuai dengan peraturan pemerintah bahwa layanan pencatatan nikah di KUA adalah gratis untuk seluruh warga negara Indonesia.',
    },
    {
      question: 'Apa saja layanan gratis yang tersedia?',
      answer: 'Layanan gratis meliputi: Pencatatan nikah, Konsultasi pernikahan, Bimbingan pra-nikah, Pengurusan buku nikah, dan Konsultasi fiqih dasar. Semua layanan ini tidak dipungut biaya sama sekali.',
    },
    {
      question: 'Apakah ada biaya tambahan atau tersembunyi?',
      answer: 'TIDAK ADA biaya tambahan, biaya tersembunyi, atau pungutan liar dalam bentuk apapun. Jika ada pihak yang meminta bayaran, segera laporkan kepada kami atau pihak berwenang.',
    },
    {
      question: 'Bagaimana cara mendaftar nikah?',
      answer: 'Anda dapat mendaftar dengan datang langsung ke kantor KUA Pecalungan atau menghubungi kami melalui WhatsApp. Bawa dokumen persyaratan yang diperlukan. Proses pendaftaran dan pencatatan nikah tetap GRATIS.',
    },
    {
      question: 'Apakah konsultasi dengan ustadz juga gratis?',
      answer: 'Ya, konsultasi dengan ustadz di KUA Pecalungan seputar fiqih, pernikahan, dan keagamaan lainnya adalah GRATIS. Anda dapat berkonsultasi langsung atau melalui form kontak di website ini.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Pertanyaan Umum (FAQ)</h2>
          <p className="text-sm text-gray-600">Informasi penting tentang layanan gratis kami</p>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-6 rounded-r-lg">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="font-bold text-emerald-800 mb-1">Layanan 100% GRATIS!</h3>
            <p className="text-sm text-emerald-700">
              Seluruh layanan di KUA Pecalungan tidak dipungut biaya apapun. Waspadai pungutan liar dan laporkan jika ada yang meminta bayaran.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-emerald-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 pt-0">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-600 mb-4">
          Masih ada pertanyaan? Hubungi kami secara langsung
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/6285117737315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:kuapecalungan15@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
