"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
    {
        title: "AI Analytics Dashboard",
        category: "Data Visualization",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Smart City Interface",
        category: "IoT Platform",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Neural Network Visualizer",
        category: "Machine Learning",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        title: "DeFi Trading Protocol",
        category: "Web3 / Blockchain",
        gradient: "from-emerald-500 to-teal-500",
    },
];

export function ProductShowcase() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our latest work in AI, automation, and next-gen web development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                        >
                            {/* Background Gradient Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-primary text-sm font-medium mb-2 block">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-white">
                                            {product.title}
                                        </h3>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {/* <ArrowUpRight className="w-5 h-5 text-white" /> */}
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
