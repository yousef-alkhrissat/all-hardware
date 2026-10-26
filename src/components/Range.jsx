import { useCallback } from 'react'
import {
  CpuIcon, GpuIcon, RamIcon, SsdIcon, BoardIcon,
  FanIcon, PsuIcon, CaseIcon, PeripheralIcon,
} from './icons.jsx'

const CATEGORIES = [
  { id: 'cpu', name: 'Processors', line: 'The brain of every build. Desktop and workstation chips for gaming, creating and everything between.', Icon: CpuIcon, tone: 'blue', feature: true },
  { id: 'gpu', name: 'Graphics cards', line: 'Frames, pixels and raw parallel muscle.', Icon: GpuIcon, tone: 'red' },
  { id: 'ram', name: 'Memory', line: 'Fast, stable, ready to multitask.', Icon: RamIcon, tone: 'blue' },
  { id: 'ssd', name: 'Storage', line: 'Room for everything, loaded in a blink.', Icon: SsdIcon, tone: 'red' },
  { id: 'mb', name: 'Motherboards', line: 'The foundation that ties it all together — every socket, slot and header.', Icon: BoardIcon, tone: 'red' },
  { id: 'psu', name: 'Power supplies', line: 'Clean, steady power you never think about.', Icon: PsuIcon, tone: 'blue' },
  { id: 'cool', name: 'Cooling', line: 'Air, liquid, quiet or loud — keep the heat in check.', Icon: FanIcon, tone: 'blue' },
  { id: 'case', name: 'Cases', line: 'A home worth showing off.', Icon: CaseIcon, tone: 'red' },
  { id: 'peri', name: 'Peripherals', line: 'Keyboards, mice and the gear you actually touch.', Icon: PeripheralIcon, tone: 'red' },
]

export default function Range() {
  // Spotlight that follows the pointer inside each card.
  const onMove = useCallback((e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, [])

  return (
    <section className="section range" id="range">
      <div className="container">
        <div className="section-head">
          <p className="label" data-reveal>
            <span className="label-line" /> The range
          </p>
          <h2 className="section-title" data-reveal>
            Everything inside the box.<br />
            <span className="t-dim">And the box, too.</span>
          </h2>
        </div>

        <div className="bento">
          {CATEGORIES.map(({ id, name, line, Icon, tone, feature }, i) => (
            <article
              key={id}
              className={`card card--${tone} ${feature ? 'card--feature' : ''}`}
              style={{ gridArea: id, '--d': `${(i % 4) * 70}ms` }}
              onPointerMove={onMove}
              data-reveal
            >
              <div className="card-glow" aria-hidden="true" />
              <div className="card-icon">
                <Icon />
              </div>
              <div className="card-body">
                <h3>{name}</h3>
                <p>{line}</p>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
