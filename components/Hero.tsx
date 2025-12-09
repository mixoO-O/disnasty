"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Network, Cpu } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { ContactModal } from "@/components/ContactModal";
import { useTranslations } from 'next-intl';
import { frontendTech, iaTech, cloudTech } from "@/constants/techStack";

export function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const t = useTranslations('Hero');
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const suffixes = useMemo(() => [
        t('titleSuffixes.0'),
        t('titleSuffixes.1'),
        t('titleSuffixes.2'),
        t('titleSuffixes.3'),
        t('titleSuffixes.4'),
        t('titleSuffixes.5')
    ], [t]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const i = loopNum % suffixes.length;
        const fullText = suffixes[i];

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            }, typingSpeed);
        } else {
            if (text === fullText) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(50);
                }, 2000);
            } else {
                timer = setTimeout(() => {
                    setText(fullText.substring(0, text.length + 1));
                    setTypingSpeed(150);
                }, typingSpeed);
            }
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, suffixes, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Animation */}

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

            {/* Tech Stack Crossed/Angled Display */}


            {/* Random Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
                <FloatingIcons />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl text-foreground md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        {t('titlePrefix')} <br />
                        <span className="block min-h-[1.2em]">
                            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                                {text}
                                <span className="animate-pulse text-purple-400">|</span>
                            </span>
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>

                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="relative px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25 overflow-hidden group bg-black"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent bg-[length:200%_200%] animate-gradient opacity-100" />
                        <span className="relative z-10">{t('cta')}</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

function FloatingIcons() {
    const allTech = [...frontendTech, ...iaTech, ...cloudTech];
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {allTech.map((tech, i) => (
                <FloatingIcon key={i} icon={tech.icon} index={i} />
            ))}
        </>
    );
}

function FloatingIcon({ icon, index }: { icon: string; index: number }) {
    const animationProps = useMemo(() => {
        // Randomize start position (from any side)
        const randomSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left

        let initialX = Math.random() * 100;
        let initialY = Math.random() * 100;

        // Force start from outside
        if (randomSide === 0) initialY = -20;
        else if (randomSide === 1) initialX = 120;
        else if (randomSide === 2) initialY = 120;
        else if (randomSide === 3) initialX = -20;

        const duration = 15 + Math.random() * 20; // 15-35s duration
        const delay = Math.random() * 5;

        // Randomize path points
        const xPoints = [
            `${initialX}vw`,
            `${Math.random() * 100}vw`,
            `${Math.random() * 100}vw`,
            `${Math.random() * 100}vw`
        ];

        const yPoints = [
            `${initialY}vh`,
            `${Math.random() * 100}vh`,
            `${Math.random() * 100}vh`,
            `${Math.random() * 100}vh`
        ];

        return {
            initial: { x: `${initialX}vw`, y: `${initialY}vh`, opacity: 0 },
            animate: {
                x: xPoints,
                y: yPoints,
                opacity: [0, 0.4, 0.4, 0],
                rotate: [0, 360]
            },
            transition: {
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
                times: [0, 0.3, 0.7, 1]
            }
        };
    }, []); // Empty dependency array ensures this only runs once per component instance

    return (
        <motion.div
            initial={animationProps.initial}
            animate={animationProps.animate}
            transition={animationProps.transition}
            className="absolute w-12 h-12 md:w-16 md:h-16"
        >
            <img
                src={`https://cdn.simpleicons.org/${icon}`}
                alt="tech icon"
                className="w-full h-full grayscale opacity-30 dark:invert"
            />
        </motion.div>
    );
}
