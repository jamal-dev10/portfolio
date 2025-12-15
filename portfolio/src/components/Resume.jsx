import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Resume() {
  return (
    <section id="resume" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">Res<span>ume</span></h2>
        </ScrollAnimationWrapper>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">Education</h3>
              <ul className="mt-4 space-y-4 text-zinc-300">
                <li>
                  <p className="font-semibold text-white">
                    Diplôme technicien spécialisé (DTS) en Développement digital ISTA CFPMS (OFPPT)
                  </p>
                  <p>Casablanca</p>
                </li>
                <li>
                  <p className="font-semibold text-white">Bachelor in Biology (2022)</p>
                  <p>Casablanca</p>
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary">Experience</h3>
              <ul className="mt-4 space-y-4 text-zinc-300">
                <li>
                  <p className="font-semibold text-white">Web Developer</p>
                  <p>Stage - Full - Stack DeveloperObl engagement company Casablanca (April 2023 / mai 2023)</p>
                  <p className="font-semibold text-white mt-4">Web Developer</p>
                  <p>Stage - Full - Stack Developercompany Flow août 2023 /septembre 2023 - Remote</p>
                </li>
              </ul>
              <a href="/cv-jamal.pdf" download className="btn-primary mt-6 inline-block">
                Télécharger mon CV
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}