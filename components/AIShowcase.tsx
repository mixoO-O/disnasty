"use client";

import { Brain, Workflow, Cpu, Sparkles, Layers, Scale, Leaf, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SolutionModalProps {
    isOpen: boolean;
    onClose: () => void;
    solution: {
        title: string;
        description: string;
        features: string[];
        color: string;
        icon: any;
    } | null;
}

import { createPortal } from "react-dom";

// ... imports

function SolutionModal({ isOpen, onClose, solution }: SolutionModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted || !solution) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl pointer-events-auto relative overflow-hidden"
                        >
                            {/* Background Gradient Blob */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${solution.color} opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-200 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                                    <solution.icon className={`w-6 h-6 ${solution.color.replace('from-', 'text-').replace('/20', '-400').split(' ')[0]}`} />
                                </div>

                                <h2 className="text-3xl font-bold mb-4">
                                    <span className={`bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                                        {solution.title}
                                    </span>
                                </h2>

                                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                                    {solution.description}
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Features</h3>
                                    <ul className="space-y-3">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${solution.color}`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

export function AIShowcase() {
    const t = useTranslations("AIShowcase");
    const [activeSolution, setActiveSolution] = useState<'auralis' | 'clou' | null>(null);

    const solutions = {
        auralis: {
            title: t("auralis.title"),
            description: t("auralis.description"),
            features: [t("auralis.features.0"), t("auralis.features.1"), t("auralis.features.2")],
            color: "from-purple-500 to-indigo-500",
            icon: Scale
        },
        clou: {
            title: t("clou.title"),
            description: t("clou.description"),
            features: [t("clou.features.0"), t("clou.features.1"), t("clou.features.2")],
            color: "from-green-500 to-emerald-500",
            icon: Leaf
        }
    };

    return (
        <section id="ia" className="py-24 px-6 relative overflow-hidden bg-background">
             {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-medium text-muted-foreground">{t("badge")}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-foreground font-bold mb-6">
                        {t("titlePrefix")} <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                            {t("titleSuffix")}
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Code Antigravity (Large) */}
                    <div className="md:col-span-3 group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors p-8 md:p-12">
                         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                         
                         {/* Solution Bubbles */}
                         {/* Solution Bubbles */}
                         <div className="absolute top-6 right-6 z-20 flex flex-col items-center">
                            <div className="flex gap-3 relative">
                                <button 
                                    onClick={() => setActiveSolution('auralis')}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center hover:scale-110 hover:bg-purple-500/30 transition-all cursor-pointer group/btn"
                                    aria-label="Auralis"
                                >
                                    <Scale className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                                </button>
                                
                                <button 
                                    onClick={() => setActiveSolution('clou')}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center hover:scale-110 hover:bg-green-500/30 transition-all cursor-pointer group/btn"
                                    aria-label="Clou"
                                >
                                    <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                                </button>

                                {/* Persistent Tooltip */}
                                <div className="absolute top-full right-0 mt-4 whitespace-nowrap pointer-events-none z-30">
                                    <div className="relative px-4 py-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-xl text-xs font-medium text-foreground shadow-xl flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                                        <span>{t("tooltip")}</span>
                                    </div>
                                    {/* Arrow pointing up - aligned to center of button gap */}
                                    <div className="absolute -top-1.5 right-[calc(50%-6px)] w-3 h-3 bg-card/90 border-l border-t border-border/50 rotate-45 backdrop-blur-md rounded-tl-[2px]"></div>
                                </div>
                            </div>
                         </div>

                         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                             <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                                <Cpu className="w-10 h-10 text-white" />
                             </div>
                             <div className="text-center md:text-left">
                                <h3 className="text-3xl font-bold text-foreground mb-3">{t("antigravity.title")}</h3>
                                <p className="text-lg text-muted-foreground max-w-2xl">{t("antigravity.description")}</p>
                             </div>
                         </div>
                    </div>

                    {/* Card 2: n8n Automation */}
                    <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/20 group-hover:scale-110 transition-transform">
                                <Workflow className="w-6 h-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("n8n.title")}</h3>
                            <p className="text-muted-foreground">{t("n8n.description")}</p>
                        </div>
                    </div>

                    {/* Card 3: Multi-Model Matrix */}
                    <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors p-8">
                         <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("llm.title")}</h3>
                            <p className="text-muted-foreground">{t("llm.description")}</p>
                        </div>
                    </div>

                    {/* Card 4: MCP & Context */}
                    <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                             <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("context.title")}</h3>
                            <p className="text-muted-foreground">{t("context.description")}</p>
                        </div>
                    </div>
                </div>

                <SolutionModal
                    isOpen={!!activeSolution}
                    onClose={() => setActiveSolution(null)}
                    solution={activeSolution ? solutions[activeSolution] : null}
                />
            </div>
        </section>
    );
}
