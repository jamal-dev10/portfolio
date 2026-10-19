import { useEffect, useState, useRef } from 'react'
import useTheme from '../hooks/useTheme'
import useCasablancaTime from '../hooks/useCasablancaTime'
import { Sun, Moon, Menu, X, ArrowUpRight, Download, Palette, Clock, Calculator } from 'lucide-react'

export default function Navbar({ onOpenEstimator }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const { theme, toggle, accent, setAccent, accents } = useTheme()
  const { time, isWorkingHour } = useCasablancaTime()
  const paletteRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'certificates', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setPaletteOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#resume', id: 'resume' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark + Live Casablanca Time Badge */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="group text-lg font-bold tracking-tight text-content whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              JE
            </span>
            <span className="font-semibold tracking-tight">Jamal Ezziouani</span>
          </a>

          {/* Dynamic Live Casablanca Clock */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface border border-line text-[11px] font-mono text-muted">
            <span className={`w-1.5 h-1.5 rounded-full ${isWorkingHour ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <span>Casablanca</span>
            <span className="text-content font-bold">{time || '00:00:00'}</span>
          </div>
        </div>

        {/* Zone 2: Single-line Text Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-medium text-muted">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 relative ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'hover:text-content hover:bg-surface/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Zone 3: Actions + Estimator + Dynamic Accent Switcher + Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Dynamic Project Estimator Trigger */}
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-line bg-surface hover:bg-surfaceHover text-content transition-colors"
              title="Launch dynamic project scope & timeline calculator"
            >
              <Calculator size={13} className="text-primary" />
              <span>Estimator</span>
            </button>
          )}

          {/* Accent Color Palette Switcher */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="p-2 rounded-lg border border-line bg-surface/70 hover:bg-surfaceHover text-muted hover:text-content transition-colors"
              title="Change theme accent color"
              aria-label="Change theme accent color"
            >
              <Palette size={16} className="text-primary" />
            </button>

            {paletteOpen && (
              <div className="absolute right-0 mt-2 p-3 w-48 rounded-2xl bg-surface border border-line shadow-2xl z-50 animate-fadeIn">
                <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mb-2">
                  Accent Color
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(accents).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setAccent(key)
                        setPaletteOpen(false)
                      }}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition ${
                        accent === key ? 'border-primary bg-primary/10 shadow-sm' : 'border-line hover:border-muted'
                      }`}
                      title={item.name}
                    >
                      <span className={`w-4 h-4 rounded-full ${item.preview}`} />
                      <span className="text-[10px] font-semibold text-content">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme Toggle (Dark/Light) */}
          <button
            onClick={toggle}
            aria-label="Toggle dark/light theme"
            className="p-2 rounded-lg border border-line bg-surface/70 hover:bg-surfaceHover text-muted hover:text-content transition-colors"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Download Resume Button */}
          <a
            href="/CV_Jamal_Ezziouani_EN.pdf"
            download
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primaryDark transition-all whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Resume</span>
            <Download size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border border-line rounded-lg text-content bg-surface/70"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="md:hidden border-b border-line bg-bg/95 backdrop-blur-lg px-6 py-4 animate-fadeIn">
          {/* Mobile Casablanca Time Bar */}
          <div className="flex items-center justify-between py-2 border-b border-line/60 mb-3 text-xs font-mono text-muted">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isWorkingHour ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span>Casablanca Local:</span>
            </span>
            <span className="font-bold text-content">{time || '00:00:00'}</span>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted hover:text-content hover:bg-surface'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="opacity-50" />
              </a>
            ))}
            
            {onOpenEstimator && (
              <button
                onClick={() => {
                  setOpen(false)
                  onOpenEstimator()
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg border border-line bg-surface text-content mt-2"
              >
                <Calculator size={14} className="text-primary" />
                <span>Launch Project Estimator</span>
              </button>
            )}

            <div className="pt-2 border-t border-line mt-2 flex flex-col gap-2">
              <a
                href="/CV_Jamal_Ezziouani_EN.pdf"
                download
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-lg bg-primary text-white"
              >
                <span>Download Resume (PDF)</span>
                <Download size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}