import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-line bg-surface/50 text-content py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-line/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center font-mono font-bold text-sm">
              JE
            </span>
            <div>
              <p className="font-bold text-content leading-tight">Jamal Ezziouani</p>
              <p className="text-xs text-muted font-mono">Full-Stack Digital Developer</p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-muted">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#resume" className="hover:text-primary transition-colors">Experience</a>
            <a href="#certificates" className="hover:text-primary transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Back to top link */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-content transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <p>© {new Date().getFullYear()} Jamal Ezziouani. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
            <span>·</span>
            <span>Casablanca, Morocco</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
