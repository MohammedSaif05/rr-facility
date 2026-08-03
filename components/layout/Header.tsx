'use client';
import { Link, usePathname } from '@/i18n/routing';
import { siteConfig } from '@/content/site-config';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // Using hardcoded translations here for structural speed, but these would ideally be in next-intl messages
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <Image src="/images/logo.png" alt="Refined Radiance Facility Management" width={200} height={80} className="object-contain max-h-16 w-auto" priority />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href as any} className={`text-sm font-semibold transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground/80'}`}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageSwitcher />
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-2 rtl:space-x-reverse bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:bg-primary/90 transition shadow-sm">
            <PhoneCall size={18} />
            <span dir="ltr">{siteConfig.contact.phone}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href as any} onClick={() => setIsOpen(false)} className={`text-base font-medium ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}>
                {link.name}
              </Link>
            ))}
             <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-2 rtl:space-x-reverse text-primary font-medium mt-4">
              <PhoneCall size={18} />
              <span dir="ltr">{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
