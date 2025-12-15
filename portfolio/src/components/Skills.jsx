import { SiJavascript, SiReact, SiNodedotjs, SiPhp, SiMysql, SiGit, SiTailwindcss, SiDocker } from 'react-icons/si'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const items = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiReact, label: 'React' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiPhp, label: 'PHP' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiGit, label: 'Git' },
  { icon: SiTailwindcss, label: 'Tailwind' },
  { icon: SiDocker, label: 'Docker' },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">Sk<span>ills</span></h2>
        </ScrollAnimationWrapper>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {items.map(({icon: Icon, label}, i) => (
            <ScrollAnimationWrapper key={label} animation="scale" delay={i * 0.1}>
              <div className="card p-6 text-center hover:shadow-glow transition">
                <div className="mx-auto w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-3">
                  <Icon size={26} />
                </div>
                <p className="font-semibold">{label}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}