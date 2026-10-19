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
import ProjectEstimatorModal from './components/ProjectEstimatorModal'
import useTheme from './hooks/useTheme'

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false)
  const [activeSkillFilter, setActiveSkillFilter] = useState('')
  const [initialScope, setInitialScope] = useState(null)
  
  const { toggle } = useTheme()

  const handleSelectSkill = (skill) => {
    setActiveSkillFilter(skill)
  }

  const handleSelectScope = (scope) => {
    setInitialScope(scope)
  }

  return (
    <div className="min-h-screen bg-bg text-content selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />
        <About />
        <Skills onSelectSkill={handleSelectSkill} />
        <Projects
          activeTagFilter={activeSkillFilter}
          onClearTagFilter={() => setActiveSkillFilter('')}
        />
        <Resume />
        <Certificates />
        <Social />
        <Contact initialScope={initialScope} />
      </main>

      <Footer />
      <ScrollToTopButton />

      {/* Interactive Developer CLI Terminal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleTheme={toggle}
      />

      {/* Dynamic Project Scope & Timeline Estimator */}
      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectScope={handleSelectScope}
      />
    </div>
  )
}