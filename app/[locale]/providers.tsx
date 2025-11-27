"use client";

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

export function Providers({
    messages,
    locale,
    children
}: {
    messages: AbstractIntlMessages;
    locale: string;
    children: React.ReactNode;
}) {
    return (
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="America/New_York">
            {children}
        </NextIntlClientProvider>
    );
}
