function formatDuration(seconds) {
  if (seconds === null || seconds === undefined) return '-'
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return m > 0 ? `${m}m ${s}d` : `${s} detik`
}

function Dashboard({ modules, quizStats, onBack }) {
  const attempts = modules
    .map((mod) => ({ module: mod, stat: quizStats[mod.id] }))
    .filter((entry) => entry.stat)

  const totalScore = attempts.reduce((sum, entry) => sum + entry.stat.score, 0)
  const totalPossible = attempts.reduce((sum, entry) => sum + entry.stat.total, 0)
  const overallPercent = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0

  const timedAttempts = attempts.filter((entry) => entry.stat.durationSeconds !== null)
  const fastest = timedAttempts.reduce((best, entry) => {
    if (!best) return entry
    return entry.stat.durationSeconds < best.stat.durationSeconds ? entry : best
  }, null)

  return (
    <div className="module-detail view-transition">
      <button className="btn-back" onClick={onBack}>
        ← Kembali ke Daftar Modul
      </button>

      <h2>Statistik Kuis Kamu</h2>

      {attempts.length === 0 ? (
        <p className="module-content">
          Belum ada kuis yang dikerjakan. Selesaikan minimal satu kuis untuk melihat
          statistiknya di sini.
        </p>
      ) : (
        <>
          <div className="stats-summary">
            <div className="stat-card">
              <span className="stat-card-label">Total Skor</span>
              <span className="stat-card-value">{totalScore} / {totalPossible}</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Persentase Keseluruhan</span>
              <span className="stat-card-value">{overallPercent}%</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Kuis Dikerjakan</span>
              <span className="stat-card-value">{attempts.length} / {modules.length}</span>
            </div>
            {fastest && (
              <div className="stat-card">
                <span className="stat-card-label">Modul Tercepat</span>
                <span className="stat-card-value stat-card-value-small">
                  {fastest.module.title}
                </span>
                <span className="stat-card-sub">{formatDuration(fastest.stat.durationSeconds)}</span>
              </div>
            )}
          </div>

          <div className="stats-list">
            {attempts.map((entry) => {
              const percent = Math.round((entry.stat.score / entry.stat.total) * 100)
              const passed = percent >= 60
              return (
                <div className="stats-row" key={entry.module.id}>
                  <div className="stats-row-main">
                    <span className="stats-row-title">{entry.module.title}</span>
                    <span className={`stats-row-badge ${passed ? 'stats-row-badge-pass' : 'stats-row-badge-fail'}`}>
                      {passed ? 'Lulus' : 'Belum Lulus'}
                    </span>
                  </div>
                  <div className="stats-row-details">
                    <span>Skor: {entry.stat.score}/{entry.stat.total} ({percent}%)</span>
                    <span>Waktu: {formatDuration(entry.stat.durationSeconds)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
