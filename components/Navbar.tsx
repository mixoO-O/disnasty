'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Zap, Cpu, Bot, Code, Cloud, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ContactModal } from './ContactModal';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const t = useTranslations('Navbar');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
      },
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: t('products'), href: '#products', icon: Cpu },
    {
      name: t('services'),
      href: '#',
      icon: Cloud,
      subItems: [
        { name: t('web-app'), href: '#web-app', icon: Code },
        { name: t('mobile-app'), href: '#mobile-app', icon: Cpu },
        { name: t('cloud'), href: '#cloud-architecture', icon: Cloud },
        { name: t('ia'), href: '#ia', icon: Bot },
      ],
    },
    { name: t('tech-stack'), href: '#tech-stack', icon: Code },
    { name: t('innovation'), href: '#innovation', icon: Zap },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="glass-nav flex items-center justify-between rounded-2xl bg-background/60 px-6 py-3 shadow-sm backdrop-blur-md transition-colors duration-300 dark:shadow-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40" />
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/disnasty-logo-icon.png"
                alt="Disnasty Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-2xl font-bold text-transparent">
                DISNASTY
              </span>
            </div>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="group relative">
                  <button
                    className={`flex items-center gap-2 text-sm font-medium outline-none transition-colors hover:text-foreground ${
                      item.subItems.some((sub) => sub.href === `#${activeSection}`)
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute -left-4 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="flex min-w-[200px] flex-col gap-1 overflow-hidden rounded-xl bg-background/90 p-2 shadow-xl backdrop-blur-xl">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary/50 hover:text-foreground ${
                            subItem.href === `#${activeSection}`
                              ? 'bg-secondary/50 text-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <subItem.icon className="h-4 w-4" />
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
                  className={`group relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-foreground ${
                    item.href === `#${activeSection}` ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all group-hover:w-full ${
                      item.href === `#${activeSection}` ? 'w-full' : ''
                    }`}
                  />
                </Link>
              ),
            )}
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="border-input z-10 rounded-lg border bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-primary/20"
            >
              {t('contact')}
            </button>
          </div>
          <button
            className="text-muted-foreground z-10 hover:text-foreground md:hidden"
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
            className="glass-nav absolute left-6 right-6 top-20 flex flex-col gap-4 rounded-2xl bg-background/90 p-4 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 p-2 font-medium text-foreground">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </div>
                  <div className="border-border/20 ml-4 flex flex-col gap-1 border-l pl-6">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-muted-foreground flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50 hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon className="h-4 w-4" />
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ),
            )}
            <div className="border-border/50 flex items-center justify-end border-t pt-2">
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
