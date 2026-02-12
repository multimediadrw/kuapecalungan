'use client';
import Link from 'next/link';
import Image from 'next/image';
import MobileHeader from './components/MobileHeader';
import FAQ from './components/FAQ';
import ScrollReveal from './components/ScrollReveal';
import IslamicPattern from './components/IslamicPattern';
import { motion } from 'framer-motion';

export default function Home() {
  const menuItems = [
    {
      title: 'Materi Fiqih',
      description: 'Pelajari fiqih dasar',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/fiqih',
    },
    {
      title: 'Tanya Ustadz',
      description: 'Konsultasi gratis',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/kontak',
    },
    {
      title: 'Lokasi KUA',
      description: 'Temukan lokasi kami',
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: 'bg-emerald-50',
      href: '/lokasi',
    },
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden min-h-screen bg-gray-50">
        <MobileHeader />
        
        {/* Menu Cards */}
        <div className="px-4 -mt-4">
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="px-4 mt-6 space-y-4 pb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Informasi Penting</h2>
            <Link href="/fiqih" className="text-emerald-600 text-sm font-semibold flex items-center">
              Lihat Semua
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="flex space-x-3 overflow-x-auto pb-2">
            <div className="flex-shrink-0 w-64 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Jadwal Shalat</h3>
              <p className="text-emerald-100 text-sm mb-4">Lihat jadwal shalat hari ini</p>
              <Link href="/fiqih" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                Lihat Jadwal
              </Link>
            </div>

            <div className="flex-shrink-0 w-64 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Layanan Nikah</h3>
              <p className="text-emerald-100 text-sm mb-4">Informasi pendaftaran nikah</p>
              <Link href="/kontak" className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="font-bold text-gray-800 mb-3">Akses Cepat</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/fiqih" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Fiqih</span>
              </Link>
              <Link href="/kontak" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Tanya Jawab</span>
              </Link>
              <Link href="/lokasi" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Lokasi</span>
              </Link>
              <Link href="/kontak" className="flex flex-col items-center p-3 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Hubungi</span>
              </Link>
            </div>
          </div>

          {/* FAQ Section - Mobile */}
          <div className="px-4 mt-6 pb-20">
            <FAQ />
          </div>
        </div>
      </div>

      {/* Desktop View - Modern Design */}
      <div className="hidden md:block min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        {/* Hero Section - Modern Layout */}
        <section className="relative min-h-screen flex items-center px-4 py-12 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 to-transparent"></div>
          
          {/* Content Container */}
          <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold">Terpercaya & Profesional</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Konsultasi Hukum Islam{' '}
                  <span className="text-emerald-600">KUA Pecalungan</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tanya jawab fiqih dengan ulama berpengalaman berdasarkan Al-Qur'an dan Hadits.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Mulai Bertanya Sekarang
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/fiqih"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-6 py-3.5 rounded-lg font-semibold transition-all"
                  >
                    Lihat Materi Fiqih
                  </Link>
                </div>

                {/* Info Card */}
                <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Respon Cepat</p>
                    <p className="text-sm text-gray-600">Rata-rata 2-3 hari kerja</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-fade-in flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md">
                  <Image
                    src="/hero-konsultasi.png"
                    alt="Konsultasi KUA Pecalungan"
                    width={500}
                    height={350}
                    className="object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Bagaimana Cara Menggunakan{' '}
                <span className="text-emerald-600">Layanan Kami?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proses konsultasi yang mudah dan cepat untuk menjawab pertanyaan fiqih Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <ScrollReveal delay={0}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 card-hover">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    Ajukan Pertanyaan
                  </h3>
                  <p className="text-gray-600 text-center">
                    Kirim pertanyaan fiqih Anda melalui form kontak atau WhatsApp
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={100}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 card-hover">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    Ustadz Menjawab
                  </h3>
                  <p className="text-gray-600 text-center">
                    Ustadz kami akan menjawab dengan rujukan Al-Qur'an dan Hadits
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={200}>
                <div className="group">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 card-hover">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    Terima Jawaban
                  </h3>
                  <p className="text-gray-600 text-center">
                    Dapatkan jawaban lengkap dalam 2-3 hari kerja
                  </p>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <Link href="/fiqih" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Materi Fiqih
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Pelajari fiqih dasar mulai dari thaharoh, shalat, puasa, dan lainnya
                </p>
              </Link>

              {/* Card 2 */}
              <Link href="/kontak" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Tanya Jawab
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Ajukan pertanyaan seputar fiqih kepada ustadz kami
                </p>
              </Link>

              {/* Card 3 */}
              <Link href="/lokasi" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Lokasi KUA
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Temukan lokasi kantor kami dan jam operasional
                </p>
              </Link>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  Layanan Nikah
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  Informasi dan pendaftaran layanan pernikahan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Desktop */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Punya Pertanyaan Seputar Fiqih?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Jangan ragu untuk bertanya kepada ustadz kami. Kami siap membantu menjawab pertanyaan Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Ajukan Pertanyaan
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
