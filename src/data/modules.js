const modules = [
  {
    id: 'apa-itu-ai',
    section: 'Dasar Kecerdasan Buatan',
    layer: 'Input',
    title: 'Apa itu AI?',
    summary: 'Mengenal konsep dasar Kecerdasan Buatan (Artificial Intelligence).',
    content: [
      'Kecerdasan Buatan (AI) adalah cabang ilmu komputer yang membuat mesin bisa meniru cara berpikir dan bertindak seperti manusia, misalnya mengenali gambar, memahami bahasa, atau mengambil keputusan.',
      'AI bekerja dengan mempelajari pola dari data. Semakin banyak dan semakin baik data yang diberikan, semakin baik pula kemampuan AI dalam membuat prediksi atau keputusan.',
      'Contoh AI di kehidupan sehari-hari: asisten suara di HP, rekomendasi video di YouTube, filter spam di email, hingga chatbot layanan pelanggan.',
      'AI dibagi menjadi dua kategori besar: AI sempit (Narrow AI) yang hanya bisa mengerjakan satu tugas spesifik (contoh: AI catur), dan AI umum (General AI) yang bisa berpikir seluas manusia — jenis ini masih dalam tahap penelitian.',
    ],
  },
  {
    id: 'machine-learning',
    section: 'Dasar Kecerdasan Buatan',
    layer: 'Hidden',
    title: 'Machine Learning',
    summary: 'Bagaimana mesin bisa "belajar" dari data tanpa diprogram secara eksplisit.',
    content: [
      'Machine Learning (ML) adalah salah satu cabang dari AI yang memungkinkan komputer belajar dari data, bukan diprogram dengan aturan tetap satu per satu.',
      'Proses ML secara umum: (1) kumpulkan data, (2) latih model menggunakan data tersebut, (3) model belajar menemukan pola, (4) model digunakan untuk memprediksi data baru.',
      'Ada tiga jenis utama pembelajaran dalam ML: Supervised Learning (belajar dari data berlabel, misalnya foto kucing vs anjing yang sudah diberi nama), Unsupervised Learning (menemukan pola dari data tanpa label), dan Reinforcement Learning (belajar lewat coba-coba dan hadiah, seperti AI bermain game).',
      'Contoh penerapan ML: prediksi cuaca, deteksi penipuan kartu kredit, rekomendasi produk di e-commerce, dan sistem navigasi yang memprediksi rute tercepat.',
    ],
  },
  {
    id: 'neural-network',
    section: 'Dasar Kecerdasan Buatan',
    layer: 'Output',
    title: 'Neural Network',
    summary: 'Struktur di balik banyak sistem AI modern, terinspirasi dari cara kerja otak manusia.',
    content: [
      'Neural Network (Jaringan Saraf Tiruan) adalah struktur komputasi yang terinspirasi dari cara kerja neuron di otak manusia, tersusun dari lapisan-lapisan "node" yang saling terhubung.',
      'Struktur dasarnya terdiri dari tiga bagian: input layer (menerima data), hidden layer (memproses data dengan bobot dan fungsi aktivasi), dan output layer (menghasilkan prediksi akhir).',
      'Setiap koneksi antar node punya "bobot" (weight) yang menentukan seberapa besar pengaruh satu node terhadap node berikutnya. Proses belajar pada neural network adalah proses menyesuaikan bobot-bobot ini agar prediksi semakin akurat.',
      'Neural network dengan banyak hidden layer disebut Deep Learning. Teknologi ini menjadi dasar dari banyak sistem AI modern seperti pengenalan wajah, penerjemah bahasa otomatis, dan chatbot seperti Claude.',
    ],
  },
  {
    id: 'bias-diskriminasi-ai',
    section: 'Etika & Risiko AI',
    layer: 'Input',
    title: 'Bias & Diskriminasi dalam AI',
    summary: 'Kenapa AI bisa ikut-ikutan bias, dan kenapa ini masalah yang serius.',
    content: [
      'AI belajar dari data yang dibuat oleh manusia. Kalau data itu mengandung bias atau ketimpangan yang sudah ada di masyarakat, AI bisa "mewarisi" bias tersebut tanpa disadari pembuatnya.',
      'Contoh nyata: sistem pengenalan wajah yang akurasinya lebih rendah untuk orang berkulit gelap karena data latihannya kurang beragam, atau algoritma rekrutmen kerja yang tanpa sengaja lebih memilih kandidat pria karena data historis perusahaan didominasi karyawan pria.',
      'Bias dalam AI tidak selalu disengaja — seringkali ini muncul karena data yang dipakai tidak mewakili semua kelompok orang secara adil (misalnya kurang data dari kelompok minoritas).',
      'Solusinya butuh usaha sadar: menggunakan data yang lebih beragam dan representatif, menguji AI terhadap berbagai kelompok pengguna sebelum diluncurkan, dan melibatkan tim yang beragam dalam proses pengembangan.',
    ],
  },
  {
    id: 'privasi-keamanan-data',
    section: 'Etika & Risiko AI',
    layer: 'Hidden',
    title: 'Privasi & Keamanan Data',
    summary: 'AI butuh banyak data — termasuk data pribadi. Bagaimana menjaga privasi tetap aman?',
    content: [
      'Sebagian besar sistem AI modern butuh data dalam jumlah besar untuk belajar, dan seringkali data itu berisi informasi pribadi pengguna: riwayat pencarian, lokasi, foto, bahkan percakapan.',
      'Risiko yang muncul: kebocoran data (data breach) yang bisa membocorkan informasi sensitif, penyalahgunaan data untuk tujuan yang tidak disetujui pengguna, dan potensi pengawasan berlebihan (surveillance) terhadap individu.',
      'Beberapa prinsip penting dalam menjaga privasi data AI: data minimization (hanya kumpulkan data yang benar-benar perlu), anonimisasi (menghilangkan identitas pribadi dari data), dan persetujuan yang jelas (informed consent) dari pengguna sebelum data mereka dipakai.',
      'Banyak negara sekarang punya regulasi perlindungan data, seperti GDPR di Eropa, yang mewajibkan perusahaan bertanggung jawab atas bagaimana mereka mengumpulkan dan menggunakan data pribadi untuk melatih AI.',
    ],
  },
  {
    id: 'tanggung-jawab-regulasi-ai',
    section: 'Etika & Risiko AI',
    layer: 'Output',
    title: 'Tanggung Jawab & Regulasi AI',
    summary: 'Siapa yang bertanggung jawab kalau AI membuat kesalahan?',
    content: [
      'Ketika AI membuat keputusan yang salah atau merugikan — misalnya mobil otonom yang mengalami kecelakaan, atau AI yang menolak pengajuan kredit seseorang secara tidak adil — muncul pertanyaan penting: siapa yang bertanggung jawab? Pengembangnya, perusahaannya, atau penggunanya?',
      'Konsep AI governance (tata kelola AI) mencoba menjawab pertanyaan ini dengan membangun aturan main yang jelas: siapa yang mengawasi, siapa yang bertanggung jawab di tiap tahap, dan bagaimana AI diuji sebelum digunakan secara luas.',
      'Explainability (keterjelasan) adalah prinsip bahwa keputusan AI harus bisa dijelaskan dengan cara yang dipahami manusia — bukan cuma "kotak hitam" yang hasilnya diterima begitu saja tanpa tahu alasannya.',
      'Berbagai negara mulai membuat regulasi khusus AI, seperti EU AI Act di Uni Eropa, yang mengatur tingkat risiko suatu sistem AI dan kewajiban yang harus dipenuhi pengembangnya. Ini menunjukkan bahwa AI yang bertanggung jawab bukan cuma soal teknologi, tapi juga soal aturan dan etika.',
    ],
  },
]

export default modules
