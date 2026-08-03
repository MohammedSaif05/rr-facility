'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase, Wallet, Users, HeartPulse, Clock, Home, Plane, ShieldCheck, MapPin } from 'lucide-react';

export default function CareersClient() {
  const t = useTranslations('Careers');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '97471949557';
    const message = `*New Job Application* 📝\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Age:* ${formData.age}\n*Country:* ${formData.country}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    { label: t('salary'), value: t('salaryVal'), icon: Wallet },
    { label: t('allowance'), value: t('allowanceVal'), icon: Wallet },
    { label: t('overtime'), value: t('overtimeVal'), icon: Clock },
    { label: t('accommodation'), value: t('accommodationVal'), icon: Home },
    { label: t('transport'), value: t('transportVal'), icon: Plane },
    { label: t('health'), value: t('healthVal'), icon: HeartPulse },
    { label: t('hours'), value: t('hoursVal'), icon: Clock },
    { label: t('weeklyOff'), value: t('weeklyOffVal'), icon: ShieldCheck },
    { label: t('ageReq'), value: t('ageReqVal'), icon: Users },
    { label: t('contract'), value: t('contractVal'), icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center border-b border-border/50 bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 shadow-lg"
          >
            <Briefcase size={36} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            {t('join')} <span className="text-primary">{t('elite')}</span>
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
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-12 mt-16 items-start">
        
        {/* Job Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider">Qatar</span>
              <span className="bg-muted text-muted-foreground px-4 py-1.5 rounded-full text-sm font-bold flex items-center">
                <MapPin size={14} className="mr-1 rtl:ml-1 rtl:mr-0" /> On-site
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('role')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('roleDesc')}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border/50">{t('benefits')}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <benefit.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">{benefit.label}</h4>
                    <p className="text-foreground font-bold text-lg">{benefit.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 relative"
        >
          <div className="bg-card border border-primary/20 shadow-2xl rounded-3xl p-8 sticky top-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            
            <h3 className="text-2xl font-bold text-foreground mb-2 relative z-10">{t('applyNow')}</h3>
            <p className="text-muted-foreground mb-8 relative z-10 text-sm">
              {t('fillForm')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('fullName')}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">{t('phone')}</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                  placeholder="+974 XXXXXXXX" 
                  dir="ltr"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('age')}</label>
                  <input 
                    type="number" 
                    required
                    min="20"
                    max="39"
                    value={formData.age}
                    onChange={e => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                    placeholder="25" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">{t('country')}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.country}
                    onChange={e => setFormData({...formData, country: e.target.value})}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                    placeholder="Nepal, India, etc." 
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 mt-4"
              >
                {t('submit')}
              </button>
              
              <p className="text-xs text-muted-foreground text-center mt-6">
                {t('agreement')}
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
