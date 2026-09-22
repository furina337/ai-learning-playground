import team from '../data/team.js'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function AboutBackground() {
  return (
    <svg className="about-bg" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g className="about-bg-octagons">
        <polygon points="60,10 90,10 110,30 110,60 90,80 60,80 40,60 40,30" />
        <polygon points="140,60 165,60 182,77 182,102 165,119 140,119 123,102 123,77" />
        <polygon points="20,120 40,120 53,133 53,153 40,166 20,166 7,153 7,133" />
      </g>
      <g className="about-bg-network">
        <line x1="560" y1="60" x2="650" y2="40" />
        <line x1="560" y1="60" x2="650" y2="110" />
        <line x1="560" y1="140" x2="650" y2="110" />
        <line x1="560" y1="140" x2="650" y2="180" />
        <line x1="650" y1="40" x2="730" y2="80" />
        <line x1="650" y1="110" x2="730" y2="80" />
        <line x1="650" y1="110" x2="730" y2="150" />
        <line x1="650" y1="180" x2="730" y2="150" />
        <circle cx="560" cy="60" r="5" />
        <circle cx="560" cy="140" r="5" />
        <circle cx="650" cy="40" r="5" />
        <circle cx="650" cy="110" r="5" />
        <circle cx="650" cy="180" r="5" />
        <circle cx="730" cy="80" r="5" />
        <circle cx="730" cy="150" r="5" />
      </g>
    </svg>
  )
}

function AboutPage({ onBack }) {
  return (
    <div className="about-page view-transition">
      <AboutBackground />

      <button className="btn-back" onClick={onBack}>
        ← Kembali ke Beranda
      </button>

      <div className="about-hero">
        <h2>Tentang Kami</h2>
        <div className="about-description">
          <p>
            Ini adalah bagian dari lomba web dengan tema pembelajaran teknologi AI.
            Kami percaya pemahaman dasar AI — termasuk sisi etika dan risikonya —
            penting dimiliki semua orang, tidak hanya praktisi teknologi.
          </p>
        </div>
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className={`team-card team-card-${index}`} key={member.name}>
            <div className="team-card-avatar">{initials(member.name)}</div>
            <div className="team-card-body">
              <h3>{member.name}</h3>
              <p className="team-card-school">{member.detail}</p>
              <span className="team-card-skill">{member.skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
