import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // العيـاط لـ المغيرات من ملف .env باش يكون الكود احترافي ومخفي
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully! ✅");
          form.current.reset(); // كيمسح الفورم ملي كيتصيفط الميساج
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
                      name="name" // مطابقة مع {{name}} فـ Template ديالك
                      placeholder="Your Name" 
                      required 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none transition-all" 
                   />
                </div>

                <div>
                   <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                   <input 
                      type="email" 
                      name="email" // مطابقة مع {{email}} اللي كاينا فـ Template
                      placeholder="your@email.com" 
                      required 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none transition-all" 
                   />
                </div>

                <div>
                   <label className="block text-zinc-400 text-sm mb-2">Your Message</label>
                   <textarea 
                      name="message" // مطابقة مع {{message}} فـ Template
                      placeholder="How can I help you?" 
                      required 
                      rows="4" 
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none resize-none transition-all"
                   ></textarea>
                </div>

                {/* حقل مخفي لتمرير الوقت لـ {{time}} فـ التيمبليت */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <button 
                   type="submit" 
                   disabled={isSending} 
                   className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                   {isSending ? "Sending..." : "Send Message"}
                   <Send size={18} />
                </button>
             </form>
          </div>

          {/* جهة المعلومات الشخصية */}
          <div className="flex flex-col justify-center space-y-8 text-white">
             <h2 className="text-4xl font-bold tracking-tight">Get In <span className="text-purple-500">Touch</span></h2>
             
             <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <Mail className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Email Me</p>
                      <p className="text-zinc-200">jamalezziouani.45@gmail.com</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <Phone className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Call Me</p>
                      <p className="text-zinc-200">0689208829</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500 transition-colors">
                      <MapPin className="text-purple-500" />
                   </div>
                   <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Location</p>
                      <p className="text-zinc-200">Casablanca, Morocco</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}