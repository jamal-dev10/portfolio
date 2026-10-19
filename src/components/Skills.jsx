import { useState } from 'react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiGit,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiVite
} from 'react-icons/si'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { Code2, Server, Database, Wrench } from 'lucide-react'

const allSkills = [
  // Frontend
  {
    icon: SiReact,
    label: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'SPA architecture, custom hooks, context, state management',
    color: '#61DAFB'
  },
  {
    icon: SiNextdotjs,
    label: 'Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'SSR, SSG, App Router, full-stack hybrid apps',
    color: '#ffffff'
  },
  {
    icon: SiJavascript,
    label: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'ES6+, async/await, DOM manipulation, functional patterns',
    color: '#F7DF1E'
  },
  {
    icon: SiTailwindcss,
    label: 'Tailwind CSS',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'Utility-first styling, design systems, responsive layouts',
    color: '#06B6D4'
  },
  {
    icon: SiHtml5,
    label: 'HTML5 Semantic',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'Accessible markup, SEO structure, modern HTML5 APIs',
    color: '#E34F26'
  },
  {
    icon: SiCss3,
    label: 'CSS3 & Flex/Grid',
    category: 'frontend',
    categoryLabel: 'Frontend',
    desc: 'Advanced CSS Grid, Flexbox, transitions & keyframe animation',
    color: '#1572B6'
  },

  // Backend
  {
    icon: SiPhp,
    label: 'PHP',
    category: 'backend',
    categoryLabel: 'Backend',
    desc: 'Object-oriented PHP, MVC patterns, script execution',
    color: '#777BB4'
  },
  {
    icon: SiLaravel,
    label: 'Laravel',
    category: 'backend',
    categoryLabel: 'Backend',
    desc: 'Blade templates, Eloquent ORM, RESTful API design',
    color: '#FF2D20'
  },
  {
    icon: SiNodedotjs,
    label: 'Node.js & Express',
    category: 'backend',
    categoryLabel: 'Backend',
    desc: 'Server-side runtime, middleware, routing, authentication',
    color: '#339933'
  },
  {
    icon: SiPython,
    label: 'Python',
    category: 'backend',
    categoryLabel: 'Backend',
    desc: 'Scripting, backend utilities, data manipulation',
    color: '#3776AB'
  },

  // Database & Tools
  {
    icon: SiMysql,
    label: 'MySQL',
    category: 'tools',
    categoryLabel: 'Database',
    desc: 'Relational database schema design, indexing, SQL queries',
    color: '#4479A1'
  },
  {
    icon: SiGit,
    label: 'Git & GitHub',
    category: 'tools',
    categoryLabel: 'Version Control',
    desc: 'Branching strategies, pull requests, collaboration',
    color: '#F05032'
  },
  {
    icon: SiPostman,
    label: 'Postman & APIs',
    category: 'tools',
    categoryLabel: 'Testing & Tools',
    desc: 'REST API testing, endpoint debugging, JSON contracts',
    color: '#FF6C37'
  },
  {
    icon: SiVite,
    label: 'Vite & Bundlers',
    category: 'tools',
    categoryLabel: 'Build Tools',
    desc: 'Modern tooling, HMR, production build optimization',
    color: '#646CFF'
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeTab)

  return (
    <section id="skills" className="section bg-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              02 / Technical Stack
            </span>
            <h2 className="section-title mt-2">
              Skills &amp; Technologies
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
              Modern full-stack technologies and industry-standard tools I leverage to build robust digital experiences.
            </p>
          </ScrollAnimationWrapper>
        </div>

        {/* Category Tabs (Segmented Controls) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-surface border border-line shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              All Technologies ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'frontend'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              <Code2 size={14} />
              <span>Frontend</span>
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'backend'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              <Server size={14} />
              <span>Backend &amp; APIs</span>
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tools'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              <Database size={14} />
              <span>Data &amp; Tools</span>
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map(({ icon: Icon, label, categoryLabel, desc, color }, i) => (
            <ScrollAnimationWrapper key={label} animation="fadeUp" delay={i * 0.05}>
              <div className="card p-5 h-full flex flex-col justify-between hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-surfaceHover border border-line group-hover:scale-110"
                      style={{
                        boxShadow: `0 0 16px ${color}22`
                      }}
                    >
                      <Icon size={26} color={color === '#ffffff' ? 'currentColor' : color} className="text-content" />
                    </div>
                    <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                      {categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-content group-hover:text-primary transition-colors">
                    {label}
                  </h3>

                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-muted">
                  <span>Proficiency</span>
                  <span className="text-primary font-semibold">Active In Production</span>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  )
}