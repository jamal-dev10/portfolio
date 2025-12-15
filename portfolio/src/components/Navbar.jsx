import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
          ? 'bg-black/70 backdrop-blur border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* 🔥 LOGO MODIFIÉ */}
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

        {/* Button Mobile */}
        <button
          className="md:hidden p-2 border border-zinc-700 rounded-lg"
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

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/90">
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
