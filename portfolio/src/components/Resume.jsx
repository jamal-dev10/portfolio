import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function Resume() {
  return (
    <section id="resume" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">
            Res<span>ume</span>
          </h2>
        </ScrollAnimationWrapper>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* --- Section Education --- */}
          <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
              <ul className="space-y-6 text-zinc-300">
                <li>
                  <p className="font-semibold text-white">
                    Diplôme Technicien Spécialisé (DTS) en Développement Digital
                  </p>
                  <p className="text-sm">ISTA CFPMS (OFPPT) | Casablanca</p>
                </li>
                <li>
                  <p className="font-semibold text-white">
                    Bachelor in Biology
                  </p>
                  <p className="text-sm">Université Hassan II | Casablanca | 2022</p>
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* --- Section Experience --- */}
          <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Experience</h3>
              <ul className="space-y-8 text-zinc-300">
                {/* Project 1 (The Most Recent) */}
                <li>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-white text-lg">Full-Stack Developer (Stage)</p>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Août – Sept 2023</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-2 italic">Flow | Distantiel</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Développement complet d'un site e-commerce de vélos électriques.</li>
                    <li>Gestion dynamique du contenu via un CMS.</li>
                  </ul>
                  <p className="text-xs mt-2 text-white">
                    <span className="text-primary font-semibold">Tech:</span> WordPress, WooCommerce, PHP, Elementor, MySQL.
                  </p>
                </li>

                {/* Project 2 */}
                <li>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-white text-lg">Full-Stack Developer (Stage)</p>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Avril – Mai 2023</span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-2 italic">Obl engagement company | Casablanca</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Refonte visuelle d'un site de location de logements.</li>
                    <li>Mise en place de systèmes de gestion des données utilisateurs.</li>
                  </ul>
                  <p className="text-xs mt-2 text-white">
                    <span className="text-primary font-semibold">Tech:</span> React.js, Node.js, MySQL, Tailwind CSS.
                  </p>
                </li>
              </ul>

              <a
                href="/cv-jamal.pdf"
                download
                className="btn-primary mt-8 inline-flex items-center gap-2"
              >
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}