"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        content: "Disnasty transformed our legacy systems into a state-of-the-art AI platform. The attention to detail is unmatched.",
        platform: "linkedin",
        icon: Linkedin,
    },
    {
        name: "Marcus Rodriguez",
        role: "Founder of StartUpX",
        content: "Incredible work on our automation workflows. We've saved hundreds of hours thanks to their n8n integrations.",
        platform: "twitter",
        icon: Twitter,
    },
    {
        name: "Elena Popov",
        role: "Product Lead",
        content: "The design team at Disnasty is on another level. Our user engagement increased by 200% after the redesign.",
        platform: "instagram",
        icon: Instagram,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 px-6 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Client Stories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See what our partners are saying about us on social media.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors relative group"
                        >
                            <div className="absolute top-8 right-8 text-gray-500 group-hover:text-primary transition-colors">
                                <testimonial.icon className="w-6 h-6" />
                            </div>

                            <p className="text-gray-300 mb-6 italic">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div>
                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
