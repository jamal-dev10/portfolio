import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ArrowUpRight, GitBranch, Star, RefreshCw, Radio } from 'lucide-react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Social() {
  const [githubData, setGithubData] = useState({
    repos: 6,
    followers: 1,
    loaded: false,
    updatedAt: null,
  })
  const [liveRepos, setLiveRepos] = useState([])
  const [isSyncing, setIsSyncing] = useState(false)

  const fetchGithub = async () => {
    setIsSyncing(true)
    try {
      const userRes = await fetch('https://api.github.com/users/jamal-dev10')
      if (userRes.ok) {
        const u = await userRes.json()
        setGithubData({
          repos: u.public_repos ?? 6,
          followers: u.followers ?? 1,
          loaded: true,
          updatedAt: new Date().toLocaleTimeString(),
        })
      }

      const reposRes = await fetch('https://api.github.com/users/jamal-dev10/repos?sort=updated&per_page=3')
      if (reposRes.ok) {
        const r = await reposRes.json()
        if (Array.isArray(r)) {
          setLiveRepos(r.slice(0, 3))
        }
      }
    } catch (err) {
      console.warn('GitHub API rate limit or offline, using fallback state', err)
      setGithubData(prev => ({ ...prev, loaded: true }))
    } finally {
      setIsSyncing(false)
    }
  }

  useEffect(() => {
    fetchGithub()
  }, [])

  const socialCards = [
    {
      name: 'GitHub',
      handle: '@jamal-dev10',
      icon: faGithub,
      url: 'https://github.com/jamal-dev10',
      color: '#ffffff',
      desc: 'Open-source repositories, full-stack experiments, and continuous code commits.',
      stats: `${githubData.repos}+ Repositories · ${githubData.followers} Followers`,
      highlight: 'Live GitHub Profile'
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
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
                Digital Footprint
              </span>
              <span className="text-muted text-xs">·</span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500">
                <Radio size={12} className="animate-pulse" />
                Live API Sync
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-content">
              Connect &amp; Collaborate
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchGithub}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface text-xs font-mono text-muted hover:text-content transition"
              title="Refresh live GitHub data"
            >
              <RefreshCw size={12} className={isSyncing ? 'animate-spin text-primary' : ''} />
              <span>{isSyncing ? 'Syncing...' : 'Sync GitHub'}</span>
            </button>
          </div>
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
                  <span className="font-semibold text-content">{card.stats}</span>
                  <span className="text-primary">{card.highlight}</span>
                </div>
              </a>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Live GitHub Public Repos Feed */}
        {liveRepos.length > 0 && (
          <div className="mt-8 pt-6 border-t border-line">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-semibold text-muted uppercase tracking-wider flex items-center gap-1.5">
                <GitBranch size={13} className="text-primary" />
                Live Repositories from GitHub API (@jamal-dev10)
              </span>
              <a
                href="https://github.com/jamal-dev10?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-primary hover:underline flex items-center gap-1"
              >
                <span>View all on GitHub</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {liveRepos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface border border-line hover:border-primary/40 hover:bg-surfaceHover transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-content font-bold text-xs truncate">
                      <span className="truncate group-hover:text-primary transition">{repo.name}</span>
                      <ArrowUpRight size={12} className="text-muted shrink-0" />
                    </div>
                    <p className="text-[11px] text-muted line-clamp-2 mt-1">
                      {repo.description || 'Full-stack repository on GitHub'}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-line/50 flex items-center justify-between text-[10px] font-mono text-muted">
                    <span>{repo.language || 'Code'}</span>
                    <span className="flex items-center gap-1">
                      <Star size={10} className="text-amber-400" />
                      {repo.stargazers_count ?? 0}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}