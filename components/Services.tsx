'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>('web-development');

  const services = [
    {
      number: '01',
      slug: 'web-development',
      title: t.webDevTitle,
      short: t.webDevShort,
      description: t.webDevDesc,
      deliverables: [t.webDevD1, t.webDevD2, t.webDevD3, t.webDevD4],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP'],
    },
    {
      number: '02',
      slug: 'app-development',
      title: t.appDevTitle,
      short: t.appDevShort,
      description: t.appDevDesc,
      deliverables: [t.appDevD1, t.appDevD2, t.appDevD3, t.appDevD4],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'REST APIs'],
    },
    {
      number: '03',
      slug: 'digital-marketing',
      title: t.digitalMarketingTitle,
      short: t.digitalMarketingShort,
      description: t.digitalMarketingDesc,
      deliverables: [t.digitalMarketingD1, t.digitalMarketingD2, t.digitalMarketingD3, t.digitalMarketingD4],
      technologies: ['SEO', 'Google Analytics', 'Search Console', 'Social Media Marketing'],
    },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-surface/40">
      <div className="container-wa">
        <SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} />

        <div className="mt-16 border-t border-border">
          {services.map((service, i) => {
            const isOpen = active === service.slug;
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div
                  className="group border-b border-border cursor-pointer"
                  onClick={() => setActive(isOpen ? null : service.slug)}
                  onMouseEnter={() => setActive(service.slug)}
                >
                  <div className="flex items-center gap-6 md:gap-10 py-8 md:py-10">
                    <span className="font-mono text-sm text-brass w-8 shrink-0">{service.number}</span>
                    <h3 className="font-display text-3xl md:text-5xl text-ink flex-1 transition-colors group-hover:text-brass">
                      {service.title}
                    </h3>
                    <p className="hidden md:block max-w-xs text-sm text-ink-faint text-right">
                      {service.short}
                    </p>
                    <ArrowRight
                      size={20}
                      className={`shrink-0 text-ink-faint transition-transform duration-300 ${
                        isOpen ? '-rotate-45 text-brass' : ''
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-14 md:pl-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                          <p className="text-sm md:text-base text-ink-dim leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-col gap-4">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint mb-2">
                                {t.covers}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.deliverables.map((d) => (
                                  <span
                                    key={d}
                                    className="text-xs text-ink-dim border border-border-soft rounded-full px-3 py-1"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint mb-2">
                                {t.technologies}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, idx) => (
                                  <span key={tech} className="text-xs text-brass/90">
                                    {tech}
                                    {idx !== service.technologies.length - 1 && ' ·'}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
