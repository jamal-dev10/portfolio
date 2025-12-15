import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function About() {
  return (
    <section id="about" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
          <div className="card p-6">
            <img 
              className="rounded-xl object-cover w-full h-72" 
              src="https://picsum.photos/800/500?grayscale" 
              alt="portrait" 
            />
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
          <div>
            <h2 className="section-title">About <span>Me</span></h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I'm a software engineer focused on crafting elegant, high‑performance web apps.
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