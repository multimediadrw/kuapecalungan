# KUA Pecalungan - Website Tanya Jawab Fiqih

Website resmi KUA Pecalungan untuk tanya jawab fiqih dasar dan informasi layanan keagamaan.

## Fitur

- 🕌 **Beranda**: Informasi umum dan layanan KUA
- 📖 **Materi Fiqih**: Kategori materi fiqih dasar (Thaharoh, Shalat, Puasa, Zakat, Haji & Umrah, Muamalah)
- 💬 **Tanya Jawab**: Form untuk mengajukan pertanyaan kepada ustadz
- 📍 **Lokasi**: Informasi lokasi kantor dan jam operasional
- 📱 **Responsive Design**: Tampilan optimal di desktop dan mobile

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (via Vercel Postgres)
- **ORM**: Prisma
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Cara Deploy ke Vercel

### 1. Push ke GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Import Project di Vercel

1. Buka [Vercel Dashboard](https://vercel.com/dashboard)
2. Klik "Add New Project"
3. Import repository `multimediadrw/kuapecalungan`
4. Vercel akan otomatis mendeteksi Next.js

### 3. Setup Database (Vercel Postgres)

1. Di Vercel Dashboard, buka project yang sudah di-import
2. Klik tab "Storage"
3. Klik "Create Database"
4. Pilih "Postgres"
5. Beri nama database (misalnya: `kua-pecalungan-db`)
6. Klik "Create"
7. Environment variables akan otomatis ditambahkan ke project

### 4. Setup Prisma

Setelah database dibuat, jalankan migrasi:

```bash
# Di local atau di Vercel CLI
npx prisma migrate dev --name init
npx prisma generate
```

Atau tambahkan build command di Vercel:

```
Build Command: prisma generate && next build
```

### 5. Deploy

Vercel akan otomatis deploy setiap kali ada push ke branch `main`.

## Development

```bash
# Install dependencies
pnpm install

# Setup database
npx prisma migrate dev

# Run development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Environment Variables

Vercel Postgres akan otomatis menambahkan environment variables berikut:

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## Database Schema

### FiqihCategory
- Kategori materi fiqih (Thaharoh, Shalat, dll)

### FiqihArticle
- Artikel/konten materi fiqih

### Question
- Pertanyaan dari user ke ustadz

### Contact
- Informasi kontak KUA

## Warna Tema

- **Primary**: Emerald/Hijau (`emerald-600`, `emerald-700`)
- **Background**: White & Gray (`bg-gray-50`)
- **Accent**: Emerald light (`emerald-50`, `emerald-100`)

## License

© 2026 KUA Pecalungan. All rights reserved.
