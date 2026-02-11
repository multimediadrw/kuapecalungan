'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-xl">K</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              KUA Pecalungan
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-emerald-100 transition-colors duration-200 font-medium"
            >
              Beranda
            </Link>
            <Link
              href="/fiqih"
              className="text-white hover:text-emerald-100 transition-colors duration-200 font-medium"
            >
              Fiqih
            </Link>
            <Link
              href="/kontak"
              className="text-white hover:text-emerald-100 transition-colors duration-200 font-medium"
            >
              Kontak
            </Link>
            <Link
              href="/lokasi"
              className="text-white hover:text-emerald-100 transition-colors duration-200 font-medium"
            >
              Lokasi
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-emerald-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-emerald-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/fiqih"
              className="block px-3 py-2 rounded-md text-white hover:bg-emerald-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Fiqih
            </Link>
            <Link
              href="/kontak"
              className="block px-3 py-2 rounded-md text-white hover:bg-emerald-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/lokasi"
              className="block px-3 py-2 rounded-md text-white hover:bg-emerald-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Lokasi
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
