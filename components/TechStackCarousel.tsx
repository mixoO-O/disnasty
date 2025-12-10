'use client';

import { useTranslations } from 'next-intl';
import { frontendTech, iaTech, cloudTech } from '@/constants/techStack';

const TechRow = ({
  items,
  speed = 40,
  reverse = false,
}: {
  items: typeof frontendTech;
  speed?: number;
  reverse?: boolean;
}) => {
  return (
    <div className="group flex w-max overflow-hidden">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 gap-6 pr-6">
            {items.map((item, idx) => (
              <div key={`${item.name}-${idx}-${i}`} className="group relative">
                {/* Gradient border wrapper */}
                <div className="rounded-xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 p-[1px] transition-all duration-300 group-hover:from-purple-400/50 group-hover:via-blue-400/50 group-hover:to-cyan-400/50">
                  <div className="bg-card/60 text-muted-foreground group-hover:bg-card/40 flex cursor-default items-center gap-3 rounded-xl px-5 py-2.5 font-medium backdrop-blur-md transition-all">
                    <img
                      src={`https://cdn.simpleicons.org/${item.icon}/white`}
                      alt={item.name}
                      className="h-5 w-5 opacity-70 invert transition-opacity group-hover:opacity-100 dark:invert-0"
                    />
                    <span className="pr-4 text-sm transition-colors group-hover:text-foreground">
                      {item.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export function TechStackCarousel() {
  const t = useTranslations('TechStackCarousel');

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
          {t('titlePrefix')}{' '}
          <span className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent">
            {t('titleSuffix')}
          </span>
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">{t('description')}</p>
      </div>

      <div className="relative flex overflow-hidden py-3 md:[mask-image:linear-gradient(to_right,transparent,black_60%,black_40%,transparent)]">
        <div className="relative z-10 space-y-2">
          <TechRow items={iaTech} speed={40} />
          <TechRow items={cloudTech} speed={35} reverse />
          <TechRow items={frontendTech} speed={30} />
        </div>
      </div>
    </section>
  );
}
