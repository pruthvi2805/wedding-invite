"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
    const { scrollY } = useScroll();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [startHero, setStartHero] = useState(false);
    const [startPetals, setStartPetals] = useState(false);

    // Hide scroll hint permanently once user scrolls
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 50) setHasScrolled(true);
        });
    }, [scrollY]);

    // Sequencing: Intro -> Hero -> Petals
    useEffect(() => {
        const heroTimer = setTimeout(() => setStartHero(true), 2500);
        const petalTimer = setTimeout(() => setStartPetals(true), 4000); // Start during name reveal
        return () => {
            clearTimeout(heroTimer);
            clearTimeout(petalTimer);
        };
    }, []);

    return (
        <section className="min-h-[100dvh] w-screen bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
            />

            {/* Intro Screen */}
            <AnimatePresence>
                {!startHero && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D2B52] px-6 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed"
                        >
                            Two families. Two traditions.<br />One beginning.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Marigold Petals - Delayed Start */}
            <PetalAnimation isStarted={startPetals} />

            {/* Content Wrapper - Precision Hierarchy */}
            <AnimatePresence>
                {startHero && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-lg justify-center py-20"
                    >

                        {/* 1. Small Text: You're invited */}
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.6, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xs font-sans tracking-[0.4em] uppercase text-gold mb-4"
                        >
                            You&apos;re invited
                        </motion.span>

                        {/* 2. Huge: Names */}
                        <div className="flex flex-col items-center gap-2 mb-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.8 }}
                                className="text-[4.5rem] leading-[0.9] font-serif font-bold text-white tracking-tight text-shadow-lg"
                            >
                                {groomName}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                            >
                                <span className="text-3xl font-serif text-[#D4AF37] italic">
                                    &
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 2.2 }}
                                className="text-[4.5rem] leading-[0.9] font-serif font-bold text-white tracking-tight text-shadow-lg"
                            >
                                {brideName}
                            </motion.h1>
                        </div>

                        {/* 3. Medium: are getting married */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ delay: 3.0, duration: 1 }}
                            className="text-2xl font-serif italic text-white/90 mb-4"
                        >
                            are getting married
                        </motion.p>

                        {/* 4. Small: Date + City */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 3.6, duration: 1 }}
                            className="pt-4 border-t border-white/10"
                        >
                            <p className="text-sm font-sans tracking-widest text-white/80">
                                Thursday, 12 March 2026 • Jagityala, Telangana
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Scroll Hint - Hides permanently on scroll */}
            <AnimatePresence>
                {!hasScrolled && startHero && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 4.5, duration: 1 }}
                        className="absolute bottom-12 flex flex-col items-center gap-1 text-white/30 cursor-pointer animate-pulse-subtle"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] font-sans">Scroll</span>
                        <ChevronDown size={14} strokeWidth={1} />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
