// src/components/AIAssistant.jsx
import React, { useState } from 'react';
import { askAssistant } from '../utils/askAssistant';

export default function AIAssistant() {
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

  return (