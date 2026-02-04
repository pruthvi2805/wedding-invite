"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Petal {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
}

interface PetalAnimationProps {
    isStarted?: boolean;
}

export const PetalAnimation = ({ isStarted = true }: PetalAnimationProps) => {
    const [petals, setPetals] = useState<Petal[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect: Petals float slightly faster/slower than scroll
    const yRange = useTransform(scrollY, [0, 2000], [0, 400]);

    useEffect(() => {
        const petalCount = 31;
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 15 + Math.random() * 10,
            size: 10 + Math.random() * 20, // Slightly smaller range
            rotation: Math.random() * 360,
        }));
        setPetals(newPetals);
    }, []);

    if (!isStarted) return null;

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }} // Sync with Hero fade
            style={{ y: yRange }}
            className="absolute inset-0 pointer-events-none overflow-hidden z-[5]"
        >
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{
                        top: "-10%",
                        left: `${petal.x}%`,
                        opacity: 0,
                        rotate: petal.rotation
                    }}
                    animate={{
                        top: "110%",
                        left: `${petal.x + (Math.random() * 10 - 5)}%`,
                        opacity: [0, 0.6, 0.6, 0], // Lower max opacity near text
                        rotate: petal.rotation + 360
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear"
                    }}
                    className="absolute"
                    style={{ width: petal.size, height: petal.size }}
                >
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-sm"
                    >
                        <path
                            d="M50 0C65 25 90 40 90 65C90 85 75 100 50 100C25 100 10 85 10 65C10 40 35 25 50 0Z"
                            fill={petal.id % 2 === 0 ? "#FFAD33" : "#D4AF37"}
                            fillOpacity="0.8"
                        />
                    </svg>
                </motion.div>
            ))}
        </motion.div>
    );
};
