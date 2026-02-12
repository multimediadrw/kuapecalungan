'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Beranda' },
    { href: '/fiqih', label: 'Materi Fiqih' },
    { href: '/kontak', label: 'Tanya Ustadz' },
    { href: '/lokasi', label: 'Lokasi' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo-kemenag.png"
                alt="Logo Kementerian Agama"
                width={48}
                height={48}
                className="object-contain drop-shadow-lg"
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight">
                KUA Pecalungan
              </span>
              <p className="text-emerald-200 text-xs">Kab. Batang</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-white hover:text-amber-300 transition-colors duration-200 font-medium group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-emerald-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-amber-300 focus:outline-none p-2 rounded-lg hover:bg-emerald-700 transition-colors"
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-emerald-900 border-t border-emerald-700"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-white hover:bg-emerald-700 hover:text-amber-300 transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.a
                href="/kontak"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
