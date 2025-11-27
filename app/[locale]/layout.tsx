import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages } from 'next-intl/server';
import { Providers } from './providers';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Disnasty - Innovation Hub",
    description: "Leading the future of AI and Automation technology.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Enable static rendering
    // unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <body className={inter.className}>
                <Providers messages={messages} locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
