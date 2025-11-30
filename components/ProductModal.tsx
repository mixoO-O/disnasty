"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: string;
        title: string;
        category: string;
        image?: string;
        gradient: string;
    } | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
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

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none p-0 md:p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full h-full md:h-auto md:max-h-[90vh] md:max-w-2xl bg-black/80 backdrop-blur-xl border-0 md:border border-white/10 rounded-none md:rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col"
                        >
                            {/* Background Gradient Blob */}
                            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${product.gradient} opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-gray-200 hover:text-white transition-all backdrop-blur-md border border-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Section */}
                            {product.image && (
                                <div className="relative w-full h-64 md:h-80 shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="p-8 md:p-10 overflow-y-auto">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium mb-4 uppercase tracking-wider">
                                    {product.category}
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                    {product.title}
                                </h2>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-200 text-lg leading-relaxed">
                                        {/* Placeholder description - in a real app this would come from the product object or translation */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p className="text-gray-200 text-lg leading-relaxed mt-4">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
