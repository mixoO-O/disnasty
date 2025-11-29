"use client";

import { motion } from "framer-motion";
import { Stethoscope, Ship } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
    {
        icon: Stethoscope,
        color: "#10b981", // Emerald
    },
    {
        icon: Ship,
        color: "#3b82f6", // Blue
    }
];

export function InnovationHub() {
    const t = useTranslations('InnovationHub');

    return (
        <section id="innovation" className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Animated Border Container */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />

                            {/* Main Card Content */}
                            <div className="relative h-full p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 overflow-hidden">
                                <div className="h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col relative z-10">

                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold text-white transition-colors">
                                            {t(`items.${index}.client`)}
                                        </h3>
                                        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                                            {t(`items.${index}.location`)}
                                        </span>
                                    </div>

                                    <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                                        {t(`items.${index}.desc`)}
                                    </p>

                                    <div className="flex gap-2 flex-wrap mt-auto">
                                        {t(`items.${index}.tags`).split(', ').map(tag => (
                                            <span key={tag} className="text-xs text-white bg-primary/10 px-2 py-1 rounded-md ">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Moving Icon */}
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20"
                                    style={{
                                        backgroundColor: project.color,

                                    }}
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    transition={{
                                        duration: 12,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                    <project.icon className="w-5 h-5 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
