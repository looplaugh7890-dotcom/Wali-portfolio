'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cx } from '@/lib/utils';

export function ThemeSwitcher({ className }: { className?: string }) {
  const { themeColor, setThemeColor, availableColors, currentTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className={cx('relative', className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-label="Change color theme"
        aria-expanded={open}
        className="group flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-ink-dim hover:text-ink hover:border-brass/50 transition-colors bg-surface/40 hover:bg-surface-2/60"
      >
        <Palette size={13} className="text-brass transition-transform duration-300 group-hover:rotate-45" />
        <span
          className="h-2.5 w-2.5 rounded-full transition-transform duration-200 group-hover:scale-110 shadow-sm"
          style={{
            backgroundColor: currentTheme.primaryHex,
            boxShadow: `0 0 8px ${currentTheme.primaryHex}66`,
          }}
        />
        <span className="hidden sm:inline-block font-mono text-[11px] tracking-wide">
          {currentTheme.label.split(' ')[0]}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-2.5 right-0 z-50 w-52 rounded-2xl border border-border bg-surface/95 backdrop-blur-2xl p-2 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="px-2.5 py-1.5 border-b border-border-soft mb-1 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
                Primary Accent
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: currentTheme.primaryHex }}
              />
            </div>

            <div className="flex flex-col gap-0.5">
              {availableColors.map((color) => {
                const isSelected = themeColor === color.id;
                return (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => {
                      setThemeColor(color.id);
                      setOpen(false);
                    }}
                    className={cx(
                      'group flex items-center justify-between w-full px-2.5 py-2 rounded-xl text-xs transition-all duration-150 text-left',
                      isSelected
                        ? 'bg-brass/15 text-brass font-medium'
                        : 'text-ink-dim hover:text-ink hover:bg-surface-2'
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-3.5 w-3.5 rounded-full shrink-0 border border-white/10 transition-transform duration-200 group-hover:scale-110"
                        style={{
                          backgroundColor: color.primaryHex,
                          boxShadow: isSelected ? `0 0 10px ${color.primaryHex}88` : undefined,
                        }}
                      />
                      <span>{color.label}</span>
                    </div>

                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check size={13} className="text-brass" />
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
