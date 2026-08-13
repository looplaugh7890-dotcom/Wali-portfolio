'use client';

import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { siteConfig } from '@/lib/content';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  const socials = [
    { key: 'github', icon: Github, href: siteConfig.social.github },
    { key: 'linkedin', icon: Linkedin, href: siteConfig.social.linkedin },
    { key: 'instagram', icon: Instagram, href: siteConfig.social.instagram },
    { key: 'twitter', icon: Twitter, href: siteConfig.social.twitter },
  ];

  const navItems = [
    { label: t.navHome, href: '#home' },
    { label: t.navAbout, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navWork, href: '#work' },
    { label: t.navProcess, href: '#process' },
    { label: t.navTestimonials, href: '#testimonials' },
    { label: t.navContact, href: '#contact' },
  ];

  const marqueeItems = [t.footerAvailable, t.floatingLabel1, t.floatingLabel2, t.floatingLabel3, t.footerCollaborate];

  return (
    <footer className="relative border-t border-border-soft pt-20 pb-10">
      <div className="container-wa">
        <div className="overflow-hidden border-y border-border-soft py-3 mb-16 -mx-6 md:-mx-10">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center">
                {marqueeItems.map((text) => (
                  <span key={text} className="inline-flex items-center gap-4 mx-6 font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">
                    <span className="h-1 w-1 rounded-full bg-brass/50" />
                    {text}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <a href="#contact" className="group block">
          <h2 className="font-display text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-ink text-balance">
            {t.footerCta.split('.')[0]}.
            <ArrowUpRight
              size={56}
              className="inline-block align-middle text-brass transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </h2>
        </a>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-border-soft pt-10">
          <div>
            <p className="font-display text-lg text-ink">{t.siteName.toUpperCase()}</p>
            <p className="mt-2 text-sm text-ink-faint">{t.siteRole}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint mb-3">{t.footerNavigate}</p>
            <ul className="space-y-2">
              {navItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-dim hover:text-brass transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint mb-3">{t.footerContact}</p>
            <ul className="space-y-2 text-sm text-ink-dim">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint mb-3">{t.footerElsewhere}</p>
            <div className="flex gap-3">
              {socials.map(({ key, icon: Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-border-soft text-ink-dim hover:border-brass/50 hover:text-brass transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>&copy; {new Date().getFullYear()} {t.siteName}. {t.footerRights}</p>
          <Link href="/admin/login" className="hover:text-ink-dim transition-colors">
            {t.footerAdmin}
          </Link>
        </div>
      </div>
    </footer>
  );
}
