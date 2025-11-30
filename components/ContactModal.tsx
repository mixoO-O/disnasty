"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const t = useTranslations("ContactModal");
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        onClose();
    };

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
                    <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl pointer-events-auto relative overflow-hidden"
                        >
                            {/* Background Gradient Blob */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-200 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h2 className="text-3xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                                    {t("title")}
                                </span>
                            </h2>
                            <p className="text-gray-200 mb-8">
                                {t("subtitle")}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t("nameLabel")}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder={t("namePlaceholder")}
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t("emailLabel")}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder={t("emailPlaceholder")}
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                        {t("messageLabel")}
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                        placeholder={t("messagePlaceholder")}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-lg font-bold text-white relative overflow-hidden group bg-black border border-white/10 hover:border-primary/50 transition-colors"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent bg-[length:200%_200%] animate-gradient opacity-0 group-hover:opacity-20 transition-opacity" />
                                    <span className="relative z-10">{t("submitButton")}</span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
