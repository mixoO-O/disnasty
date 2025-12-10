'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Lightbulb, Layout, Palette, Code } from 'lucide-react';

const processSteps = [
  {
    id: 'planning',
    icon: Lightbulb,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mockup',
    icon: Layout,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'design',
    icon: Palette,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'development',
    icon: Code,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

function PhoneContent({ duration = 20 }: { duration?: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[3rem] border-[8px] border-background border-cyan-700 bg-background shadow-2xl ring-1 ring-background/50">
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl border-x border-b border-background/50 bg-background" />

      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden bg-background">
        <motion.div
          animate={{ y: ['0%', '-50%'] }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-full flex-col"
        >
          {/* First Copy */}
          <div className="w-full pb-8">
            {/* Screen 1: Dashboard */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-full border-2 border-foreground/20" />
                <div className="bg-muted-foreground/20 h-4 w-24 rounded" />
                <div className="h-6 w-6 rounded border-2 border-foreground/20" />
              </div>
              <div className="relative aspect-video w-full border-2 border-foreground/20 bg-background/40">
                <svg
                  className="absolute inset-0 h-full w-full text-foreground/20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square border-2 border-foreground/20 bg-background/40">
                  <svg
                    className="absolute inset-0 h-full w-full text-foreground/20"
                    preserveAspectRatio="none"
                  >
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div className="space-y-2 py-2">
                  <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-2/3 rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-3/4 rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-1/2 rounded" />
                </div>
              </div>
            </div>

            {/* Screen 2: Feed */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="bg-muted-foreground/20 mb-6 h-6 w-1/3 rounded" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="relative h-12 w-12 shrink-0 border-2 border-foreground/20 bg-background/40">
                    <svg
                      className="absolute inset-0 h-full w-full text-foreground/20"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="100%"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="100%"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                    <div className="bg-muted-foreground/20 h-2 w-2/3 rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* Screen 3: Details */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="relative aspect-square w-full rounded border-2 border-foreground/20 bg-background/40">
                <svg
                  className="absolute inset-0 h-full w-full text-foreground/20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="space-y-3">
                <div className="bg-muted-foreground/20 h-4 w-3/4 rounded" />
                <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                <div className="bg-muted-foreground/20 h-2 w-5/6 rounded" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-24 rounded border-2 border-foreground/20" />
                <div className="h-8 w-8 rounded-full border-2 border-foreground/20" />
              </div>
            </div>
          </div>

          {/* Second Copy (Duplicate for seamless loop) */}
          <div className="w-full pb-8">
            {/* Screen 1: Dashboard */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-full border-2 border-foreground/20" />
                <div className="bg-muted-foreground/20 h-4 w-24 rounded" />
                <div className="h-6 w-6 rounded border-2 border-foreground/20" />
              </div>
              <div className="relative aspect-video w-full border-2 border-foreground/20 bg-background/40">
                <svg
                  className="absolute inset-0 h-full w-full text-foreground/20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square border-2 border-foreground/20 bg-background/40">
                  <svg
                    className="absolute inset-0 h-full w-full text-foreground/20"
                    preserveAspectRatio="none"
                  >
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div className="space-y-2 py-2">
                  <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-2/3 rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-3/4 rounded" />
                  <div className="bg-muted-foreground/20 h-2 w-1/2 rounded" />
                </div>
              </div>
            </div>

            {/* Screen 2: Feed */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="bg-muted-foreground/20 mb-6 h-6 w-1/3 rounded" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="relative h-12 w-12 shrink-0 border-2 border-foreground/20 bg-background/40">
                    <svg
                      className="absolute inset-0 h-full w-full text-foreground/20"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="100%"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="100%"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                    <div className="bg-muted-foreground/20 h-2 w-2/3 rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* Screen 3: Details */}
            <div className="space-y-4 p-4 opacity-40">
              <div className="relative aspect-square w-full rounded border-2 border-foreground/20 bg-background/40">
                <svg
                  className="absolute inset-0 h-full w-full text-foreground/20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="space-y-3">
                <div className="bg-muted-foreground/20 h-4 w-3/4 rounded" />
                <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                <div className="bg-muted-foreground/20 h-2 w-full rounded" />
                <div className="bg-muted-foreground/20 h-2 w-5/6 rounded" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-24 rounded border-2 border-foreground/20" />
                <div className="h-8 w-8 rounded-full border-2 border-foreground/20" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gradient Overlay to fade edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </div>
  );
}

export function MobileAppProcess() {
  const t = useTranslations('MobileAppProcess');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="mobile-app" className="relative overflow-hidden px-6 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Phone Background Animation */}
        <div className="absolute left-1/2 top-1/2 -z-10 hidden h-[600px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:block">
          {/* Left Phone */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-80 top-10 h-[520px] w-[260px] origin-right -translate-x-full -translate-y-1/2 -rotate-6"
          >
            <PhoneContent duration={25} />
          </motion.div>

          {/* Center Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 h-full w-full"
          >
            <PhoneContent duration={20} />
            {/* Glow Effect behind main phone */}
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>

          {/* Right Phone */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-80 top-10 h-[520px] w-[260px] origin-left -translate-y-1/2 translate-x-full rotate-6"
          >
            <PhoneContent duration={28} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">{t('description')}</p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.id} variants={itemVariants} className="group relative">
                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card/40 hover:bg-card/60 hover:border-border relative h-full rounded-2xl p-6 backdrop-blur-sm transition-colors duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 transition-transform duration-300`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
                        <Icon className="h-8 w-8 text-foreground" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {t(`steps.${step.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {t(`steps.${step.id}.description`)}
                  </p>

                  {/* Tools/Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs ${step.gradient} text-muted-foreground border-border/50 border bg-opacity-20`}
                      >
                        {t(`steps.${step.id}.tools.${i}`)}
                      </span>
                    ))}
                  </div>

                  {/* Hover gradient effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />
                </motion.div>

                {/* Connecting line (except for last item on desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 overflow-hidden bg-white/10 lg:block">
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.2,
                      }}
                      className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-28 text-center"
        >
          <p className="text-muted-foreground text-lg">{t('cta')}</p>
        </motion.div>
      </div>
    </section>
  );
}
