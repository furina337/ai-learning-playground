import { useState } from 'react'
import QuizCard from './QuizCard.jsx'

function ModuleDetail({ module, quizQuestions, isCompleted, onBack, onModuleComplete }) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [result, setResult] = useState(null)

  function handleQuizFinish(score, total) {
    const passed = score / total >= 0.6
    setResult({ score, total, passed })
    if (passed) {
      onModuleComplete(module.id)
    }
  }

  function handleRetry() {
    setResult(null)
    setShowQuiz(true)
  }

  return (
    <div className="module-detail">
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
          <button className="btn-primary" onClick={() => setShowQuiz(true)}>
            Mulai Kuis Modul Ini
          </button>
        </>
      )}

      {showQuiz && !result && (
        <QuizCard questions={quizQuestions} onFinish={handleQuizFinish} />
      )}

      {result && (
        <div className="quiz-result">
          <h3>{result.passed ? '🎉 Selamat, kamu lulus!' : '💡 Belum lulus, coba lagi ya!'}</h3>
          <p>
            Skor kamu: <strong>{result.score} / {result.total}</strong>
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
