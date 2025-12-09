"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Users,
    Smartphone,
    Globe,
    Server,
    Database,
    Shield,
    HardDrive,
    Cpu
} from "lucide-react";

export function CloudArchitecture() {
    const t = useTranslations("CloudArchitecture");

    const Node = ({ icon: Icon, label, color = "blue", subLabel = "", delay = 0 }: { icon: any, label: string, color?: string, subLabel?: string, delay?: number }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center z-10 relative group"
        >
            {/* Pulsing Background Layer */}
            <motion.div
                animate={{
                    boxShadow: [
                        `0 0 0 0px rgba(var(--${color}-500), 0)`,
                        `0 0 0 10px rgba(var(--${color}-500), 0.1)`,
                        `0 0 0 20px rgba(var(--${color}-500), 0)`
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: delay + 1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-2xl -z-10"
            />

            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-${color}-400/30 to-${color}-600/30 border border-${color}-400/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(var(--${color}-500),0.3)] group-hover:shadow-[0_0_40px_rgba(var(--${color}-500),0.6)] group-hover:border-${color}-300 transition-all duration-300 cursor-pointer`}
            >
                <Icon className={`w-8 h-8 md:w-10 md:h-10 text-foreground dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-colors`} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.2 }}
                className="mt-4 flex flex-col items-center"
            >
                <span className="text-sm md:text-base font-bold text-foreground bg-card/80 px-4 py-1.5 rounded-full border border-border/50 backdrop-blur-sm whitespace-nowrap shadow-lg group-hover:border-border transition-colors">
                    {label}
                </span>
                {subLabel && (
                    <span className="text-xs text-muted-foreground mt-1.5 font-medium tracking-wide">{subLabel}</span>
                )}
            </motion.div>
        </motion.div>
    );

    // Straight Connection
    const ConnectionLine = ({ delay = 0, duration = 2 }: { delay?: number, duration?: number }) => (
        <div className="hidden md:flex flex-1 h-[2px] bg-border/50 relative mx-2 self-center rounded-full overflow-hidden min-w-[50px]">
            <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear", delay }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
            />
        </div>
    );

    // Splitter: Single -> Dual
    const Splitter = ({ delay = 0 }: { delay?: number }) => (
        <div className="hidden md:flex flex-col justify-center items-center w-24 mx-2 relative h-36">
            {/* Horizontal Entry (Center) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-border/50">
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
                />
            </div>

            {/* Vertical Split Line (Spans exactly the distance between node centers: 144px) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-border/50">
                <motion.div
                    animate={{ y: ["-100%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay + 0.5 }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
                />
            </div>

            {/* Horizontal Exits (Top & Bottom) */}
            <div className="absolute right-0 top-0 w-1/2 h-[2px] bg-border/50" />
            <div className="absolute right-0 bottom-0 w-1/2 h-[2px] bg-border/50" />
        </div>
    );

    // Merger: Dual -> Single
    const Merger = ({ delay = 0 }: { delay?: number }) => (
        <div className="hidden md:flex flex-col justify-center items-center w-24 mx-2 relative h-36">
            {/* Horizontal Entries (Top & Bottom) */}
            <div className="absolute left-0 top-0 w-1/2 h-[2px] bg-border/50" />
            <div className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-border/50" />

            {/* Vertical Merge Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-border/50">
                <motion.div
                    animate={{ y: ["-100%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay + 0.5 }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
                />
            </div>

            {/* Horizontal Exit (Center) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-border/50">
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay + 1 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
                />
            </div>
        </div>
    );

    // Vertical Connection for Mobile
    const VerticalConnection = ({ delay = 0 }: { delay?: number }) => (
        <div className="md:hidden flex flex-col items-center h-16 w-full relative">
            <div className="w-[2px] h-full bg-border/50 relative overflow-hidden">
                <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
                />
            </div>
        </div>
    );

    return (
        <section id="cloud-architecture" className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-40" />

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Diagram Container */}
                <div className="w-full overflow-x-auto scrollbar-hide">
                    <div className="flex flex-col md:flex-row md:min-w-[1000px] justify-between items-center gap-2 px-4 md:px-8 pt-4 md:pt-40 pb-12">

                        {/* 1. Users */}
                        <div className="flex flex-col justify-center w-full md:w-auto">
                            <Node icon={Users} label={t("nodes.users")} color="cyan" delay={0} />
                        </div>

                        <Splitter delay={0} />
                        <VerticalConnection delay={0} />

                        {/* 2. Clients (Web & Mobile) */}
                        <div className="flex flex-row md:flex-col justify-center gap-8 md:gap-16 w-full md:w-auto">
                            <Node icon={Globe} label={t("nodes.web")} color="purple" delay={0.2} />
                            <Node icon={Smartphone} label={t("nodes.mobile")} color="purple" delay={0.3} />
                        </div>

                        <Merger delay={0.5} />
                        <VerticalConnection delay={0.5} />

                        {/* 3. Gateway & Auth */}
                        <div className="flex flex-col justify-center gap-8 md:gap-16 relative w-full md:w-auto mt-4 md:mt-0">
                            {/* Auth floats above Gateway on Desktop, sits above on Mobile */}
                            <div className="relative md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full md:mb-4 flex flex-col items-center">
                                <Node icon={Shield} label={t("nodes.auth")} color="red" delay={0.4} />
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 32 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="hidden md:block w-0.5 bg-gradient-to-b from-red-500/50 to-indigo-500/50 mx-auto mt-2"
                                />
                                <div className="md:hidden h-8 w-0.5 bg-gradient-to-b from-red-500/50 to-indigo-500/50 mx-auto" />
                            </div>

                            <Node icon={Server} label={t("nodes.gateway")} color="indigo" subLabel="API Gateway" delay={0.5} />
                        </div>

                        <ConnectionLine delay={1.0} duration={2} />
                        <VerticalConnection delay={1.0} />

                        {/* 4. Compute */}
                        <div className="flex flex-col justify-center w-full md:w-auto">
                            <Node icon={Cpu} label={t("nodes.compute")} color="blue" subLabel="Lambda / Fargate" delay={0.6} />
                        </div>

                        <Splitter delay={1.5} />
                        <VerticalConnection delay={1.5} />

                        {/* 5. Data */}
                        <div className="flex flex-row md:flex-col justify-center gap-8 md:gap-16 w-full md:w-auto">
                            <Node icon={Database} label={t("nodes.database")} color="emerald" delay={0.7} />
                            <Node icon={HardDrive} label={t("nodes.storage")} color="amber" delay={0.8} />
                        </div>

                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        {t("diagram_note")}
                    </p>
                </div>
            </div>
        </section>
    );
}
