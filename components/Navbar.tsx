"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Zap, Cpu, Network, Bot, Code } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "./ContactModal";
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const t = useTranslations('Navbar');

    const navItems = [
        { name: t('products'), href: "#products", icon: Cpu },
        { name: t('web-app'), href: "#web-app", icon: Code },
        { name: t('mobile-app'), href: "#mobile-app", icon: Cpu },
        // { name: t('clients'), href: "#clients", icon: Network },
        { name: t('tech-stack'), href: "#tech-stack", icon: Code },
        // { name: t('testimonials'), href: "#testimonials", icon: Zap },
        { name: t('ia'), href: "#ia", icon: Bot },
        { name: t('innovation'), href: "#innovation", icon: Zap },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/disnasty-logo-icon.png"
                                alt="Disnasty Logo"
                                width={32}
                                height={32}
                                className="h-8 w-auto object-contain"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                                DISNASTY
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/5 hover:border-white/20"
                        >
                            {t('contact')}
                        </button>
                    </div>
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-20 left-6 right-6 glass-nav rounded-2xl p-4 md:hidden flex flex-col gap-4 bg-black/90 backdrop-blur-xl border border-white/10"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 text-gray-300 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Language</span>
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
