import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { getProjectBySlug, getAdjacentProject, getPublishedProjects } from '@/lib/data';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = await getAdjacentProject(project.order);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    creator: { '@type': 'Person', name: 'Wali Aslam' },
    dateCreated: String(project.year),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-wa">
          <Reveal>
            <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-brass transition-colors">
              <ArrowLeft size={14} /> Back to work
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <Reveal>
              <span className="eyebrow">{project.category}</span>
              <h1 className="mt-4 font-display text-4xl md:text-6xl text-ink text-balance">{project.title}</h1>
              <p className="mt-5 max-w-xl text-ink-dim leading-relaxed">{project.shortDescription}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-6 border-t border-border-soft pt-6 lg:border-t-0 lg:pt-0">
                {project.client && (
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">Client</dt>
                    <dd className="mt-1 text-sm text-ink">{project.client}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">Year</dt>
                  <dd className="mt-1 text-sm text-ink">{project.year}</dd>
                </div>
                {project.services.length > 0 && (
                  <div className="col-span-2">
                    <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">Services</dt>
                    <dd className="mt-1 text-sm text-ink">{project.services.join(', ')}</dd>
                  </div>
                )}
                <div className="col-span-2 flex gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-brass hover:underline"
                    >
                      Visit live site <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink-dim hover:text-ink transition-colors"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative mt-14 mx-auto max-w-4xl aspect-[16/8] overflow-hidden rounded-2xl border border-border bg-surface">
              {project.heroImage ? (
                <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl text-ink-faint/30">{project.title.charAt(0)}</span>
                </div>
              )}
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {project.challenge && (
              <Reveal>
                <h3 className="font-display text-xl text-ink mb-3">The Challenge</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{project.challenge}</p>
              </Reveal>
            )}
            {project.solution && (
              <Reveal delay={0.06}>
                <h3 className="font-display text-xl text-ink mb-3">The Solution</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{project.solution}</p>
              </Reveal>
            )}
            {project.results && (
              <Reveal delay={0.12}>
                <h3 className="font-display text-xl text-ink mb-3">The Results</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{project.results}</p>
              </Reveal>
            )}
          </div>

          <Reveal className="mt-16">
            <h3 className="font-display text-xl text-ink mb-3">Overview</h3>
            <p className="max-w-3xl text-ink-dim leading-relaxed whitespace-pre-line">{project.description}</p>
          </Reveal>

          {project.technologies.length > 0 && (
            <Reveal className="mt-12">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-xs text-ink-dim border border-border-soft rounded-full px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {project.gallery.length > 0 && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((src, i) => (
                <Reveal key={src + i} delay={i * 0.05}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {next && next.slug !== project.slug && (
            <Reveal className="mt-24 border-t border-border-soft pt-10">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-ink-faint">Next project</p>
              <Link href={`/project/${next.slug}`} className="group mt-3 inline-flex items-center gap-3">
                <h3 className="font-display text-3xl md:text-4xl text-ink group-hover:text-brass transition-colors">
                  {next.title}
                </h3>
                <ArrowUpRight size={24} className="text-brass transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
