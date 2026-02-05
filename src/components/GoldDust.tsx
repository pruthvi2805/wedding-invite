"use client";

import { useEffect, useState } from "react";

interface Particle {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
}

export const GoldDust = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate static random particles on mount to avoid hydration mismatch
        const newParticles = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 4 + 2, // 2px to 6px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * -20, // Negative delay to start mid-animation
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute bg-[#D4AF37] rounded-full opacity-0 animate-float-dust blur-[1px]"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
