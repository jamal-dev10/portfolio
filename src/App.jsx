import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Social from './components/Social'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import TerminalModal from './components/TerminalModal'
import useTheme from './hooks/useTheme'

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const { toggle } = useTheme()

  return (
    <div className="min-h-screen bg-bg text-content selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Navbar />

      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certificates />
        <Social />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleTheme={toggle}
      />
    </div>
  )
}