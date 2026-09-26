// src/utils/askAssistant.js

/**
 * Fungsi untuk mengirim pertanyaan pengguna ke Backend Serverless (/api/chat)
 * @param {string} userQuestion - Teks pertanyaan dari pengguna
 * @returns {Promise} - Respon jawaban teks dari Gemini API
 */
export async function askAssistant(userQuestion) {
  try {
    // 1. Panggil endpoint serverless Vercel (/api/chat)
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: userQuestion }),
    });

    const data = await response.json();

    // 2. Jika respons dari server tidak oke (status HTTP != 200)
    if (!response.ok) {
      console.error('Error dari server backend:', data);
      throw new Error(data.error || 'Gagal terhubung ke Asisten AI.');
    }

    // 3. Kembalikan teks jawaban resmi dari Gemini API
    return data.reply;

  } catch (error) {
    console.error('Error pada askAssistant:', error);
    // Kembalikan pesan error yang jelas, BUKAN teks jawaban manual yang kaku
    return `Maaf, terjadi masalah saat menghubungi Asisten AI: ${error.message}. Pastikan koneksi internet lancar dan GEMINI_API_KEY sudah terpasang di Vercel.`;
  }
}