import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const { t } = useApp();
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS Configuration
    // 1. Create account at https://www.emailjs.com/
    // 2. Create a generic Email and add it as "Email Service" (e.g., Gmail) -> get SERVICE_ID
    // 3. Create an Email Template -> get TEMPLATE_ID
    // 4. Get your Public Key from Account > API Keys -> get PUBLIC_KEY
    
    // REPLACE THESE PLACEHOLDERS WITH YOUR KEYS:
    const SERVICE_ID = 'service_slnsvfq';
    const TEMPLATE_ID = 'template_wladlot';
    const PUBLIC_KEY = 'ndfya4k_ncCVtNHDx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          // Reset form after 3 seconds
          setTimeout(() => {
            setStatus('idle');
            formRef.current.reset();
          }, 3000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.sections.contact}
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contact.title}</h3>
                <p className="text-slate-700 dark:text-gray-400 mb-8">
                  {t.contact.subtitle}
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, text: "montacir@live.fr" },
                    { icon: Phone, text: "+33 6 63 49 50 41" },
                    { icon: MapPin, text: "Paris, France" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <item.icon size={18} />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder={t.contact.form.placeholderName}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder={t.contact.form.placeholderEmail}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t.contact.form.subject}</label>
                <select name="subject" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all">
                  {t.contact.form.subjects.map((subject, idx) => (
                    <option key={idx} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">{t.contact.form.message}</label>
                <textarea 
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder={t.contact.form.placeholderMessage}
                />
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full btn-primary justify-center group"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : status === 'success' ? (
                  t.contact.form.sent
                ) : status === 'error' ? (
                  "Erreur / Error"
                ) : (
                  <>{t.contact.form.send} <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
