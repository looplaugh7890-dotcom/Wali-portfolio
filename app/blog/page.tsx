import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { formatDate } from '@/lib/utils';
import { getPublishedPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on web development, app development, and digital marketing.',
};

export const revalidate = 60;

export default async function BlogIndex() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-wa">
          <Reveal>
            <span className="eyebrow">Writing</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink">The Blog</h1>
          </Reveal>

          {posts.length === 0 ? (
            <Reveal delay={0.1} className="mt-16">
              <div className="rounded-2xl border border-dashed border-border py-20 text-center">
                <p className="font-display text-2xl text-ink-dim">No posts published yet</p>
                <p className="mt-2 text-sm text-ink-faint">Check back soon.</p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {posts.map((post, i) => (
                <Reveal key={post._id} delay={i * 0.05}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                    <h2 className="mt-2 font-display text-xl text-ink group-hover:text-brass transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-faint line-clamp-2">{post.excerpt}</p>
                    <p className="mt-3 text-xs text-ink-faint">{formatDate(post.publishedAt ?? post.createdAt)}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
