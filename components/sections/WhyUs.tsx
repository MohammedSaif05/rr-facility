'use client';
import { ShieldCheck, Leaf, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  { title: 'Trained & Verified Staff', desc: 'Our team undergoes rigorous background checks and professional training.', icon: ShieldCheck },
  { title: 'Eco-Friendly Products', desc: 'We use safe, sustainable cleaning products that protect your health and the environment.', icon: Leaf },
  { title: 'Punctual & Reliable', desc: 'We value your time. Our team arrives on schedule, every time.', icon: Clock },
  { title: 'Satisfaction Guarantee', desc: 'We are committed to excellence. If you are not satisfied, we will make it right.', icon: ThumbsUp },
];

export default function WhyUs() {
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
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Setting the Standard in <br/>Facility Management
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              At Refined Radiance, we don't just clean; we care for your environment. Our commitment to quality and consistency makes us the trusted partner for homes and businesses across Qatar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="flex flex-col space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-2">
                    <reason.icon size={24} />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
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
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-0" />
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
