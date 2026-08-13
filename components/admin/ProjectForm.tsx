'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { TagsInput } from './TagsInput';
import { ImageUpload } from './ImageUpload';

export type ProjectFormValues = {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  services: string[];
  technologies: string[];
  client: string;
  year: number;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
  challenge: string;
  solution: string;
  results: string;
  featured: boolean;
  order: number;
  status: 'draft' | 'published';
};

const empty: ProjectFormValues = {
  title: '',
  slug: '',
  shortDescription: '',
  description: '',
  category: 'Websites',
  services: [],
  technologies: [],
  client: '',
  year: new Date().getFullYear(),
  thumbnail: '',
  heroImage: '',
  gallery: [],
  liveUrl: '',
  githubUrl: '',
  challenge: '',
  solution: '',
  results: '',
  featured: false,
  order: 0,
  status: 'draft',
};

const categories = ['Websites', 'Web Apps', 'Mobile Apps', 'E-commerce', 'Digital Marketing', 'Branding'];

export function ProjectForm({
  initial,
  projectId,
}: {
  initial?: Partial<ProjectFormValues>;
  projectId?: string;
}) {
  const router = useRouter();
  const [values, setValues] = useState<ProjectFormValues>({ ...empty, ...initial });
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set<K extends keyof ProjectFormValues>(key: K, value: ProjectFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleTitleChange(title: string) {
    set('title', title);
    if (!slugTouched) set('slug', slugify(title, { lower: true, strict: true }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const method = projectId ? 'PATCH' : 'POST';
    const url = projectId ? `/api/admin/projects/${projectId}` : '/api/admin/projects';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error || 'Could not save the project.');
      setSaving(false);
      return;
    }

    router.push('/admin/projects');
    router.refresh();
  }

  async function handleDelete() {
    if (!projectId || !confirm('Delete this project? This cannot be undone.')) return;
    await fetch(`/api/admin/projects/${projectId}`, { method: 'DELETE' });
    router.push('/admin/projects');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      <Section title="Basics">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField label="Title" value={values.title} onChange={handleTitleChange} required />
          <TextField
            label="Slug"
            value={values.slug}
            onChange={(v) => {
              setSlugTouched(true);
              set('slug', v);
            }}
            required
          />
        </div>
        <TextField
          label="Short Description"
          value={values.shortDescription}
          onChange={(v) => set('shortDescription', v)}
          required
        />
        <TextArea label="Full Description" value={values.description} onChange={(v) => set('description', v)} required rows={5} />
      </Section>

      <Section title="Classification">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs text-white/50 mb-2">Category</label>
            <select
              value={values.category}
              onChange={(e) => set('category', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <TextField label="Client" value={values.client} onChange={(v) => set('client', v)} />
          <TextField
            label="Year"
            type="number"
            value={String(values.year)}
            onChange={(v) => set('year', Number(v) || new Date().getFullYear())}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TagsInput label="Services" values={values.services} onChange={(v) => set('services', v)} />
          <TagsInput label="Technologies" values={values.technologies} onChange={(v) => set('technologies', v)} />
        </div>
      </Section>

      <Section title="Media">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ImageUpload
            label="Thumbnail Image"
            value={values.thumbnail}
            onChange={(v) => set('thumbnail', v)}
            helpText="Displayed on project cards and grid views"
          />
          <ImageUpload
            label="Hero Image"
            value={values.heroImage}
            onChange={(v) => set('heroImage', v)}
            helpText="Displayed at top of project detail case study"
          />
        </div>
        
        <div className="space-y-3 pt-2">
          <label className="block text-xs text-white/70 font-medium">Gallery Images</label>
          <ImageUpload
            label="Add Gallery Image"
            value=""
            onChange={(url) => {
              if (url && !values.gallery.includes(url)) {
                set('gallery', [...values.gallery, url]);
              }
            }}
            helpText="Upload gallery screenshots. They will be added to the gallery list below."
          />
          <TagsInput
            label="Current Gallery Image URLs"
            values={values.gallery}
            onChange={(v) => set('gallery', v)}
            placeholder="Paste URL and press Enter"
          />
        </div>
      </Section>

      <Section title="Links">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField label="Live URL" value={values.liveUrl} onChange={(v) => set('liveUrl', v)} />
          <TextField label="GitHub URL" value={values.githubUrl} onChange={(v) => set('githubUrl', v)} />
        </div>
      </Section>

      <Section title="Case Study">
        <TextArea label="Challenge" value={values.challenge} onChange={(v) => set('challenge', v)} rows={3} />
        <TextArea label="Solution" value={values.solution} onChange={(v) => set('solution', v)} rows={3} />
        <TextArea label="Results" value={values.results} onChange={(v) => set('results', v)} rows={3} />
      </Section>

      <Section title="Publishing">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
          <div>
            <label className="block text-xs text-white/50 mb-2">Status</label>
            <select
              value={values.status}
              onChange={(e) => set('status', e.target.value as 'draft' | 'published')}
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <TextField
            label="Order"
            type="number"
            value={String(values.order)}
            onChange={(v) => set('order', Number(v) || 0)}
          />
          <label className="flex items-center gap-2 pb-2.5">
            <input
              type="checkbox"
              checked={values.featured}
              onChange={(e) => set('featured', e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-black/30"
            />
            <span className="text-sm text-white/70">Featured</span>
          </label>
        </div>
      </Section>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : projectId ? 'Save Changes' : 'Create Project'}
        </button>
        {projectId && (
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
      <h3 className="text-sm font-medium text-white/70">{title}</h3>
      {children}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 4,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <textarea
        value={value}
        required={required}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50 resize-none"
      />
    </div>
  );
}
