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
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                        {t("title")}
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t("subtitle")}
                </p>
            </div>

            <div className="relative flex py-4 group md:[mask-image:linear-gradient(to_right,transparent,black_60%,black_40%,transparent)]">
                <motion.div
                    className="flex gap-2 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="relative flex items-center"
                        >
                            {/* Circle Icon with Gradient Border */}
                            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-gradient bg-[length:200%_200%] relative z-10">
                                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <span className="font-bold text-white text-xl">
                                        {client.logo}
                                    </span>
                                </div>
                            </div>

                            {/* Extending Rectangle */}
                            <div className="h-12 flex items-center pl-10 pr-6 -ml-8 bg-white/5 border-y border-r border-white/10 rounded-r-full backdrop-blur-sm">
                                <span className="text-base font-semibold text-gray-400 whitespace-nowrap">
                                    {client.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
