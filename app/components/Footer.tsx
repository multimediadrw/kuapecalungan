export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">KUA Pecalungan</h3>
            <p className="text-emerald-100 text-sm">
              Kantor Urusan Agama Kecamatan Pecalungan, melayani masyarakat dengan sepenuh hati dalam urusan keagamaan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-emerald-100 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/fiqih" className="text-emerald-100 hover:text-white transition-colors">
                  Fiqih
                </a>
              </li>
              <li>
                <a href="/kontak" className="text-emerald-100 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="/lokasi" className="text-emerald-100 hover:text-white transition-colors">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>📧 kua.pecalungan@kemenag.go.id</li>
              <li>📞 (0284) 123456</li>
              <li>📍 Jl. Raya Pecalungan, Batang</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-sm text-emerald-100">
          <p>&copy; {new Date().getFullYear()} KUA Pecalungan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
