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
    metadataBase: new URL('https://disnasty.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://disnasty.com/${locale}`,
      languages: {
        'en-US': 'https://disnasty.com/en',
        'es-CL': 'https://disnasty.com/es',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/lion-logo.svg', type: 'image/svg+xml' },
        { url: '/lion-logo.png', type: 'image/png' },
      ],
      apple: [{ url: '/lion-logo.png' }],
      other: [
        {
          rel: 'manifest',
          url: '/site.webmanifest',
        },
      ],
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale,
      url: `https://disnasty.com/${locale}`,
      siteName: 'Disnasty',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Disnasty Tech',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/og-image.jpg'],
      creator: '@disnasty',
    },
    themeColor: '#000000',
    other: {
      'google-site-verification': 'google_verification_token', // TODO: Add verification token
    },
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

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://disnasty.com/#organization',
        name: 'Disnasty',
        url: 'https://disnasty.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://disnasty.com/lion-logo.png',
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://www.linkedin.com/company/disnasty',
          'https://twitter.com/disnasty',
          'https://www.instagram.com/disnastytech',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+56-9-1234-5678',
          contactType: 'sales',
          areaServed: ['CL', 'US', 'World'],
          availableLanguage: ['es', 'en'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CL',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://disnasty.com/#website',
        url: 'https://disnasty.com',
        name: 'Disnasty Tech',
        publisher: {
          '@id': 'https://disnasty.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://disnasty.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SiteNavigationElement',
        name: ['Innovation Hub', 'Products', 'Services', 'Tech Stack'],
        url: [
          'https://disnasty.com/#innovation',
          'https://disnasty.com/#products',
          'https://disnasty.com/#services',
          'https://disnasty.com/#tech-stack',
        ],
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
