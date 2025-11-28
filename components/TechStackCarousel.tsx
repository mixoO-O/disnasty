"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Frontend Technologies
const frontendTech = [
    { name: "React", icon: "react" },
    { name: "Vue.js", icon: "vuedotjs" },
    { name: "Angular", icon: "angular" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "openjdk" },
    { name: "Go", icon: "go" },
    { name: "Rust", icon: "rust" },
    { name: "GraphQL", icon: "graphql" },
];

// ia integracion
const iaTech = [
    { name: "n8n", icon: "n8n" },
    { name: "OpenAI", icon: "openai" },
    { name: "HuggingFace", icon: "huggingface" },
    { name: "Gemini", icon: "googlegemini" },
    { name: "Claude", icon: "claude" },
    { name: "Anthropic", icon: "anthropic" },
    { name: "Ollama", icon: "ollama" },

];

// Cloud & DevOps
const cloudTech = [
    //{ name: "Amazon Web Services", icon: "amazoncloud" },
    { name: "Google Cloud", icon: "googlecloud" },
    { name: "Microsoft Azure", icon: "microsoftazure" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Terraform", icon: "terraform" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
];



const TechRow = ({ items, speed = 40, reverse = false }: { items: typeof frontendTech, speed?: number, reverse?: boolean }) => {
    return (
        <div className="flex overflow-hidden py-3 relative md:[mask-image:linear-gradient(to_right,transparent,black_60%,black_40%,transparent)]">
            <motion.div
                className="flex gap-6 whitespace-nowrap"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
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
                        className="relative group"
                    >
                        {/* Gradient border wrapper */}
                        <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 group-hover:from-purple-400/50 group-hover:via-blue-400/50 group-hover:to-cyan-400/50 transition-all duration-300">
                            <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-md text-gray-300 font-medium group-hover:bg-black/40 transition-all cursor-default">
                                <img
                                    src={`https://cdn.simpleicons.org/${item.icon}/white`}
                                    alt={item.name}
                                    className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                                />
                                <span className="text-sm pr-4 group-hover:text-white transition-colors">{item.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export function TechStackCarousel() {
    const t = useTranslations("TechStackCarousel");

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    {t("titlePrefix")} <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">{t("titleSuffix")}</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t("description")}
                </p>
            </div>

            <div className="space-y-2 relative z-10">
                <TechRow items={iaTech} speed={40} />
                <TechRow items={cloudTech} speed={35} reverse />
                <TechRow items={frontendTech} speed={30} />
            </div>
        </section>
    );
}
