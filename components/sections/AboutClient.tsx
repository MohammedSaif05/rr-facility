'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center text-center border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex justify-center"
          >
            <div className="relative p-6 rounded-3xl bg-black/40 backdrop-blur-sm border border-primary/20 shadow-2xl">
              <Image 
                src="/images/logo.png" 
                alt="Refined Radiance Logo" 
                width={300} 
                height={120} 
                className="object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]" 
                priority 
              />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight"
          >
            Defining Excellence in <br className="hidden md:block" />
            <span className="text-primary">Facility Management</span>
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">A Legacy of Pristine Environments</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Refined Radiance Facility Management was born from a singular vision: to elevate the standard of cleanliness and property care in Qatar.
              </p>
              <p>
                Building upon the success and trusted reputation of our sister company, <strong className="text-foreground font-semibold">Refined Radiance Cleaning</strong>, we expanded our expertise to offer comprehensive, end-to-end facility management. Today, we are proud to serve some of the most prestigious residential and commercial properties across Doha, Al Wakrah, and beyond.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group"
          >
            <Image 
              src="/images/gallery/rr-facility-landscape-1.jpeg" 
              alt="Our Facility" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-background p-12 md:p-16 rounded-[3rem] shadow-xl border border-border/50 relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-card rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-lg">
              <Users size={40} />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4 mt-4">Leadership & Vision</h2>
            <p className="text-xl text-primary font-medium mb-10">Babu Abdul Kadar — Founder</p>
            <blockquote className="text-2xl md:text-3xl text-muted-foreground italic leading-relaxed font-light">
              "Our goal has never been just to clean a space. Our goal is to craft environments where people can thrive, businesses can prosper, and peace of mind is guaranteed. At Refined Radiance, excellence isn't just a promise—it's our standard."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-background p-12 rounded-3xl shadow-lg border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="text-primary" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver unparalleled facility management services that ensure hygiene, safety, and aesthetic brilliance. We strive to build long-lasting partnerships with our clients through relentless reliability and an uncompromising eye for detail.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-12 rounded-3xl shadow-lg border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Lightbulb className="text-primary" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the most trusted and innovative facility management provider in Qatar, renowned for our sustainable practices, elite workforce, and exceptional customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
