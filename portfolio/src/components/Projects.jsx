import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Projects() {
  const data = [
    {
      title: 'Leman Group Website',
      img: 'https://picsum.photos/seed/p1/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/leman-group',
      desc: 'Corporate website built with React.',
    },
    {
      title: 'Food Ordering App',
      img: 'https://picsum.photos/seed/p2/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/food-ordering',
      desc: 'SPA for browsing and ordering meals.',
    },
    {
      title: 'Photo Gallery',
      img: 'https://picsum.photos/seed/p3/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/photo-gallery',
      desc: 'Masonry gallery with filters and lightbox.',
    },
    {
      title: 'Portfolio Dashboard',
      img: 'https://picsum.photos/seed/p4/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/portfolio-dashboard',
      desc: 'Analytics dashboard with real-time charts and dark UI.',
    },
    {
      title: 'E-Commerce Store',
      img: 'https://picsum.photos/seed/p5/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/ecommerce-store',
      desc: 'Full-stack online shop with cart, auth, and Stripe payments.',
    },
    {
      title: 'Weather App',
      img: 'https://picsum.photos/seed/p6/800/500',
      demo: 'https://your-demo-link.com',
      code: 'https://github.com/your-username/weather-app',
      desc: 'Real-time weather forecasts using OpenWeather API.',
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