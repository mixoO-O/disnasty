'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonials = [
  {
    platform: 'linkedin',
    icon: Linkedin,
    color: '#0077b5', // LinkedIn Blue
  },
  {
    platform: 'twitter',
    icon: Twitter,
    color: '#1DA1F2', // Twitter Blue
  },
  {
    platform: 'instagram',
    icon: Instagram,
    color: '#E1306C', // Instagram Pink
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
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-sm transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 to-white/5 p-[1px]">
                <div className="relative z-10 flex h-full flex-col rounded-2xl bg-black/40 p-8 backdrop-blur-xl">
                  <p className="mb-8 flex-grow leading-relaxed text-gray-100">
                    &quot;{t(`items.${index}.content`)}&quot;
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-lg font-bold text-white">{t(`items.${index}.name`)}</h4>
                    <p className="text-sm text-white/80">{t(`items.${index}.role`)}</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-full">
                <motion.div
                  className="absolute left-0 top-0 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{
                    backgroundColor: testimonial.color,
                  }}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 10, // Slow continuous movement
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                >
                  <testimonial.icon className="h-5 w-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
