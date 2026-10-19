import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { Download, CheckCircle2, User, Globe2, Briefcase, GraduationCap } from 'lucide-react'

export default function About() {
  const highlights = [
    { label: 'Primary Focus', val: 'Full-Stack Web Engineering' },
    { label: 'Location', val: 'Casablanca, Morocco' },
    { label: 'Languages', val: 'English, French, Arabic' },
    { label: 'Work Eligibility', val: 'Available & Remote-Ready' },
  ]

  const strengths = [
    'Clean, semantic component architecture and responsive design',
    'Full-stack REST API development with PHP/Laravel and Node.js',
    'Database modeling and query optimization with MySQL',
    'Modern state management, hooks, and responsive UX patterns',
  ]

  return (
    <section id="about" className="section bg-surface/30 border-y border-line transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <ScrollAnimationWrapper animation="fadeDown">
            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              01 / About Me
            </span>
            <h2 className="section-title mt-2">
              Transforming complex requirements into <span className="text-primary">elegant web solutions</span>.
            </h2>
          </ScrollAnimationWrapper>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5">
            <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
              <div className="card p-6 shadow-xl relative overflow-hidden group">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface relative">
                  <img
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    src="/imgs/me.png"
                    alt="Jamal Ezziouani"
                    onError={(e) => {
                      e.target.src = '/me.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <p className="font-bold text-lg">Jamal Ezziouani</p>
                      <p className="text-xs text-zinc-300 font-mono">Full-Stack Digital Developer</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 pt-3 border-t border-line text-xs">
                  <div>
                    <span className="text-muted block">Degree</span>
                    <span className="font-semibold text-content">DTS Digital Dev</span>
                  </div>
                  <div>
                    <span className="text-muted block">Prior Degree</span>
                    <span className="font-semibold text-content">B.S. Biology (2022)</span>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right Column: Bio & Core Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollAnimationWrapper animation="fadeRight" delay={0.3}>
              <p className="text-lg text-content font-medium leading-relaxed">
                I am a passionate software developer specializing in building modern web applications that blend clean code, high performance, and thoughtful user design.
              </p>
              
              <p className="text-muted leading-relaxed mt-3">
                My educational journey combines specialized technical training in digital development from <strong className="text-content font-semibold">ISTA CFPMS (OFPPT)</strong> with an analytical foundation from a <strong className="text-content font-semibold">Bachelor's Degree in Biology from Université Hassan II</strong>. This scientific background gives me strong rigor in debugging, architectural planning, and systematic problem resolution.
              </p>

              {/* Highlights List */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3 py-4 border-y border-line">
                {highlights.map((item) => (
                  <div key={item.label} className="text-sm">
                    <span className="text-xs text-muted block uppercase tracking-wider">{item.label}</span>
                    <span className="font-semibold text-content mt-0.5 block">{item.val}</span>
                  </div>
                ))}
              </div>

              {/* Technical Strengths */}
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-content mb-3">
                  Core Development Principles
                </h3>
                <ul className="space-y-2.5">
                  {strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/CV_Jamal_Ezziouani_EN.pdf"
                  download
                  className="btn-primary"
                >
                  <Download size={16} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>

                <a
                  href="#resume"
                  className="btn-secondary text-sm"
                >
                  <Briefcase size={16} className="text-primary" />
                  <span>View Work Experience</span>
                </a>
              </div>

            </ScrollAnimationWrapper>
          </div>

        </div>

      </div>
    </section>
  )
}