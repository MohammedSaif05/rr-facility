import { Link } from '@/i18n/routing';
import { siteConfig } from '@/content/site-config';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Image src="/images/logo.png" alt="Refined Radiance Facility Management" width={180} height={72} className="object-contain max-h-14 w-auto mb-4" />
          <p className="text-sm text-secondary-foreground/80 leading-relaxed">
            Premium facility management and cleaning services in Qatar, ensuring pristine environments for homes and businesses.
          </p>
          <p className="text-xs font-semibold text-primary mt-2">Part of the Refined Radiance Group</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-sm hover:text-primary transition">Home</Link></li>
            <li><Link href="/services" className="text-sm hover:text-primary transition">Services</Link></li>
            <li><Link href="/about" className="text-sm hover:text-primary transition">About Us</Link></li>
            <li><Link href="/careers" className="text-sm hover:text-primary transition">Careers</Link></li>
            <li><Link href="/contact" className="text-sm hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Core Services</h3>
          <ul className="space-y-3">
            {siteConfig.services.slice(0,5).map(service => (
              <li key={service} className="text-sm text-secondary-foreground/80">{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start space-x-2 rtl:space-x-reverse">
              <span className="font-medium">P:</span>
              <span dir="ltr">{siteConfig.contact.phone}</span>
            </li>
            <li className="flex items-start space-x-2 rtl:space-x-reverse">
              <span className="font-medium">E:</span>
              <span>{siteConfig.contact.email}</span>
            </li>
            <li className="flex items-start space-x-2 rtl:space-x-reverse">
              <span className="font-medium">A:</span>
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-sm text-secondary-foreground/60">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
