"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

const testimonials = [
    {
        platform: "linkedin",
        icon: Linkedin,
        color: "#0077b5", // LinkedIn Blue
    },
    {
        platform: "twitter",
        icon: Twitter,
        color: "#1DA1F2", // Twitter Blue
    },
    {
        platform: "instagram",
        icon: Instagram,
        color: "#E1306C", // Instagram Pink
    },
];

export function Testimonials() {
    const t = useTranslations('Testimonials');

    return (
        <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {t('title')}
                    </h2>
                    <p className="text-gray-200 max-w-2xl mx-auto text-lg">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
                            <div className="relative h-full p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 overflow-hidden">
                                <div className="h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col relative z-10">
                                    <p className="text-gray-100 mb-8 leading-relaxed flex-grow">
                                        &quot;{t(`items.${index}.content`)}&quot;
                                    </p>

                                    <div className="mt-auto">
                                        <h4 className="font-bold text-white text-lg">{t(`items.${index}.name`)}</h4>
                                        <p className="text-sm text-white/80">{t(`items.${index}.role`)}</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20"
                                    style={{
                                        backgroundColor: testimonial.color,
                                    }}
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    transition={{
                                        duration: 10, // Slow continuous movement
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                    <testimonial.icon className="w-5 h-5 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

