"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Lightbulb, Layout, Palette, Code } from "lucide-react";

const processSteps = [
    {
        id: "planning",
        icon: Lightbulb,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: "mockup",
        icon: Layout,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: "design",
        icon: Palette,
        gradient: "from-amber-500 to-orange-500",
    },
    {
        id: "development",
        icon: Code,
        gradient: "from-emerald-500 to-teal-500",
    },
];

export function MobileAppProcess() {
    const t = useTranslations("MobileAppProcess");

    return (
        <section id="mobile-app" className="py-20 px-6 relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:border-white/20">
                                    {/* Icon with gradient background */}
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {t(`steps.${step.id}.title`)}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {t(`steps.${step.id}.description`)}
                                    </p>

                                    {/* Tools/Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {Array.from({ length: 3 }).map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-20 text-white/80 border border-white/10`}
                                            >
                                                {t(`steps.${step.id}.tools.${i}`)}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover gradient effect */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                                </div>

                                {/* Connecting line (except for last item on desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA or additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-300 text-lg">
                        {t("cta")}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
