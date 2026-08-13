import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-ink px-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">Page not found.</h1>
      <p className="mt-4 text-ink-dim max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-medium text-bg"
      >
        Back home
      </Link>
    </main>
  );
}
