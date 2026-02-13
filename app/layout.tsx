import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "KUA Pecalungan - Tanya Jawab Fiqih Dasar | Kementerian Agama",
  description: "Website resmi KUA Pecalungan Kabupaten Banyumas untuk konsultasi fiqih dasar, informasi layanan nikah, dan bimbingan keluarga sakinah. Layanan gratis dan terpercaya.",
  keywords: [
    "KUA Pecalungan",
    "Kantor Urusan Agama Pecalungan",
    "Tanya Jawab Fiqih",
    "Konsultasi Fiqih",
    "Layanan Nikah",
    "Bimbingan Keluarga Sakinah",
    "Kementerian Agama Banyumas",
    "Fiqih Dasar",
    "Thaharoh",
    "Shalat",
    "Puasa",
    "Zakat",
    "Haji Umrah",
    "Muamalah"
  ],
  authors: [{ name: "KUA Pecalungan" }],
  creator: "KUA Pecalungan - Kementerian Agama RI",
  publisher: "Kementerian Agama Republik Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-kemenag.png',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kuapecalungan-nine.vercel.app',
    title: 'KUA Pecalungan - Tanya Jawab Fiqih Dasar',
    description: 'Website resmi KUA Pecalungan untuk konsultasi fiqih dasar, informasi layanan nikah, dan bimbingan keluarga sakinah. Layanan gratis dan terpercaya.',
    siteName: 'KUA Pecalungan',
    images: [
      {
        url: '/logo-kemenag.png',
        width: 1200,
        height: 630,
        alt: 'Logo Kementerian Agama - KUA Pecalungan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KUA Pecalungan - Tanya Jawab Fiqih Dasar',
    description: 'Website resmi KUA Pecalungan untuk konsultasi fiqih dasar dan layanan nikah. Gratis dan terpercaya.',
    images: ['/logo-kemenag.png'],
  },
  verification: {
    google: 'Ea90g1L0sRc565eUNa9i0EEHbgYqLoff9cgVF2LuH4Q',
  },
  alternates: {
    canonical: 'https://kuapecalungan-nine.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main className="flex-grow md:mb-0 mb-16">
          {children}
        </main>
        <div className="hidden md:block">
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
