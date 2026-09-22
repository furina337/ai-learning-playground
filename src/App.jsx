import { useEffect, useState } from 'react'
import ModuleList from './components/ModuleList.jsx'
import ModuleDetail from './components/ModuleDetail.jsx'
import Simulator from './components/Simulator.jsx'
import NetworkDiagram from './components/NetworkDiagram.jsx'
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
          <span className="eyebrow">AI Learning Playground</span>
          <h1>Pahami cara kerja kecerdasan buatan, selangkah demi selangkah.</h1>
          <p>
            Enam modul singkat membawamu dari konsep dasar AI, cara kerja neural
            network, sampai ke isu etika dan risikonya — lengkap dengan kuis dan
            simulator interaktif di tiap tahap.
          </p>
        </div>
        <NetworkDiagram />
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
