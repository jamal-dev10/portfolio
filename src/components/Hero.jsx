import Typing from './Typing.jsx'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import { ArrowDown, Mail, Download, Terminal, Code2, Sparkles, MapPin } from 'lucide-react'

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-70 dark:opacity-40" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] opacity-50 dark:opacity-30" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Line */}
            <ScrollAnimationWrapper animation="fadeDown" duration={0.6}>
              <div className="flex items-center gap-2 text-xs font-medium text-muted mb-4 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Available for opportunities</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-primary" />
                  Casablanca, Morocco
                </span>
              </div>
            </ScrollAnimationWrapper>

            {/* Main Headline */}
            <ScrollAnimationWrapper animation="fadeUp" delay={0.1} duration={0.6}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content leading-[1.12]">
                Crafting clean, reliable <span className="text-primary">full-stack web</span> applications.
              </h1>
            </ScrollAnimationWrapper>

            {/* Dynamic Typing Subtitle */}
            <ScrollAnimationWrapper animation="fadeUp" delay={0.2} duration={0.6}>
              <div className="mt-4 flex items-center gap-2 text-lg sm:text-xl font-medium text-muted">
                <span className="font-mono text-primary text-sm sm:text-base">&gt;</span>
                <span>Specialized in</span>
                <span className="text-content font-semibold border-b border-primary/40 pb-0.5">
                  <Typing
                    words={[
                      'React & Next.js',
                      'PHP & Laravel',
                      'Node.js & REST APIs',
                      'Modern Full-Stack Apps',
                      'Responsive Web Design'
                    ]}
                    speed={80}
                    pause={1400}
                  />
                </span>
              </div>
            </ScrollAnimationWrapper>

            {/* Summary */}
            <ScrollAnimationWrapper animation="fadeUp" delay={0.3} duration={0.6}>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Hi, I'm <strong className="text-content font-semibold">Jamal Ezziouani</strong>. I specialize in building responsive, accessible, and fast web products—from intuitive user interfaces to scalable backends and databases.
              </p>
            </ScrollAnimationWrapper>

            {/* Primary Action Buttons */}
            <ScrollAnimationWrapper animation="fadeUp" delay={0.4} duration={0.6}>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#projects" className="btn-primary">
                  <span>View Projects</span>
                  <ArrowDown size={16} />
                </a>

                <a href="#contact" className="btn-secondary">
                  <Mail size={16} className="text-primary" />
                  <span>Get in Touch</span>
                </a>

                {onOpenTerminal && (
                  <button
                    onClick={onOpenTerminal}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-line bg-surface/50 hover:bg-surface text-xs font-mono text-muted hover:text-content transition-colors"
                    title="Launch interactive developer terminal"
                  >
                    <Terminal size={14} className="text-primary" />
                    <span>$ jamal --cli</span>
                  </button>
                )}
              </div>
            </ScrollAnimationWrapper>

          </div>

          {/* Right Column: Hero Profile Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollAnimationWrapper animation="fadeLeft" delay={0.2} duration={0.7}>
              <div className="relative group max-w-sm sm:max-w-md w-full">
                
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-violet-600/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />
                
                <div className="relative rounded-2xl bg-surface border border-line overflow-hidden shadow-2xl">
                  {/* Window bar */}
                  <div className="px-4 py-3 border-b border-line bg-surface/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-muted tracking-tight">
                      jamal.ezziouani.tsx
                    </div>
                    <Code2 size={14} className="text-muted" />
                  </div>

                  {/* Profile Image with subtle lighting */}
                  <div className="relative bg-gradient-to-b from-transparent to-black/60 aspect-[4/5] overflow-hidden">
                    <img
                      src="/imgs/me.png"
                      alt="Jamal Ezziouani"
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = '/me.png'
                      }}
                    />
                    
                    {/* Bottom floating badge */}
                    <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-line/80 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-content">Full-Stack Digital Developer</p>
                          <p className="text-[11px] text-muted font-mono">React · Laravel · Node.js</p>
                        </div>
                        <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                          Casablanca
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollAnimationWrapper>
          </div>

        </div>

        {/* 4-Item KPI Strip */}
        <ScrollAnimationWrapper animation="fadeUp" delay={0.5} duration={0.6}>
          <div className="mt-16 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-extrabold text-content tracking-tight">06+</span>
              <span className="text-xs text-muted mt-1 uppercase tracking-wider">Featured Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-extrabold text-content tracking-tight">10+</span>
              <span className="text-xs text-muted mt-1 uppercase tracking-wider">Core Technologies</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-extrabold text-content tracking-tight">100%</span>
              <span className="text-xs text-muted mt-1 uppercase tracking-wider">Responsive Design</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl font-extrabold text-content tracking-tight">2024</span>
              <span className="text-xs text-muted mt-1 uppercase tracking-wider">DTS Digital Dev</span>
            </div>
          </div>
        </ScrollAnimationWrapper>

      </div>
    </section>
  )
}