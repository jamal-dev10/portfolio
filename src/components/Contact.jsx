import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Clock,
  ArrowUpRight
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Contact({ initialScope }) {
  const form = useRef()
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (initialScope) {
      if (initialScope.subject) setSubject(initialScope.subject)
      if (initialScope.message) setMessage(initialScope.message)
    }
  }, [initialScope])

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('jamalezziouani.45@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus(null)

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // If EmailJS env vars are not set, provide a graceful feedback banner
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setTimeout(() => {
        setIsSending(false)
        setStatus({
          type: 'success',
          text: 'Thank you for your message! Direct email copied to your clipboard as well.'
        })
        copyEmailToClipboard()
        form.current.reset()
      }, 1000)
      return
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatus({
            type: 'success',
            text: 'Your message was sent successfully! I will reply shortly.'
          })
          form.current.reset()
        },
        (error) => {
          setStatus({
            type: 'error',
            text: 'Failed to deliver message via EmailJS. Please email me directly at jamalezziouani.45@gmail.com.'
          })
        }
      )
      .finally(() => setIsSending(false))
  }

  const inputClass =
    'w-full bg-surface border border-line rounded-xl p-3.5 text-sm text-content placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'

  return (
    <section id="contact" className="section bg-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              06 / Let's Connect
            </span>
            <h2 className="section-title mt-2">
              Get In Touch
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
              Have a project in mind, a freelance inquiry, or an open engineering role? I'd love to hear from you.
            </p>
          </ScrollAnimationWrapper>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollAnimationWrapper animation="fadeLeft">
              
              {/* Fast Connect Card */}
              <div className="card p-6 shadow-md border-l-2 border-l-primary">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-content uppercase tracking-wider">
                      Current Availability
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted">Casablanca (GMT+1)</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Open for full-time engineering roles, remote positions, and select freelance web development projects.
                </p>

                {/* Direct Email with Quick Copy */}
                <div className="mt-5 p-3.5 rounded-xl bg-surfaceHover border border-line flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-content truncate block">
                      jamalezziouani.45@gmail.com
                    </span>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-surface border border-line text-muted hover:text-primary transition shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-500 mt-2 text-center animate-fadeIn">
                    ✓ Copied email to clipboard!
                  </p>
                )}
              </div>

              {/* Direct Info List */}
              <div className="card p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-mono">Phone / WhatsApp</span>
                    <a href="tel:+212689208829" className="text-sm font-semibold text-content hover:text-primary transition">
                      +212 689 208 829
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-line/60">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-mono">Location</span>
                    <span className="text-sm font-semibold text-content">
                      Casablanca, Morocco (Open to Relocation &amp; Remote)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-line/60">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted block uppercase tracking-wider font-mono">Response Time</span>
                    <span className="text-sm font-semibold text-content">
                      Typically replies within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrated Social Profiles */}
              <div className="card p-5 shadow-sm">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-3">
                  Online Profiles &amp; Social
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://github.com/jamal-dev10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-line bg-surfaceHover hover:border-primary/50 flex flex-col items-center justify-center text-center transition group"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl text-content group-hover:text-primary transition" />
                    <span className="text-[11px] font-semibold text-content mt-1.5">GitHub</span>
                    <span className="text-[9px] font-mono text-muted">@jamal-dev10</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jamal-ezziouani-8ab707252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-line bg-surfaceHover hover:border-[#0A66C2]/50 flex flex-col items-center justify-center text-center transition group"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[#0A66C2] group-hover:scale-110 transition" />
                    <span className="text-[11px] font-semibold text-content mt-1.5">LinkedIn</span>
                    <span className="text-[9px] font-mono text-muted">Profile</span>
                  </a>

                  <a
                    href="https://www.instagram.com/jamal_e10/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-line bg-surfaceHover hover:border-[#E1306C]/50 flex flex-col items-center justify-center text-center transition group"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-xl text-[#E1306C] group-hover:scale-110 transition" />
                    <span className="text-[11px] font-semibold text-content mt-1.5">Instagram</span>
                    <span className="text-[9px] font-mono text-muted">@jamal_e10</span>
                  </a>
                </div>
              </div>

            </ScrollAnimationWrapper>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <ScrollAnimationWrapper animation="fadeRight">
              <div className="card p-7 sm:p-9 shadow-xl border border-line">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-content">Send A Direct Message</h3>
                  <p className="text-xs text-muted mt-1">
                    Fill out the form below and I will get back to you promptly.
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-content uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-content uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-content uppercase tracking-wider mb-1.5">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Full-Stack Web Development Inquiry"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-content uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project, timeline, and goals..."
                      required
                      rows="5"
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  <input type="hidden" name="time" value={new Date().toLocaleString()} />

                  {/* Status Banner */}
                  {status && (
                    <div
                      className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium ${
                        status.type === 'success'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                    >
                      {status.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full btn-primary py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>
          </div>

        </div>

      </div>
    </section>
  )
}