'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Home, Bus, HeartPulse, Clock, CalendarDays, User, FileText, Briefcase } from 'lucide-react';
import { siteConfig } from '@/content/site-config';

const benefits = [
  { icon: DollarSign, label: 'Basic Salary', value: '1000 QAR' },
  { icon: DollarSign, label: 'Other Allowance', value: '200 QAR' },
  { icon: Clock, label: 'Overtime Allowance', value: 'Available' },
  { icon: Home, label: 'Accommodation', value: 'Company Provided' },
  { icon: Bus, label: 'Transportation', value: 'Company Provided' },
  { icon: HeartPulse, label: 'Health Card', value: 'Gov. Health card provided' },
  { icon: Clock, label: 'Duty Hours', value: '8 hours/day' },
  { icon: CalendarDays, label: 'Weekly Off', value: '1 day per week' },
  { icon: User, label: 'Age Requirement', value: '20 to 39 years' },
  { icon: FileText, label: 'Contract', value: '2 years contract' },
];

export default function CareersClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Job Application* 📝\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Age:* ${formData.age}\n*Country:* ${formData.country}`;
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
            <Briefcase size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Join Our <span className="text-primary">Elite Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We are looking for dedicated professionals to join Refined Radiance. Build a rewarding career in facility management with comprehensive benefits.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Job Description & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Staff (Direct Recruitment)</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We are directly recruiting on-site for dedicated individuals to join our premium cleaning and facility management crew. We offer highly competitive packages to ensure our staff are well taken care of.
            </p>

            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-2xl font-bold mb-8 text-foreground border-b border-border pb-4 relative z-10">Job Benefits & Details</h3>
              <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-2xl bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <benefit.icon size={22} />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{benefit.label}</span>
                      <strong className="text-foreground text-lg leading-tight block">{benefit.value}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Application Form */}
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
                <h3 className="text-3xl font-bold text-foreground mb-2">Apply Now</h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and our recruitment team will contact you directly.</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number (WhatsApp)</label>
                    <input 
                      type="tel" 
                      placeholder="+974 1234 5678" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      dir="ltr" 
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Age</label>
                      <input 
                        type="number" 
                        min="20" 
                        max="39" 
                        placeholder="e.g. 25" 
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Country</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Nepal, India, etc." 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-primary text-primary-foreground font-bold p-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25">
                      Submit Application
                    </button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you agree to our recruitment policies. Only shortlisted candidates will be contacted.
                    </p>
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
