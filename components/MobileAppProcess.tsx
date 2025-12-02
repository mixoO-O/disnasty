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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="mobile-app" className="py-20 px-6 relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            {/* Animated background blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Phone Background Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] -z-10 hidden md:block"
                >
                    {/* Phone Frame */}
                    <div className="relative w-full h-full bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />

                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -1000] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "loop"
                                }}
                                className="w-full"
                            >
                                {/* Repeating the image to create seamless loop */}
                                <img
                                    src="/tech-app-mock.png"
                                    alt="App Mock"
                                    className="w-full h-auto opacity-50"
                                />
                                <img
                                    src="/tech-app-mock.png"
                                    alt="App Mock"
                                    className="w-full h-auto opacity-50"
                                />
                            </motion.div>

                            {/* Gradient Overlay to fade edges */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
                        </div>
                    </div>

                    {/* Glow Effect behind phone */}
                    <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
                </motion.div>

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
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20"
                >
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-white/20"
                                >
                                    {/* Icon with gradient background */}
                                    <div className="mb-6">
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 transition-transform duration-300`}
                                        >
                                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </motion.div>
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
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                                </motion.div>

                                {/* Connecting line (except for last item on desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10 overflow-hidden">
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            whileInView={{ x: "100%" }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: index * 0.2
                                            }}
                                            className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>

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
