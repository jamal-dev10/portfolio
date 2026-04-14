import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function About() {
  return (
    <section id="about" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-52 items-center">
        <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
          <div className="card p-6">
            <img
              className="rounded-xl object-cover w-full"
              style={{ height: '520px' }}
              src="/imgs/me.png"
              alt="Jamal Ezziouani"
            />
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
          <div>
            <h2 className="section-title">About <span>Me</span></h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I'm a Full Stack Developper Focused On Crafting Elegant, High‑Performance Web Apps And Builld Best Desing For Your Web Site.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-zinc-300">
              <li><strong className="text-white">Email:</strong> jamalezziouani.45@gmail.com</li>
              <li><strong className="text-white">Phone:</strong> 0689208829</li>
              <li><strong className="text-white">Location:</strong> Morocco</li>
              <li><strong className="text-white">Languages:</strong> Arabic, French, English</li>
            </ul>
            <a href="/cv-jamal.pdf" download className="btn-primary mt-6 inline-block">
              Télécharger mon CV
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}