import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { IProject } from '@/lib/models/Project';
import { cx } from '@/lib/utils';

export function ProjectCard({ project, size = 'normal' }: { project: IProject; size?: 'featured' | 'normal' }) {
  const isFeatured = size === 'featured';

  return (
    <Link
      href={`/project/${project.slug}`}
      className="group block"
    >
      <div
        className={cx(
          'relative overflow-hidden rounded-2xl border border-border bg-surface',
          isFeatured ? 'aspect-[16/8]' : 'aspect-[4/3]'
        )}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes={isFeatured ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
            <span className="font-display text-4xl text-ink-faint/40">{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ink flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={16} className="text-bg" />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className={cx('font-display text-ink', isFeatured ? 'text-2xl md:text-3xl' : 'text-lg')}>
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-faint">{project.category}</p>
        </div>
        <span className="font-mono text-xs text-ink-faint shrink-0 mt-1">{project.year}</span>
      </div>
    </Link>
  );
}
