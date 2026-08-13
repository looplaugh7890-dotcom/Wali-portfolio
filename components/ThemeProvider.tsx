'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import {
  ThemeColorId,
  ThemeColorOption,
  THEME_COLORS,
  DEFAULT_THEME_COLOR,
  THEME_STORAGE_KEY,
} from '@/lib/theme';

interface ThemeContextType {
  themeColor: ThemeColorId;
  setThemeColor: (color: ThemeColorId) => void;
  currentTheme: ThemeColorOption;
  availableColors: ThemeColorOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeColor, setThemeColorState] = useState<ThemeColorId>(DEFAULT_THEME_COLOR);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeColorId | null;
      if (saved && THEME_COLORS.some((c) => c.id === saved)) {
        setThemeColorState(saved);
      }
    } catch {
      // ignore localStorage errors in private mode/iframes
    }
    setMounted(true);
  }, []);

  const currentTheme = useMemo(() => {
    return THEME_COLORS.find((c) => c.id === themeColor) || THEME_COLORS[0];
  }, [themeColor]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-color-theme', themeColor);
    root.style.setProperty('--color-primary-rgb', currentTheme.primaryRgb);
    root.style.setProperty('--color-primary-hex', currentTheme.primaryHex);
    root.style.setProperty('--color-primary-soft-rgb', currentTheme.softRgb);
    root.style.setProperty('--color-primary-soft-hex', currentTheme.softHex);
    root.style.setProperty('--color-primary-dim-rgb', currentTheme.dimRgb);
    root.style.setProperty('--color-primary-dim-hex', currentTheme.dimHex);
  }, [themeColor, currentTheme]);

  const setThemeColor = (newColor: ThemeColorId) => {
    setThemeColorState(newColor);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newColor);
    } catch {
      // ignore localStorage errors
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor,
        currentTheme,
        availableColors: THEME_COLORS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
