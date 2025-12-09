"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { frontendTech, iaTech, cloudTech } from "@/constants/techStack";



const TechRow = ({ items, speed = 40, reverse = false }: { items: typeof frontendTech, speed?: number, reverse?: boolean }) => {
    return (
        <div className="flex w-max overflow-hidden group">
            <div
                className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-6 pr-6 shrink-0">
                        {items.map((item, idx) => (
                            <div
                                key={`${item.name}-${idx}-${i}`}
                                className="relative group"
                            >
                                {/* Gradient border wrapper */}
                                <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 group-hover:from-purple-400/50 group-hover:via-blue-400/50 group-hover:to-cyan-400/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-card/60 backdrop-blur-md text-muted-foreground font-medium group-hover:bg-card/40 transition-all cursor-default">
                                        <img
                                            src={`https://cdn.simpleicons.org/${item.icon}/white`}
                                            alt={item.name}
                                            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity dark:invert-0 invert"
                                        />
                                        <span className="text-sm pr-4 group-hover:text-foreground transition-colors">{item.name}</span>
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
    const t = useTranslations("TechStackCarousel");

    return (
        <section id="tech-stack" className="py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl text-foreground md:text-5xl font-bold mb-6">
                    {t("titlePrefix")} <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">{t("titleSuffix")}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t("description")}
                </p>
            </div>

            <div className="flex overflow-hidden py-3 relative md:[mask-image:linear-gradient(to_right,transparent,black_60%,black_40%,transparent)]">
                <div className="space-y-2 relative z-10">
                    <TechRow items={iaTech} speed={40} />
                    <TechRow items={cloudTech} speed={35} reverse />
                    <TechRow items={frontendTech} speed={30} />
                </div>
            </div>
        </section>
    );
}
