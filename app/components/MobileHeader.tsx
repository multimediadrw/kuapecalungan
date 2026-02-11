'use client';

import Image from 'next/image';

export default function MobileHeader() {
  return (
    <header className="md:hidden bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 pt-4 pb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-kemenag.png"
            alt="Logo Kementerian Agama"
            width={32}
            height={32}
            className="object-contain bg-white rounded-lg p-1"
          />
          <h1 className="text-xl font-bold">KUA Pecalungan</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-emerald-800 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="p-2 hover:bg-emerald-800 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Hai, Sahabat KUA 👋</h2>
        <p className="text-emerald-100">Apa yang bisa kami bantu hari ini?</p>
      </div>
    </header>
  );
}
