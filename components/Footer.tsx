"use client";

import { Mail, Linkedin, Twitter, Instagram, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { useTranslations } from 'next-intl';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const t = useTranslations('Footer');
    const [copied, setCopied] = useState(false);

    return (
        <footer className="relative z-10 md:py-12">
            <div className="relative overflow-hidden w-full md:max-w-7xl md:mx-auto md:rounded-3xl md:border md:border-border/50 bg-background/40 backdrop-blur-xl border-t border-border/50 transition-colors duration-300">

                {/* Top Gradient Border (Mobile only/Adjusted for card) */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                {/* Ambient Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

                <div className="relative z-10 px-6 pt-24 pb-12 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Brand Section */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <Link href="/" className="inline-block group">
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
                            <p className="text-muted-foreground max-w-md text-center md:text-left text-lg leading-relaxed">
                                {t('description')}
                            </p>
                        </div>

                        {/* Contact & Socials */}
                        <div className="flex flex-col items-center md:items-end gap-8">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("mrojas@disnasty.com");
                                    setCopied(true);
                                    setTimeout(() => setCopied(false), 2000);
                                }}
                                className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                                    <AnimatePresence mode="wait">
                                        {copied ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <Check className="w-5 h-5 text-green-400" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="mail"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <Mail className="w-5 h-5 text-foreground" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="relative overflow-hidden h-6 min-w-[180px] flex items-center">
                                    <AnimatePresence mode="wait" initial={false}>
                                        {copied ? (
                                            <motion.span
                                                key="copied"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="text-green-400 font-medium absolute left-0"
                                            >
                                                Copied to clipboard!
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="email"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="text-muted-foreground group-hover:text-foreground font-medium absolute left-0"
                                            >
                                                mrojas@disnasty.com
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>

                            <div className="flex items-center gap-4">
                                {[
                                    { icon: Linkedin, href: "#", color: "hover:text-[#0077b5]", bg: "hover:bg-[#0077b5]/10", border: "hover:border-[#0077b5]/50" },
                                    { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]", bg: "hover:bg-[#1DA1F2]/10", border: "hover:border-[#1DA1F2]/50" },
                                    { icon: Instagram, href: "#", color: "hover:text-[#E1306C]", bg: "hover:bg-[#E1306C]/10", border: "hover:border-[#E1306C]/50" },
                                ].map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className={`w-12 h-12 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-foreground ${social.color} ${social.bg} ${social.border}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-border/50 text-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Disnasty Tech. <span className="text-muted-foreground/50 mx-2">|</span> {t('rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
