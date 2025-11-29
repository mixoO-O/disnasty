"use client";

import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden">
            {/* Background & Glass Effect */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-0" />

            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <Link href="/" className="inline-block group">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
                                <Image
                                    src="/disnasty-logo-full.png"
                                    alt="Disnasty Logo"
                                    width={180}
                                    height={50}
                                    className="h-10 w-auto object-contain relative z-10"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 max-w-md text-center md:text-left text-lg leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Contact & Socials */}
                    <div className="flex flex-col items-center md:items-end gap-8">
                        <a
                            href="mailto:contacto@disnasty.com"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-gray-200 group-hover:text-white font-medium">contacto@disnasty.com</span>
                        </a>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: Linkedin, href: "#", color: "hover:text-[#0077b5]", bg: "hover:bg-[#0077b5]/10", border: "hover:border-[#0077b5]/50" },
                                { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]", bg: "hover:bg-[#1DA1F2]/10", border: "hover:border-[#1DA1F2]/50" },
                                { icon: Instagram, href: "#", color: "hover:text-[#E1306C]", bg: "hover:bg-[#E1306C]/10", border: "hover:border-[#E1306C]/50" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} ${social.bg} ${social.border}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Disnasty Tech. <span className="text-gray-500 mx-2">|</span> {t('rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
