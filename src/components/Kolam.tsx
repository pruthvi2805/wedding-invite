"use client";

import { motion } from "framer-motion";

export const Kolam = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <motion.svg
                width="600"
                height="600"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px]"
            >
                {/* Central Lotus Pattern */}
                <motion.path
                    d="M200 150C210 170 230 180 250 180C230 180 210 190 200 210C190 190 170 180 150 180C170 180 190 170 200 150Z"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Outer Circular Patterns */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1, rotate: 360 }}
                    transition={{
                        pathLength: { duration: 3, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                />

                {/* Geometric Interlocking Squares */}
                <motion.path
                    d="M200 50L350 200L200 350L50 200Z"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.path
                    d="M100 100L300 100L300 300L100 300Z"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
                />

                {/* Corner Accents */}
                {[45, 135, 225, 315].map((angle, i) => (
                    <motion.path
                        key={angle}
                        d="M200 200L280 280"
                        stroke="#D4AF37"
                        strokeWidth="1"
                        style={{ originX: "200px", originY: "200px", rotate: angle }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 + (i * 0.2) }}
                    />
                ))}
            </motion.svg>
        </div>
    );
};
