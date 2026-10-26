const POINTS = [
  {
    title: 'Genuine, always',
    text: 'Authentic parts from the makers you trust. Nothing grey, nothing questionable.',
  },
  {
    title: 'Builders, not bots',
    text: 'Advice from people who’ve put real machines together — and taken them apart again.',
  },
  {
    title: 'Here after the box opens',
    text: 'Questions, troubleshooting, upgrades down the line. We stick around.',
  },
]

function Lock() {
  return (
    <svg className="lock" viewBox="0 0 120 150" aria-hidden="true">
      <defs>
        <linearGradient id="lockSplit" x1="0" x2="1">
          <stop offset="0.5" stopColor="var(--blue)" />
          <stop offset="0.5" stopColor="var(--red)" />
        </linearGradient>
      </defs>
      <path
        className="lock-shackle"
        d="M32 70V44a28 28 0 0 1 56 0v26"
        fill="none"
        stroke="url(#lockSplit)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <rect x="14" y="66" width="92" height="76" rx="16" fill="url(#lockSplit)" />
      <circle cx="60" cy="98" r="10" fill="var(--bg)" />
      <path d="M55 102h10l-2 20h-6z" fill="var(--bg)" />
    </svg>
  )
}

export default function Promise() {
  return (
    <section className="section promise" id="promise">
      <div className="container promise-grid">
        <div className="promise-visual" data-reveal>
          <div className="promise-halo" aria-hidden="true" />
          <Lock />
        </div>
        <div>
          <p className="label" data-reveal>
            <span className="label-line" /> Our promise
          </p>
          <h2 className="section-title" data-reveal>
            Locked in.<br />
            <span className="t-dim">Trust is part of the build.</span>
          </h2>
          <ul className="promise-list">
            {POINTS.map((p, i) => (
              <li key={p.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <span className="promise-tick" aria-hidden="true">
                  <svg viewBox="0 0 16 16"><path d="M3 8.5 6.5 12 13 4.5" /></svg>
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
