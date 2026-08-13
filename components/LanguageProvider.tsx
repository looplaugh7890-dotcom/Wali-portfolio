'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Language, TranslationKeys, translations, languages } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    const dir = languages.find((l) => l.code === lang)?.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, []);

  const dir = languages.find((l) => l.code === language)?.dir || 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
