'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Compass, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 'strategy',
    icon: Compass,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'design',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'development',
    icon: Code2,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'launch',
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export function WebAppProcess() {
  const t = useTranslations('WebAppProcess');
  const [activeStep, setActiveStep] = useState(steps[0].id);

  return (
    <section id="web-app" className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`sticky top-24 z-30 rounded-3xl bg-background/80 py-10 text-center backdrop-blur-xl ${
            activeStep === steps[0].id ? 'mb-24' : 'mb-[50vh]'
          }`}
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </motion.div>

        <div className="relative mb-0 lg:mb-24 lg:flex lg:gap-10">
          {/* Scrolling Text Section */}
          <div className="relative z-20 lg:w-1/2">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                onViewportEnter={() => setActiveStep(step.id)}
                viewport={{ amount: 0.6 }}
                className={`flex items-center pb-10 lg:block ${
                  index === 0
                    ? 'lg:flex lg:h-[500px] lg:items-center'
                    : index === steps.length - 1
                      ? 'lg:flex lg:h-[500px] lg:items-center'
                      : 'lg:flex lg:h-[100vh] lg:items-center'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  className={`bg-card/40 rounded-3xl p-8 backdrop-blur-md lg:border-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none ${
                    index !== 0 && index !== steps.length - 1 ? 'lg:pt-64' : ''
                  }`}
                >
                  <div className="mb-6 lg:hidden">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
                        <step.icon className="h-8 w-8 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <h3
                    className={`bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl ${step.gradient} mb-6`}
                  >
                    {t(`steps.${step.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {t(`steps.${step.id}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 lg:hidden">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-muted-foreground rounded-full bg-secondary/50 px-3 py-1 text-sm"
                      >
                        {t(`steps.${step.id}.tools.${i}`)}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Sticky Graphics Section - Desktop */}
          <div className="sticky top-[40vh] z-10 ml-auto hidden h-[500px] w-1/2 lg:block">
            <div className="bg-card/90 dark:bg-card/40 relative h-full w-full overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {steps.map(
                  (step) =>
                    activeStep === step.id && (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 blur-3xl`}
                        />
                        <div className="relative z-10 text-center">
                          <div
                            className={`mx-auto mb-8 h-24 w-24 rounded-3xl bg-gradient-to-br ${step.gradient} p-0.5`}
                          >
                            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-background">
                              <step.icon className="h-12 w-12 text-foreground" />
                            </div>
                          </div>
                          <h3 className="mb-4 text-3xl font-bold text-foreground">
                            {t(`steps.${step.id}.title`)}
                          </h3>
                          <div className="mt-8 flex flex-wrap justify-center gap-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <span
                                key={i}
                                className="text-muted-foreground rounded-full bg-secondary/50 px-3 py-1 text-sm"
                              >
                                {t(`steps.${step.id}.tools.${i}`)}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
