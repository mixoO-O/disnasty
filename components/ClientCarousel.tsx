'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateAI', logo: 'IA' },
  { name: 'FutureSystems', logo: 'FS' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'NeuralNet', logo: 'NN' },
  { name: 'CloudScale', logo: 'CS' },
  { name: 'CyberDyne', logo: 'CD' },
  { name: 'QuantumLeap', logo: 'QL' },
];

export function ClientCarousel() {
  const t = useTranslations('ClientCarousel');

  return (
    <section id="clients" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="relative mb-6 inline-block text-3xl font-bold md:text-5xl">
          <span className="absolute -inset-x-4 -inset-y-2 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-50 blur-xl" />
          <span className="relative z-10 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-gray-200">{t('subtitle')}</p>
      </div>

      <div className="group relative flex overflow-hidden py-4 md:[mask-image:linear-gradient(to_right,transparent,black_80%,black_20%,transparent)]">
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0 gap-6 pr-6">
              {clients.map((client, index) => (
                <div key={`${client.name}-${index}-${i}`} className="group relative">
                  {/* Gradient border wrapper */}
                  <div className="rounded-xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 p-[1px] transition-all duration-300 group-hover:from-purple-400/50 group-hover:via-blue-400/50 group-hover:to-cyan-400/50">
                    <div className="flex min-w-[200px] cursor-default items-center justify-center gap-4 rounded-xl bg-black/60 px-8 py-4 font-medium text-gray-200 backdrop-blur-md transition-all group-hover:bg-black/40">
                      <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent text-white opacity-70 transition-opacity group-hover:opacity-100">
                        {client.logo}
                      </span>
                      <span className="text-lg transition-colors group-hover:text-white">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
