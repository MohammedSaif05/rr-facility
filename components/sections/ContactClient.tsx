'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site-config';

export default function ContactClient() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Home Cleaning',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Customer Inquiry* 📩\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Service Requested:* ${formData.service}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-muted/20" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 border border-primary/20 shadow-lg"
          >
            <Phone size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            {t('getInTouch')} <span className="text-primary">{t('touch')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('desc')}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{t('info')}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="flex items-start space-x-5 rtl:space-x-reverse bg-card p-6 rounded-3xl border border-border/50 shadow-sm h-full hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={26} />
                  </div>
                  <div className="flex-1 mt-1">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">{t('office')}</h4>
                    <p className="text-foreground text-lg font-medium leading-relaxed">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 rtl:space-x-reverse bg-card p-6 rounded-3xl border border-border/50 shadow-sm h-full hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={26} />
                  </div>
                  <div className="flex-1 mt-1">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">{t('phone')}</h4>
                    <p className="text-foreground text-lg font-medium leading-relaxed" dir="ltr">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 rtl:space-x-reverse bg-card p-6 rounded-3xl border border-border/50 shadow-sm h-full hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={26} />
                  </div>
                  <div className="flex-1 mt-1">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">{t('email')}</h4>
                    <p className="text-foreground text-base font-medium leading-relaxed break-all">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 rtl:space-x-reverse bg-card p-6 rounded-3xl border border-border/50 shadow-sm h-full hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock size={26} />
                  </div>
                  <div className="flex-1 mt-1">
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">{t('hours')}</h4>
                    <p className="text-foreground text-lg font-medium leading-relaxed whitespace-pre-line">{t('hoursVal')}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map iframe */}
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border border-border/50 relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors pointer-events-none z-10" />
              <iframe 
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=25.2723549,51.5249841+(RR%20Cleaning%20Services)&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-32"
          >
            <div className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent blur-2xl z-0 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-2">{t('sendMsg')}</h3>
                <p className="text-muted-foreground mb-8">{t('formDesc')}</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t('firstName')}</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t('lastName')}</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('emailAddr')}</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      required 
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('service')}</label>
                    <div className="relative">
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-foreground appearance-none"
                      >
                        <option value="Home Cleaning">Home Cleaning</option>
                        <option value="Office Cleaning">Office / Commercial Cleaning</option>
                        <option value="Window Cleaning">Window & Glass Cleaning</option>
                        <option value="Kitchen Deep Cleaning">Kitchen Deep Cleaning</option>
                        <option value="Carpet Shampooing">Carpet & Sofa Shampooing</option>
                        <option value="Other">{t('other')}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground rtl:right-auto rtl:left-0">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t('msg')}</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      required
                    ></textarea>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-primary text-primary-foreground font-bold p-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25">
                      {t('submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
