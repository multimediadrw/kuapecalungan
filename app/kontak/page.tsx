'use client';

import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', question: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tanya Jawab Ustadz
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ajukan pertanyaan seputar fiqih dan keagamaan kepada ustadz kami. 
            Kami akan menjawab pertanyaan Anda dengan senang hati.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Formulir Pertanyaan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Pertanyaan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    required
                    value={formData.question}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tuliskan pertanyaan Anda di sini..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    ✓ Pertanyaan Anda berhasil dikirim! Kami akan segera menjawabnya.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    ✗ Terjadi kesalahan. Silakan coba lagi nanti.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pertanyaan'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600 text-sm">kua.pecalungan@kemenag.go.id</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800">Telepon</p>
                    <p className="text-gray-600 text-sm">(0284) 123456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600 text-sm">0812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Alamat</p>
                    <p className="text-gray-600 text-sm">
                      Jl. Raya Pecalungan No. 123<br />
                      Pecalungan, Batang<br />
                      Jawa Tengah 51281
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Jam Pelayanan
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Senin - Kamis:</strong> 08:00 - 15:00 WIB</p>
                <p><strong>Jumat:</strong> 08:00 - 11:00 WIB</p>
                <p><strong>Sabtu - Minggu:</strong> Tutup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
