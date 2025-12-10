'use client';

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { ThemeProvider } from 'next-themes';

export function Providers({
  messages,
  locale,
  children,
}: {
  messages: AbstractIntlMessages;
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale} timeZone="America/New_York">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
