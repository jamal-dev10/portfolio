import { SiJavascript, SiReact, SiNodedotjs, SiPhp, SiMysql, SiGit, SiTailwindcss, SiPython, SiNextdotjs, SiLaravel } from 'react-icons/si'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const items = [
  { icon: SiJavascript,  label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact,       label: 'React',      color: '#61DAFB' },
  { icon: SiNextdotjs,   label: 'Next.js',    color: 'currentColor' }, // kaytbddl m3a theme
  { icon: SiPhp,         label: 'PHP',        color: '#777BB4' },
  { icon: SiLaravel,     label: 'Laravel',    color: '#FF2D20' },
  { icon: SiNodedotjs,   label: 'Node.js',    color: '#339933' },
  { icon: SiPython,      label: 'Python',     color: '#3776AB' },
  { icon: SiMysql,       label: 'MySQL',      color: '#4479A1' },
  { icon: SiGit,         label: 'Git',        color: '#F05032' },
  { icon: SiTailwindcss, label: 'Tailwind',   color: '#06B6D4' },
]

// lon dyal glow: l Next.js kaybdl 7asab light/dark
const getGlowColor = (label, color) => {
  if (label !== 'Next.js') return color
  return document.documentElement.classList.contains('light') ? '#000000' : '#ffffff'
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">Sk<span className="text-primary">ills</span></h2>
        </ScrollAnimationWrapper>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {items.map(({ icon: Icon, label, color }, i) => (
            <ScrollAnimationWrapper key={label} animation="scale" delay={i * 0.1}>
              <div className="card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <div
                  className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 bg-content/5 text-content"
                  onMouseEnter={e => {
                    const glow = getGlowColor(label, color)
                    e.currentTarget.style.background = `${glow}22`
                    e.currentTarget.style.boxShadow = `0 0 16px 2px ${glow}55`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <Icon size={30} color={color} />
                </div>
                <p className="font-semibold text-sm tracking-wide text-content">{label}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}