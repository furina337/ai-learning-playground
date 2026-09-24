import { useEffect, useState } from 'react'
import ModuleList from './components/ModuleList.jsx'
import ModuleDetail from './components/ModuleDetail.jsx'
import Simulator from './components/Simulator.jsx'
import AboutPage from './components/AboutPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import AIAssistant from './components/AIAssistant.jsx'
import modules from './data/modules.js'
import quizzes from './data/quizzes.js'

const STORAGE_KEY = 'ai-learning-playground-progress'
const STATS_KEY = 'ai-learning-playground-stats'

function App() {
  const [view, setView] = useState('list') // 'list' | moduleId | 'simulator' | 'about' | 'dashboard' | 'assistant'
  const [completedModules, setCompletedModules] = useState([])
  const [quizStats, setQuizStats] = useState({})
  const [homepageAnswer, setHomepageAnswer] = useState(null)

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY)
    if (savedProgress) {
      try {
        setCompletedModules(JSON.parse(savedProgress))
      } catch (err) {
        setCompletedModules([])
      }
    }

    const savedStats = localStorage.getItem(STATS_KEY)
    if (savedStats) {
      try {
        setQuizStats(JSON.parse(savedStats))
      } catch (err) {
        setQuizStats({})
      }
    }
  }, [])

  function handleSelectModule(moduleId) {
    setView(moduleId)
  }

  function handleSelectSimulator() {
    setView('simulator')
  }

  function handleTryFirstExperiment() {
    document.getElementById('homepage-tryout')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  function handleHomepageAnswer(index) {
    setHomepageAnswer(index)
  }

  function handleBack() {
    setView('list')
  }

  function handleModuleComplete(moduleId) {
    setCompletedModules((prev) => {
      if (prev.includes(moduleId)) return prev
      const updated = [...prev, moduleId]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  function handleQuizAttempt(moduleId, score, total, durationSeconds) {
    setQuizStats((prev) => {
      const updated = {
        ...prev,
        [moduleId]: { score, total, durationSeconds, completedAt: Date.now() },
      }
      localStorage.setItem(STATS_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const selectedModule = modules.find((mod) => mod.id === view)
  const showList = view === 'list'
  const showSimulator = view === 'simulator'
  const showAboutPage = view === 'about'
  const showDashboard = view === 'dashboard'
  const showAssistant = view === 'assistant'

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-text">
          <span className="eyebrow">AI LEARNING PLAYGROUND</span>
          <h1>Learn how AI actually works, by playing with it yourself</h1>
          <p>
            AI Learning Playground memberi kamu eksperimen sederhana dan materi singkat
            untuk memahami AI tanpa harus membaca buku teks. Tidak perlu coding — pilih
            satu eksperimen, coba, lalu lihat apa yang terjadi.
          </p>
          <button className="hero-cta" onClick={handleTryFirstExperiment}>
            Try your first AI experiment
          </button>
        </div>

        <section className="homepage-tryout" id="homepage-tryout" aria-labelledby="tryout-title">
          <div className="tryout-topline">
            <span className="tryout-kicker">COBA SEKARANG</span>
            <span className="tryout-number">01</span>
          </div>
          <p className="tryout-scenario">
            HP kamu bisa terbuka otomatis begitu kamu melihat ke kamera depan, bahkan saat
            kamu memakai kacamata baru atau pencahayaan ruangan berubah.
          </p>
          <h2 id="tryout-title">Kemampuan ini paling menunjukkan ciri utama AI, yaitu...</h2>

          <div className="tryout-options">
            {quizzes['apa-itu-ai'][0].options.map((option, index) => {
              const isSelected = homepageAnswer === index
              const isCorrect = index === quizzes['apa-itu-ai'][0].correctIndex
              const showResult = homepageAnswer !== null
              const stateClass = showResult
                ? isCorrect
                  ? ' tryout-option-correct'
                  : isSelected
                    ? ' tryout-option-wrong'
                    : ''
                : ''

              return (
                <button
                  key={option}
                  type="button"
                  className={`tryout-option${stateClass}`}
                  onClick={() => handleHomepageAnswer(index)}
                  disabled={showResult}
                >
                  <span className="tryout-option-index">{String.fromCharCode(65 + index)}</span>
                  <span>{option}</span>
                </button>
              )
            })}
          </div>

          {homepageAnswer !== null && (
            <div className={`tryout-feedback ${homepageAnswer === quizzes['apa-itu-ai'][0].correctIndex ? 'tryout-feedback-correct' : 'tryout-feedback-wrong'}`}>
              <strong>
                {homepageAnswer === quizzes['apa-itu-ai'][0].correctIndex ? 'Benar.' : 'Belum tepat.'}
              </strong>{' '}
              {quizzes['apa-itu-ai'][0].explanation}
              <button className="tryout-module-link" type="button" onClick={() => handleSelectModule('apa-itu-ai')}>
                Lanjut ke modul “Apa itu AI?” →
              </button>
            </div>
          )}
        </section>
      </header>

      <main className="app-main">
        {showList && (
          <ModuleList
            modules={modules}
            completedModules={completedModules}
            onSelectModule={handleSelectModule}
            onSelectSimulator={handleSelectSimulator}
            onSelectDashboard={() => setView('dashboard')}
            onSelectAssistant={() => setView('assistant')}
          />
        )}

        {selectedModule && (
          <ModuleDetail
            module={selectedModule}
            quizQuestions={quizzes[selectedModule.id]}
            isCompleted={completedModules.includes(selectedModule.id)}
            onBack={handleBack}
            onModuleComplete={handleModuleComplete}
            onQuizAttempt={handleQuizAttempt}
          />
        )}

        {showSimulator && <Simulator onBack={handleBack} />}

        {showAboutPage && <AboutPage onBack={handleBack} />}

        {showDashboard && (
          <Dashboard modules={modules} quizStats={quizStats} onBack={handleBack} />
        )}

        {showAssistant && (
          <AIAssistant modules={modules} onBack={handleBack} onOpenModule={handleSelectModule} />
        )}
      </main>

      {!showAboutPage && (
        <footer className="app-footer">
          <p>
            Dibuat oleh <strong>Tim STEMSI</strong> untuk lomba web — tema
            pembelajaran teknologi AI
          </p>
          <button className="about-toggle" onClick={() => setView('about')}>
            Tentang Kami
          </button>
        </footer>
      )}
    </div>
  )
}

export default App
