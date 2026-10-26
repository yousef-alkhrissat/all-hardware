import { useEffect, useRef } from 'react'
import Circuit from './Circuit.jsx'

function Headline({ tone }) {
  return (
    <div className={`hero-copy hero-copy--${tone}`}>
      <p className="eyebrow">
        <span className="dot" /> Computer hardware, all of it
      </p>
      <h1 className="hero-title">
        <span className="line">Every part.</span>
        <span className="line">Every build.</span>
      </h1>
      <p className="hero-sub">
        From the processor at its heart to the last fan that keeps it cool —
        AllHardware is where great machines begin.
      </p>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)

  // The divider between the blue and red worlds follows the pointer, eased.
  // With no pointer (touch, idle) it drifts on its own.
  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let target = 50
    let current = 50
    let lastMove = 0
    let raf

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      target = Math.min(92, Math.max(8, ((e.clientX - r.left) / r.width) * 100))
      lastMove = performance.now()
    }

    const tick = (t) => {
      if (!reduce && t - lastMove > 2600) {
        target = 50 + Math.sin(t / 1900) * 22
      }
      current += (target - current) * 0.08
      el.style.setProperty('--split', `${current.toFixed(2)}%`)
      raf = requestAnimationFrame(tick)
    }

    el.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      el.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={ref}>
      <Circuit />
      <div className="hero-layer hero-layer--blue">
        <Headline tone="blue" />
      </div>
      <div className="hero-layer hero-layer--red" aria-hidden="true">
        <Headline tone="red" />
      </div>
      <div className="hero-divider" aria-hidden="true">
        <span className="hero-divider-knob" />
      </div>

      <div className="hero-corner hero-corner--left" aria-hidden="true">
        <span className="t-blue">◐ Cool head</span>
        <span>precision · certainty</span>
      </div>
      <div className="hero-corner hero-corner--right" aria-hidden="true">
        <span className="t-red">Hot blood ◑</span>
        <span>performance · passion</span>
      </div>
      <a href="#about" className="hero-scroll" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
