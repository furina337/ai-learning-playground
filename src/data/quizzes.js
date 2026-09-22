const quizzes = {
  'apa-itu-ai': [
    {
      scenario:
        'HP kamu bisa terbuka otomatis begitu kamu melihat ke kamera depan, bahkan saat kamu memakai kacamata baru atau pencahayaan ruangan berubah.',
      question: 'Kemampuan ini paling menunjukkan ciri utama AI, yaitu...',
      options: [
        'AI mengikuti daftar instruksi tetap yang ditulis manusia satu per satu',
        'AI mengenali pola dari banyak contoh wajah, bukan aturan kaku yang harus persis sama',
        'AI hanya bisa bekerja kalau kondisinya identik setiap saat',
        'AI tidak benar-benar memproses apa pun, hanya menampilkan gambar',
      ],
      correctIndex: 1,
      explanation:
        'Berbeda dari program biasa yang mengikuti aturan tetap, AI belajar mengenali pola umum dari banyak contoh — makanya tetap bisa mengenali wajahmu walau ada sedikit perubahan seperti kacamata atau pencahayaan.',
    },
    {
      scenario:
        'Sebuah AI catur bisa mengalahkan juara dunia, tapi AI yang sama sama sekali tidak bisa dipakai untuk menyetir mobil atau menerjemahkan bahasa.',
      question: 'Ini adalah contoh dari jenis AI apa?',
      options: [
        'General AI — bisa berpikir seluas manusia di segala bidang',
        'Narrow AI — sangat ahli di satu tugas spesifik, tapi tidak bisa di luar itu',
        'AI yang rusak karena seharusnya bisa semua hal',
        'Bukan AI, karena AI sejati harus bisa segalanya',
      ],
      correctIndex: 1,
      explanation:
        'Sebagian besar AI yang ada sekarang — termasuk AI catur — adalah Narrow AI: sangat pintar di satu tugas tapi tidak punya kemampuan umum seperti manusia. General AI yang bisa segalanya masih dalam tahap penelitian.',
    },
    {
      question: 'Manakah dari berikut ini yang BUKAN termasuk penerapan AI dalam kehidupan sehari-hari?',
      options: [
        'Rekomendasi video yang muncul otomatis di YouTube',
        'Filter yang memisahkan email spam dari email penting',
        'Kalkulator yang menjumlahkan dua angka sesuai rumus tetap',
        'Chatbot layanan pelanggan yang menjawab pertanyaan pengguna',
      ],
      correctIndex: 2,
      explanation:
        'Kalkulator biasa mengikuti rumus matematika tetap tanpa belajar dari data — beda dengan AI yang menyesuaikan perilakunya berdasarkan pola yang dipelajari.',
    },
    {
      scenario:
        'Sebuah startup melatih AI pendeteksi penyakit kulit hanya menggunakan 50 foto dari satu klinik saja.',
      question: 'Risiko paling mungkin muncul dari kondisi ini adalah...',
      options: [
        'AI akan otomatis menjadi sangat akurat karena datanya sudah cukup',
        'AI mungkin kesulitan mengenali kasus yang berbeda dari 50 foto tersebut karena kurangnya variasi data',
        'AI tidak akan bisa dijalankan sama sekali tanpa data tambahan',
        'Jumlah data tidak berpengaruh pada kualitas AI',
      ],
      correctIndex: 1,
      explanation:
        'AI belajar dari pola dalam data yang diberikan. Kalau datanya sedikit dan kurang beragam, AI cenderung kesulitan mengenali kasus-kasus di luar apa yang pernah "dilihatnya".',
    },
    {
      question: 'Kenapa "data" begitu penting dalam pengembangan sistem AI modern?',
      options: [
        'Karena data dipakai untuk menghias tampilan aplikasi',
        'Karena AI mempelajari pola dan membuat keputusan berdasarkan data yang diberikan kepadanya',
        'Karena data hanya dibutuhkan sekali di awal lalu tidak berpengaruh lagi',
        'Karena semakin banyak data, aplikasi akan berjalan lebih cepat tanpa alasan lain',
      ],
      correctIndex: 1,
      explanation:
        'Data adalah "bahan belajar" bagi AI — tanpa data yang cukup dan relevan, AI tidak punya dasar untuk mengenali pola atau membuat prediksi yang masuk akal.',
    },
  ],
  'machine-learning': [
    {
      scenario:
        'Sebuah email provider melatih sistem menggunakan ribuan email yang sudah ditandai "spam" atau "bukan spam" oleh manusia.',
      question: 'Pendekatan Machine Learning apa yang digunakan di sini?',
      options: [
        'Unsupervised Learning, karena tidak ada label sama sekali',
        'Supervised Learning, karena model belajar dari data yang sudah diberi label',
        'Reinforcement Learning, karena ada sistem hadiah',
        'Bukan Machine Learning, karena hanya menyortir email',
      ],
      correctIndex: 1,
      explanation:
        'Karena setiap email sudah punya label "spam" atau "bukan spam" sebelum dipakai untuk melatih model, ini adalah contoh khas Supervised Learning.',
    },
    {
      scenario:
        'Sebuah toko online mengelompokkan pelanggan menjadi beberapa segmen berdasarkan pola belanja mereka, tanpa ada label "jenis pelanggan" yang diberikan sebelumnya.',
      question: 'Ini adalah contoh dari?',
      options: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Deep Learning saja, bukan Machine Learning',
      ],
      correctIndex: 1,
      explanation:
        'Karena tidak ada label yang diberikan di awal, dan sistem menemukan pola/pengelompokan sendiri dari data, ini termasuk Unsupervised Learning.',
    },
    {
      scenario:
        'Sebuah AI belajar bermain game dengan mencoba berbagai gerakan — ia mendapat skor lebih tinggi kalau berhasil, dan skor lebih rendah kalau gagal, lalu menyesuaikan strateginya dari waktu ke waktu.',
      question: 'Pendekatan belajar seperti ini disebut?',
      options: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
        'Manual Programming',
      ],
      correctIndex: 2,
      explanation:
        'Belajar lewat coba-coba dengan sistem hadiah/skor adalah ciri khas Reinforcement Learning — AI menyesuaikan strategi berdasarkan konsekuensi dari tindakannya.',
    },
    {
      question: 'Manakah urutan proses umum Machine Learning yang paling tepat?',
      options: [
        'Latih model → kumpulkan data → prediksi data baru → temukan pola',
        'Kumpulkan data → latih model dengan data itu → model menemukan pola → gunakan untuk memprediksi data baru',
        'Prediksi data baru → kumpulkan data → latih model',
        'Model langsung bisa memprediksi tanpa data maupun pelatihan',
      ],
      correctIndex: 1,
      explanation:
        'Proses ML dimulai dari mengumpulkan data, melatih model dengan data tersebut supaya menemukan pola, baru kemudian model itu dipakai untuk memprediksi data baru yang belum pernah dilihat.',
    },
    {
      scenario:
        'Dua tim membuat AI prediksi cuaca. Tim A melatih modelnya dengan data cuaca 1 bulan terakhir saja. Tim B melatih dengan data cuaca 10 tahun terakhir dari berbagai wilayah.',
      question: 'Model milik tim mana yang kemungkinan besar memberi prediksi lebih baik, dan kenapa?',
      options: [
        'Tim A, karena data yang lebih sedikit membuat model lebih fokus',
        'Tim B, karena data yang lebih banyak dan beragam membantu model mengenali lebih banyak pola cuaca',
        'Sama saja, karena jumlah data tidak berpengaruh pada Machine Learning',
        'Tim A, karena data terbaru selalu lebih baik dari data lama berapa pun jumlahnya',
      ],
      correctIndex: 1,
      explanation:
        'Secara umum, data yang lebih banyak dan beragam membantu model ML mengenali lebih banyak variasi pola, sehingga prediksinya cenderung lebih andal — meskipun kualitas data tetap penting, bukan cuma kuantitas.',
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
      explanation:
        'Struktur node yang saling terhubung dalam neural network meniru cara neuron-neuron di otak manusia saling mengirim sinyal satu sama lain.',
    },
    {
      scenario:
        'Saat sebuah neural network dilatih, nilai-nilai bobot (weight) antar node terus-menerus disesuaikan sedikit demi sedikit.',
      question: 'Apa tujuan utama dari penyesuaian bobot ini?',
      options: [
        'Supaya tampilan diagram jaringan terlihat lebih rapi',
        'Supaya prediksi akhir model semakin mendekati hasil yang benar',
        'Supaya proses training berjalan lebih lambat',
        'Bobot tidak benar-benar berpengaruh pada hasil prediksi',
      ],
      correctIndex: 1,
      explanation:
        'Proses belajar pada neural network pada dasarnya adalah proses menyesuaikan bobot supaya selisih (error) antara prediksi model dan jawaban yang benar semakin kecil.',
    },
    {
      question: 'Apa perbedaan utama antara Shallow Network dan Deep Learning?',
      options: [
        'Deep Learning tidak punya hidden layer sama sekali',
        'Deep Learning memiliki banyak hidden layer, sedangkan shallow network hanya sedikit',
        'Shallow network lebih canggih daripada Deep Learning',
        'Keduanya sebenarnya hal yang sama persis',
      ],
      correctIndex: 1,
      explanation:
        'Istilah "Deep" dalam Deep Learning merujuk pada banyaknya hidden layer yang disusun bertingkat, yang memungkinkan model mengenali pola-pola yang lebih kompleks.',
    },
    {
      question: 'Bagian mana dari neural network yang menghasilkan hasil akhir/prediksi?',
      options: [
        'Input layer',
        'Hidden layer',
        'Output layer',
        'Semua layer menghasilkan hasil akhir secara bersamaan',
      ],
      correctIndex: 2,
      explanation:
        'Input layer menerima data mentah, hidden layer memproses dan mengekstrak pola, dan output layer adalah tempat hasil akhir/prediksi dikeluarkan.',
    },
    {
      scenario:
        'Sebuah tim menambah jumlah hidden layer pada neural network mereka secara signifikan supaya bisa mengenali pola yang sangat kompleks, seperti membedakan ratusan jenis burung dari foto.',
      question: 'Kenapa menambah hidden layer bisa membantu untuk tugas sekompleks ini?',
      options: [
        'Karena lebih banyak layer berarti aplikasi jadi lebih ringan dijalankan',
        'Karena setiap hidden layer tambahan membantu model mengenali pola yang semakin abstrak dan rumit dari data',
        'Karena hidden layer hanya untuk mempercantik struktur, tidak berpengaruh pada kemampuan model',
        'Karena semakin banyak layer, data yang dibutuhkan justru semakin sedikit',
      ],
      correctIndex: 1,
      explanation:
        'Tiap hidden layer memproses hasil dari layer sebelumnya menjadi representasi yang lebih abstrak, sehingga tumpukan banyak hidden layer (Deep Learning) memungkinkan model mengenali pola-pola rumit seperti ciri detail ratusan jenis burung.',
    },
  ],
  'bias-diskriminasi-ai': [
    {
      scenario:
        'Sebuah algoritma rekrutmen kerja ternyata lebih sering meloloskan kandidat pria dibanding wanita, padahal kualifikasinya setara — karena data historis perusahaan itu didominasi karyawan pria.',
      question: 'Apa penyebab utama bias pada kasus ini?',
      options: [
        'AI sengaja diprogram untuk diskriminatif terhadap wanita',
        'Data pelatihan mencerminkan ketimpangan yang sudah ada sebelumnya, dan AI mempelajarinya sebagai "pola normal"',
        'AI tidak menggunakan data sama sekali dalam pengambilan keputusan',
        'Bias ini murni kebetulan dan tidak ada penjelasannya',
      ],
      correctIndex: 1,
      explanation:
        'AI belajar dari data yang ada. Kalau data historis sudah mengandung ketimpangan (misalnya dominasi satu gender), AI bisa "menganggap" pola itu normal dan mengulanginya dalam keputusan barunya.',
    },
    {
      question: 'Manakah pernyataan yang paling tepat soal bias dalam AI?',
      options: [
        'Bias dalam AI selalu disengaja oleh programmernya',
        'Bias dalam AI seringkali muncul tanpa disengaja, akibat data yang tidak representatif',
        'AI tidak mungkin memiliki bias karena hanya mesin',
        'Bias hanya terjadi pada AI yang sudah tua/ketinggalan zaman',
      ],
      correctIndex: 1,
      explanation:
        'Bias sering muncul bukan karena niat jahat, tapi karena data yang dipakai untuk melatih AI tidak cukup mewakili keberagaman dunia nyata.',
    },
    {
      scenario:
        'Dua tim mengembangkan sistem pengenalan wajah. Tim A melatih modelnya hanya dengan foto dari satu kelompok etnis. Tim B melatih dengan foto dari berbagai etnis, usia, dan kondisi pencahayaan.',
      question: 'Sistem milik tim mana yang lebih berisiko menghasilkan bias, dan kenapa?',
      options: [
        'Tim B, karena data yang lebih beragam membingungkan model',
        'Tim A, karena kurangnya keberagaman data membuat model kurang akurat untuk kelompok di luar data latihannya',
        'Keduanya sama saja, keberagaman data tidak berpengaruh',
        'Tim A lebih baik karena datanya lebih fokus dan konsisten',
      ],
      correctIndex: 1,
      explanation:
        'Data yang kurang beragam (seperti milik Tim A) membuat model cenderung berkinerja buruk pada kelompok yang tidak terwakili dengan baik dalam data latihannya — inilah akar dari banyak kasus bias di dunia nyata.',
    },
    {
      question: 'Apa salah satu langkah konkret untuk mengurangi risiko bias dalam pengembangan AI?',
      options: [
        'Menggunakan data yang lebih beragam dan menguji model terhadap berbagai kelompok pengguna',
        'Mempercepat proses pengembangan tanpa pengujian tambahan',
        'Menyembunyikan hasil pengujian dari publik',
        'Menggunakan data yang sama berulang-ulang tanpa evaluasi',
      ],
      correctIndex: 0,
      explanation:
        'Menggunakan data yang representatif dan secara aktif menguji AI terhadap berbagai kelompok pengguna adalah langkah nyata untuk mendeteksi dan mengurangi bias sebelum sistem diluncurkan secara luas.',
    },
    {
      question: 'Kenapa keberagaman tim pengembang juga dianggap penting dalam mengurangi bias AI?',
      options: [
        'Karena tidak ada hubungannya sama sekali dengan hasil AI',
        'Karena tim yang beragam lebih mungkin menyadari sudut pandang atau kelompok yang terlewat saat merancang dan menguji sistem',
        'Karena tim yang beragam otomatis membuat AI berjalan lebih cepat',
        'Karena ini hanya soal citra perusahaan, tidak memengaruhi kualitas AI',
      ],
      correctIndex: 1,
      explanation:
        'Tim dengan latar belakang beragam cenderung lebih peka terhadap potensi bias atau kelompok yang mungkin terlewat, karena mereka membawa perspektif yang berbeda-beda saat merancang dan mengevaluasi sistem AI.',
    },
  ],
  'privasi-keamanan-data': [
    {
      scenario:
        'Sebuah aplikasi kesehatan meminta akses ke kontak, lokasi, dan riwayat pencarian pengguna — padahal fungsi utamanya hanya mencatat jadwal minum obat.',
      question: 'Praktik ini melanggar prinsip privasi data apa?',
      options: [
        'Data minimization — hanya mengumpulkan data yang benar-benar diperlukan',
        'Anonimisasi data',
        'Enkripsi data',
        'Tidak melanggar apa pun karena semua aplikasi wajar meminta akses sebanyak itu',
      ],
      correctIndex: 0,
      explanation:
        'Prinsip data minimization menyatakan bahwa aplikasi sebaiknya hanya mengumpulkan data yang benar-benar dibutuhkan untuk fungsinya — meminta akses berlebihan seperti kontak dan lokasi untuk aplikasi pencatat jadwal obat melanggar prinsip ini.',
    },
    {
      question: 'Apa perbedaan utama antara "anonimisasi data" dan "persetujuan pengguna (consent)"?',
      options: [
        'Keduanya adalah istilah yang sama persis',
        'Anonimisasi menghilangkan identitas dari data, sedangkan consent adalah izin eksplisit dari pengguna sebelum datanya dipakai',
        'Consent berarti menghapus semua data, sedangkan anonimisasi berarti membagikan data ke publik',
        'Anonimisasi hanya berlaku untuk data keuangan',
      ],
      correctIndex: 1,
      explanation:
        'Anonimisasi adalah teknik menghilangkan informasi identitas dari data, sedangkan consent adalah persetujuan yang diberikan pengguna sebelum data mereka dikumpulkan atau digunakan — keduanya prinsip berbeda yang saling melengkapi.',
    },
    {
      scenario:
        'Sebuah perusahaan di Eropa mengumpulkan data pengguna untuk melatih AI mereka tanpa memberi tahu pengguna atau meminta izin terlebih dahulu.',
      question: 'Tindakan ini kemungkinan besar melanggar regulasi apa?',
      options: [
        'GDPR',
        'HTTP',
        'ISO 9001',
        'Tidak melanggar regulasi apa pun',
      ],
      correctIndex: 0,
      explanation:
        'GDPR (General Data Protection Regulation) di Eropa mewajibkan perusahaan untuk transparan dan mendapat persetujuan pengguna sebelum mengumpulkan atau menggunakan data pribadi mereka.',
    },
    {
      scenario:
        'Sebuah platform mengalami kebocoran data yang mengekspos jutaan nomor telepon dan riwayat transaksi pengguna ke publik.',
      question: 'Apa risiko nyata yang paling mungkin terjadi setelah insiden seperti ini?',
      options: [
        'Tidak ada dampak nyata karena data hanya berupa angka',
        'Pengguna berisiko mengalami penipuan atau penyalahgunaan identitas dari data yang bocor',
        'Kebocoran data justru meningkatkan keamanan pengguna',
        'Hanya berdampak pada perusahaan, tidak pada pengguna sama sekali',
      ],
      correctIndex: 1,
      explanation:
        'Kebocoran data pribadi seperti nomor telepon dan riwayat transaksi bisa dimanfaatkan pihak tidak bertanggung jawab untuk penipuan, spam, atau bahkan pencurian identitas terhadap pengguna yang datanya bocor.',
    },
    {
      question: 'Manakah praktik yang paling sesuai dengan prinsip privasi data yang bertanggung jawab?',
      options: [
        'Mengumpulkan sebanyak mungkin data pengguna "untuk jaga-jaga" meski belum tentu dipakai',
        'Menjelaskan dengan jelas data apa yang dikumpulkan dan untuk apa, lalu meminta persetujuan pengguna',
        'Menyimpan data pengguna selamanya tanpa batas waktu',
        'Membagikan data pengguna ke pihak ketiga tanpa pemberitahuan',
      ],
      correctIndex: 1,
      explanation:
        'Transparansi soal data apa yang dikumpulkan, untuk tujuan apa, serta mendapat persetujuan eksplisit dari pengguna adalah praktik inti dari privasi data yang bertanggung jawab.',
    },
  ],
  'tanggung-jawab-regulasi-ai': [
    {
      scenario:
        'Sebuah mobil otonom mengalami kecelakaan karena AI-nya salah mengenali objek di jalan.',
      question: 'Mengapa kasus seperti ini menunjukkan pentingnya AI governance (tata kelola AI)?',
      options: [
        'Karena kasus ini membuktikan AI tidak akan pernah bisa dipercaya sama sekali',
        'Karena diperlukan kejelasan siapa yang bertanggung jawab, bagaimana AI diuji, dan bagaimana pengawasannya sebelum digunakan secara luas',
        'Karena mobil otonom seharusnya tidak diatur oleh hukum apa pun',
        'Karena AI governance hanya relevan untuk perusahaan teknologi besar',
      ],
      correctIndex: 1,
      explanation:
        'Kasus seperti ini menunjukkan perlunya aturan main yang jelas: siapa yang bertanggung jawab (pengembang, perusahaan, atau pihak lain), bagaimana sistem diuji, dan siapa yang mengawasi sebelum AI digunakan di dunia nyata — inilah inti dari AI governance.',
    },
    {
      scenario:
        'Seseorang ditolak pengajuan kreditnya oleh sistem AI bank, tapi tidak ada satu pun pihak bank yang bisa menjelaskan alasan spesifik di balik keputusan itu.',
      question: 'Situasi ini mencerminkan kurangnya prinsip apa dalam AI?',
      options: [
        'Explainability — keputusan AI harus bisa dijelaskan dengan cara yang dipahami manusia',
        'Kecepatan pemrosesan data',
        'Efisiensi biaya operasional',
        'Popularitas produk AI tersebut',
      ],
      correctIndex: 0,
      explanation:
        'Explainability berarti keputusan AI seharusnya bisa dijelaskan secara masuk akal kepada manusia — bukan sekadar "kotak hitam" yang hasilnya diterima begitu saja tanpa ada yang bisa menjelaskan alasannya.',
    },
    {
      question: 'EU AI Act adalah regulasi yang mengatur AI berdasarkan apa?',
      options: [
        'Tingkat risiko suatu sistem AI dan kewajiban yang harus dipenuhi pengembangnya',
        'Warna tampilan antarmuka aplikasi AI',
        'Jumlah pengguna aplikasi AI tersebut',
        'Harga jual produk AI di pasaran',
      ],
      correctIndex: 0,
      explanation:
        'EU AI Act mengklasifikasikan sistem AI berdasarkan tingkat risikonya terhadap masyarakat, dan menetapkan kewajiban berbeda-beda bagi pengembang tergantung seberapa berisiko sistem tersebut.',
    },
    {
      scenario:
        'Sebuah AI rekrutmen yang dibuat oleh vendor pihak ketiga digunakan oleh perusahaan X, dan ternyata AI itu menolak kandidat secara tidak adil.',
      question: 'Mengapa pertanyaan "siapa yang bertanggung jawab" pada kasus ini tidak selalu punya jawaban sederhana?',
      options: [
        'Karena tanggung jawab bisa melibatkan vendor pembuat AI, perusahaan yang menggunakannya, maupun keduanya — tergantung bagaimana sistem itu dirancang dan digunakan',
        'Karena AI tidak pernah bisa disalahkan dalam kondisi apa pun',
        'Karena hanya kandidat yang ditolak yang bisa disalahkan',
        'Karena pertanyaan ini sebenarnya tidak penting untuk dibahas',
      ],
      correctIndex: 0,
      explanation:
        'Tanggung jawab dalam kasus AI seringkali melibatkan banyak pihak — vendor yang membangun sistem, dan perusahaan yang memutuskan untuk menggunakannya. Inilah kenapa regulasi dan tata kelola AI yang jelas menjadi penting.',
    },
    {
      question: 'Kenapa pengawasan manusia (human oversight) tetap dianggap penting meski AI sudah semakin canggih?',
      options: [
        'Karena AI tidak pernah benar-benar bisa digunakan tanpa manusia mengetik semua perintahnya secara manual',
        'Karena AI bisa membuat kesalahan atau keputusan yang tidak diinginkan, sehingga manusia perlu bisa mengevaluasi dan mengoreksinya',
        'Karena human oversight hanya formalitas belaka tanpa manfaat nyata',
        'Karena AI yang canggih otomatis tidak pernah butuh pengawasan lagi',
      ],
      correctIndex: 1,
      explanation:
        'Secanggih apa pun AI, ia tetap bisa membuat kesalahan, bias, atau keputusan yang tidak sesuai harapan. Pengawasan manusia memastikan ada pihak yang bisa mengevaluasi, mengoreksi, dan bertanggung jawab atas hasil kerja AI.',
    },
  ],
}

export default quizzes
