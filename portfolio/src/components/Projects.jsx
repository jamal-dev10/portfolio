import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Projects() {
  const data = [

    {
      title: 'Admin Dashboard Panel',
      img: '/imgs/Dashbord.png', 
      demo: 'https://jamal-dashboard.vercel.app', 
      code: 'https://github.com/your-username/admin-dashboard', 
      desc: 'A full-featured management dashboard with real-time data tracking, product inventory management, and revenue analytics.',
    },
    {
      title: 'FitFlex - Fitness & Nutrition',
      img: '/imgs/fitflex.png', 
      demo: 'https://fitflex-demo.vercel.app', 
      code: 'https://github.com/jamal-dev10/Fitflix.github', 
      desc: 'A comprehensive fitness platform featuring personalized workout programs and nutrition plans with a modern dark UI.',
    },
    {
      title: 'IPTV LITE - Landing Page',
      img: '/imgs/iptv-lite.png', 
      demo: 'https://iptv-lite-demo.vercel.app', 
      code: 'https://github.com/jamal-dev10/Iptv-web-site-', 
      desc: 'A professional landing page for streaming services, featuring high-converting CTA sections and service benefits.',
    },
    {
      title: 'WeatherScope - Weather App',
      img: '/imgs/weather.png', 
      demo: 'https://skycast-weather.vercel.app', 
      code: 'https://github.com/your-username/weather-app', 
      desc: 'A sleek weather application featuring real-time data fetching and a beautiful glassmorphism UI design.',
    },
    {
      title: 'Smart Parking App',
      img: '/imgs/parking.png', 
      demo: 'https://smart-parking-demo.vercel.app', 
      code: 'https://github.com/jamal-dev10/Auto-mobile', 
      desc: 'A modern landing page for a mobile parking solution, showcasing real-time availability and vibrant purple UI.',
    },
    {
      title: 'Food Lover - Restaurant',
      img: '/imgs/food-lover.png', 
      demo: 'https://food-lover-demo.vercel.app', 
      code: 'https://github.com/your-username/food-lover', 
      desc: 'A sophisticated restaurant landing page featuring special offers and a premium dark aesthetic.',
    },
  
  ]

  return (
    <section id="projects" className="section bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">Pro<span>jects</span></h2>
        </ScrollAnimationWrapper>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((p, i) => (
            <ScrollAnimationWrapper key={p.title} animation="fadeUp" delay={i * 0.2}>
              <article className="card overflow-hidden hover:shadow-glow transition">
                <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-zinc-300 mt-2">{p.desc}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Live Demo
                    </a>
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 hover:border-primary">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}