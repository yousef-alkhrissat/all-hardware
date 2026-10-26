const ITEMS = [
  'Processors', 'Graphics', 'Memory', 'Storage', 'Motherboards',
  'Cooling', 'Power', 'Cases', 'Peripherals', 'Networking',
]

function Row({ reverse, outline }) {
  const list = [...ITEMS, ...ITEMS]
  return (
    <div className={`marquee-row ${reverse ? 'is-reverse' : ''} ${outline ? 'is-outline' : ''}`}>
      <div className="marquee-track">
        {list.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <svg viewBox="0 0 12 14" className="marquee-glyph" aria-hidden="true">
              <path d="M6 1 11 3v5c0 2.5-2.2 4.3-5 5-2.8-.7-5-2.5-5-5V3z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="marquee" aria-label="What we carry">
      <Row />
      <Row reverse outline />
    </section>
  )
}
