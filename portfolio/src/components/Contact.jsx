import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function Contact() {
  return (
    <section id="contact" className="section bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center">Con<span>tact</span></h2>
        </ScrollAnimationWrapper>
        
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
            <form className="card p-6 grid gap-4">
              <input 
                className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3" 
                placeholder="Your Name" 
              />
              <input 
                type="email" 
                className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3" 
                placeholder="Your Email" 
              />
              <textarea 
                rows="5" 
                className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3" 
                placeholder="Your Message"
              ></textarea>
              <button className="btn-primary" type="button">Send Message</button>
            </form>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
            <div className="card p-6">
              <p className="text-zinc-300">
                Email: <a className="text-primary" href="mailto:jamalezziouani.45@gmail.com">
                  jamalezziouani.45@gmail.com
                </a>
              </p>
              <p className="text-zinc-300 mt-2">
                Phone: <span className="text-white">0689208829</span>
              </p>
              <p className="text-zinc-300 mt-2">
                Address: <span className="text-white">Casablanca, Morocco</span>
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}