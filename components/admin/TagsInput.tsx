'use client';

import { KeyboardEvent, useState } from 'react';
import { X } from 'lucide-react';

export function TagsInput({
  label,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState('');

  function commit() {
    const v = draft.trim();
    if (v && !values.includes(v)) onChange([...values, v]);
    setDraft('');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      commit();
    } else if (e.key === 'Backspace' && draft === '' && values.length > 0) {
      onChange(values.slice(0, -1));
    }
  }

  return (
    <div>
      <label className="block text-xs text-white/50 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-black/30 p-2.5 focus-within:border-indigo-400/50">
        {values.map((v) => (
          <span
            key={v}
            className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 text-xs text-white"
          >
            {v}
            <button type="button" onClick={() => onChange(values.filter((x) => x !== v))}>
              <X size={11} />
            </button>
          </span>
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commit}
          placeholder={placeholder ?? 'Type and press Enter'}
          className="flex-1 min-w-[120px] bg-transparent text-sm text-white placeholder:text-white/30 outline-none py-1"
        />
      </div>
    </div>
  );
}
