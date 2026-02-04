"use client";

import { useEffect, useState, type CSSProperties } from "react";

interface Petal {
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
}

export const PetalAnimation = ({ isStarted = true }: { isStarted?: boolean }) => {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        // Limit to 20 petals for performance as per requirements
        const petalCount = 20;
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: 12 + Math.random() * 8,
            size: 12 + Math.random() * 18,
            rotation: Math.random() * 360,
        }));
        setPetals(newPetals);
    }, []);

    if (!isStarted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute animate-petal will-change-transform"
                    style={{
                        left: `${petal.left}%`,
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                        opacity: 0,
                        "--petal-rotate": `${petal.rotation}deg`,
                    } as CSSProperties}
                >
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <path
                            d="M50 0C65 25 90 40 90 65C90 85 75 100 50 100C25 100 10 85 10 65C10 40 35 25 50 0Z"
                            fill={petal.id % 2 === 0 ? "#FFAD33" : "#D4AF37"}
                            fillOpacity="0.7"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
};
