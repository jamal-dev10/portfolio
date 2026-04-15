import ScrollAnimationWrapper from './ScrollAnimationWrapper'
// Make sure to install lucide-react or use your preferred icon library
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <h2 className="section-title text-center mb-4">Get In <span>Touch</span></h2>
          <p className="text-zinc-400 text-center max-w-lg mx-auto mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'll get back to you as soon as possible.
          </p>
        </ScrollAnimationWrapper>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ScrollAnimationWrapper animation="fadeLeft" delay={0.2}>
            <form className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                <input 
                  id="name"
                  type="text"
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="John Doe" 
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="example@gmail.com" 
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Your Message</label>
                <textarea 
                  id="message"
                  rows="4" 
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 font-semibold tracking-wide" type="button">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </ScrollAnimationWrapper>
          
          {/* Contact Info */}
          <ScrollAnimationWrapper animation="fadeRight" delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Me</p>
                  <a href="mailto:jamalezziouani.45@gmail.com" className="text-zinc-300 hover:text-primary transition-colors">
                    jamalezziouani.45@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Call Me</p>
                  <p className="text-zinc-300">0689208829</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Location</p>
                  <p className="text-zinc-300">Casablanca, Morocco</p>
                </div>
              </div>

              {/* Optional: Add Social Links here for even more professionalism */}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}