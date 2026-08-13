'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { TagsInput } from './TagsInput';
import { ImageUpload } from './ImageUpload';

export type PostFormValues = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  published: boolean;
  seoTitle: string;
  seoDescription: string;
};

const empty: PostFormValues = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '',
  category: 'Web Development',
  tags: [],
  author: 'Wali Aslam',
  published: false,
  seoTitle: '',
  seoDescription: '',
};

const categories = ['Web Development', 'App Development', 'SEO', 'Digital Marketing', 'Business', 'Technology'];

export function PostForm({ initial, postId }: { initial?: Partial<PostFormValues>; postId?: string }) {
  const router = useRouter();
  const [values, setValues] = useState<PostFormValues>({ ...empty, ...initial });
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function set<K extends keyof PostFormValues>(key: K, value: PostFormValues[K]) {
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

    const method = postId ? 'PATCH' : 'POST';
    const url = postId ? `/api/admin/blog/${postId}` : '/api/admin/blog';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error || 'Could not save the post.');
      setSaving(false);
      return;
    }

    router.push('/admin/blog');
    router.refresh();
  }

  async function handleDelete() {
    if (!postId || !confirm('Delete this post? This cannot be undone.')) return;
    await fetch(`/api/admin/blog/${postId}`, { method: 'DELETE' });
    router.push('/admin/blog');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      <Section title="Content">
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
        <TextField label="Excerpt" value={values.excerpt} onChange={(v) => set('excerpt', v)} required />
        <TextArea label="Content" value={values.content} onChange={(v) => set('content', v)} rows={12} required />
      </Section>

      <Section title="Classification">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <TextField label="Author" value={values.author} onChange={(v) => set('author', v)} />
        </div>
        <TagsInput label="Tags" values={values.tags} onChange={(v) => set('tags', v)} />
      </Section>

      <Section title="Media">
        <ImageUpload
          label="Cover Image"
          value={values.coverImage}
          onChange={(v) => set('coverImage', v)}
          helpText="Featured header image for blog post detail and blog cards"
        />
      </Section>

      <Section title="SEO">
        <TextField label="SEO Title (optional)" value={values.seoTitle} onChange={(v) => set('seoTitle', v)} />
        <TextArea label="SEO Description (optional)" value={values.seoDescription} onChange={(v) => set('seoDescription', v)} rows={2} />
      </Section>

      <Section title="Publishing">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={values.published}
            onChange={(e) => set('published', e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-black/30"
          />
          <span className="text-sm text-white/70">Published</span>
        </label>
      </Section>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 transition-colors disabled:opacity-60"
        >
          {saving ? 'Saving…' : postId ? 'Save Changes' : 'Create Post'}
        </button>
        {postId && (
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
