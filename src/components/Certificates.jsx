import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { Award, CheckCircle2, ExternalLink, ShieldCheck, X } from 'lucide-react'

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null)

  const certifications = [
    {
      id: 'fcc-js',
      title: 'JavaScript Algorithms and Data Structures',
      provider: 'freeCodeCamp',
      date: '2024',
      credentialId: 'FCC-JS-2024-JEZZ',
      link: 'https://www.freecodecamp.org/certification/fcc-jamal-ezziouani/javascript-algorithms-and-data-structures',
      skills: ['ES6+ Syntax', 'Data Structures', 'Algorithm Scripting', 'Object-Oriented Programming', 'Functional Programming'],
      desc: 'Demonstrated mastery of JavaScript fundamentals including algorithmic problem solving, recursion, big-O complexity, regular expressions, and intermediate data structures.'
    },
    {
      id: 'udemy-frontend',
      title: 'Front-End Web Developer Professional Certificate',
      provider: 'Udemy',
      date: '2023',
      credentialId: 'UC-FRONTEND-2023-JE',
      link: 'https://www.udemy.com/certificate/UC-JAMAL-EZZIOUANI-FRONTEND',
      skills: ['React.js Components', 'UI/UX Layout Systems', 'Responsive Web Design', 'Modern JavaScript Tooling'],
      desc: 'Extensive coursework covering modern client-side application design, reactive component lifecycle, Tailwind CSS utility styling, and cross-browser responsiveness.'
    },
    {
      id: 'fcc-rwd',
      title: 'Responsive Web Design Certification',
      provider: 'freeCodeCamp',
      date: '2023',
      credentialId: 'FCC-RWD-2023-JEZZ',
      link: 'https://www.freecodecamp.org/certification/fcc-jamal-ezziouani/responsive-web-design',
      skills: ['Semantic HTML5', 'Advanced CSS3', 'Flexbox & CSS Grid', 'Accessibility (a11y)', 'Media Queries'],
      desc: 'Validated fluency in standard web semantics, mobile-first responsive architecture, fluid typography scales, and W3C accessibility compliance.'
    }
  ]

  return (
    <section id="certificates" className="section bg-surface/30 border-y border-line transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              05 / Certified Credentials
            </span>
            <h2 className="section-title mt-2">
              Verified Certifications
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base leading-relaxed">
              Official course completions and practical assessments validated by recognized international training organizations.
            </p>
          </ScrollAnimationWrapper>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <ScrollAnimationWrapper key={cert.id} animation="fadeUp" delay={i * 0.1}>
              <div className="card p-7 h-full flex flex-col justify-between hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                
                <div>
                  {/* Top line with unboxed metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Award size={20} />
                    </div>
                    
                    {/* Unboxed Verified indicator */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 font-medium">
                      <ShieldCheck size={14} />
                      <span>Verified</span>
                      <span aria-hidden="true" className="text-muted">·</span>
                      <span className="text-muted">{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-content group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-muted mt-1.5">
                    Issued by <span className="text-content font-medium">{cert.provider}</span>
                  </p>

                  <p className="mt-3 text-xs text-muted leading-relaxed line-clamp-3">
                    {cert.desc}
                  </p>

                  {/* Skills (Clean unboxed with separators) */}
                  <div className="mt-4 pt-3 border-t border-line/60">
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-muted">
                      {cert.skills.map((skill, idx) => (
                        <span key={skill} className="flex items-center gap-2">
                          <span className="text-content/80">{skill}</span>
                          {idx < cert.skills.length - 1 && <span className="text-line">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="text-xs font-semibold text-content hover:text-primary transition"
                  >
                    View Details
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-primary hover:underline"
                  >
                    <span>Authenticate</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-lg rounded-2xl bg-surface border border-line shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-5 right-5 p-2 rounded-lg border border-line text-muted hover:text-content"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 font-semibold mb-2">
              <ShieldCheck size={16} />
              <span>OFFICIAL CERTIFIED CREDENTIAL</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-content pr-8">
              {activeCert.title}
            </h3>

            <div className="mt-3 text-sm text-muted font-mono flex items-center gap-2">
              <span>Organization: <strong className="text-content">{activeCert.provider}</strong></span>
              <span>·</span>
              <span>Year: <strong className="text-content">{activeCert.date}</strong></span>
            </div>

            <p className="mt-4 text-sm text-muted leading-relaxed">
              {activeCert.desc}
            </p>

            <div className="mt-5 pt-4 border-t border-line">
              <span className="text-xs uppercase font-mono text-muted tracking-wider block mb-2">
                Validated Competencies
              </span>
              <ul className="space-y-1.5 text-xs text-content">
                {activeCert.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
              <a
                href={activeCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <span>Verify on {activeCert.provider}</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 text-xs font-semibold text-muted hover:text-content"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}