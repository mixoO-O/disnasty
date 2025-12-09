import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages, getTranslations } from 'next-intl/server';
import { Providers } from './providers';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        icons: {
            icon: "/favicon.ico",
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            type: 'website',
            locale: locale,
            // url: `https://disnasty.com/${locale}`, // TODO: Update with actual domain
            siteName: 'Disnasty',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitterTitle'),
            description: t('twitterDescription'),
            // creator: '@disnasty', // TODO: Update with actual handle
        },
        themeColor: "#000000",
    };
}

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
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
                <Providers messages={messages} locale={locale}>
                    {/* Global Background */}
                    <div className="fixed inset-0 bg-background -z-50 transition-colors duration-300" />
                    <div className="fixed inset-0 overflow-hidden -z-40 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px]" />
                        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />
                    </div>

                    {children}
                </Providers>
            </body>
        </html>
    );
}
