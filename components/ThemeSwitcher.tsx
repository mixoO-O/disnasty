'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log('theme', theme);
  useEffect(() => {
    setMounted(true);
    if (theme === 'system') {
      setTheme('dark');
    }
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="border-input text-muted-foreground relative flex h-9 w-9 items-center justify-center rounded-lg border bg-primary/10 transition-colors hover:border-accent/50 hover:bg-primary/20 hover:text-foreground"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 90,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -90,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
    </button>
  );
}
