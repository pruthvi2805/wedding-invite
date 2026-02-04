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

    // Sequencing: Fluid Unfolding
    useEffect(() => {
        // Hero starts emerging while intro is still fading
        const heroTimer = setTimeout(() => setStartHero(true), 1800);
        // Petals start drifting as the names begin to unfold
        const petalTimer = setTimeout(() => setStartPetals(true), 3000);
        return () => {
            clearTimeout(heroTimer);
            clearTimeout(petalTimer);
        };
    }, []);

    // Animation Variants for "Fluid Unfolding"
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 15,
            scale: 0.98,
            filter: "blur(10px)"
        },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                delay,
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1] // Organic easeOutQuint
            }
        })
    };

    return (
        <section className="min-h-[100dvh] w-screen bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
            />

            {/* Intro Screen - Contemplative Blur Exit */}
            <AnimatePresence>
                {!startHero && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D2B52] px-6 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed tracking-wide"
                        >
                            Two families. Two traditions.<br />One beginning.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Marigold Petals - Drifting with the reveal */}
            <PetalAnimation isStarted={startPetals} />

            {/* Content Wrapper - Precision Hierarchy */}
            <AnimatePresence>
                {startHero && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-lg justify-center py-20"
                    >

                        {/* 1. Small Text: You're invited */}
                        <motion.span
                            custom={0}
                            variants={itemVariants}
                            className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block font-sans"
                        >
                            You&apos;re invited
                        </motion.span>

                        {/* 2. Huge: Names - Staggered Unfolding */}
                        <div className="flex flex-col items-center gap-1 mb-6">
                            <motion.h1
                                custom={0.6}
                                variants={itemVariants}
                                className="text-[4.8rem] leading-[0.85] font-serif font-bold text-white tracking-tighter text-shadow-lg"
                            >
                                {groomName}
                            </motion.h1>

                            <motion.div
                                custom={1.1}
                                variants={itemVariants}
                                className="py-1"
                            >
                                <span className="text-3xl font-serif text-[#D4AF37] italic opacity-80">
                                    &
                                </span>
                            </motion.div>

                            <motion.h1
                                custom={1.6}
                                variants={itemVariants}
                                className="text-[4.8rem] leading-[0.85] font-serif font-bold text-white tracking-tighter text-shadow-lg"
                            >
                                {brideName}
                            </motion.h1>
                        </div>

                        {/* 3. Medium: are getting married */}
                        <motion.p
                            custom={2.2}
                            variants={itemVariants}
                            className="text-2xl font-serif italic text-white/80 mb-6"
                        >
                            are getting married
                        </motion.p>

                        {/* 4. Small: Date + City */}
                        <motion.div
                            custom={2.8}
                            variants={itemVariants}
                            className="pt-6 border-t border-white/5 w-full max-w-[280px]"
                        >
                            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-white/50 leading-relaxed">
                                Thursday, 12 March 2026 <br />
                                Jagityala, Telangana
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
                        transition={{ delay: 5, duration: 2 }}
                        className="absolute bottom-12 flex flex-col items-center gap-1 text-white/20 cursor-pointer"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span className="text-[9px] uppercase tracking-[0.6em] font-sans">Scroll</span>
                        <ChevronDown size={14} strokeWidth={1} className="animate-bounce" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
