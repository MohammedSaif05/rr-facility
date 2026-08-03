'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ServiceDetailClient({ title, slug }: { title: string, slug: string }) {
  const t = useTranslations('Services');
  const imageSrc = `/images/services/${slug}.png`;

  // Determine key for dynamic service title from slug if needed, but since we passed `title` from server,
  // we need to translate `title` if it matches one of our core services.
  // Actually, we mapped the core services in en.json exactly.
  let translatedTitle = title;
  if (slug === 'home-cleaning') translatedTitle = t('homeCleaning.title');
  if (slug === 'office-cleaning') translatedTitle = t('officeCleaning.title');
  if (slug === 'window-cleaning') translatedTitle = t('windowCleaning.title');
  if (slug === 'kitchen-deep-cleaning') translatedTitle = t('kitchenCleaning.title');
  if (slug === 'carpet-sofa-shampooing') translatedTitle = t('carpetCleaning.title');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-end pb-16">
        <Image 
          src={imageSrc}
          alt={translatedTitle}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-4"
          >
            {translatedTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium"
          >
            {t('premiumSolutions', { title: translatedTitle })}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-16 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-8"
        >
          <h2 className="text-3xl font-bold text-foreground">{t('overview')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('overviewText')}
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">{t('whatsIncluded')}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                t('inclusions.assessment'),
                t('inclusions.ecoProducts'),
                t('inclusions.sanitization'),
                t('inclusions.trainedStaff'),
                t('inclusions.qualityCheck'),
                t('inclusions.guarantee')
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground text-lg font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Booking Card */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border/50 shadow-2xl rounded-3xl p-8 sticky top-32"
          >
            <h3 className="text-2xl font-bold mb-4">{t('ready')}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t('bookToday')}</p>
            <Link 
              href="/contact" 
              className="block text-center w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/25"
            >
              {t('requestQuote')}
            </Link>
            <div className="mt-6 text-center text-sm text-muted-foreground border-t border-border/50 pt-6">
              {t('orCall')} <br/>
              <strong className="text-foreground text-xl tracking-wider block mt-2" dir="ltr">+974 7194 9557</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
