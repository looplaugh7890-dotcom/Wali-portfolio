'use client';

import { aboutContent } from '@/lib/content';
import { useLanguage } from './LanguageProvider';
import { Reveal } from './Reveal';

export function About() {
  const { t } = useLanguage();

  const timeline = [
    { year: '2021', label: t.timeline1Label },
    { year: '2022', label: t.timeline2Label },
    { year: '2023', label: t.timeline3Label },
    { year: 'Now', label: t.timeline4Label },
  ];

  const paragraphs = [t.aboutP1, t.aboutP2, t.aboutP3];

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-wa">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">{t.aboutEyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1] text-ink text-balance">
                {t.aboutHeading}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 space-y-4">
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className="group flex items-baseline gap-4 border-t border-border-soft py-3.5 first:border-t-0 hover:bg-brass/[0.03] rounded-lg px-2 -mx-2 transition-colors cursor-default"
                  >
                    <span className="font-mono text-xs text-brass w-12 shrink-0">{item.year}</span>
                    <span className="text-sm text-ink-dim group-hover:text-ink-dim/90 transition-colors">{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p
                  className={
                    i === 0
                      ? 'font-display text-2xl md:text-3xl leading-snug text-ink mb-8 text-balance'
                      : 'text-base md:text-lg leading-relaxed text-ink-dim mb-6 max-w-2xl'
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
