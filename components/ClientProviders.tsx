'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';
import { CustomCursor } from './CustomCursor';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
