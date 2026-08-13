'use client';

import { useState, ChangeEvent, DragEvent } from 'react';
import { Upload, X, Loader2, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helpText?: string;
}

export function ImageUpload({ label, value, onChange, helpText }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  async function handleFileSelect(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (PNG, JPG, WebP, etc.)');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            `Upload failed (Status ${res.status}). Check Cloudinary Cloud Name in .env.local`
        );
      }

      onChange(data.url);
    } catch (err: any) {
      setError(err.message || 'Error uploading file');
    } finally {
      setUploading(false);
    }
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs text-white/70 font-medium">{label}</label>
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
        >
          <LinkIcon className="w-3 h-3" />
          {showUrlInput ? 'Use File Upload' : 'Paste Direct URL'}
        </button>
      </div>

      {showUrlInput ? (
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://res.cloudinary.com/..."
          className="w-full rounded-lg border border-white/10 bg-black/30 px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-400/50"
        />
      ) : value ? (
        <div className="relative group rounded-xl border border-white/10 overflow-hidden bg-black/40 p-2 flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt={label}
            className="w-20 h-20 object-cover rounded-lg border border-white/10 bg-white/5"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-white/80 font-mono truncate">{value}</p>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              ✓ Ready
            </p>
          </div>
          <button
            type="button"
            onClick={() => onChange('')}
            className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all ${
            isDragging
              ? 'border-indigo-500 bg-indigo-500/10'
              : 'border-white/10 hover:border-white/20 bg-black/20'
          }`}
        >
          <input
            type="file"
            accept="image/*"
            onChange={onInputChange}
            disabled={uploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />

          <div className="flex flex-col items-center justify-center gap-2">
            {uploading ? (
              <>
                <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                <span className="text-xs text-white/70">Uploading to Cloudinary…</span>
              </>
            ) : (
              <>
                <div className="p-2.5 rounded-full bg-white/5 text-white/60">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-xs text-white/70">
                  <span className="font-semibold text-indigo-400">Click to upload</span> or drag and drop
                </div>
                <span className="text-[11px] text-white/40">PNG, JPG, WebP, GIF up to 10MB</span>
              </>
            )}
          </div>
        </div>
      )}

      {helpText && <p className="text-[11px] text-white/40">{helpText}</p>}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
