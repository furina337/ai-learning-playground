import { useState } from 'react'

const WIDTH = 400
const HEIGHT = 300
const PADDING = 30

function toSvgX(x) {
  return PADDING + x * (WIDTH - PADDING * 2)
}
function toSvgY(y) {
  return HEIGHT - PADDING - y * (HEIGHT - PADDING * 2)
}
function fromSvgX(px) {
  return (px - PADDING) / (WIDTH - PADDING * 2)
}
function fromSvgY(py) {
  return (HEIGHT - PADDING - py) / (HEIGHT - PADDING * 2)
}

function computeLoss(points, m, b) {
  if (points.length === 0) return 0
  const total = points.reduce((sum, p) => {
    const pred = m * p.x + b
    return sum + (pred - p.y) ** 2
  }, 0)
  return total / points.length
}

function gradientStep(points, m, b, lr) {
  if (points.length === 0) return { m, b }
  let dm = 0
  let db = 0
  points.forEach((p) => {
    const pred = m * p.x + b
    const error = pred - p.y
    dm += error * p.x
    db += error
  })
  dm = (2 * dm) / points.length
  db = (2 * db) / points.length
  return { m: m - lr * dm, b: b - lr * db }
}

function Simulator({ onBack }) {
  const [points, setPoints] = useState([])
  const [m, setM] = useState(0)
  const [b, setB] = useState(0.5)
  const [learningRate, setLearningRate] = useState(0.3)
  const [stepCount, setStepCount] = useState(0)
  const [lossHistory, setLossHistory] = useState([])

  const loss = computeLoss(points, m, b)

  function handleSvgClick(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = event.clientX - rect.left
    const py = event.clientY - rect.top
    const x = Math.min(1, Math.max(0, fromSvgX(px)))
    const y = Math.min(1, Math.max(0, fromSvgY(py)))
    setPoints((prev) => [...prev, { x, y }])
  }

  function handleTrainStep() {
    const result = gradientStep(points, m, b, learningRate)
    setM(result.m)
    setB(result.b)
    setStepCount((prev) => prev + 1)
    setLossHistory((prev) => [...prev.slice(-19), computeLoss(points, result.m, result.b)])
  }

  function handleReset() {
    setPoints([])
    setM(0)
    setB(0.5)
    setStepCount(0)
    setLossHistory([])
  }

  const lineX1 = 0
  const lineY1 = Math.min(1.3, Math.max(-0.3, m * lineX1 + b))
  const lineX2 = 1
  const lineY2 = Math.min(1.3, Math.max(-0.3, m * lineX2 + b))

  return (
    <div className="module-detail">
      <button className="btn-back" onClick={onBack}>
        ← Kembali ke Daftar Modul
      </button>

      <h2>Simulator: Bagaimana AI "Belajar" dari Data</h2>
      <p className="module-content">
        Klik di area grafik untuk menambahkan titik data. Lalu tekan "Latih 1 Langkah"
        berkali-kali dan perhatikan bagaimana garis prediksi perlahan menyesuaikan diri
        supaya semakin dekat dengan titik-titik data — ini adalah inti dari cara kerja
        Machine Learning: meminimalkan selisih (error) antara prediksi dan data asli.
      </p>

      <div className="sim-layout">
        <svg
          className="sim-canvas"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          onClick={handleSvgClick}
        >
          <rect x="0" y="0" width={WIDTH} height={HEIGHT} className="sim-bg" />
          <line
            x1={PADDING}
            y1={HEIGHT - PADDING}
            x2={WIDTH - PADDING}
            y2={HEIGHT - PADDING}
            className="sim-axis"
          />
          <line
            x1={PADDING}
            y1={PADDING}
            x2={PADDING}
            y2={HEIGHT - PADDING}
            className="sim-axis"
          />

          <line
            x1={toSvgX(lineX1)}
            y1={toSvgY(lineY1)}
            x2={toSvgX(lineX2)}
            y2={toSvgY(lineY2)}
            className="sim-fit-line"
          />

          {points.map((p, i) => (
            <circle key={i} cx={toSvgX(p.x)} cy={toSvgY(p.y)} r="5" className="sim-point" />
          ))}

          {points.length === 0 && (
            <text x={WIDTH / 2} y={HEIGHT / 2} textAnchor="middle" className="sim-hint">
              Klik di sini untuk menambah titik data
            </text>
          )}
        </svg>

        <div className="sim-controls">
          <div className="sim-stat">
            <span>Langkah pelatihan</span>
            <strong>{stepCount}</strong>
          </div>
          <div className="sim-stat">
            <span>Loss (error) saat ini</span>
            <strong>{loss.toFixed(4)}</strong>
          </div>

          <label className="sim-slider-label">
            Learning rate: {learningRate.toFixed(2)}
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              value={learningRate}
              onChange={(e) => setLearningRate(parseFloat(e.target.value))}
            />
          </label>

          <button
            className="btn-primary"
            onClick={handleTrainStep}
            disabled={points.length === 0}
          >
            Latih 1 Langkah
          </button>
          <button className="btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {lossHistory.length > 1 && (
        <div className="sim-loss-chart">
          <p className="sim-loss-label">Grafik penurunan loss (20 langkah terakhir)</p>
          <svg viewBox="0 0 400 80" className="sim-loss-svg">
            <polyline
              points={lossHistory
                .map((l, i) => {
                  const maxLoss = Math.max(...lossHistory, 0.01)
                  const x = (i / (lossHistory.length - 1)) * 380 + 10
                  const y = 70 - (l / maxLoss) * 60
                  return `${x},${y}`
                })
                .join(' ')}
              className="sim-loss-line"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Simulator
