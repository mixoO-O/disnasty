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
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/90 -z-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

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
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                            {/* Animated Border Container */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />

                            {/* Main Card Content */}
                            <div className="relative h-full p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 overflow-hidden">
                                <div className="h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col relative z-10">

                                    {/* Quote Icon */}
                                    <div className="mb-6 opacity-20">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.313 13.533 17.257 12.963C18.201 12.393 19.245 12.108 20.389 12.108L20.389 9C18.795 9 17.425 9.489 16.279 10.467C15.133 11.445 14.357 12.723 13.951 14.301L10.049 14.301L10.049 21L14.017 21ZM3.969 21L3.969 18C3.969 16.896 4.273 15.923 4.881 15.081C5.489 14.239 6.265 13.533 7.209 12.963C8.153 12.393 9.197 12.108 10.341 12.108L10.341 9C8.747 9 7.377 9.489 6.231 10.467C5.085 11.445 4.309 12.723 3.903 14.301L0 14.301L0 21L3.969 21Z" />
                                        </svg>
                                    </div>

                                    <p className="text-gray-200 mb-8 leading-relaxed flex-grow">
                                        &quot;{t(`items.${index}.content`)}&quot;
                                    </p>

                                    <div className="mt-auto">
                                        <h4 className="font-bold text-white text-lg">{t(`items.${index}.name`)}</h4>
                                        <p className="text-sm text-primary/80">{t(`items.${index}.role`)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Moving Social Icon */}
                            {/* We use an SVG path to define the motion path if needed, or CSS offset-path */}
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                                style={{
                                    // The offset-path needs to match the border. 
                                    // For a responsive card, this is tricky with fixed pixel paths.
                                    // But 'rect(0 100% 100% 0 round 1rem)' works in modern browsers.
                                    // We'll use a fallback or a specific animation technique.
                                }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20"
                                    style={{
                                        backgroundColor: testimonial.color,
                                        offsetPath: "rect(0% 100% 100% 0% round 16px)", // Matches rounded-2xl (16px)
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

