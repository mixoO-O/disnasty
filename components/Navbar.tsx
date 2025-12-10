"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Zap, Cpu, Bot, Code, Cloud, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { ContactModal } from "./ContactModal";
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const t = useTranslations('Navbar');

    useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return () => {
                document.body.style.overflow = "unset";
            };
        }, [isOpen]);

    const navItems = [
        { name: t('products'), href: "#products", icon: Cpu },
        {
            name: t('services'),
            href: "#",
            icon: Cloud,
            subItems: [
                { name: t('web-app'), href: "#web-app", icon: Code },
                { name: t('mobile-app'), href: "#mobile-app", icon: Cpu },
                { name: t('cloud'), href: "#cloud-architecture", icon: Cloud },
                { name: t('ia'), href: "#ia", icon: Bot },
            ]
        },
        { name: t('tech-stack'), href: "#tech-stack", icon: Code },
        { name: t('innovation'), href: "#innovation", icon: Zap },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between bg-background/60 backdrop-blur-md border border-border/50 shadow-sm dark:shadow-none transition-colors duration-300">
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
                            item.subItems ? (
                                <div key={item.name} className="relative group">
                                    <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                                        <item.icon className="w-4 h-4" />
                                        {item.name}
                                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="bg-background/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl overflow-hidden min-w-[200px] p-2 flex flex-col gap-1">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                                                >
                                                    <subItem.icon className="w-4 h-4" />
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                                </Link>
                            )
                        ))}
                        <div className="flex items-center gap-4">
                            <ThemeSwitcher />
                            <LanguageSwitcher />
                        </div>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="bg-primary/10 hover:bg-primary/20 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all border border-input hover:border-accent/50"
                        >
                            {t('contact')}
                        </button>
                    </div>
                    <button
                        className="md:hidden text-muted-foreground hover:text-foreground"
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
                        className="absolute top-20 left-6 right-6 glass-nav rounded-2xl p-4 md:hidden flex flex-col gap-4 bg-background/90 backdrop-blur-xl border border-border/50"
                    >
                        {navItems.map((item) => (
                            item.subItems ? (
                                <div key={item.name} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 text-foreground font-medium p-2">
                                        <item.icon className="w-5 h-5" />
                                        {item.name}
                                    </div>
                                    <div className="pl-6 flex flex-col gap-1 border-l border-border/20 ml-4">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="flex items-center gap-3 text-muted-foreground hover:text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <subItem.icon className="w-4 h-4" />
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            )
                        ))}
                        <div className="pt-2 border-t border-border/50 flex justify-end items-center">
                            <ThemeSwitcher />
                            <div className="w-2" />
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
