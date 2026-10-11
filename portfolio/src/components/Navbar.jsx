import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = 'px-3 py-2 rounded-lg hover:text-primary'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition ${
        scrolled
          ? 'bg-bg/70 backdrop-blur border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="text-2xl font-extrabold">
          <span className="text-primary">J</span>EZZ
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <a className={link} href="#home">Home</a>
          <a className={link} href="#about">About</a>
          <a className={link} href="#skills">Skills</a>
          <a className={link} href="#resume">Resume</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle (desktop + mobile) */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-line bg-surface hover:scale-110 transition"
          >
            {theme === 'dark' ? (
              /* Sun */
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              /* Moon */
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Button Mobile */}
          <button
            className="md:hidden p-2 border border-line rounded-lg"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-line bg-bg/90">
          <nav className="max-w-110rem mx-auto px-4 py-3 grid gap-1">
            <a className={link} href="#home" onClick={() => setOpen(false)}>Home</a>
            <a className={link} href="#about" onClick={() => setOpen(false)}>About</a>
            <a className={link} href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a className={link} href="#resume" onClick={() => setOpen(false)}>Resume</a>
            <a className={link} href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a className={link} href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}