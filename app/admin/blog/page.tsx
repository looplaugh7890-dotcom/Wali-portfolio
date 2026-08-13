'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Plus, Trash2, Pencil, Search } from 'lucide-react';
import { formatDate } from '@/lib/utils';

type Post = {
  _id: string;
  title: string;
  category: string;
  published: boolean;
  createdAt: string;
};

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/blog');
    const json = await res.json();
    setPosts(json.posts ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(
    () => posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())),
    [posts, query]
  );

  async function togglePublished(p: Post) {
    await fetch(`/api/admin/blog/${p._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !p.published }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Blog</h1>
          <p className="mt-1 text-sm text-white/50">Write and publish articles.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
        >
          <Plus size={16} /> New Post
        </Link>
      </div>

      <div className="mt-6 relative w-fit">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts…"
          className="rounded-lg border border-white/10 bg-white/[0.03] pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400/50"
        />
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden overflow-x-auto">
        {loading ? (
          <p className="p-6 text-sm text-white/40">Loading posts…</p>
        ) : filtered.length === 0 ? (
          <p className="p-6 text-sm text-white/40">No posts match.</p>
        ) : (
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs text-white/40">
                <th className="px-5 py-3 font-normal">Title</th>
                <th className="px-5 py-3 font-normal">Category</th>
                <th className="px-5 py-3 font-normal">Status</th>
                <th className="px-5 py-3 font-normal">Created</th>
                <th className="px-5 py-3 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p._id} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-4 text-white">{p.title}</td>
                  <td className="px-5 py-4 text-white/50">{p.category}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => togglePublished(p)}
                      className={`text-xs px-2 py-1 rounded-full ${
                        p.published ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {p.published ? 'Published' : 'Draft'}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-white/40 text-xs">{formatDate(p.createdAt)}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/blog/${p._id}`} className="text-white/50 hover:text-white">
                        <Pencil size={15} />
                      </Link>
                      <button onClick={() => remove(p._id)} className="text-white/50 hover:text-red-400">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
