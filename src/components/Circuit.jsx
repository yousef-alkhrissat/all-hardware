// Background PCB traces: runs from each edge toward the centre, with
// light pulses travelling along them. Generated once from a fixed seed.
function rng(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const W = 1440
const H = 900

function buildTraces() {
  const rand = rng(7)
  const traces = []
  for (let side = 0; side < 2; side++) {
    for (let i = 0; i < 11; i++) {
      const y0 = 70 + i * 72 + rand() * 30
      const x1 = 120 + rand() * 260
      const bend = (rand() > 0.5 ? 1 : -1) * (30 + rand() * 70)
      const x2 = x1 + Math.abs(bend)
      const x3 = 300 + rand() * 140
      const pts = [
        [0, y0],
        [x1, y0],
        [x2, y0 + bend],
        [x3, y0 + bend],
      ]
      const mapped = side === 0 ? pts : pts.map(([x, y]) => [W - x, y])
      const d = 'M' + mapped.map((p) => p.map((n) => n.toFixed(1)).join(' ')).join(' L')
      traces.push({
        d,
        end: mapped[3],
        tone: side === 0 ? 'blue' : 'red',
        delay: (rand() * 6).toFixed(2),
        dur: (4 + rand() * 4).toFixed(2),
      })
    }
  }
  return traces
}

const TRACES = buildTraces()

export default function Circuit() {
  return (
    <svg
      className="circuit"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width={W} height={H} fill="url(#fade)" />
        </mask>
      </defs>
      <rect width={W} height={H} fill="url(#grid)" className="circuit-grid" mask="url(#gridMask)" />
      {TRACES.map((t, i) => (
        <g key={i} className={`trace trace--${t.tone}`}>
          <path d={t.d} className="trace-base" />
          <path
            d={t.d}
            className="trace-pulse"
            pathLength="100"
            style={{ animationDelay: `${t.delay}s`, animationDuration: `${t.dur}s` }}
          />
          <circle cx={t.end[0]} cy={t.end[1]} r="3.2" className="trace-pad" />
        </g>
      ))}
    </svg>
  )
}
