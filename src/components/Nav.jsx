import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#range">The range</a>
          <a href="#promise">Our promise</a>
        </nav>
        <a href="#range" className="btn btn-ghost nav-cta">
          Explore <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  )
}
