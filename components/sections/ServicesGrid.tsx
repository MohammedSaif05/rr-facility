'use client';
import { Sparkles, Building2, LayoutGrid, Coffee, Sofa, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  { id: 'home-cleaning', title: 'Home Cleaning', desc: 'Thorough cleaning for residential properties, ensuring a pristine living space.', icon: Sparkles, image: '/images/services/home-cleaning.png' },
  { id: 'office-cleaning', title: 'Office / Commercial Cleaning', desc: 'Maintain a professional and spotless environment for your business.', icon: Building2, image: '/images/services/office-cleaning.png' },
  { id: 'window-cleaning', title: 'Window & Glass Cleaning', desc: 'Streak-free window cleaning for clear views and brighter spaces.', icon: LayoutGrid, image: '/images/services/window-cleaning.png' },
  { id: 'kitchen-deep-cleaning', title: 'Kitchen Deep Cleaning', desc: 'Intensive sanitization for commercial and residential kitchens.', icon: Coffee, image: '/images/services/kitchen-deep-cleaning.png' },
  { id: 'carpet-sofa-shampooing', title: 'Carpet & Sofa Shampooing', desc: 'Deep extraction cleaning to revitalize your carpets and upholstery.', icon: Sofa, image: '/images/services/carpet-sofa-shampooing.png' },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-lg">Specialized facility management and cleaning solutions tailored to your specific needs.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-card/80 backdrop-blur-md flex items-center justify-center text-primary shadow-lg border border-border/50">
                  <service.icon size={24} strokeWidth={2} />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.desc}</p>
                
                <Link href={`/services/${service.id}` as any} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto">
                  Learn more <ArrowRight size={16} className="ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
