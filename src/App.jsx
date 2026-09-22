import { useEffect, useState } from 'react'
import ModuleList from './components/ModuleList.jsx'
import ModuleDetail from './components/ModuleDetail.jsx'
import Simulator from './components/Simulator.jsx'
import NetworkDiagram from './components/NetworkDiagram.jsx'
import AboutPage from './components/AboutPage.jsx'
import modules from './data/modules.js'
import quizzes from './data/quizzes.js'

const STORAGE_KEY = 'ai-learning-playground-progress'

function App() {
  const [view, setView] = useState('list') // 'list' | moduleId | 'simulator' | 'about'
  const [completedModules, setCompletedModules] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setCompletedModules(JSON.parse(saved))
      } catch (err) {
        setCompletedModules([])
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

  const selectedModule = modules.find((mod) => mod.id === view)
  const showList = view === 'list'
  const showSimulator = view === 'simulator'
  const showAboutPage = view === 'about'

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
          />
        )}

        {selectedModule && (
          <ModuleDetail
            module={selectedModule}
            quizQuestions={quizzes[selectedModule.id]}
            isCompleted={completedModules.includes(selectedModule.id)}
            onBack={handleBack}
            onModuleComplete={handleModuleComplete}
          />
        )}

        {showSimulator && <Simulator onBack={handleBack} />}

        {showAboutPage && <AboutPage onBack={handleBack} />}
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
