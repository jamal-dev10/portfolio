import React, { useState, useEffect, useRef } from 'react'
import { X, Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react'

export default function TerminalModal({ isOpen, onClose, onToggleTheme }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Jamal Ezziouani — Developer Shell v2.4.0 (x86_64-casablanca-linux)'
    },
    {
      type: 'system',
      text: 'Type "help" to see available commands, or "projects" to view active builds.'
    }
  ])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  if (!isOpen) return null

  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }]

    switch (cmd) {
      case 'help':
      case '?':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • about       - Overview of background, education & location
  • skills      - Core tech stack (Frontend, Backend, Databases)
  • projects    - List featured production projects & live links
  • experience  - Summary of professional internships
  • education   - Academic diplomas & certifications
  • contact     - Contact details (Email, Phone, WhatsApp)
  • theme       - Toggle between Dark and Light mode
  • clear       - Clear terminal window
  • exit        - Close the developer terminal`
        })
        break

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Jamal Ezziouani — Full-Stack Developer based in Casablanca, Morocco.
Holder of a DTS in Digital Development (ISTA CFPMS) and a Bachelor's in Biology (Univ. Hassan II).
Specializes in building modern web applications with React, Next.js, Laravel, PHP, and Node.js.`
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Frontend]  React.js, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3
[Backend]   PHP, Laravel, Node.js, Express, Python, RESTful APIs
[Database]  MySQL, Database Schema Normalization
[Dev Tools] Git, GitHub, Postman, Vite, Vercel, npm`
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. Admin Dashboard Panel    -> https://jamal-dashboard.vercel.app
2. FitFlex Fitness App        -> https://fitflex-demo.vercel.app
3. IPTV LITE Landing Page     -> https://iptv-lite-demo.vercel.app
4. WeatherScope Forecast App  -> https://skycast-weather.vercel.app
5. Smart Parking Platform     -> https://smart-parking-demo.vercel.app
6. Food Lover Restaurant      -> https://food-lover-demo.vercel.app`
        })
        break

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `[Aug-Sep 2023] Full-Stack Developer Intern @ Flow (Remote)
  - Built e-commerce web platform for electric bikes (WooCommerce/PHP/MySQL)

[Apr-May 2023] Full-Stack Developer Intern @ Obl Engagement (Casablanca)
  - Rebuilt real estate rental portal frontend (React/Node.js/Tailwind/MySQL)`
        })
        break

      case 'education':
        newHistory.push({
          type: 'output',
          text: `• 2024: DTS en Développement Digital — ISTA CFPMS (OFPPT), Casablanca
• 2022: Licence (Bachelor) in Biology — Université Hassan II, Casablanca
• Certifications: freeCodeCamp JavaScript & Responsive Web Design, Udemy Front-End`
        })
        break

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    jamalezziouani.45@gmail.com
Phone:    +212 689 208 829
Location: Casablanca, Morocco
GitHub:   https://github.com/jamal-dev10
LinkedIn: https://www.linkedin.com/in/jamal-ezziouani-8ab707252/`
        })
        break

      case 'theme':
        if (onToggleTheme) onToggleTheme()
        newHistory.push({
          type: 'output',
          text: `Toggled application color theme.`
        })
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      case 'exit':
      case 'quit':
        onClose()
        return

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        })
        break
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-[520px] rounded-2xl bg-[#0e0e12] border border-zinc-800 text-zinc-200 shadow-2xl flex flex-col overflow-hidden font-mono text-xs sm:text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#16161d] border-b border-zinc-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-zinc-400 font-medium flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-primary" />
              jamal@casablanca-dev:~
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-zinc-800 hover:text-white transition"
              aria-label="Close terminal"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2.5 font-mono">
          {history.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">
              {line.type === 'user' && (
                <span className="text-emerald-400 font-semibold">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-zinc-400">{line.text}</span>
              )}
              {line.type === 'output' && (
                <span className="text-zinc-200">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-red-400">{line.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Row */}
        <form onSubmit={handleCommand} className="p-3 bg-[#13131a] border-t border-zinc-800 flex items-center gap-2">
          <span className="text-primary font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'contact'..."
            className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-600 outline-none text-xs sm:text-sm font-mono"
            autoFocus
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-primary hover:text-white text-zinc-400 text-xs transition flex items-center gap-1"
          >
            <span>Run</span>
            <CornerDownLeft size={12} />
          </button>
        </form>
      </div>
    </div>
  )
}
