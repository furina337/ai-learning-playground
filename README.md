# AI Learning Playground

Web app edukasi interaktif untuk membantu pemula memahami teknologi AI melalui eksperimen, materi singkat, kuis, simulator, dan asisten pembelajaran. Dibuat dengan React + Vite.

## Fitur

- 6 modul pembelajaran AI
- Mini experiment interaktif di halaman utama
- Kuis pilihan ganda dengan feedback instan
- Progress belajar dan statistik yang tersimpan di browser melalui `localStorage`
- Dashboard untuk melihat perkembangan belajar
- Simulator pembelajaran konsep AI
- AI Assistant berbasis materi pembelajaran di dalam aplikasi
- Halaman About/Team
- Tampilan responsif untuk desktop, tablet, dan perangkat mobile

## Cara Menjalankan

Pastikan Node.js sudah terpasang. Cek dengan:

```bash
node -v
```

Kemudian buka folder project di terminal dan jalankan:

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite di terminal, biasanya:

```text
http://localhost:5173
```

## Production Build

Untuk memeriksa apakah project dapat dibuild untuk production:

```bash
npm run build
```

Jika build berhasil, hasil production berada di folder `dist/`. Untuk menjalankan hasil build secara lokal:

```bash
npm run preview
```

## Struktur Project

```text
src/
├── components/
│   ├── AIAssistant.jsx      -> Asisten pembelajaran berbasis materi
│   ├── AboutPage.jsx        -> Halaman informasi project/tim
│   ├── Dashboard.jsx        -> Ringkasan progress dan statistik belajar
│   ├── ModuleDetail.jsx     -> Materi modul dan integrasi kuis
│   ├── ModuleList.jsx       -> Daftar modul dan progress
│   ├── NetworkDiagram.jsx   -> Komponen diagram jaringan saraf
│   ├── ProgressBar.jsx      -> Progress bar reusable
│   ├── QuizCard.jsx         -> Tampilan dan logika kuis
│   └── Simulator.jsx        -> Simulator konsep AI
├── data/
│   ├── modules.js           -> Data 6 modul pembelajaran
│   ├── quizzes.js           -> Data soal kuis per modul
│   └── team.js              -> Data anggota/tim project
├── utils/
│   └── askAssistant.js      -> Logika pencarian jawaban assistant
├── App.jsx                  -> Komponen utama dan navigasi aplikasi
├── App.css                  -> Styling aplikasi dan responsive layout
└── main.jsx                 -> Entry point React

index.html                   -> HTML entry dan metadata halaman
package.json                 -> Script dan dependency project
vite.config.js               -> Konfigurasi Vite
```

## Modul Pembelajaran

Project saat ini memiliki 6 modul pembelajaran yang didefinisikan di `src/data/modules.js`. Setiap modul memiliki ID yang digunakan untuk menghubungkan materi dengan data kuis di `src/data/quizzes.js`.

## Menambahkan Modul Baru

1. Tambahkan objek modul baru di `src/data/modules.js` dengan ID yang unik.
2. Tambahkan data kuis dengan key ID yang sama di `src/data/quizzes.js`.
3. Pastikan struktur pilihan jawaban dan `correctIndex` sesuai dengan data kuis yang sudah ada.
4. Jalankan project dan uji modul serta kuis baru sebelum memasukkannya ke versi stable.

## Prinsip Pengembangan

Perubahan fitur sebaiknya mengikuti alur:

```text
READ -> UNDERSTAND -> IMPACT ANALYSIS -> MODIFY -> VERIFY
```

Versi stable digunakan sebagai baseline/backup. Perubahan pengembangan dilakukan pada working copy terlebih dahulu dan diverifikasi sebelum dijadikan versi stable baru.
