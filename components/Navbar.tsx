'use client';

import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { languages } from '@/lib/i18n';
import { ThemeSwitcher } from './ThemeSwitcher';
import { cx } from '@/lib/utils';

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t.navHome, href: '#home' },
    { label: t.navAbout, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navWork, href: '#work' },
    { label: t.navProcess, href: '#process' },
    { label: t.navTestimonials, href: '#testimonials' },
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <header
      className={cx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className="container-wa">
        <div
          className={cx(
            'flex items-center justify-between rounded-full px-5 transition-all duration-300',
            scrolled
              ? 'h-14 bg-surface/70 backdrop-blur-xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'h-16 bg-transparent border border-transparent'
          )}
        >
          <a href="#home" className="font-display text-lg tracking-wide text-ink">
            {t.siteName.toUpperCase()}
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-ink-dim hover:text-ink transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brass group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher />

            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-ink-dim hover:text-ink hover:border-brass/40 transition-colors"
              >
                <Globe size={13} />
                <span>{languages.find((l) => l.code === language)?.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 right-0 rounded-xl border border-border bg-surface/95 backdrop-blur-xl p-1.5 min-w-[100px] shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={cx(
                          'w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors',
                          language === lang.code
                            ? 'bg-brass/15 text-brass'
                            : 'text-ink-dim hover:text-ink hover:bg-surface-2'
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brass/40 px-4 py-2 text-sm text-ink hover:bg-brass hover:text-bg hover:border-brass hover:shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.25)] transition-colors"
            >
              {t.letsTalk}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeSwitcher />

            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="p-2 text-ink-dim hover:text-ink"
              >
                <Globe size={18} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full mt-2 right-0 rounded-xl border border-border bg-surface/95 backdrop-blur-xl p-1.5 min-w-[100px] shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={cx(
                          'w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors',
                          language === lang.code
                            ? 'bg-brass/15 text-brass'
                            : 'text-ink-dim hover:text-ink hover:bg-surface-2'
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-ink"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-6 mt-3 rounded-3xl border border-border bg-surface/95 backdrop-blur-xl p-6"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-display text-ink border-b border-border-soft last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brass text-bg py-3 text-sm font-medium"
            >
              {t.letsTalk} <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
