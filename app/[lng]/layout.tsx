'use client';
import './globals.css';
import { ReactNode } from 'react';
import { Theme } from '../common/config/theme/themes';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
