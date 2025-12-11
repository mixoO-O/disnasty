'use client';

import { Brain, Workflow, Cpu, Sparkles, Layers, Scale, Leaf, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    title: string;
    description: string;
    features: string[];
    color: string;
    icon: any;
  } | null;
}

import { createPortal } from 'react-dom';

// ... imports

function SolutionModal({ isOpen, onClose, solution }: SolutionModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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

  if (!mounted || !solution) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Background Gradient Blob */}
              <div
                className={`absolute right-0 top-0 h-64 w-64 bg-gradient-to-br ${solution.color} pointer-events-none -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 blur-3xl`}
              />

              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-200 transition-colors hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <solution.icon
                    className={`h-6 w-6 ${
                      solution.color.replace('from-', 'text-').replace('/20', '-400').split(' ')[0]
                    }`}
                  />
                </div>

                <h2 className="mb-4 text-3xl font-bold">
                  <span
                    className={`bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}
                  >
                    {solution.title}
                  </span>
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-gray-200">{solution.description}</p>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div
                          className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.color}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function AIShowcase() {
  const t = useTranslations('AIShowcase');
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

  const solutions: Record<
    string,
    {
      title: string;
      description: string;
      features: string[];
      color: string;
      icon: any;
    }
  > = {
    antigravity: {
      title: t('antigravity.title'),
      description: t('antigravity.description'),
      features: [
        t('antigravity.features.0'),
        t('antigravity.features.1'),
        t('antigravity.features.2'),
      ],
      color: 'from-cyan-500 via-purple-500 to-emerald-500', // Complex gradient for main card
      icon: Cpu,
    },
    n8n: {
      title: t('n8n.title'),
      description: t('n8n.description'),
      features: [t('n8n.features.0'), t('n8n.features.1'), t('n8n.features.2')],
      color: 'from-pink-500 to-rose-500',
      icon: Workflow,
    },
    llm: {
      title: t('llm.title'),
      description: t('llm.description'),
      features: [t('llm.features.0'), t('llm.features.1'), t('llm.features.2')],
      color: 'from-emerald-500 to-teal-500',
      icon: Brain,
    },
    context: {
      title: t('context.title'),
      description: t('context.description'),
      features: [t('context.features.0'), t('context.features.1'), t('context.features.2')],
      color: 'from-orange-500 to-amber-500',
      icon: Layers,
    },
    auralis: {
      title: t('auralis.title'),
      description: t('auralis.description'),
      features: [t('auralis.features.0'), t('auralis.features.1'), t('auralis.features.2')],
      color: 'from-purple-500 to-indigo-500',
      icon: Scale,
    },
    clou: {
      title: t('clou.title'),
      description: t('clou.description'),
      features: [t('clou.features.0'), t('clou.features.1'), t('clou.features.2')],
      color: 'from-green-500 to-emerald-500',
      icon: Leaf,
    },
  };

  const handleCardClick = (key: string, e: React.MouseEvent) => {
    // Prevent bubbling if a specific button inside was clicked
    if ((e.target as HTMLElement).closest('button')) return;
    setActiveSolution(key);
  };

  return (
    <section id="ia" className="relative overflow-hidden bg-background px-6 py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="border-border/50 mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-muted-foreground text-sm font-medium">{t('badge')}</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {t('titlePrefix')} <br />
            <span className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent">
              {t('titleSuffix')}
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Code Antigravity (Large) */}
          <div
            onClick={(e) => handleCardClick('antigravity', e)}
            className="bg-card/40 hover:bg-card/60 group relative cursor-pointer overflow-hidden rounded-3xl p-8 transition-colors md:col-span-3 md:p-12"
          >
            {/* Animated Border Container */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />

            {/* Solution Bubbles */}
            <div className="absolute right-6 top-6 z-20 flex flex-col items-center">
              <div className="relative flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSolution('auralis');
                  }}
                  className="group/btn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/20 transition-all hover:scale-110 hover:bg-purple-500/30 md:h-12 md:w-12"
                  aria-label="Auralis"
                >
                  <Scale className="h-5 w-5 text-purple-400 md:h-6 md:w-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSolution('clou');
                  }}
                  className="group/btn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-green-500/30 bg-green-500/20 transition-all hover:scale-110 hover:bg-green-500/30 md:h-12 md:w-12"
                  aria-label="Clou"
                >
                  <Leaf className="h-5 w-5 text-green-400 md:h-6 md:w-6" />
                </button>

                {/* Persistent Tooltip */}
                <div className="pointer-events-none absolute right-0 top-full z-30 mt-4 whitespace-nowrap">
                  <div className="bg-card/90 border-border/50 relative flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium text-foreground shadow-xl backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse text-purple-400" />
                    <span>{t('tooltip')}</span>
                  </div>
                  {/* Arrow pointing up - aligned to center of button gap */}
                  <div className="bg-card/90 border-border/50 absolute -top-1.5 right-[calc(50%-6px)] h-3 w-3 rotate-45 rounded-tl-[2px] border-l border-t backdrop-blur-md"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg shadow-purple-500/20">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-3 text-3xl font-bold text-foreground">
                  {t('antigravity.title')}
                </h3>
                <p className="text-muted-foreground max-w-2xl text-lg">
                  {t('antigravity.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: n8n Automation */}
          <div
            onClick={(e) => handleCardClick('n8n', e)}
            className="bg-card/40 hover:bg-card/60 group relative cursor-pointer overflow-hidden rounded-3xl p-8 transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/20 transition-transform group-hover:scale-110">
                <Workflow className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{t('n8n.title')}</h3>
              <p className="text-muted-foreground">{t('n8n.description')}</p>
            </div>
          </div>

          {/* Card 3: Multi-Model Matrix */}
          <div
            onClick={(e) => handleCardClick('llm', e)}
            className="bg-card/40 hover:bg-card/60 group relative cursor-pointer overflow-hidden rounded-3xl p-8 transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/20 transition-transform group-hover:scale-110">
                <Brain className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{t('llm.title')}</h3>
              <p className="text-muted-foreground">{t('llm.description')}</p>
            </div>
          </div>

          {/* Card 4: MCP & Context */}
          <div
            onClick={(e) => handleCardClick('context', e)}
            className="bg-card/40 hover:bg-card/60 group relative cursor-pointer overflow-hidden rounded-3xl p-8 transition-colors"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/20 transition-transform group-hover:scale-110">
                <Layers className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{t('context.title')}</h3>
              <p className="text-muted-foreground">{t('context.description')}</p>
            </div>
          </div>
        </div>

        <SolutionModal
          isOpen={!!activeSolution}
          onClose={() => setActiveSolution(null)}
          solution={activeSolution ? solutions[activeSolution] : null}
        />
      </div>
    </section>
  );
}
