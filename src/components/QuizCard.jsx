import { useState } from 'react'

function QuizCard({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = questions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  function handleSelectOption(optionIndex) {
    if (isAnswered) return
    setSelectedOption(optionIndex)
    setIsAnswered(true)
    if (optionIndex === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1)
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      onFinish(score, questions.length)
      return
    }
    setCurrentIndex((prev) => prev + 1)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  function getOptionClass(optionIndex) {
    if (!isAnswered) return 'quiz-option'
    if (optionIndex === currentQuestion.correctIndex) return 'quiz-option quiz-option-correct'
    if (optionIndex === selectedOption) return 'quiz-option quiz-option-wrong'
    return 'quiz-option quiz-option-disabled'
  }

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        Soal {currentIndex + 1} dari {questions.length}
      </div>

      <h3 className="quiz-question">{currentQuestion.question}</h3>

      <div className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => handleSelectOption(index)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="quiz-feedback">
          {selectedOption === currentQuestion.correctIndex ? (
            <p className="feedback-correct">✓ Benar! Jawaban kamu tepat.</p>
          ) : (
            <p className="feedback-wrong">
              ✗ Kurang tepat. Jawaban yang benar: <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong>
            </p>
          )}
          <button className="btn-primary" onClick={handleNext}>
            {isLastQuestion ? 'Lihat Hasil' : 'Soal Berikutnya'}
          </button>
        </div>
      )}
    </div>
  )
}

export default QuizCard
