'use client';

import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Check,
  Cpu,
  Code,
  Cloud,
  Bot,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const t = useTranslations('Footer');
  const [copied, setCopied] = useState(false);
  const tNav = useTranslations('Navbar');

  const navItems = [
    { name: tNav('ia'), href: '#ia', icon: Bot },
    { name: tNav('cloud'), href: '#cloud-architecture', icon: Cloud },
    { name: tNav('tech-stack'), href: '#tech-stack', icon: Code },
    { name: tNav('products'), href: '#products', icon: Cpu },
    { name: tNav('innovation'), href: '#innovation', icon: Zap },
  ];

  return (
    <footer className="relative z-10 md:py-12">
      <div className="md:border-border/50 border-border/50 relative w-full overflow-hidden bg-background/40 backdrop-blur-xl transition-colors duration-300 md:mx-auto md:max-w-7xl md:rounded-3xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
        <div className="relative z-10 px-6 pb-12 pt-24 md:p-12">
          <div className="mb-16 grid gap-12 md:grid-cols-3">
            {/* Brand Section */}
            <div className="flex flex-col items-center gap-6 md:items-start">
              <Link href="/" className="group inline-block">
                <div className="flex items-center gap-2">
                  <Image
                    src="/lion-logo.svg"
                    alt="Disnasty Logo"
                    width={128}
                    height={128}
                    className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-2xl font-bold text-transparent">
                    DISNASTY
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground max-w-md text-center text-lg leading-relaxed md:text-left">
                {t('description')}
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-6 md:items-start">
              <h3 className="text-lg font-semibold">{tNav('services')}</h3>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground group flex items-center gap-2 text-sm transition-colors hover:text-foreground"
                  >
                    <item.icon className="h-4 w-4 text-primary/50 transition-colors group-hover:text-primary" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-col items-center gap-8 md:items-end">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('mrojas@disnasty.com');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="border-border/50 group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border bg-secondary/50 px-6 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
              >
                <div className="relative rounded-full bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="h-5 w-5 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mail"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Mail className="h-5 w-5 text-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="relative flex h-6 min-w-[180px] items-center overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="absolute left-0 font-medium text-green-400"
                      >
                        Copied to clipboard!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="email"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-muted-foreground absolute left-0 font-medium group-hover:text-foreground"
                      >
                        mrojas@disnasty.com
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </button>

              <div className="flex items-center gap-4">
                {[
                  {
                    icon: Linkedin,
                    href: '#',
                    color: 'hover:text-[#0077b5]',
                    bg: 'hover:bg-[#0077b5]/10',
                    border: 'hover:border-[#0077b5]/50',
                  },
                  {
                    icon: Twitter,
                    href: '#',
                    color: 'hover:text-[#1DA1F2]',
                    bg: 'hover:bg-[#1DA1F2]/10',
                    border: 'hover:border-[#1DA1F2]/50',
                  },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/disnasty_tech/',
                    color: 'hover:text-[#E1306C]',
                    bg: 'hover:bg-[#E1306C]/10',
                    border: 'hover:border-[#E1306C]/50',
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border-border/50 text-muted-foreground flex h-12 w-12 items-center justify-center rounded-xl border bg-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-foreground ${social.color} ${social.bg} ${social.border}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-border/50 border-t pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Disnasty Tech.{' '}
              <span className="text-muted-foreground/50 mx-2">|</span> {t('rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
