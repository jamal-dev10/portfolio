import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme'
import { Sun, Moon, Menu, X, ArrowUpRight, Download } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggle } = useTheme()

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

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
          ? 'bg-bg/85 backdrop-blur-md border-b border-line shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="group text-lg font-bold tracking-tight text-content whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            JE
          </span>
          <span className="font-semibold tracking-tight">Jamal Ezziouani</span>
        </a>

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

        {/* Zone 3: 1 Primary Action + Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/CV_Jamal_Ezziouani_EN.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primaryDark transition-all whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Resume</span>
            <Download size={14} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-line bg-surface/70 hover:bg-surfaceHover text-muted hover:text-content transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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