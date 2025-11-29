"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const products = [
    {
        id: "aiAnalytics",
        gradient: "from-blue-500 to-cyan-500",
        image: "/tech-dashboard.png",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: "smartCity",
        gradient: "from-purple-500 to-pink-500",
        image: "/smart-city.png",
        className: "md:col-span-2 md:row-span-1",
    },
    {
        id: "neuralNet",
        gradient: "from-amber-500 to-orange-500",
        image: "/neural-network.png",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "defi",
        gradient: "from-emerald-500 to-teal-500",
        image: "/tech-dashboard.png", // Reusing for now
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "quantum",
        gradient: "from-indigo-500 to-violet-500",
        image: "/quantum-core.png",
        className: "md:col-span-2 md:row-span-1",
    },
    {
        id: "cyber",
        gradient: "from-red-500 to-rose-500",
        image: "/smart-city.png", // Reusing
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "holo",
        gradient: "from-fuchsia-500 to-magenta-500",
        image: "/neural-network.png", // Reusing
        className: "md:col-span-1 md:row-span-1",
    },
];

export function ProductShowcase() {
    const t = useTranslations("ProductShowcase");

    return (
        <section id="products" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
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

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${product.className}`}
                        >
                            {/* Image Background */}
                            {product.image && (
                                <div className="absolute inset-0">
                                    <Image
                                        src={product.image}
                                        alt={t(`products.${product.id}.title`)}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                                </div>
                            )}

                            {/* Gradient Overlay (Subtle) */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`}
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-primary text-xs font-medium mb-2 block uppercase tracking-wider">
                                        {t(`products.${product.id}.category`)}
                                    </span>
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className={`font-bold text-white leading-tight ${product.className?.includes("row-span-2") ? "text-3xl" : "text-xl"
                                            }`}>
                                            {t(`products.${product.id}.title`)}
                                        </h3>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
