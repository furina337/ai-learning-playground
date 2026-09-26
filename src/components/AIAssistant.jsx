// src/components/AIAssistant.jsx
import React, { useState } from 'react';
import { askAssistant } from '../utils/askAssistant';

export default function AIAssistant({ modules = [], onBack, onOpenModule }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Halo! Tanyakan apa saja seputar materi AI di website ini, aku akan coba jawab berdasarkan modul yang sudah dipelajari.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (questionToSend) => {
    const textQuery = questionToSend || input;
    if (!textQuery.trim() || isLoading) return;

    // 1. Tambahkan pesan pengguna ke dalam daftar percakapan
    const newMessages = [...messages, { sender: 'user', text: textQuery }];
    setMessages(newMessages);
    if (!questionToSend) setInput('');
    setIsLoading(true);

    try {
      // 2. Panggil fungsi askAssistant yang sudah terhubung ke Gemini API
      const aiReply = await askAssistant(textQuery);

      // 3. Tambahkan jawaban AI ke dalam percakapan
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Maaf, terjadi kesalahan saat memproses jawaban.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = modules.slice(0, 4).map((mod) => `Apa itu ${mod.title}?`);

  const handleChipClick = (question) => {
    handleSend(question);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="module-detail view-transition">
      {onBack && (
        <button className="btn-back" onClick={onBack}>
          ← Kembali ke Daftar Modul
        </button>
      )}

      <h2>Asisten AI</h2>
      <p className="assistant-intro">
        Tanyakan apa saja seputar materi yang ada di website ini. Jawaban dihasilkan oleh AI
        berdasarkan modul yang sudah kamu pelajari.
      </p>

      {suggestedQuestions.length > 0 && (
        <div className="assistant-suggestions">
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              className="assistant-chip"
              onClick={() => handleChipClick(question)}
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>
      )}

      <div className="assistant-chat">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`assistant-bubble ${
              msg.sender === 'user' ? 'assistant-bubble-user' : 'assistant-bubble-assistant'
            }`}
          >
            <p>{msg.text}</p>
            {msg.sender === 'ai' && msg.moduleId && onOpenModule && (
              <button
                className="assistant-source-link"
                onClick={() => onOpenModule(msg.moduleId)}
              >
                Buka modul terkait →
              </button>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="assistant-bubble assistant-bubble-assistant">
            <p>Mengetik jawaban...</p>
          </div>
        )}
      </div>

      <div className="assistant-input-row">
        <input
          type="text"
          className="assistant-input"
          placeholder="Tulis pertanyaanmu di sini..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button className="btn-primary" onClick={() => handleSend()} disabled={isLoading}>
          Kirim
        </button>
      </div>
    </div>
  );
}