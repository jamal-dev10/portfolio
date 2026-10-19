import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink, GitBranch, Terminal, Star, ArrowUpRight } from 'lucide-react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Social() {
  const socialCards = [
    {
      name: 'GitHub',
      handle: '@jamal-dev10',
      icon: faGithub,
      url: 'https://github.com/jamal-dev10',
      color: '#ffffff',
      desc: 'Open-source repositories, full-stack experiments, and continuous code commits.',
      stats: '6+ Repositories · Active Contributions',
      highlight: 'Featured: Fitflix, Auto-mobile'
    },
    {
      name: 'LinkedIn',
      handle: 'Jamal Ezziouani',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/jamal-ezziouani-8ab707252/',
      color: '#0A66C2',
      desc: 'Professional career milestones, tech articles, and industry connections.',
      stats: 'Full-Stack Developer · Casablanca',
      highlight: 'Open for Full-Time & Freelance'
    },
    {
      name: 'Instagram',
      handle: '@jamal_e10',
      icon: faInstagram,
      url: 'https://www.instagram.com/jamal_e10/?hl=en',
      color: '#E1306C',
      desc: 'Tech lifestyle, developer workspace setups, and behind-the-scenes moments.',
      stats: 'Personal & Tech Journey',
      highlight: 'Casablanca, Morocco'
    }
  ]

  return (
    <section id="social" className="py-16 bg-surface/30 border-y border-line transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              Digital Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-content mt-1">
              Connect &amp; Collaborate
            </h2>
          </ScrollAnimationWrapper>

          <p className="text-xs sm:text-sm text-muted font-mono">
            Follow my engineering journey across the web
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialCards.map((card, i) => (
            <ScrollAnimationWrapper key={card.name} animation="fadeUp" delay={i * 0.1}>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 h-full flex flex-col justify-between hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-surfaceHover border border-line text-content group-hover:scale-110 transition duration-300"
                      style={{
                        boxShadow: `0 0 16px ${card.color}20`
                      }}
                    >
                      <FontAwesomeIcon icon={card.icon} className="text-2xl" />
                    </div>

                    <div className="p-2 rounded-lg bg-surfaceHover text-muted group-hover:text-primary transition">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-content group-hover:text-primary transition-colors">
                    {card.name}
                  </h3>
                  <span className="text-xs font-mono text-primary font-medium block mt-0.5">
                    {card.handle}
                  </span>

                  <p className="text-xs text-muted leading-relaxed mt-2.5">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>{card.stats}</span>
                </div>
              </a>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}