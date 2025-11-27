"use client";

import { motion } from "framer-motion";
import { Network, Cpu } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { useTranslations } from 'next-intl';

export function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Animation */}

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {t('badge')}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        {t('titlePrefix')} <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                            {t('titleSuffix')}
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>

                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="relative px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25 overflow-hidden group bg-black"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent bg-[length:200%_200%] animate-gradient opacity-100" />
                        <span className="relative z-10">{t('cta')}</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
