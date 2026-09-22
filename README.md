# AI Learning Playground

Web app edukasi interaktif dengan tema pembelajaran teknologi AI. Dibuat dengan React + Vite.

## Fitur
- 3 modul belajar: Apa itu AI, Machine Learning, Neural Network
- Kuis interaktif pilihan ganda dengan feedback instan per modul
- Progress belajar tersimpan otomatis di browser (localStorage)

## Cara Menjalankan

1. Pastikan Node.js sudah terinstall (cek dengan `node -v` di terminal).
2. Buka folder ini di terminal, lalu jalankan:

```bash
npm install
npm run dev
```

3. Buka browser ke alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Struktur Folder

```
src/
├── components/
│   ├── ModuleList.jsx     -> Daftar semua modul + progress bar
│   ├── ModuleDetail.jsx   -> Konten modul + integrasi kuis
│   ├── QuizCard.jsx       -> Logika & tampilan kuis interaktif
│   └── ProgressBar.jsx    -> Komponen progress bar reusable
├── data/
│   ├── modules.js         -> Konten materi tiap modul
│   └── quizzes.js         -> Soal kuis tiap modul
├── App.jsx                -> Komponen utama, mengatur state & navigasi
├── App.css                -> Styling seluruh aplikasi
└── main.jsx                -> Entry point React
```

## Cara Menambah Modul Baru

1. Tambahkan objek baru di `src/data/modules.js` (butuh `id`, `title`, `summary`, `content`).
2. Tambahkan soal kuis untuk modul tersebut di `src/data/quizzes.js` dengan key yang sama dengan `id` modul.
