'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 transition-all hover:border-white/20 hover:bg-white/10"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden rounded-xl border border-white/10 bg-black/90 shadow-xl backdrop-blur-xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  currentLocale === lang.code
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="font-medium">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
