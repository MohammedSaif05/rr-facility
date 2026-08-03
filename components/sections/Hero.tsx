'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Modern clean office building interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 rtl:bg-gradient-to-l" />
      </div>

      <div className="w-full max-w-7xl relative z-10 mx-auto px-4 text-center md:text-left rtl:md:text-right mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-md"
        >
          Qatar's Premium Facility Management
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight max-w-4xl"
        >
          Refined Radiance <br/> Facility Management
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed md:mx-0 mx-auto"
        >
          Comprehensive cleaning and facility management services in Qatar. We deliver pristine environments for homes and corporate spaces with unmatched reliability.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center"
        >
          <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25">
            Get a Free Quote
          </Link>
          <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary/80 text-secondary-foreground font-bold backdrop-blur-md hover:bg-secondary transition-all border border-border">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
