import Typing from './Typing.jsx'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black"></div>
      </div>
      <div className="px-6">
        <ScrollAnimationWrapper animation="fadeDown" duration={0.8}>
          <p className="text-primary font-semibold">Hello, I'm</p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fadeUp" delay={0.2} duration={0.8}>
          <h1 className="mt-2 text-5xl md:text-7xl font-extrabold">
            <span className="text-primary">
              <Typing words={['Jamal Ezziouani', 'Full‑Stack Developer']} speed={150} pause={1200} />
            </span>
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fadeUp" delay={0.4} duration={0.8}>
          <p className="mt-4 text-lg md:text-xl text-zinc-200">
            I build clean, fast, and accessible web apps.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="scale" delay={0.6} duration={0.8}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-primary transition">
              View Projects
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
