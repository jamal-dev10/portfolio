import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const inputClass =
    "w-full bg-bg border border-line rounded-xl p-4 text-content placeholder:text-muted focus:border-primary outline-none transition-all";

  return (
    <section id="contact" className="section bg-bg py-20 px-6 transition-colors duration-300">
       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* جهة الفورم */}
          <div className="bg-surface p-8 rounded-2xl border border-line shadow-xl">
             <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                   <label className="block text-muted text-sm mb-2">Full Name</label>
                   <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className={inputClass}
                   />
                </div>

                <div>
                   <label className="block text-muted text-sm mb-2">Email Address</label>
                   <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                   />
                </div>

                <div>
                   <label className="block text-muted text-sm mb-2">Your Message</label>
                   <textarea
                      name="message"
                      placeholder="How can I help you?"
                      required
                      rows="4"
                      className={`${inputClass} resize-none`}
                   ></textarea>
                </div>

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
          <div className="flex flex-col justify-center space-y-8 text-content">
             <h2 className="text-4xl font-bold tracking-tight">Get In <span className="text-primary">Touch</span></h2>

             <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center border border-line shadow-sm group-hover:border-primary transition-colors">
                      <Mail className="text-primary" />
                   </div>
                   <div>
                      <p className="text-xs text-muted uppercase tracking-widest">Email Me</p>
                      <p className="text-content">jamalezziouani.45@gmail.com</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center border border-line shadow-sm group-hover:border-primary transition-colors">
                      <Phone className="text-primary" />
                   </div>
                   <div>
                      <p className="text-xs text-muted uppercase tracking-widest">Call Me</p>
                      <p className="text-content">0689208829</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center border border-line shadow-sm group-hover:border-primary transition-colors">
                      <MapPin className="text-primary" />
                   </div>
                   <div>
                      <p className="text-xs text-muted uppercase tracking-widest">Location</p>
                      <p className="text-content">Casablanca, Morocco</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}