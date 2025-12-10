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

function PhoneContent({ duration = 20 }: { duration?: number }) {
    return (
        <div className="relative w-full h-full bg-background rounded-[3rem] border-[8px] border-background border-cyan-700 shadow-2xl overflow-hidden ring-1 ring-background/50">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-xl z-20 border-b border-x border-background/50" />

            {/* Screen Content */}
            <div className="relative w-full h-full bg-background overflow-hidden">
                <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-full flex flex-col"
                >
                    {/* First Copy */}
                    <div className="w-full pb-8">
                        {/* Screen 1: Dashboard */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full border-2 border-foreground/20" />
                                <div className="w-24 h-4 bg-muted-foreground/20 rounded" />
                                <div className="w-6 h-6 border-2 border-foreground/20 rounded" />
                            </div>
                            <div className="w-full aspect-video border-2 border-foreground/20 relative bg-background/40">
                                <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="aspect-square border-2 border-foreground/20 relative bg-background/40">
                                    <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                                <div className="space-y-2 py-2">
                                    <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Screen 2: Feed */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="w-1/3 h-6 bg-muted-foreground/20 rounded mb-6" />
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-12 h-12 border-2 border-foreground/20 shrink-0 relative bg-background/40">
                                        <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2 flex-1 pt-1">
                                        <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                        <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Screen 3: Details */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="w-full aspect-square border-2 border-foreground/20 rounded relative bg-background/40">
                                <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-5/6 bg-muted-foreground/20 rounded" />
                            </div>
                            <div className="flex gap-2 mt-4">
                                <div className="h-8 w-24 border-2 border-foreground/20 rounded" />
                                <div className="h-8 w-8 border-2 border-foreground/20 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Second Copy (Duplicate for seamless loop) */}
                    <div className="w-full pb-8">
                        {/* Screen 1: Dashboard */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full border-2 border-foreground/20" />
                                <div className="w-24 h-4 bg-muted-foreground/20 rounded" />
                                <div className="w-6 h-6 border-2 border-foreground/20 rounded" />
                            </div>
                            <div className="w-full aspect-video border-2 border-foreground/20 relative bg-background/40">
                                <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="aspect-square border-2 border-foreground/20 relative bg-background/40">
                                    <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>
                                <div className="space-y-2 py-2">
                                    <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                                    <div className="h-2 w-1/2 bg-muted-foreground/20 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Screen 2: Feed */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="w-1/3 h-6 bg-muted-foreground/20 rounded mb-6" />
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-12 h-12 border-2 border-foreground/20 shrink-0 relative bg-background/40">
                                        <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2 flex-1 pt-1">
                                        <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                        <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Screen 3: Details */}
                        <div className="p-4 space-y-4 opacity-40">
                            <div className="w-full aspect-square border-2 border-foreground/20 rounded relative bg-background/40">
                                <svg className="absolute inset-0 w-full h-full text-foreground/20" preserveAspectRatio="none">
                                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                                <div className="h-2 w-5/6 bg-muted-foreground/20 rounded" />
                            </div>
                            <div className="flex gap-2 mt-4">
                                <div className="h-8 w-24 border-2 border-foreground/20 rounded" />
                                <div className="h-8 w-8 border-2 border-foreground/20 rounded-full" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Gradient Overlay to fade edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
            </div>
        </div>
    );
}

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
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Phone Background Animation */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] -z-10 hidden md:block">
                    {/* Left Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 0.3, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute left-80 top-10 -translate-x-full -translate-y-1/2 w-[260px] h-[520px] origin-right -rotate-6"
                    >
                        <PhoneContent duration={25} />
                    </motion.div>

                    {/* Center Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full z-10"
                    >
                        <PhoneContent duration={20} />
                        {/* Glow Effect behind main phone */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
                    </motion.div>

                    {/* Right Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 0.3, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute right-80 top-10 translate-x-full -translate-y-1/2 w-[260px] h-[520px] origin-left rotate-6"
                    >
                        <PhoneContent duration={28} />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl text-foreground md:text-4xl font-bold mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
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
                                    className="relative h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/60 transition-colors duration-300 hover:border-border"
                                >
                                    {/* Icon with gradient background */}
                                    <div className="mb-6">
                                        <motion.div
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 transition-transform duration-300`}
                                        >
                                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-foreground" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-foreground mb-3">
                                        {t(`steps.${step.id}.title`)}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {t(`steps.${step.id}.description`)}
                                    </p>

                                    {/* Tools/Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-20 text-muted-foreground border border-border/50`}
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
                    className="mt-28 text-center"
                >
                    <p className="text-muted-foreground text-lg">
                        {t("cta")}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
