import { useState, useEffect } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { ExternalLink, Eye, X, Layers, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 'dashboard',
      title: 'Admin Dashboard Panel',
      category: 'fullstack',
      categoryLabel: 'Full-Stack / Dashboard',
      img: '/imgs/Dashbord.png',
      demo: 'https://jamal-dashboard.vercel.app',
      code: 'https://github.com/jamal-dev10',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'Analytics'],
      shortDesc: 'A comprehensive management dashboard featuring real-time data metrics, product inventory control, and financial reporting.',
      fullDesc: 'Designed and built an enterprise-ready administration panel for digital store operations. Integrates interactive financial charts, tabular inventory tracking, and dynamic metrics for revenue streams and customer acquisition.',
      features: [
        'Real-time sales & conversion analytics graphs',
        'Sortable tabular inventory and order tracking',
        'Clean responsive layout with dark and light themes',
        'Modular component architecture built with React and Tailwind'
      ]
    },
    {
      id: 'fitflex',
      title: 'FitFlex — Fitness & Health',
      category: 'frontend',
      categoryLabel: 'Web Application',
      img: '/imgs/fitflex.png',
      demo: 'https://fitflex-demo.vercel.app',
      code: 'https://github.com/jamal-dev10/Fitflix.github',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
      shortDesc: 'A responsive fitness platform featuring personalized workout routines, nutrition guides, and a high-contrast dark UI.',
      fullDesc: 'A client-centric fitness platform designed for workout enthusiasts. Features dedicated muscle group routines, interactive calisthenics schedules, and meal tracking calculators.',
      features: [
        'Interactive exercise filtering by target muscle group',
        'Nutrition guide and daily calorie targets calculator',
        'Mobile-first responsive interface with fluid animations',
        'Accessible color contrast and rapid page load performance'
      ]
    },
    {
      id: 'iptv-lite',
      title: 'IPTV LITE — Media Streaming',
      category: 'landing',
      categoryLabel: 'Landing Page',
      img: '/imgs/iptv-lite.png',
      demo: 'https://iptv-lite-demo.vercel.app',
      code: 'https://github.com/jamal-dev10/Iptv-web-site-',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      shortDesc: 'A conversion-focused landing page showcasing channel packages, customer testimonials, and smooth subscription flows.',
      fullDesc: 'Created an optimized high-conversion landing page for digital streaming services. Features pricing tiers, FAQ accordions, testimonial carousels, and instant WhatsApp/Email inquiry triggers.',
      features: [
        'High-converting subscription pricing tiers',
        'Optimized hero banner with fast asset loading',
        'Comprehensive device compatibility breakdown',
        'Interactive feature highlights with smooth scroll triggers'
      ]
    },
    {
      id: 'weather',
      title: 'WeatherScope — Real-Time Forecast',
      category: 'frontend',
      categoryLabel: 'Web Application',
      img: '/imgs/weather.png',
      demo: 'https://skycast-weather.vercel.app',
      code: 'https://github.com/jamal-dev10',
      tags: ['JavaScript', 'OpenWeather API', 'CSS Glassmorphism', 'Vite'],
      shortDesc: 'A sleek weather application featuring live geolocation forecast data, wind metrics, and glassmorphic aesthetic.',
      fullDesc: 'A weather tracking interface connecting with global meteorological APIs to deliver hourly precipitation, UV index, wind speeds, and 7-day temperature projections.',
      features: [
        'Real-time atmospheric data lookup for cities worldwide',
        'Dynamic visual backgrounds reacting to current climate',
        'Glassmorphic card styling with backdrop filters',
        'Responsive layout across mobile, tablet, and desktop'
      ]
    },
    {
      id: 'parking',
      title: 'Smart Parking App',
      category: 'landing',
      categoryLabel: 'Mobile Solution / Landing',
      img: '/imgs/parking.png',
      demo: 'https://smart-parking-demo.vercel.app',
      code: 'https://github.com/jamal-dev10/Auto-mobile',
      tags: ['React', 'Tailwind CSS', 'Mobile First', 'UI Design'],
      shortDesc: 'A modern landing platform showcasing intelligent urban parking reservations, live space availability, and mobile apps.',
      fullDesc: 'Showcase web application for a smart city parking ecosystem. Illustrates spot navigation, reservation pre-booking, automated gate scanning, and user profiles.',
      features: [
        'Interactive parking spot availability preview',
        'Mobile app feature walkthrough and download triggers',
        'Modern purple brand visual language with dark surfaces',
        'Subtle micro-interactions and smooth section navigations'
      ]
    },
    {
      id: 'food-lover',
      title: 'Food Lover — Gourmet Dining',
      category: 'landing',
      categoryLabel: 'Restaurant / Hospitality',
      img: '/imgs/food-lover.png',
      demo: 'https://food-lover-demo.vercel.app',
      code: 'https://github.com/jamal-dev10',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      shortDesc: 'A culinary dining showcase featuring chef specials, digital menu previews, customer ratings, and table reservations.',
      fullDesc: 'An elegant dining landing page built for modern culinary venues. Provides mouth-watering presentation of artisanal cuisines, chef backgrounds, and online reservation booking.',
      features: [
        'Categorized interactive gourmet food menu',
        'Customer reviews and food critic testimonials',
        'Online reservation booking interface',
        'Optimized typography and high-definition food visuals'
      ]
    },
  ]

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section bg-surface/30 border-t border-line transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              03 / Selected Works
            </span>
            <h2 className="section-title mt-2">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
              A curated selection of web applications, administrative panels, and digital solutions built with performance in mind.
            </p>
          </ScrollAnimationWrapper>

          {/* Filter Tabs (Interactive Segmented Control) */}
          <div className="flex items-center gap-1 p-1 bg-surface border border-line rounded-xl overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'fullstack'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'frontend'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'landing'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:text-content'
              }`}
            >
              Landing Pages
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ScrollAnimationWrapper key={project.id} animation="fadeUp" delay={i * 0.1}>
              <article className="card overflow-hidden h-full flex flex-col justify-between group hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                
                {/* Media Container with Overlay Trigger */}
                <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-white/90 text-zinc-900 text-xs font-semibold flex items-center gap-1.5 shadow hover:bg-white transition"
                    >
                      <Eye size={14} />
                      <span>Quick View</span>
                    </button>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold flex items-center gap-1.5 shadow hover:bg-primaryDark transition"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line (Zero-Pill rule compliant) */}
                    <div className="flex items-center gap-2 text-xs text-primary font-mono font-medium mb-2">
                      <span>{project.categoryLabel}</span>
                    </div>

                    <h3 className="text-xl font-bold text-content group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech stack line (Clean unboxed with separators) */}
                  <div className="mt-5 pt-4 border-t border-line/70">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted font-mono mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={tag} className="flex items-center gap-2">
                          <span className="text-content/80 font-medium">{tag}</span>
                          {idx < project.tags.length - 1 && (
                            <span className="text-line" aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-line bg-surface hover:bg-surfaceHover text-xs font-semibold text-content transition-colors"
                      >
                        <Eye size={14} className="text-primary" />
                        <span>Case Details</span>
                      </button>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-primary text-white hover:bg-primaryDark transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLink size={15} />
                      </a>

                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg border border-line bg-surface hover:bg-surfaceHover text-muted hover:text-content transition-colors"
                        title="View Source on GitHub"
                      >
                        <FaGithub size={15} />
                      </a>
                    </div>
                  </div>

                </div>

              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-line shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg border border-line bg-surfaceHover text-muted hover:text-content transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="text-xs font-mono text-primary font-semibold uppercase tracking-wider mb-2">
              {activeProject.categoryLabel}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-content pr-10">
              {activeProject.title}
            </h2>

            {/* Modal Image */}
            <div className="mt-5 rounded-xl overflow-hidden border border-line bg-bg aspect-[16/9]">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Modal Description */}
            <div className="mt-6 space-y-4">
              <p className="text-base text-content leading-relaxed">
                {activeProject.fullDesc}
              </p>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-content mb-3">
                  Key Capabilities
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted">
                  {activeProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-mono mt-0.5">✔</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-line">
                <span className="text-xs uppercase font-mono text-muted tracking-wider block mb-2">
                  Technologies Employed
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {activeProject.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-content/5 border border-line text-content">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-line flex flex-wrap items-center gap-3">
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href={activeProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FaGithub size={16} />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => setActiveProject(null)}
                  className="ml-auto px-4 py-2 text-xs font-semibold text-muted hover:text-content"
                >
                  Close (Esc)
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  )
}