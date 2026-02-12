'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TanyaFiqihForm() {
  const [formData, setFormData] = useState({
    nama: '',
    noWhatsApp: '',
    pertanyaan: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `Assalamualaikum, saya ingin bertanya:

*Nama:* ${formData.nama}
${formData.noWhatsApp ? `*No. WhatsApp:* ${formData.noWhatsApp}\n` : ''}
*Pertanyaan:*
${formData.pertanyaan}

Terima kasih.`;

    // Encode dan redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/6285117737315?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-2xl mx-auto border border-emerald-100"
    >
      {/* Header with Live Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Tanya Ustadz
          </h2>
          
          {/* Live Indicator */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-emerald-700">Admin Online</span>
          </motion.div>
        </div>
        
        <p className="text-gray-600">
          Ajukan pertanyaan seputar fiqih dan dapatkan jawaban dari ustadz kami melalui WhatsApp
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-5 rounded-lg mb-6">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-semibold text-amber-900 mb-1">Layanan 100% GRATIS!</p>
            <p className="text-sm text-amber-800">
              Tidak ada biaya apapun. Anda akan diarahkan ke WhatsApp untuk konsultasi langsung dengan ustadz kami.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nama Lengkap */}
        <div>
          <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-2">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nama"
            required
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-gray-900 placeholder-gray-400"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>

        {/* No. WhatsApp (Optional) */}
        <div>
          <label htmlFor="noWhatsApp" className="block text-sm font-semibold text-gray-700 mb-2">
            Nomor WhatsApp <span className="text-gray-400 text-xs">(Opsional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">+62</span>
            <input
              type="tel"
              id="noWhatsApp"
              value={formData.noWhatsApp}
              onChange={(e) => setFormData({ ...formData, noWhatsApp: e.target.value })}
              className="w-full pl-14 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-gray-900 placeholder-gray-400"
              placeholder="8123456789"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1.5">Contoh: 8123456789 (tanpa +62 atau 0)</p>
        </div>

        {/* Pertanyaan */}
        <div>
          <label htmlFor="pertanyaan" className="block text-sm font-semibold text-gray-700 mb-2">
            Pertanyaan Anda <span className="text-red-500">*</span>
          </label>
          <textarea
            id="pertanyaan"
            required
            rows={5}
            value={formData.pertanyaan}
            onChange={(e) => setFormData({ ...formData, pertanyaan: e.target.value })}
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none"
            placeholder="Tuliskan pertanyaan fiqih Anda di sini...&#10;&#10;Contoh: Bagaimana hukum shalat berjamaah di masjid saat hujan deras?"
          />
          <p className="text-xs text-gray-500 mt-1.5">Jelaskan pertanyaan Anda sejelas mungkin</p>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Kirim via WhatsApp</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500">
          Dengan mengirim pertanyaan, Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi
        </p>
      </form>

      {/* Response Time Info */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">Respon <strong>2-3 hari kerja</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700"><strong>100% Gratis</strong></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
