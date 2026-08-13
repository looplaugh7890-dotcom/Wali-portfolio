'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function GrowthDiagram() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const stages = [
    { label: t.growthStage1, description: t.growthStage1Desc },
    { label: t.growthStage2, description: t.growthStage2Desc },
    { label: t.growthStage3, description: t.growthStage3Desc },
    { label: t.growthStage4, description: t.growthStage4Desc },
    { label: t.growthStage5, description: t.growthStage5Desc },
  ];

  const n = stages.length;

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container-wa">
        <SectionHeading
          eyebrow={t.growthEyebrow}
          title={t.growthTitle}
        />

        <Reveal delay={0.15} className="mt-20">
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-px bg-border">
              {!reduceMotion && (
                <motion.div
                  className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-brass shadow-[0_0_12px_2px_rgba(var(--color-primary-rgb),0.6)]"
                  animate={{ left: ['0%', '100%'] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
              {stages.map((stage, i) => (
                <div key={stage.label} className="relative flex md:flex-col items-center md:items-center gap-4 md:gap-0 md:text-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-bg font-mono text-xs text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="md:mt-5">
                    <h3 className="font-display text-xl text-ink">{stage.label}</h3>
                    <p className="mt-1 text-xs text-ink-faint max-w-[140px] md:mx-auto">{stage.description}</p>
                  </div>
                  {i < n - 1 && (
                    <div className="md:hidden absolute left-6 top-12 bottom-[-2.5rem] w-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
