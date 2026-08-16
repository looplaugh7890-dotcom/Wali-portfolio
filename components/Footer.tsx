'use client';

import { ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/content';
import { useLanguage } from './LanguageProvider';

function FacebookIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function UpworkIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.553 14.668c-2.14-.647-3.776-1.237-3.776-2.563 0-1.47 1.327-2.147 3.228-2.147 2.035 0 2.764.754 3.128 1.813l2.12-.923c-.456-1.627-1.785-2.833-4.165-2.833-2.7 0-4.656 1.7-4.656 4.133 0 2.617 2.227 3.44 4.497 4.103 1.98.587 3.304 1.154 3.304 2.517 0 1.297-1.248 2.053-3.158 2.053-2.257 0-3.088-.87-3.537-2.03l-2.208.89c.537 1.853 2.11 3.137 4.583 3.137 2.837 0 4.87-1.654 4.87-4.21 0-2.493-1.882-3.342-4.197-4.093zM6.953 3.588C5.27 3.588 4 4.858 4 6.54c0 1.683 1.27 2.953 2.953 2.953h.018c1.714 0 2.966-1.27 2.966-2.953 0-1.682-1.252-2.952-2.984-2.952zm.018 12.046H4.037v-9.35h2.934v9.35zM13.277 3.588h-2.953v9.35h2.953v-9.35z"/>
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const socials = [
    { key: 'upwork', icon: UpworkIcon, href: siteConfig.social.upwork },
    { key: 'linkedin', icon: Linkedin, href: siteConfig.social.linkedin },
    { key: 'github', icon: Github, href: siteConfig.social.github },
    { key: 'facebook', icon: FacebookIcon, href: siteConfig.social.facebook },
    { key: 'instagram', icon: Instagram, href: siteConfig.social.instagram },
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
        </div>
      </div>
    </footer>
  );
}
