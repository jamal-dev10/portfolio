import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_cz0f63n"; 
    const TEMPLATE_ID = "template_q05nfib"; 
    const PUBLIC_KEY = "4JMRBviXwXQ_YWDIE"; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully! ✅");
          form.current.reset();
      }, (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again. ❌");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="section bg-zinc-950 py-20 px-6">
       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* جهة الفورم */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-xl">
             <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                   <label className="block text-zinc-400 text-sm mb-2">Full Name</label>
                   <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none" 
                   />
                </div>

                <div>
                   <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                   <input 
                      type="email" 
                      name="email" 
                      placeholder="your@email.com" 
                      required 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none" 
                   />
                </div>

                <div>
                   <label className="block text-zinc-400 text-sm mb-2">Your Message</label>
                   <textarea 
                      name="message" 
                      placeholder="How can I help you?" 
                      required 
                      rows="4" 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none resize-none"
                   ></textarea>
                </div>

                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <button 
                   type="submit" 
                   disabled={isSending} 
                   className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                >
                   {isSending ? "Sending..." : "Send Message"}
                   <Send size={18} />
                </button>
             </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
             <h2 className="text-4xl font-bold text-white tracking-tight">Get In <span className="text-purple-500">Touch</span></h2>
             
             <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <Mail className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Email Me</p>
                      <p className="text-zinc-200">jamalezziouani.45@gmail.com</p> {/* */}
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <Phone className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Call Me</p>
                      <p className="text-zinc-200">0689208829</p> {/* */}
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <MapPin className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                      <p className="text-zinc-200">Casablanca, Morocco</p> {/* */}
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}