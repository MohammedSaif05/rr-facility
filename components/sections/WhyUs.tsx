'use client';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Leaf, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyUs() {
  const t = useTranslations('WhyUs');

  const reasons = [
    { title: t('staff'), desc: t('staffDesc'), icon: ShieldCheck },
    { title: t('eco'), desc: t('ecoDesc'), icon: Leaf },
    { title: t('punctual'), desc: t('punctualDesc'), icon: Clock },
    { title: t('guarantee'), desc: t('guaranteeDesc'), icon: ThumbsUp },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">{t('whyChooseUs')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">{t('title')}</h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all border border-border/50">
                    <reason.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl lg:block hidden bg-black border border-primary/20"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-0 pointer-events-none" />
             <Image 
                src="/images/logo.png" 
                alt="Refined Radiance Facility Management" 
                fill
                className="object-contain p-16 relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:scale-105 transition-transform duration-700" 
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
