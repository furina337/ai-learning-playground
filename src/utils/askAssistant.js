const STOPWORDS = new Set([
  'apa', 'itu', 'yang', 'adalah', 'dengan', 'untuk', 'dari', 'di', 'ke', 'pada',
  'dan', 'atau', 'bagaimana', 'kenapa', 'mengapa', 'ini', 'saya', 'kamu', 'kita',
  'tolong', 'bisa', 'jelaskan', 'tentang', 'apakah', 'gimana', 'cara', 'dalam',
  'sebuah', 'para', 'juga', 'akan', 'sudah', 'belum', 'bagi', 'oleh', 'jadi',
]

  .map((w) => w.toLowerCase()))

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word))
}

function buildEntries(modules) {
  const entries = []
  modules.forEach((mod) => {
    mod.content.forEach((paragraph) => {
      entries.push({
        moduleId: mod.id,
        moduleTitle: mod.title,
        text: paragraph,
        tokens: tokenize(`${mod.title} ${paragraph}`),
      })
    })
  })
  return entries
}

const GREETINGS = ['halo', 'hai', 'hi', 'hello', 'pagi', 'siang', 'malam', 'sore']

export function askAssistant(question, modules) {
  const trimmed = question.trim().toLowerCase()

  if (GREETINGS.some((g) => trimmed === g || trimmed.startsWith(g + ' '))) {
    const topics = modules.map((m) => `"${m.title}"`).join(', ')
    return {
      text: `Halo! Aku bisa bantu jawab pertanyaan seputar materi di website ini, misalnya soal ${topics}. Coba tanya sesuatu, ya!`,
      moduleId: null,
    }
  }

  const questionTokens = tokenize(question)
  if (questionTokens.length === 0) {
    return {
      text: 'Coba tanya dengan kata kunci yang lebih spesifik, misalnya "apa itu bias AI" atau "bagaimana neural network bekerja".',
      moduleId: null,
    }
  }

  const entries = buildEntries(modules)
  let best = null
  let bestScore = 0

  entries.forEach((entry) => {
    let score = 0
    questionTokens.forEach((token) => {
      if (entry.tokens.includes(token)) score += 1
    })
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  })

  if (best && bestScore > 0) {
    return {
      text: best.text,
      moduleId: best.moduleId,
      moduleTitle: best.moduleTitle,
    }
  }

  const topics = modules.map((m) => `"${m.title}"`).join(', ')
  return {
    text: `Maaf, aku belum menemukan jawaban yang cocok di materi yang ada. Coba tanyakan dengan kata kunci lain, atau jelajahi salah satu modul: ${topics}.`,
    moduleId: null,
  }
}
