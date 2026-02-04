"use client";

import { motion } from "framer-motion";
import { PetalAnimation } from "./PetalAnimation";

interface HeroProps {
    groomName?: string;
    brideName?: string;
    groomParents?: string;
    brideParents?: string;
}

export const Hero = ({
    groomName = "Pruthvi",
    brideName = "Akruthi",
    groomParents = "Mr. Shiv Kumar & Mrs. Rakhi Kauticwar",
    brideParents = "Mr. Shravan Kumar & Mrs. Padmaja Ananthula",
}: HeroProps) => {
    return (
        <section className="min-h-screen w-screen bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Texture Layer */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
            />

            {/* Floating Marigold Petals */}
            <PetalAnimation />

            {/* Content Wrapper - Better desktop balance */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full h-full max-h-[85vh] justify-center py-20">

                {/* Names Section - Slightly tighter for desktop */}
                <div className="flex flex-col items-center gap-2 md:gap-4 mb-8 md:mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="text-7xl md:text-9xl font-serif font-bold text-white leading-none tracking-tight"
                    >
                        {groomName}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <span className="text-4xl md:text-6xl font-serif text-[#D4AF37]">
                            &
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="text-7xl md:text-9xl font-serif font-bold text-white leading-none tracking-tight"
                    >
                        {brideName}
                    </motion.h1>
                </div>

                {/* Parents Section - Balanced gaps */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2 }}
                    className="flex flex-col items-center gap-2 mb-6 md:mb-8"
                >
                    <span className="text-xs font-sans tracking-widest uppercase text-[#D4AF37] opacity-60 mb-1">
                        Families of
                    </span>
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                        <p className="text-white text-sm md:text-base font-light tracking-widest text-shadow-sm">
                            {groomParents}
                        </p>
                        <span className="text-[#D4AF37] font-bold">×</span>
                        <p className="text-white text-sm md:text-base font-light tracking-widest text-shadow-sm">
                            {brideParents}
                        </p>
                    </div>
                </motion.div>

                {/* Tagline - 2rem from parents */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 2, delay: 3 }}
                    className="max-w-2xl mt-2 md:mt-4"
                >
                    <p className="text-lg md:text-2xl font-serif italic tracking-wide leading-relaxed text-white">
                        Two families, two traditions, one celebration of love.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
