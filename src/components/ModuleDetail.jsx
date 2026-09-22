import { useState } from 'react'
import QuizCard from './QuizCard.jsx'

function ModuleDetail({ module, quizQuestions, isCompleted, onBack, onModuleComplete, onQuizAttempt }) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [result, setResult] = useState(null)
  const [quizStartTime, setQuizStartTime] = useState(null)

  function handleStartQuiz() {
    setQuizStartTime(Date.now())
    setShowQuiz(true)
  }

  function handleQuizFinish(score, total) {
    const passed = score / total >= 0.6
    const durationSeconds = quizStartTime ? Math.round((Date.now() - quizStartTime) / 1000) : null
    setResult({ score, total, passed, durationSeconds })

    onQuizAttempt(module.id, score, total, durationSeconds)
    if (passed) {
      onModuleComplete(module.id)
    }
  }

  function handleRetry() {
    setResult(null)
    setQuizStartTime(Date.now())
    setShowQuiz(true)
  }

  function formatDuration(seconds) {
    if (seconds === null) return '-'
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return m > 0 ? `${m}m ${s}d` : `${s} detik`
  }

  return (
    <div className="module-detail view-transition">
      <button className="btn-back" onClick={onBack}>
        ← Kembali ke Daftar Modul
      </button>

      <h2>{module.title}</h2>
      {isCompleted && <span className="badge-completed">✓ Modul Selesai</span>}

      {!showQuiz && !result && (
        <>
          <div className="module-content">
            {module.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="challenge-note">⏱ Setiap soal punya waktu 20 detik untuk dijawab.</p>

          <button className="btn-primary" onClick={handleStartQuiz}>
            Mulai Kuis Modul Ini
          </button>
        </>
      )}

      {showQuiz && !result && (
        <QuizCard questions={quizQuestions} onFinish={handleQuizFinish} challengeMode />
      )}

      {result && (
        <div className="quiz-result">
          <h3>{result.passed ? '🎉 Selamat, kamu lulus!' : '💡 Belum lulus, coba lagi ya!'}</h3>
          <p>
            Skor kamu: <strong>{result.score} / {result.total}</strong>
          </p>
          <p className="quiz-result-time">
            Waktu pengerjaan: <strong>{formatDuration(result.durationSeconds)}</strong>
          </p>
          <p className="quiz-result-note">
            {result.passed
              ? 'Modul ini sudah ditandai selesai di progress belajar kamu.'
              : 'Minimal 60% jawaban benar untuk menyelesaikan modul ini.'}
          </p>
          <div className="quiz-result-actions">
            <button className="btn-secondary" onClick={handleRetry}>
              Ulangi Kuis
            </button>
            <button className="btn-primary" onClick={onBack}>
              Kembali ke Daftar Modul
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModuleDetail
