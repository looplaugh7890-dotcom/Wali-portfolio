'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Plus, Star, Trash2, Pencil, Search } from 'lucide-react';
import { IProject } from '@/lib/models/Project';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published'>('all');

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/projects');
    const json = await res.json();
    setProjects(json.projects ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [projects, query, statusFilter]);

  async function toggle(id: string, field: 'featured' | 'status', value: any) {
    await fetch(`/api/admin/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm('Delete this project? This cannot be undone.')) return;
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Projects</h1>
          <p className="mt-1 text-sm text-white/50">Manage your portfolio case studies.</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
        >
          <Plus size={16} /> New Project
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="rounded-lg border border-white/10 bg-white/[0.03] pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400/50"
          />
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 p-1">
          {(['all', 'published', 'draft'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
                statusFilter === s ? 'bg-indigo-500/15 text-indigo-300' : 'text-white/50 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden overflow-x-auto">
        {loading ? (
          <p className="p-6 text-sm text-white/40">Loading projects…</p>
        ) : filtered.length === 0 ? (
          <p className="p-6 text-sm text-white/40">No projects match.</p>
        ) : (
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs text-white/40">
                <th className="px-5 py-3 font-normal">Title</th>
                <th className="px-5 py-3 font-normal">Category</th>
                <th className="px-5 py-3 font-normal">Year</th>
                <th className="px-5 py-3 font-normal">Status</th>
                <th className="px-5 py-3 font-normal">Featured</th>
                <th className="px-5 py-3 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p._id} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-4 text-white">{p.title}</td>
                  <td className="px-5 py-4 text-white/50">{p.category}</td>
                  <td className="px-5 py-4 text-white/50">{p.year}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => toggle(p._id, 'status', p.status === 'published' ? 'draft' : 'published')}
                      className={`text-xs px-2 py-1 rounded-full ${
                        p.status === 'published'
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {p.status}
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <button onClick={() => toggle(p._id, 'featured', !p.featured)}>
                      <Star size={16} className={p.featured ? 'fill-indigo-300 text-indigo-300' : 'text-white/20'} />
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/projects/${p._id}`} className="text-white/50 hover:text-white">
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
