"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Zap, Cpu, Network } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Innovation", href: "#innovation", icon: Zap },
        { name: "Products", href: "#products", icon: Cpu },
        { name: "Clients", href: "#clients", icon: Network },
        { name: "Testimonials", href: "#testimonials", icon: Zap },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10">
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Mobile Logo (Icon Only) */}
                        <div className="md:hidden">
                            <Image
                                src="/disnasty-logo-icon.png"
                                alt="Disnasty Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                                priority
                            />
                        </div>
                        {/* Desktop Logo (Full) */}
                        <div className="hidden md:block">
                            <Image
                                src="/disnasty-logo-full.png"
                                alt="Disnasty Logo"
                                width={180}
                                height={50}
                                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
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
                        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/5 hover:border-white/20">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
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
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
