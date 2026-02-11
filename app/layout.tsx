import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
