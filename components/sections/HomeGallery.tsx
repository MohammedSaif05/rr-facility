'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

const galleryImages = [
  { src: '/images/gallery/rr-facility-portrait-1.jpeg', alt: 'Refined Radiance Facility Management Team', className: 'md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-0' },
  { src: '/images/gallery/rr-facility-landscape-1.jpeg', alt: 'Refined Radiance Office Interior', className: 'md:col-span-2 md:row-span-1 min-h-[250px] md:min-h-0' },
  { src: '/images/gallery/rr-facility-portrait-2.jpeg', alt: 'Premium Cleaning Services', className: 'md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-0' },
  { src: '/images/gallery/rr-facility-landscape-2.jpeg', alt: 'Corporate Facility Management', className: 'md:col-span-2 md:row-span-1 min-h-[250px] md:min-h-0' },
  { src: '/images/gallery/rr-facility-landscape-3.jpeg', alt: 'High-End Cleaning Equipment', className: 'md:col-span-4 md:row-span-1 min-h-[300px] md:min-h-0' },
];

export default function HomeGallery() {
  const t = useTranslations('Gallery');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <section className="py-24 bg-muted/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">{t('inside')}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t('glimpse')}</h2>
          <p className="text-muted-foreground text-lg">{t('desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[280px] gap-6">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className={`relative rounded-3xl overflow-hidden group shadow-lg border border-border/50 cursor-pointer ${img.className}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
              
              {/* Overlay hint icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black/50 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {t('viewFull')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-[101] p-3 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full text-white transition-all border border-white/10"
            >
              <X size={28} strokeWidth={2.5} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-full rounded-xl overflow-hidden cursor-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
