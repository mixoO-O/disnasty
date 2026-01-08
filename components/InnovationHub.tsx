'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Ship, Activity, ArrowUpRight, Lock, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    icon: Stethoscope,
    gradient: 'from-emerald-400 to-teal-500',
    shadowColor: 'rgba(16, 185, 129, 0.4)',
  },
  {
    icon: Ship,
    gradient: 'from-blue-400 to-indigo-500',
    shadowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    icon: Activity,
    gradient: 'from-rose-400 to-crimson-500',
    shadowColor: 'rgba(244, 63, 94, 0.4)',
  },
];

export function InnovationHub() {
  const t = useTranslations('InnovationHub');

  return (
    <section id="innovation" className="relative overflow-hidden px-6 py-20">
      {/* Background embellishments */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur-sm dark:bg-white/5 dark:text-purple-400">
            {t('title')}
          </span>
          <h2 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-white/80 dark:to-white/60 md:text-5xl">
            {t('title')}
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="border-border/40 bg-card/30 hover:bg-card/50 relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                {/* Glow Effect */}
                <div
                  className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg ring-1 ring-black/5 dark:ring-white/20`}
                  >
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-foreground transition-all group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 group-hover:bg-clip-text group-hover:text-transparent dark:text-white dark:group-hover:from-white dark:group-hover:to-white/70">
                      {t(`items.${index}.client`)}
                    </h3>
                  </div>

                  <span className="border-border/50 mb-4 inline-flex w-fit items-center rounded-full border bg-background/50 px-2.5 py-0.5 text-xs font-medium text-foreground/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    {t(`items.${index}.location`)}
                  </span>

                  <p className="text-muted-foreground mb-8 flex-1 text-base leading-relaxed transition-colors group-hover:text-foreground/80 dark:text-gray-400 dark:group-hover:text-gray-300">
                    {t(`items.${index}.desc`)}
                  </p>

                  <div className="mt-auto flex flex-col gap-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {t(`items.${index}.tags`)
                        .split(', ')
                        .map((tag) => (
                          <span
                            key={tag}
                            className="text-muted-foreground rounded-lg bg-background/50 px-3 py-1.5 text-xs font-medium transition-colors group-hover:bg-background group-hover:text-foreground dark:bg-white/5 dark:text-gray-400 dark:group-hover:bg-white/10 dark:group-hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Border line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient} scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
