"use client";

import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added Image import

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/10 bg-black/90 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/disnasty-logo-full.png"
                            alt="Disnasty Logo"
                            width={180}
                            height={50}
                            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                    <p className="text-gray-400 max-w-sm text-center md:text-left">
                        Empowering businesses with cutting-edge AI automation and scalable infrastructure solutions.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <a
                        href="mailto:contacto@disnasty.com"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        contacto@disnasty.com
                    </a>

                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Disnasty Tech. All rights reserved.
            </div>
        </footer>
    );
}
