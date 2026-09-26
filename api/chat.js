// api/chat.js

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'

// --- Rate limiting sederhana (per instance function, in-memory) ---
// Catatan: Vercel serverless function bisa "cold start" ulang kapan saja,
// jadi limit ini best-effort (cukup untuk cegah spam/bot kasar).
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 menit
const RATE_LIMIT_MAX_REQUESTS = 10 // maksimal 10 request per IP per menit
const requestLog = new Map() // ip -> [timestamp, timestamp, ...]

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS,
  )

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps)
    return true
  }

  timestamps.push(now)
  requestLog.set(ip, timestamps)

  // Pembersihan otomatis jika Map melebihi 500 entry
  if (requestLog.size > 500) {
    for (const [key, value] of requestLog) {
      const fresh = value.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS)
      if (fresh.length === 0) {
        requestLog.delete(key)
      } else {
        requestLog.set(key, fresh)
      }
    }
  }

  return false
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gunakan metode POST.' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY belum dikonfigurasi di Vercel.' })
  }

  const clientIp = getClientIp(req)
  if (isRateLimited(clientIp)) {
    res.setHeader('Retry-After', Math.ceil(RATE_LIMIT_WINDOW_MS / 1000).toString())
    return res.status(429).json({
      error: 'Terlalu banyak permintaan. Coba lagi dalam beberapa saat.',
    })
  }

  try {
    const { prompt } = req.body

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: 'Prompt tidak boleh kosong.' })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/\({MODEL}:generateContent?key=\){apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Gemini API Error:', data)
      return res.status(response.status).json({
        error: data.error?.message || 'Gagal mendapatkan respon dari Gemini API.',
      })
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Tidak ada respon yang dihasilkan.'

    return res.status(200).json({ reply: replyText })
  } catch (error) {
    console.error('Server Error:', error)
    return res.status(500).json({ error: 'Terjadi kesalahan pada internal server.' })
  }
}