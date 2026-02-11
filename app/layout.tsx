import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

export const metadata: Metadata = {
  title: "KUA Pecalungan - Tanya Jawab Fiqih",
  description: "Website resmi KUA Pecalungan untuk tanya jawab fiqih dasar dan informasi layanan",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo-kemenag.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen bg-gray-50">
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
