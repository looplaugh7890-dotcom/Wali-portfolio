'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { IPost } from '@/lib/models/Post';
import { formatDate } from '@/lib/utils';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function BlogPreview({ posts }: { posts: IPost[] }) {
  const { t } = useLanguage();
  if (posts.length === 0) return null;
  const latest = posts.slice(0, 3);

  return (
    <section className="relative py-28 md:py-36">
      <div className="container-wa">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading eyebrow={t.blogEyebrow} title={t.blogTitle} />
          <Link href="/blog" className="text-sm text-ink-dim hover:text-brass transition-colors inline-flex items-center gap-1">
            {t.blogViewAll} <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post, i) => (
            <Reveal key={post._id} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
                      <span className="font-display text-3xl text-ink-faint/40">{post.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-brass">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink group-hover:text-brass transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-ink-faint">{formatDate(post.publishedAt ?? post.createdAt)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
