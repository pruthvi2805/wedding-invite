"use client";

import { motion } from "framer-motion";

export const Mandala = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Outer Kolam Layer - Slow Rotation */}
                <div className="absolute w-[180vw] h-[180vw] max-w-[1600px] max-h-[1600px] animate-spin-slow kolam-glow opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 500 500">
                        <circle cx="250" cy="250" r="245" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeDasharray="4 12" />
                        {[...Array(24)].map((_, i) => (
                            <path
                                key={i}
                                d="M250 10C265 40 235 40 250 70"
                                stroke="#D4AF37"
                                strokeWidth="0.8"
                                fill="none"
                                transform={`rotate(${i * 15} 250 250)`}
                            />
                        ))}
                    </svg>
                </div>

                {/* Middle Kolam Layer - Medium Reverse Rotation */}
                <div className="absolute w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] animate-spin-reverse-medium kolam-glow opacity-40">
                    <svg width="100%" height="100%" viewBox="0 0 400 400">
                        {[...Array(12)].map((_, i) => (
                            <path
                                key={i}
                                d="M200 80Q250 20 300 80Q250 140 200 80"
                                stroke="#D4AF37"
                                strokeWidth="0.6"
                                fill="none"
                                transform={`rotate(${i * 30} 200 200)`}
                            />
                        ))}
                        <circle cx="200" cy="200" r="120" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeDasharray="2 6" />
                    </svg>
                </div>

                {/* Inner Kolam Layer - Faster Rotation */}
                <div className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] animate-spin-fast kolam-glow opacity-50">
                    <svg width="100%" height="100%" viewBox="0 0 200 200">
                        {[...Array(8)].map((_, i) => (
                            <path
                                key={i}
                                d="M100 60C115 85 140 100 165 100C140 100 115 115 100 140C85 115 60 100 35 100C60 100 85 85 100 60Z"
                                stroke="#D4AF37"
                                strokeWidth="1"
                                fill="none"
                                transform={`rotate(${i * 45} 100 100) scale(0.6)`}
                                style={{ transformOrigin: 'center' }}
                            />
                        ))}
                        <circle cx="100" cy="100" r="30" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>

            </div>
        </div>
    );
};
