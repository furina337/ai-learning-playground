import { useEffect, useState } from 'react'

const TIME_PER_QUESTION = 20

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

function QuizCard({ questions, onFinish, challengeMode }) {
  const [shuffledQuestions] = useState(() => questions.map(shuffleQuestion))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [timedOut, setTimedOut] = useState(false)

  const currentQuestion = shuffledQuestions[currentIndex]
  const isLastQuestion = currentIndex === shuffledQuestions.length - 1

  useEffect(() => {
    setTimeLeft(TIME_PER_QUESTION)
    setTimedOut(false)
  }, [currentIndex])

  useEffect(() => {
    if (!challengeMode || isAnswered) return
    if (timeLeft <= 0) {
      setIsAnswered(true)
      setTimedOut(true)
      return
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, isAnswered, challengeMode])

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

  const isUrgent = challengeMode && !isAnswered && timeLeft <= 5

  return (
    <div className="quiz-card">
      <div className="quiz-progress-row">
        <div className="quiz-progress">
          Soal {currentIndex + 1} dari {shuffledQuestions.length}
        </div>
        {challengeMode && (
          <div className={`quiz-timer ${isUrgent ? 'quiz-timer-urgent' : ''}`}>
            ⏱ {isAnswered ? 0 : timeLeft}d
          </div>
        )}
      </div>

      {challengeMode && (
        <div className="quiz-timer-track">
          <div
            className={`quiz-timer-fill ${isUrgent ? 'quiz-timer-fill-urgent' : ''}`}
            style={{ width: `${(isAnswered ? 0 : timeLeft) / TIME_PER_QUESTION * 100}%` }}
          />
        </div>
      )}

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
          {timedOut ? (
            <p className="feedback-wrong">
              ⏱ Waktu habis! Jawaban yang benar: <strong>{currentQuestion.options[currentQuestion.correctIndex]}</strong>
            </p>
          ) : selectedOption === currentQuestion.correctIndex ? (
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
