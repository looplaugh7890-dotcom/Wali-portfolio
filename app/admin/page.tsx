'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FolderKanban, Star, MessageSquare, MailOpen, Newspaper } from 'lucide-react';
import { StatCard } from '@/components/admin/StatCard';
import { formatDate } from '@/lib/utils';

type Stats = {
  totalProjects: number;
  featuredProjects: number;
  totalMessages: number;
  unreadMessages: number;
  publishedPosts: number;
  recentMessages: { _id: string; name: string; email: string; message: string; status: string; createdAt: string }[];
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-white/50">A quick look at the site.</p>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total Projects" value={stats?.totalProjects ?? '—'} icon={FolderKanban} />
        <StatCard label="Featured Projects" value={stats?.featuredProjects ?? '—'} icon={Star} />
        <StatCard label="Total Messages" value={stats?.totalMessages ?? '—'} icon={MessageSquare} />
        <StatCard label="Unread Messages" value={stats?.unreadMessages ?? '—'} icon={MailOpen} />
        <StatCard label="Published Posts" value={stats?.publishedPosts ?? '—'} icon={Newspaper} />
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-white/70">Recent Messages</h2>
          <Link href="/admin/messages" className="text-xs text-indigo-300 hover:underline">
            View all
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {!stats || stats.recentMessages.length === 0 ? (
            <p className="p-6 text-sm text-white/40">No messages yet.</p>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {stats.recentMessages.map((m) => (
                  <tr key={m._id} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4">
                      <p className="text-white">{m.name}</p>
                      <p className="text-xs text-white/40">{m.email}</p>
                    </td>
                    <td className="px-5 py-4 text-white/50 max-w-xs truncate hidden sm:table-cell">
                      {m.message}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          m.status === 'unread'
                            ? 'bg-indigo-500/15 text-indigo-300'
                            : 'bg-white/5 text-white/40'
                        }`}
                      >
                        {m.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-white/40 whitespace-nowrap">{formatDate(m.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
