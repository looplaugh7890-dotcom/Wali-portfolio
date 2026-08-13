'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { LaptopModel } from './LaptopModel';

export function Process() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  const steps = [
    { number: '01', title: t.process1Title, description: t.process1Desc },
    { number: '02', title: t.process2Title, description: t.process2Desc },
    { number: '03', title: t.process3Title, description: t.process3Desc },
    { number: '04', title: t.process4Title, description: t.process4Desc },
    { number: '05', title: t.process5Title, description: t.process5Desc },
    { number: '06', title: t.process6Title, description: t.process6Desc },
  ];

  return (
    <section id="process" className="relative py-28 md:py-36 bg-surface/40">
      <div className="container-wa">
        <SectionHeading eyebrow={t.processEyebrow} title={t.processTitle} />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          <div ref={ref} className="relative max-w-3xl lg:w-1/2">
            <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-border-soft" />
            <motion.div
              className="absolute left-[15px] md:left-[19px] top-2 w-px bg-brass origin-top"
              style={{ scaleY: progress, height: 'calc(100% - 16px)' }}
            />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.04}>
                  <div className="relative flex gap-6 md:gap-8 pl-0">
                    <div className="relative z-10 flex h-8 w-8 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full border border-brass/40 bg-bg font-mono text-xs text-brass">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm md:text-base text-ink-dim max-w-md leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="lg:w-1/2 w-full sticky top-32">
            <div className="relative w-full aspect-square max-h-[560px] rounded-2xl overflow-hidden border border-border-soft bg-surface/60">
              <LaptopModel />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
