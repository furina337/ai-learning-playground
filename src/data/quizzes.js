const quizzes = {
  'apa-itu-ai': [
    {
      question: 'Apa yang dimaksud dengan Kecerdasan Buatan (AI)?',
      options: [
        'Mesin yang hanya bisa menghitung angka',
        'Cabang ilmu komputer yang membuat mesin meniru cara berpikir manusia',
        'Jenis komputer generasi terbaru',
        'Perangkat lunak antivirus',
      ],
      correctIndex: 1,
    },
    {
      question: 'Manakah yang termasuk contoh AI dalam kehidupan sehari-hari?',
      options: [
        'Kalkulator biasa',
        'Rekomendasi video di YouTube',
        'Mesin ketik manual',
        'Jam dinding analog',
      ],
      correctIndex: 1,
    },
    {
      question: 'Apa perbedaan utama antara Narrow AI dan General AI?',
      options: [
        'Narrow AI lebih mahal daripada General AI',
        'Narrow AI hanya bisa satu tugas spesifik, General AI bisa berpikir seluas manusia',
        'Keduanya sama saja',
        'General AI hanya digunakan untuk permainan catur',
      ],
      correctIndex: 1,
    },
  ],
  'machine-learning': [
    {
      question: 'Apa inti dari Machine Learning?',
      options: [
        'Komputer diprogram dengan aturan tetap satu per satu',
        'Komputer belajar pola dari data',
        'Komputer hanya menyimpan data tanpa memprosesnya',
        'Komputer menggantikan seluruh pekerjaan manusia',
      ],
      correctIndex: 1,
    },
    {
      question: 'Jenis pembelajaran yang menggunakan data berlabel disebut?',
      options: [
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Supervised Learning',
        'Deep Fake Learning',
      ],
      correctIndex: 2,
    },
    {
      question: 'AI yang belajar lewat coba-coba dan sistem hadiah disebut?',
      options: [
        'Supervised Learning',
        'Reinforcement Learning',
        'Unsupervised Learning',
        'Static Learning',
      ],
      correctIndex: 1,
    },
  ],
  'neural-network': [
    {
      question: 'Neural Network terinspirasi dari cara kerja apa?',
      options: [
        'Jantung manusia',
        'Neuron di otak manusia',
        'Sistem pernapasan',
        'Otot manusia',
      ],
      correctIndex: 1,
    },
    {
      question: 'Apa fungsi "bobot" (weight) dalam neural network?',
      options: [
        'Menentukan warna tampilan aplikasi',
        'Menentukan seberapa besar pengaruh satu node terhadap node lain',
        'Menyimpan nama pengguna',
        'Mengatur kecepatan internet',
      ],
      correctIndex: 1,
    },
    {
      question: 'Neural network dengan banyak hidden layer disebut?',
      options: [
        'Shallow Learning',
        'Deep Learning',
        'Flat Learning',
        'Static Network',
      ],
      correctIndex: 1,
    },
  ],
  'bias-diskriminasi-ai': [
    {
      question: 'Kenapa AI bisa memiliki bias?',
      options: [
        'Karena AI diprogram untuk pilih kasih',
        'Karena AI belajar dari data yang mungkin sudah mengandung ketimpangan',
        'Karena AI tidak punya data sama sekali',
        'Karena AI selalu netral secara otomatis',
      ],
      correctIndex: 1,
    },
    {
      question: 'Manakah contoh nyata bias dalam AI?',
      options: [
        'Kalkulator yang salah menghitung',
        'Sistem pengenalan wajah yang kurang akurat untuk kelompok tertentu karena data latihan kurang beragam',
        'Aplikasi cuaca yang lambat',
        'Game yang sering crash',
      ],
      correctIndex: 1,
    },
    {
      question: 'Apa salah satu solusi untuk mengurangi bias dalam AI?',
      options: [
        'Menggunakan data yang lebih beragam dan representatif',
        'Mengurangi jumlah data sebanyak mungkin',
        'Menghapus semua data pengguna',
        'Tidak menguji AI sama sekali sebelum diluncurkan',
      ],
      correctIndex: 0,
    },
  ],
  'privasi-keamanan-data': [
    {
      question: 'Kenapa AI seringkali butuh data pribadi pengguna?',
      options: [
        'Karena AI tidak bisa belajar tanpa data',
        'Karena data pribadi lebih murah',
        'Karena AI tidak butuh data sama sekali',
        'Karena peraturan mewajibkannya',
      ],
      correctIndex: 0,
    },
    {
      question: 'Apa yang dimaksud dengan "data minimization"?',
      options: [
        'Menghapus semua data setelah dipakai',
        'Hanya mengumpulkan data yang benar-benar diperlukan',
        'Mengumpulkan sebanyak mungkin data',
        'Membagikan data ke pihak lain',
      ],
      correctIndex: 1,
    },
    {
      question: 'GDPR adalah regulasi perlindungan data yang berlaku di mana?',
      options: [
        'Amerika Serikat',
        'Indonesia',
        'Eropa',
        'Jepang',
      ],
      correctIndex: 2,
    },
  ],
  'tanggung-jawab-regulasi-ai': [
    {
      question: 'Apa yang dimaksud dengan "explainability" dalam AI?',
      options: [
        'Kemampuan AI untuk berbicara',
        'Keputusan AI bisa dijelaskan dengan cara yang dipahami manusia',
        'AI yang bisa menjelaskan lelucon',
        'AI yang punya banyak fitur',
      ],
      correctIndex: 1,
    },
    {
      question: 'Contoh regulasi khusus AI yang dibuat oleh Uni Eropa adalah?',
      options: [
        'GDPR',
        'EU AI Act',
        'ISO 9001',
        'HIPAA',
      ],
      correctIndex: 1,
    },
    {
      question: 'Kenapa AI governance (tata kelola AI) penting?',
      options: [
        'Supaya AI bisa dijual lebih mahal',
        'Untuk memperjelas siapa yang bertanggung jawab dan bagaimana AI diawasi',
        'Karena AI harus punya nama resmi',
        'Supaya AI berjalan lebih cepat',
      ],
      correctIndex: 1,
    },
  ],
}

export default quizzes
