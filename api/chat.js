// api/chat.js

export default async function handler(req, res) {
  // 1. Tambahkan Header Anti-Caching agar Vercel tidak menyimpan cache jawaban lama
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // 2. Pastikan metode HTTP adalah POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gunakan metode POST.' });
  }

  try {
    // 3. Ambil prompt secara dinamis dari body request
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt tidak boleh kosong.' });
    }

    // 4. Ambil API Key dari Environment Variable Vercel
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY belum dikonfigurasi di Vercel.' });
    }

    // 5. Panggil Google Gemini API secara langsung dengan prompt yang dinamis
    // Gunakan model gemini-1.5-flash atau gemini-2.0-flash
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    // Jika terjadi error dari API Google
    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(response.status).json({ 
        error: data.error?.message || 'Gagal mendapatkan respon dari Gemini API.' 
      });
    }

    // 6. Ambil teks jawaban dari struktur respon Gemini
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Tidak ada respon yang dihasilkan.';

    // 7. Kirimkan respon terbaru kembali ke Front-End
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Terjadi kesalahan pada internal server.' });
  }
}