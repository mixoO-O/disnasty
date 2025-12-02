"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo } from "react";
import { ProductModal } from "./ProductModal";



interface SelectedProduct {
    id: string;
    gradient: string;
    image: string;
    title: string;
    category: string;
}

interface ProductItem {
    id: string;
    gradient: string;
    image: string;
}

export function ProductShowcase() {
    const t = useTranslations("ProductShowcase");
    const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
    const [shuffledProducts, setShuffledProducts] = useState<ProductItem[]>([]);

    // Separate content from layout slots
    const productContent = useMemo(() => [
        {
            id: "aiAnalytics",
            gradient: "from-blue-500 to-cyan-500",
            image: "/tech-dashboard.png",
        },
        {
            id: "smartCity",
            gradient: "from-purple-500 to-pink-500",
            image: "/smart-city.png",
        },
        {
            id: "neuralNet",
            gradient: "from-amber-500 to-orange-500",
            image: "/neural-network.png",
        },
        {
            id: "defi",
            gradient: "from-emerald-500 to-teal-500",
            image: "/tech-dashboard.png",
        },
        {
            id: "quantum",
            gradient: "from-indigo-500 to-violet-500",
            image: "/quantum-core.png",
        },
        {
            id: "cyber",
            gradient: "from-red-500 to-rose-500",
            image: "/smart-city.png",
        },
        {
            id: "holo",
            gradient: "from-fuchsia-500 to-magenta-500",
            image: "/neural-network.png",
        },
    ], []);

    const gridSlots = [
        "md:col-span-2 md:row-span-2",
        "md:col-span-2 md:row-span-1",
        "md:col-span-1 md:row-span-1",
        "md:col-span-1 md:row-span-1",
        "md:col-span-2 md:row-span-1",
        "md:col-span-1 md:row-span-1",
        "md:col-span-1 md:row-span-1",
    ];

    useEffect(() => {
        // Shuffle content on mount
        const shuffled = [...productContent].sort(() => Math.random() - 0.5);
        setShuffledProducts(shuffled);
    }, [productContent]);

    // If not hydrated yet, show a skeleton or initial state to match server render
    // However, for this visual component, we can just render the initial order first to avoid layout shift
    // or wait for hydration. Let's render initial order first then shuffle effect takes over.
    const displayProducts = shuffledProducts.length > 0 ? shuffledProducts : productContent;

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
                    {displayProducts.map((product, index) => {
                        // Use the grid slot based on index
                        const className = gridSlots[index] || "md:col-span-1 md:row-span-1";

                        return (
                            <motion.div
                                key={`${product.id}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                                // Add a subtle floating animation
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                // @ts-ignore - framer-motion types can be tricky with custom transition props
                                transition={{
                                    y: {
                                        duration: 3 + Math.random() * 2, // Random duration between 3-5s
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2, // Random start delay
                                    },
                                    default: {
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }
                                }}
                                className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${className}`}
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
                                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500 mix-blend-overlay`}
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-white text-xs font-medium mb-2 block uppercase tracking-wider">
                                            {t(`products.${product.id}.category`)}
                                        </span>
                                        <div className="flex items-center justify-between gap-4">
                                            <h3 className={`font-bold text-white leading-tight ${className.includes("row-span-2") ? "text-3xl" : "text-xl"
                                                }`}>
                                                {t(`products.${product.id}.title`)}
                                            </h3>
                                            <button
                                                onClick={() => setSelectedProduct({
                                                    ...product,
                                                    title: t(`products.${product.id}.title`),
                                                    category: t(`products.${product.id}.category`)
                                                })}
                                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 hover:bg-white/20 hover:scale-110 cursor-pointer"
                                            >
                                                <ArrowUpRight className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </section>
    );
}
