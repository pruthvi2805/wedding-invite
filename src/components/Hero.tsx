"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PetalAnimation } from "./PetalAnimation";
import { GoldDust } from "./GoldDust";

interface HeroProps {
    groomName?: string;
    brideName?: string;
}

export const Hero = ({
    groomName = "Pruthvi",
    brideName = "Akruthi",
    startDelay = 100,
}: HeroProps & { startDelay?: number }) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [startHero, setStartHero] = useState(false);
    const [startPetals, setStartPetals] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(true);
    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const target = heroRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio < 0.9) {
                    setHasScrolled(true);
                }
            },
            { threshold: [0.9] }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const heroTimer = setTimeout(() => setStartHero(true), startDelay);
        const petalTimer = setTimeout(() => setStartPetals(true), startDelay + 700);
        return () => {
            clearTimeout(heroTimer);
            clearTimeout(petalTimer);
        };
    }, [startDelay]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollHint(false);
            } else {
                setShowScrollHint(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            className="h-screen min-h-[100dvh] w-full bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center flex-none"
        >
            <div className="absolute inset-0 z-0 bg-[#3D2B52] bg-noise animate-hero-bg opacity-100" />

            <PetalAnimation isStarted={startPetals} />
            <GoldDust />

            <div className={`relative z-10 flex flex-col items-center text-center px-6 w-full justify-center transition-opacity duration-1000 ${startHero ? "opacity-100" : "opacity-0"}`}>


                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block font-sans">
                    We cordially invite you
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-gold/80 font-sans delay-200 duration-700 transition-all">
                    to celebrate the wedding of
                </span>

                <div className="flex flex-col items-center gap-1 mb-5 mt-5 animate-hero-fade" style={{ animationDelay: "0.4s" }}>
                    <h1
                        className="text-[4rem] leading-[0.85] font-serif font-bold text-gradient-gold tracking-tighter"
                    >
                        {groomName}
                    </h1>

                    <div className="py-0.5">
                        <span className="text-2xl font-serif text-[#D4AF37] italic opacity-80">
                            &
                        </span>
                    </div>

                    <h1
                        className="text-[4rem] leading-[0.85] font-serif font-bold text-gradient-gold tracking-tighter"
                    >
                        {brideName}
                    </h1>
                </div>



                <div className="pt-6 border-t border-white/5 w-full max-w-[220px] delay-700 duration-700 transition-opacity">
                    <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/50 leading-relaxed">
                        Thursday, 12 March 2026
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${showScrollHint ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-sans">
                        Scroll
                    </span>
                    <ChevronDown className="text-gold/60" size={20} />
                </div>
            </div>
        </section>
    );
};
