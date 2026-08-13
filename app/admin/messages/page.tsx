'use client';

import { useEffect, useMemo, useState } from 'react';
import { Trash2, ChevronDown, Search } from 'lucide-react';
import { formatDate } from '@/lib/utils';

type Message = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'unread' | 'read' | 'archived';
  createdAt: string;
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read' | 'archived'>('all');
  const [query, setQuery] = useState('');

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/messages');
    const json = await res.json();
    setMessages(json.messages ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    return messages.filter((m) => {
      const matchesFilter = filter === 'all' || m.status === filter;
      const matchesQuery =
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.email.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [messages, filter, query]);

  async function setStatus(id: string, status: Message['status']) {
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm('Delete this message?')) return;
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
    load();
  }

  function toggleExpand(m: Message) {
    setExpanded(expanded === m._id ? null : m._id);
    if (m.status === 'unread') setStatus(m._id, 'read');
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Messages</h1>
      <p className="mt-1 text-sm text-white/50">Contact form submissions from your site.</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or email…"
            className="rounded-lg border border-white/10 bg-white/[0.03] pl-9 pr-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400/50"
          />
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 p-1">
          {(['all', 'unread', 'read', 'archived'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
                filter === s ? 'bg-indigo-500/15 text-indigo-300' : 'text-white/50 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5">
        {loading ? (
          <p className="p-6 text-sm text-white/40">Loading messages…</p>
        ) : filtered.length === 0 ? (
          <p className="p-6 text-sm text-white/40">No messages match.</p>
        ) : (
          filtered.map((m) => (
            <div key={m._id}>
              <button
                onClick={() => toggleExpand(m)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span
                  className={`h-2 w-2 rounded-full shrink-0 ${
                    m.status === 'unread' ? 'bg-indigo-400' : 'bg-transparent'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{m.name} · {m.service}</p>
                  <p className="text-xs text-white/40 truncate">{m.email}</p>
                </div>
                <span className="hidden sm:block text-xs text-white/30 shrink-0">{formatDate(m.createdAt)}</span>
                <ChevronDown
                  size={16}
                  className={`text-white/30 shrink-0 transition-transform ${expanded === m._id ? 'rotate-180' : ''}`}
                />
              </button>

              {expanded === m._id && (
                <div className="px-5 pb-5 pt-1">
                  <div className="rounded-xl bg-black/30 border border-white/5 p-4 space-y-3">
                    <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">{m.message}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-white/40">
                      {m.phone && <span>Phone: {m.phone}</span>}
                      {m.budget && <span>Budget: {m.budget}</span>}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    {m.status !== 'unread' && (
                      <button onClick={() => setStatus(m._id, 'unread')} className="text-xs text-white/50 hover:text-white">
                        Mark unread
                      </button>
                    )}
                    {m.status !== 'archived' && (
                      <button onClick={() => setStatus(m._id, 'archived')} className="text-xs text-white/50 hover:text-white">
                        Archive
                      </button>
                    )}
                    <button onClick={() => remove(m._id)} className="text-xs text-red-400 hover:text-red-300 inline-flex items-center gap-1">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
