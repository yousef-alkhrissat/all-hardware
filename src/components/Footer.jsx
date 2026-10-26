import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta" data-reveal>
          <h2 className="cta-title">
            Your next build<br />starts <em>here.</em>
          </h2>
          <a href="#range" className="btn btn-primary">
            Explore the range <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="footer-bar">
          <Logo />
          <nav aria-label="Footer">
            <a href="#about">About</a>
            <a href="#range">The range</a>
            <a href="#promise">Our promise</a>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} AllHardware</p>
        </div>
      </div>
      <div className="footer-giant" aria-hidden="true">
        <span className="t-blue">ALL</span><span className="t-red">HARDWARE</span>
      </div>
    </footer>
  )
}
