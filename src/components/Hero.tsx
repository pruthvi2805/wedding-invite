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
        // Hero starts emerging while intro is still fading
        const heroTimer = setTimeout(() => setStartHero(true), 1800);
        // Petals start fading in gently
        const petalTimer = setTimeout(() => setStartPetals(true), 2200);
        return () => {
            clearTimeout(heroTimer);
            clearTimeout(petalTimer);
        };
    }, []);

    // Simple container fade only - NO movement
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    return (
        <section className="h-[100dvh] w-full bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center">
            {/* 
                BACKGROUND LAYER: 
                Positioned absolute inset-0 so it covers the entire section 
                and stays consistent whether the intro or hero is visible.
            */}
            <div className="absolute inset-0 z-0 bg-[#3D2B52]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
                />
            </div>

            {/* Intro Screen - Clean Fade Exit */}
            <AnimatePresence mode="wait">
                {!startHero && (
                    <motion.div
                        key="intro-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 z-50 flex items-center justify-center px-6 text-center"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl font-serif italic text-white/90 leading-relaxed tracking-wide"
                        >
                            Two families. Two traditions.<br />One beginning.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Marigold Petals (Optimized) */}
            <PetalAnimation isStarted={startPetals} />

            {/* Content Wrapper - MOBILE ONLY */}
            <AnimatePresence>
                {startHero && (
                    <motion.div
                        key="hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 flex flex-col items-center text-center px-6 w-full justify-center pb-32"
                    >

                        {/* 1. Small Text: You're invited */}
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block font-sans">
                            You&apos;re invited
                        </span>

                        {/* 2. Huge: Names */}
                        <div className="flex flex-col items-center gap-1 mb-6">
                            <h1 className="text-[4.2rem] leading-[0.85] font-serif font-bold text-white tracking-tighter text-shadow-lg">
                                {groomName}
                            </h1>

                            <div className="py-1">
                                <span className="text-3xl font-serif text-[#D4AF37] italic opacity-80">
                                    &
                                </span>
                            </div>

                            <h1 className="text-[4.2rem] leading-[0.85] font-serif font-bold text-white tracking-tighter text-shadow-lg">
                                {brideName}
                            </h1>
                        </div>

                        {/* 3. Medium: are getting married */}
                        <p className="text-2xl font-serif italic text-white/80 mb-6 font-medium">
                            are getting married
                        </p>

                        {/* 4. Small: Date + City */}
                        <div className="pt-6 border-t border-white/5 w-full max-w-[240px]">
                            <p className="text-[11px] font-sans tracking-[0.3em] uppercase text-white/50 leading-relaxed">
                                Thursday, 12 March 2026 <br />
                                Jagityala, Telangana
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Transition - SVG Curve */}
            <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
                    <path
                        fill="#F7F3E8"
                        fillOpacity="1"
                        d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Subtle Scroll Hint */}
            <AnimatePresence>
                {!hasScrolled && startHero && (
                    <motion.div
                        key="scroll-hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-24 flex flex-col items-center gap-1 text-white/20 z-30"
                    >
                        <span className="text-[9px] uppercase tracking-[0.6em] font-sans">Scroll To Reveal</span>
                        <ChevronDown size={14} strokeWidth={1} className="animate-bounce" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
