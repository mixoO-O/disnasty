"use client";

import { Scale, Leaf, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function AIShowcase() {
    const t = useTranslations("AIShowcase");

    return (
        <section id="ia" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-muted-foreground">{t("badge")}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl text-foreground font-bold mb-6">
                        {t("titlePrefix")} <br />
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {t("titleSuffix")}
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Auralis Card */}
                    <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="p-8 md:p-12 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-purple-500/20">
                                <Scale className="w-8 h-8 text-purple-400" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-foreground">{t("auralis.title")}</h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {t("auralis.description")}
                            </p>

                            <ul className="space-y-4 mb-8 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                    {t("auralis.features.0")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                    {t("auralis.features.1")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                    {t("auralis.features.2")}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Clou Card */}
                    <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card/40 hover:bg-card/60 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="p-8 md:p-12 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-green-500/20">
                                <Leaf className="w-8 h-8 text-green-400" />
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-foreground">{t("clou.title")}</h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {t("clou.description")}
                            </p>

                            <ul className="space-y-4 mb-8 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    {t("clou.features.0")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    {t("clou.features.1")}
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    {t("clou.features.2")}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
