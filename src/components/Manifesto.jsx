import { useEffect, useRef } from 'react'

// Words marked with ^ glow blue, words marked with * glow red.
const TEXT =
  'A computer is more than the sum of its parts — but the parts ^matter. ' +
  'Every chip, board and cable at AllHardware is chosen by people who *build, ' +
  '*tinker and *obsess over machines, just like you. No noise. No guesswork. ' +
  'Just ^honest ^hardware for people who care what’s inside.'

const WORDS = TEXT.split(' ').map((raw) => {
  if (raw.startsWith('^')) return { w: raw.slice(1), tone: 'blue' }
  if (raw.startsWith('*')) return { w: raw.slice(1), tone: 'red' }
  return { w: raw }
})

export default function Manifesto() {
  const ref = useRef(null)

  // Light words up one by one as the paragraph passes through the viewport.
  useEffect(() => {
    const el = ref.current
    const words = el.querySelectorAll('.mf-word')
    let raf
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)))
      const lit = Math.round(progress * words.length)
      words.forEach((w, i) => w.classList.toggle('is-lit', i < lit))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="section manifesto" id="about">
      <div className="container">
        <p className="label" data-reveal>
          <span className="label-line" /> Who we are
        </p>
        <p className="mf-text" ref={ref}>
          {WORDS.map(({ w, tone }, i) => (
            <span key={i} className={`mf-word ${tone ? `mf-word--${tone}` : ''}`}>
              {w}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
