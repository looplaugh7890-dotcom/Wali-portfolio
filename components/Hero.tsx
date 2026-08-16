'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const floatingLabels = [t.floatingLabel1, t.floatingLabel2, t.floatingLabel3];

  const stats = [
    { value: '40+', label: t.statsProjects },
    { value: '40+', label: t.statsClients },
    { value: '2+', label: t.statsYears },
  ];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
      style={
        {
          '--x': '50%',
          '--y': '20%',
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity"
        style={{
          background:
            'radial-gradient(600px circle at var(--x) var(--y), rgba(var(--color-primary-rgb),0.12), transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F5F1E8 1px, transparent 1px), linear-gradient(to bottom, #F5F1E8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
        <span className="eyebrow whitespace-nowrap">{t.eyebrow}</span>
      </div>

      <div className="container-wa relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow xl:hidden"
          >
            {t.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.03] text-ink text-balance"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-lg text-base md:text-lg text-ink-dim leading-relaxed"
          >
            {t.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {t.ctaPrimary}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink hover:border-brass/50 transition-colors"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-border-soft pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-ink">{stat.value}</div>
                <div className="mt-1 text-xs text-ink-faint leading-snug">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-brass/25 bg-brass/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brass" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-brass">{t.availableForProjects}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[36px] border border-brass/10 pointer-events-none" />
          <div className="absolute -inset-8 rounded-[44px] border border-brass/5 pointer-events-none" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-brass/25 bg-gradient-to-b from-surface-2 to-surface">
            <Image
              src="/images/wali.png"
              alt={t.heroAlt}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 400px"
            />
            <div className="grain-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%]">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-surface/90 backdrop-blur-xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              {floatingLabels.map((label) => (
                <span
                  key={label}
                  className="font-mono text-[10px] uppercase tracking-wider text-ink-dim px-2.5 py-1.5 rounded-full border border-border-soft"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">{t.scrollLabel}</span>
        <ArrowDown size={14} />
      </motion.a>

      <motion.a
        href="https://wa.me/923172254574"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#128C7E] transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </section>
  );
}
