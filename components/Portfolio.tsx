'use client';

import { IProject } from '@/lib/models/Project';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function Portfolio({ projects }: { projects: IProject[] }) {
  const { t } = useLanguage();
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p._id !== featured?._id);

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="container-wa">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading eyebrow={t.portfolioEyebrow} title={t.portfolioTitle} />
        </div>

        {!featured ? (
          <Reveal className="mt-16">
            <div className="rounded-2xl border border-dashed border-border py-20 text-center">
              <p className="font-display text-2xl text-ink-dim">{t.portfolioEmpty}</p>
              <p className="mt-2 text-sm text-ink-faint">
                {t.portfolioEmptyDesc}
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-16 space-y-14">
            <Reveal>
              <div className="max-w-4xl mx-auto">
                <ProjectCard project={featured} size="featured" />
              </div>
            </Reveal>

            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {rest.map((project, i) => (
                  <Reveal key={project._id} delay={i * 0.05}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
