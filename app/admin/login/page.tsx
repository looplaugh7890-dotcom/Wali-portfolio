'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || 'Could not log in.');
        setLoading(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch {
      setError('Could not reach the server.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0A0A0C] text-[#E7E7EA]">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="h-9 w-9 rounded-lg bg-indigo-500/15 flex items-center justify-center">
            <Lock size={16} className="text-indigo-300" />
          </div>
          <span className="text-sm font-medium text-white/70">Wali Aslam — Admin</span>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 space-y-4">
          <div>
            <label className="block text-xs text-white/50 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50 transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-500 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          No account yet? Run <code className="text-white/50">npm run seed</code> after setting
          ADMIN_EMAIL / ADMIN_PASSWORD in .env.local.
        </p>
      </div>
    </div>
  );
}
