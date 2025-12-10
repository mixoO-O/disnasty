'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Ship } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    icon: Stethoscope,
    color: '#10b981', // Emerald
  },
  {
    icon: Ship,
    color: '#3b82f6', // Blue
  },
];

export function InnovationHub() {
  const t = useTranslations('InnovationHub');

  return (
    <section id="innovation" className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">{t('title')}</h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Animated Border Container */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />

              {/* Main Card Content */}
              <div className="from-card/40 to-card/20 relative h-full overflow-hidden rounded-2xl bg-gradient-to-r p-[1px]">
                <div className="bg-card/80 relative z-10 flex h-full flex-col rounded-2xl p-8 backdrop-blur-xl">
                  <div className="mb-6 flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-foreground transition-colors">
                      {t(`items.${index}.client`)}
                    </h3>
                    <span className="text-muted-foreground border-border/50 rounded-full border bg-secondary/50 px-3 py-1 text-xs">
                      {t(`items.${index}.location`)}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {t(`items.${index}.desc`)}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {t(`items.${index}.tags`)
                      .split(', ')
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-primary/20 px-2 py-1 text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Moving Icon */}
              <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-full">
                <motion.div
                  className="absolute left-0 top-0 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{
                    backgroundColor: project.color,
                  }}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 12,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  <project.icon className="h-5 w-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
