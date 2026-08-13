'use client';

import { Star } from 'lucide-react';
import { ITestimonial } from '@/lib/models/Testimonial';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Testimonials({ testimonials }: { testimonials: ITestimonial[] }) {
  const { t } = useLanguage();
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-surface/40">
      <div className="container-wa">
        <SectionHeading eyebrow={t.testimonialsEyebrow} title={t.testimonialsTitle} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <Reveal key={item._id} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:border-brass/25 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.07)]">
                <span className="absolute -top-2 -right-1 font-display text-[100px] leading-none text-brass/5 select-none pointer-events-none">&ldquo;</span>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < item.rating ? 'fill-brass text-brass' : 'text-border'}
                    />
                  ))}
                </div>
                <p className="text-sm text-ink-dim leading-relaxed flex-1">&ldquo;{item.message}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border-soft">
                  <div className="h-9 w-9 rounded-full bg-surface-2 flex items-center justify-center font-mono text-xs text-brass">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-ink">{item.name}</p>
                    <p className="text-xs text-ink-faint">
                      {[item.role, item.company].filter(Boolean).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
