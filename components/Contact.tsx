'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/content';
import { useLanguage } from './LanguageProvider';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const serviceOptions = [t.serviceOpt1, t.serviceOpt2, t.serviceOpt3, t.serviceOpt4, t.serviceOpt5];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || t.contactError);
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setError(t.contactNetworkError);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-surface/40">
      <div className="container-wa grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-ink-dim leading-relaxed">
              {t.contactIntro}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 space-y-4">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-ink-dim hover:text-brass transition-colors">
                <Mail size={16} className="text-brass" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-ink-dim hover:text-brass transition-colors">
                <Phone size={16} className="text-brass" /> {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-dim">
                <MapPin size={16} className="text-brass" /> {siteConfig.location}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full min-h-[420px] flex flex-col items-center justify-center text-center rounded-2xl border border-brass/30 bg-surface p-10"
            >
              <CheckCircle2 size={40} className="text-brass mb-4" />
              <h3 className="font-display text-2xl text-ink">{t.contactSuccessTitle}</h3>
              <p className="mt-2 text-sm text-ink-dim max-w-xs">
                {t.contactSuccessDesc}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-brass hover:underline"
              >
                {t.contactSendAnother}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-5">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label={t.contactName} name="name" required placeholder={t.contactNamePlaceholder} />
                <Field label={t.contactEmail} name="email" type="email" required placeholder={t.contactEmailPlaceholder} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label={t.contactPhone} name="phone" placeholder={t.contactPhonePlaceholder} />
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-faint mb-2">
                    {t.contactService}
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/30 transition-colors"
                  >
                    <option value="" disabled>
                      {t.contactServicePlaceholder}
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Field label={t.contactBudget} name="budget" placeholder={t.contactBudgetPlaceholder} />

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-ink-faint mb-2">
                  {t.contactMessage}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contactMessagePlaceholder}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/30 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
              >
                {status === 'loading' ? t.contactSending : t.contactSubmit}
                {status !== 'loading' && (
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink-faint mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/30 transition-colors"
      />
    </div>
  );
}
