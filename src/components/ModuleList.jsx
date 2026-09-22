import ProgressBar from './ProgressBar.jsx'

function groupBySection(modules) {
  const groups = []
  modules.forEach((mod) => {
    const lastGroup = groups[groups.length - 1]
    if (lastGroup && lastGroup.section === mod.section) {
      lastGroup.items.push(mod)
    } else {
      groups.push({ section: mod.section, items: [mod] })
    }
  })
  return groups
}

function ModuleList({ modules, completedModules, onSelectModule, onSelectSimulator, onSelectDashboard }) {
  const groups = groupBySection(modules)

  return (
    <div className="module-list view-transition">
      <ProgressBar
        value={completedModules.length}
        max={modules.length}
        label="Progress belajar kamu"
      />

      {groups.map((group) => (
        <div className="module-section" key={group.section}>
          <h2 className="module-section-title">{group.section}</h2>
          <div className="module-grid">
            {group.items.map((mod, index) => {
              const isCompleted = completedModules.includes(mod.id)
              return (
                <div className="module-item" key={mod.id}>
                  <div className="module-node">
                    <span className={`node-dot ${isCompleted ? 'node-dot-done' : ''}`}>
                      {isCompleted ? '✓' : index + 1}
                    </span>
                    {index < group.items.length - 1 && <span className="node-connector" />}
                  </div>

                  <button
                    className={`module-card ${isCompleted ? 'module-card-completed' : ''}`}
                    onClick={() => onSelectModule(mod.id)}
                  >
                    <span className="module-layer-tag">{mod.layer} layer</span>
                    <h3>{mod.title}</h3>
                    <p>{mod.summary}</p>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      <div className="module-section">
        <h2 className="module-section-title">Bonus</h2>
        <div className="module-grid">
          <div className="module-item">
            <div className="module-node">
              <span className="node-dot node-dot-bonus">★</span>
            </div>

            <button className="module-card module-card-bonus" onClick={onSelectSimulator}>
              <span className="module-layer-tag">Coba sendiri</span>
              <h3>Simulator: AI Sedang Belajar</h3>
              <p>Klik untuk menambah titik data, lalu lihat AI menyesuaikan garis prediksinya secara langsung.</p>
            </button>
          </div>

          <div className="module-item">
            <div className="module-node">
              <span className="node-dot node-dot-bonus">📊</span>
            </div>

            <button className="module-card module-card-bonus" onClick={onSelectDashboard}>
              <span className="module-layer-tag">Progress kamu</span>
              <h3>Statistik Kuis</h3>
              <p>Lihat skor, persentase, dan modul tercepat yang sudah kamu selesaikan.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleList
