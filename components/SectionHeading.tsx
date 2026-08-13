import { Reveal } from './Reveal';
import { cx } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className,
}: {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cx(align === 'center' && 'text-center', className)}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] text-ink text-balance">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
