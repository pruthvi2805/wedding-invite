"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PetalAnimation } from "./PetalAnimation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    groomName?: string;
    brideName?: string;
}

export const Hero = ({
    groomName = "Pruthvi",
    brideName = "Akruthi",
}: HeroProps) => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="min-h-screen w-screen bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
            />

            <AnimatePresence mode="wait">
                {showIntro ? (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="relative z-20 text-center px-6"
                    >
                        <p className="text-ceremonial-quote">
                            Two families. Two traditions. One beginning.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="hero"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full h-full flex flex-col items-center justify-center"
                    >
                        {/* Floating Marigold Petals - Starts only after intro */}
                        <PetalAnimation />

                        {/* Content Wrapper */}
                        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[85vh] justify-center py-20">

                            {/* Welcoming Context */}
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="text-nav-label mb-2"
                            >
                                You&apos;re invited to celebrate
                            </motion.span>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.9, y: 0 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="text-white text-lg md:text-xl font-serif italic mb-8"
                            >
                                {groomName} & {brideName} are getting married
                            </motion.p>

                            {/* Names Section */}
                            <div className="flex flex-col items-center gap-2 md:gap-4 mb-10">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className="text-hero-names text-shadow-lg"
                                >
                                    {groomName}
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, rotate: -45 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                >
                                    <span className="text-4xl md:text-6xl font-serif text-[#D4AF37]">
                                        &
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 2, delay: 0.8 }}
                                    className="text-hero-names text-shadow-lg"
                                >
                                    {brideName}
                                </motion.h1>
                            </div>

                            {/* Grounding Date */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="pt-4 border-t border-white/10"
                            >
                                <p className="text-white/80 text-lg md:text-xl font-serif tracking-widest">
                                    Thursday, 12 March 2026
                                </p>
                            </motion.div>
                        </div>

                        {/* Scroll Affordance */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 1 }}
                            className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40 cursor-pointer animate-pulse-subtle"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <span className="text-xs uppercase tracking-[0.3em]">Scroll Down</span>
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
