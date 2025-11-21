"use client";

import { motion } from "framer-motion";

const techStack = [
    { name: "React", icon: "react" },
    { name: "Vue.js", icon: "vuedotjs" },
    { name: "Angular", icon: "angular" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "openjdk" },
    { name: "Go", icon: "go" },
    { name: "Rust", icon: "rust" },
    { name: "AWS", icon: "amazonaws" },
    { name: "Google Cloud", icon: "googlecloud" },
    { name: "Azure", icon: "microsoftazure" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Terraform", icon: "terraform" },
    { name: "TypeScript", icon: "typescript" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "GraphQL", icon: "graphql" }
];

const TechRow = ({ items, speed = 40 }: { items: typeof techStack, speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 relative group">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex gap-8 whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={`${item.name}-${idx}`}
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all cursor-default min-w-[160px]"
                    >
                        <img
                            src={`https://cdn.simpleicons.org/${item.icon}/white`}
                            alt={item.name}
                            className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <span>{item.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export function TechStackCarousel() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Our <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Technology Stack</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We leverage the most advanced and reliable technologies to build scalable solutions.
                </p>
            </div>

            <div className="space-y-8">
                <div className="relative">
                    <TechRow items={techStack} speed={60} />
                </div>
            </div>
        </section>
    );
}
