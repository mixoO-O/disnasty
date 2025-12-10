"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Compass, Palette, Code2, Rocket } from "lucide-react";

const steps = [
    {
        id: "strategy",
        icon: Compass,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: "design",
        icon: Palette,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        id: "development",
        icon: Code2,
        gradient: "from-amber-500 to-orange-500",
    },
    {
        id: "launch",
        icon: Rocket,
        gradient: "from-emerald-500 to-teal-500",
    },
];

export function WebAppProcess() {
    const t = useTranslations("WebAppProcess");
    const [activeStep, setActiveStep] = useState(steps[0].id);

    return (
        <section id="web-app" className="relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`sticky top-24 z-30 bg-background/80 backdrop-blur-xl py-10 text-center rounded-3xl border border-border/50 ${activeStep === steps[0].id ? "mb-24" : "mb-[50vh]"
                        }`}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="relative lg:flex lg:gap-10 mb-0 lg:mb-24">
                    {/* Scrolling Text Section */}
                    <div className="lg:w-1/2 relative z-20 ">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                onViewportEnter={() => setActiveStep(step.id)}
                                viewport={{ amount: 0.6 }}
                                className={`flex items-center lg:block pb-10 ${index === 0 ? "lg:h-[500px] lg:flex lg:items-center" :
                                    index === steps.length - 1 ? "lg:h-[500px] lg:flex lg:items-center" :
                                        "lg:h-[100vh] lg:flex lg:items-center"
                                    }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    className={`bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0 ${index !== 0 && index !== steps.length - 1 ? "lg:pt-64" : ""
                                        }`}
                                >
                                    <div className="lg:hidden mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5`}>
                                            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                                <step.icon className="w-8 h-8 text-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} mb-6`}>
                                        {t(`steps.${step.id}.title`)}
                                    </h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                        {t(`steps.${step.id}.description`)}
                                    </p>
                                    <div className="lg:hidden flex flex-wrap gap-2">
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
                                            >
                                                {t(`steps.${step.id}.tools.${i}`)}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sticky Graphics Section - Desktop */}
                    <div className="hidden lg:block sticky top-[40vh] h-[500px] w-1/2 ml-auto z-10">
                        <div className="relative w-full h-full bg-card/90 dark:bg-card/40 rounded-3xl border border-border/50 overflow-hidden shadow-2xl backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                {steps.map((step) => (
                                    activeStep === step.id && (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 blur-3xl`} />
                                            <div className="relative z-10 text-center">
                                                <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${step.gradient} p-0.5`}>
                                                    <div className="w-full h-full bg-background rounded-3xl flex items-center justify-center">
                                                        <step.icon className="w-12 h-12 text-foreground" />
                                                    </div>
                                                </div>
                                                <h3 className="text-3xl font-bold text-foreground mb-4">{t(`steps.${step.id}.title`)}</h3>
                                                <div className="flex flex-wrap justify-center gap-2 mt-8">
                                                    {Array.from({ length: 4 }).map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground"
                                                        >
                                                            {t(`steps.${step.id}.tools.${i}`)}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
