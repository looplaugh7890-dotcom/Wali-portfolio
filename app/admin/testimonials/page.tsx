'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Star, Trash2, Plus } from 'lucide-react';

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  message: string;
  featured: boolean;
};

const empty = { name: '', role: '', company: '', rating: 5, message: '', featured: false };

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/admin/testimonials');
    const json = await res.json();
    setTestimonials(json.testimonials ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch('/api/admin/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm(empty);
    setShowForm(false);
    setSaving(false);
    load();
  }

  async function toggleFeatured(t: Testimonial) {
    await fetch(`/api/admin/testimonials/${t._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: !t.featured }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm('Delete this testimonial?')) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Testimonials</h1>
          <p className="mt-1 text-sm text-white/50">Client quotes shown on the homepage.</p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input label="Name" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} required />
            <Input label="Role" value={form.role} onChange={(v) => setForm((f) => ({ ...f, role: v }))} />
            <Input label="Company" value={form.company} onChange={(v) => setForm((f) => ({ ...f, company: v }))} />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" onClick={() => setForm((f) => ({ ...f, rating: n }))}>
                  <Star size={18} className={n <= form.rating ? 'fill-indigo-300 text-indigo-300' : 'text-white/20'} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-2">Message</label>
            <textarea
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50 resize-none"
            />
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
              className="h-4 w-4 rounded border-white/20 bg-black/30"
            />
            <span className="text-sm text-white/70">Show on homepage</span>
          </label>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Save Testimonial'}
          </button>
        </form>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? (
          <p className="text-sm text-white/40">Loading…</p>
        ) : testimonials.length === 0 ? (
          <p className="text-sm text-white/40">No testimonials yet.</p>
        ) : (
          testimonials.map((t) => (
            <div key={t._id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{[t.role, t.company].filter(Boolean).join(', ')}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => toggleFeatured(t)} title="Toggle homepage visibility">
                    <Star size={15} className={t.featured ? 'fill-indigo-300 text-indigo-300' : 'text-white/20'} />
                  </button>
                  <button onClick={() => remove(t._id)} className="text-white/40 hover:text-red-400">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">&ldquo;{t.message}&rdquo;</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <input
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50"
      />
    </div>
  );
}
