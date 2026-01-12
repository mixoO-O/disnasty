'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    platform: 'linkedin',
    icon: Linkedin,
    color: '#0077b5',
    gradient: 'from-blue-600 to-sky-500',
  },
  {
    platform: 'twitter',
    icon: Twitter,
    color: '#1DA1F2',
    gradient: 'from-sky-500 to-cyan-400',
  },
  {
    platform: 'instagram',
    icon: Instagram,
    color: '#E1306C',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function Testimonials() {
  const t = useTranslations('Testimonials');

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">{t('subtitle')}</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="border-border/40 bg-card/30 hover:bg-card/50 relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                {/* Glow Effect */}
                <div
                  className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Floating Icon that moves around or stays fixed? 
                      The original had a moving icon. Let's keep a simplified version or the InnovationHub standard icon.
                      InnovationHub has a fixed header icon.
                      The original Testimonials had a cool animation. 
                      Let's adapt the InnovationHub icon style but put it in the header.
                  */}
                  <div className="mb-8">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.gradient} shadow-lg ring-1 ring-black/5 dark:ring-white/20`}
                    >
                      <testimonial.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed transition-colors group-hover:text-foreground/80 dark:text-gray-400 dark:group-hover:text-gray-300">
                    &quot;{t(`items.${index}.content`)}&quot;
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-lg font-bold text-foreground dark:text-white">
                      {t(`items.${index}.name`)}
                    </h4>
                    <p className="text-muted-foreground text-sm dark:text-white/80">
                      {t(`items.${index}.role`)}
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient Border line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${testimonial.gradient} scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
