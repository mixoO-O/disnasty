import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getMessages, getTranslations } from 'next-intl/server';
import { Providers } from './providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: {
      icon: '/favicon.ico',
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
    themeColor: '#000000',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Providers messages={messages} locale={locale}>
          {/* Global Background */}
          <div className="fixed inset-0 -z-50 bg-background transition-colors duration-300" />
          <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden">
            <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/20" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20" />
            <div className="absolute left-[40%] top-[40%] h-[30%] w-[30%] rounded-full bg-primary/5 blur-[100px] dark:bg-primary/10" />
          </div>

          {children}
        </Providers>
      </body>
    </html>
  );
}
