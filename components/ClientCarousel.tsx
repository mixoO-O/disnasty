"use client";

import { motion } from "framer-motion";

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
    return (
        <section id="clients" className="py-10 overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider">
                    Trusted by industry leaders
                </p>
            </div>

            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-12 items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="flex items-center gap-3 group min-w-[150px] justify-center"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <span className="font-bold text-gray-400 group-hover:text-primary transition-colors">
                                    {client.logo}
                                </span>
                            </div>
                            <span className="text-lg font-semibold text-gray-500 group-hover:text-white transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
