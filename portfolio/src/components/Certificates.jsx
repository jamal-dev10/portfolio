import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa"; // حتاج تركب react-icons

export default function Certificates() {
  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "FreeCodeCamp",
      date: "2024",
      link: "#",
      skills: ["Data Structures", "Algorithms", "ES6"]
    },
    {
      title: "Udemy Front-End Developer Professional Certificate",
      provider: "Udemy",
      date: "2023",
      link: "#",
      skills: ["React", "UI/UX", "Front-End"]
    },
    {
      title: "Responsive Web Design",
      provider: "FreeCodeCamp",
      date: "2023",
      link: "#",
      skills: ["HTML5", "CSS3", "Flexbox"]
    }
  ];

  return (
    <section id="certificates" className="section bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="section-title">Certif<span>icates</span></h2>
            <p className="text-zinc-400 mt-4 max-w-lg mx-auto">
              Mes certifications professionnelles et formations validées dans le domaine du développement web.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <ScrollAnimationWrapper key={i} animation="fadeUp" delay={i * 0.1}>
              <div className="group relative bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Decorative Background Icon */}
                <div className="absolute -right-4 -top-4 text-zinc-800/20 text-8xl group-hover:text-primary/10 transition-colors duration-500">
                  <FaAward />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <FaCertificate size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[2px] bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      Verified
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 mt-3">
                    Issued by <span className="text-zinc-100 font-semibold">{cert.provider}</span>
                  </p>

                  {/* Skills Tags - هادي كاتزيد لمسة احترافية */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="text-[10px] text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-zinc-800/50">
                    <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                    >
                      Verify <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}