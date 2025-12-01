"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateAI", logo: "IA" },
    { name: "FutureSystems", logo: "FS" },
    { name: "DataFlow", logo: "DF" },
    { name: "NeuralNet", logo: "NN" },
    { name: "CloudScale", logo: "CS" },
    { name: "CyberDyne", logo: "CD" },
    { name: "QuantumLeap", logo: "QL" },
];

export function ClientCarousel() {
    const t = useTranslations("ClientCarousel");

    return (
        <section id="clients" className="py-24 overflow-hidden relative">


            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
                    <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-xl rounded-full opacity-50" />
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent relative z-10">
                        {t("title")}
                    </span>
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto">
                    {t("subtitle")}
                </p>
            </div>

            <div className="relative flex py-4 group md:[mask-image:linear-gradient(to_right,transparent,black_80%,black_20%,transparent)] overflow-hidden">
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-6 pr-6 shrink-0">
                            {clients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}-${i}`}
                                    className="relative group"
                                >
                                    {/* Gradient border wrapper */}
                                    <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 group-hover:from-purple-400/50 group-hover:via-blue-400/50 group-hover:to-cyan-400/50 transition-all duration-300">
                                        <div className="flex items-center gap-4 px-8 py-4 rounded-xl bg-black/60 backdrop-blur-md text-gray-200 font-medium group-hover:bg-black/40 transition-all cursor-default min-w-[200px] justify-center">
                                            <span className="font-bold text-white text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-70 group-hover:opacity-100 transition-opacity">
                                                {client.logo}
                                            </span>
                                            <span className="text-lg group-hover:text-white transition-colors">
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
