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
    themeColor: "#000000",
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
        <html lang={locale} className="dark bg-black">
            <body className={`${inter.className} bg-black`}>
                {/* Global Background */}
                <div className="fixed inset-0 bg-black/90 -z-50" />
                <div className="fixed inset-0 overflow-hidden -z-40 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
                </div>

                <Providers messages={messages} locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
