'use client';

import { useLanguage } from './LanguageProvider';
import { Reveal } from './Reveal';

export function TechStack() {
  const { t } = useLanguage();

  const categories = [
    { name: t.techFrontend, items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { name: t.techBackend, items: ['Node.js', 'Express', 'PHP', 'REST APIs'] },
    { name: t.techDatabase, items: ['MongoDB', 'MongoDB Atlas', 'SQL'] },
    { name: t.techMarketing, items: ['SEO', 'Google Analytics', 'Search Console', 'Social Media Marketing', 'Content Strategy'] },
  ];

  return (
    <section className="relative py-24 md:py-28 border-y border-border-soft">
      <div className="container-wa">
        <Reveal>
          <span className="eyebrow">{t.techEyebrow}</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.06}>
              <div>
                <h3 className="font-display text-xl text-ink mb-4">{category.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex items-center gap-1.5 text-xs text-ink-dim border border-border-soft rounded-full px-3 py-1.5 hover:border-brass/30 hover:text-brass/90 transition-colors cursor-default">
                        <span className="h-1 w-1 rounded-full bg-brass/60 shrink-0" />
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
