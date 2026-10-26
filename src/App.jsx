import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Manifesto from './components/Manifesto.jsx'
import Range from './components/Range.jsx'
import Duality from './components/Duality.jsx'
import OurPromise from './components/Promise.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Range />
        <Duality />
        <OurPromise />
      </main>
      <Footer />
    </>
  )
}
