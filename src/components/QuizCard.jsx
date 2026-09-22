import { useState } from 'react'

function shuffleQuestion(question) {
  const optionsWithFlag = question.options.map((text, i) => ({
    text,
    isCorrect: i === question.correctIndex,
  }))

  // Fisher-Yates shuffle
  for (let i = optionsWithFlag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsWithFlag[i], optionsWithFlag[j]] = [optionsWithFlag[j], optionsWithFlag[i]]
  }

  return {
    ...question,
    options: optionsWithFlag.map((o) => o.text),
    correctIndex: optionsWithFlag.findIndex((o) => o.isCorrect),
  }
}

function QuizCard({ questions, onFinish }) {
  const [shuffledQuestions] = useState(() => questions.map(shuffleQuestion))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = shuffledQuestions[currentIndex]
  const isLastQuestion = currentIndex === shuffledQuestions.length - 1

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
      onFinish(score, shuffledQuestions.length)
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
        Soal {currentIndex + 1} dari {shuffledQuestions.length}
      </div>

      {currentQuestion.scenario && (
        <p className="quiz-scenario">{currentQuestion.scenario}</p>
      )}

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
            <p className="feedback-correct">✓ Benar!</p>
          ) : (
            <p className="feedback-wrong">
              ✗ Kurang tepat. Jawaban yang benar: <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong>
            </p>
          )}
          {currentQuestion.explanation && (
            <p className="quiz-explanation">{currentQuestion.explanation}</p>
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
