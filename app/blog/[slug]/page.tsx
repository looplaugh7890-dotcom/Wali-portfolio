import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { formatDate } from '@/lib/utils';
import { getPostBySlug, getPublishedPosts } from '@/lib/data';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.publishedAt ?? post.createdAt,
    dateModified: post.updatedAt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="container-wa max-w-3xl">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-brass transition-colors">
              <ArrowLeft size={14} /> Back to blog
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <span className="eyebrow mt-8 block">{post.category}</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl text-ink text-balance">{post.title}</h1>
            <p className="mt-4 text-sm text-ink-faint">
              {post.author} · {formatDate(post.publishedAt ?? post.createdAt)}
            </p>
          </Reveal>

          {post.coverImage && (
            <Reveal delay={0.1}>
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.14}>
            <div
              className="prose-wa mt-12 text-ink-dim leading-relaxed whitespace-pre-line"
            >
              {post.content}
            </div>
          </Reveal>

          {post.tags.length > 0 && (
            <Reveal delay={0.18} className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-ink-dim border border-border-soft rounded-full px-3 py-1.5">
                  #{tag}
                </span>
              ))}
            </Reveal>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
