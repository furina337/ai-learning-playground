import { useState } from 'react'
import { askAssistant } from '../utils/askAssistant.js'

const SUGGESTIONS = [
  'Apa itu AI?',
  'Apa itu bias dalam AI?',
  'Bagaimana neural network bekerja?',
  'Kenapa privasi data penting?',
]

function AIAssistant({ modules, onBack, onOpenModule }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Halo! Tanyakan apa saja seputar materi AI di website ini, aku akan coba jawab berdasarkan modul yang sudah dipelajari.',
      moduleId: null,
    },
  ])
  const [input, setInput] = useState('')

  function handleSend(question) {
    const trimmed = question.trim()
    if (!trimmed) return

    const answer = askAssistant(trimmed, modules)

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: answer.text, moduleId: answer.moduleId, moduleTitle: answer.moduleTitle },
    ])
    setInput('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSend(input)
  }

  return (
    <div className="module-detail view-transition assistant-page">
      <button className="btn-back" onClick={onBack}>
        ← Kembali ke Daftar Modul
      </button>

      <h2>Tanya Asisten AI</h2>
      <p className="module-content assistant-intro">
        Asisten ini menjawab berdasarkan materi 6 modul yang ada di website — coba
        tanyakan sesuatu tentang AI, machine learning, neural network, atau etika AI.
      </p>

      <div className="assistant-chat">
        {messages.map((msg, index) => (
          <div key={index} className={`assistant-bubble assistant-bubble-${msg.role}`}>
            <p>{msg.text}</p>
            {msg.moduleId && (
              <button
                className="assistant-source-link"
                onClick={() => onOpenModule(msg.moduleId)}
              >
                Baca selengkapnya di modul "{msg.moduleTitle}" →
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="assistant-suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="assistant-chip" onClick={() => handleSend(s)}>
            {s}
          </button>
        ))}
      </div>

      <form className="assistant-input-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pertanyaanmu di sini..."
          className="assistant-input"
        />
        <button type="submit" className="btn-primary">
          Kirim
        </button>
      </form>
    </div>
  )
}

export default AIAssistant
