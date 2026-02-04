"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PetalAnimation } from "./PetalAnimation";

interface HeroProps {
    groomName?: string;
    brideName?: string;
}

export const Hero = ({
    groomName = "Pruthvi",
    brideName = "Akruthi",
}: HeroProps) => {
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
        const heroTimer = setTimeout(() => setStartHero(true), 300);
        const petalTimer = setTimeout(() => setStartPetals(true), 1600);
        return () => {
            clearTimeout(heroTimer);
            clearTimeout(petalTimer);
        };
    }, []);

    useEffect(() => {
        if (!startHero) return;
        const hintTimer = setTimeout(() => setShowScrollHint(false), 3000);
        return () => clearTimeout(hintTimer);
    }, [startHero]);

    useEffect(() => {
        if (!startHero) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const downTimer = setTimeout(() => {
            window.scrollTo({ top: 50, behavior: "smooth" });
        }, 1400);
        const upTimer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 2100);

        return () => {
            clearTimeout(downTimer);
            clearTimeout(upTimer);
        };
    }, [startHero]);

    return (
        <section
            ref={heroRef}
            className="h-[100svh] min-h-[100svh] w-full bg-[#3D2B52] relative overflow-hidden flex flex-col items-center justify-center flex-none pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        >
            <div className="absolute inset-0 z-0 bg-[#3D2B52] animate-hero-bg opacity-0" />

            <PetalAnimation isStarted={startPetals} />

            <div className={`relative z-10 flex flex-col items-center text-center px-6 w-full justify-center transition-opacity duration-700 ${startHero ? "opacity-100" : "opacity-0"}`}>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block font-sans">
                    You&apos;re invited
                </span>
                <span className={`text-xs uppercase tracking-[0.35em] text-gold/80 font-sans ${startHero ? "animate-hero-fade" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
                    To the wedding ceremony
                </span>

                <div className="flex flex-col items-center gap-1 mb-5 mt-5">
                    <h1
                        className={`text-[4rem] leading-[0.85] font-serif font-bold text-white tracking-tighter ${startHero ? "animate-hero-name" : "opacity-0"}`}
                        style={{ animationDelay: "0.3s" }}
                    >
                        {groomName}
                    </h1>

                    <div className={`py-0.5 ${startHero ? "animate-hero-fade" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
                        <span className="text-2xl font-serif text-[#D4AF37] italic opacity-80">
                            &
                        </span>
                    </div>

                    <h1
                        className={`text-[4rem] leading-[0.85] font-serif font-bold text-white tracking-tighter ${startHero ? "animate-hero-name" : "opacity-0"}`}
                        style={{ animationDelay: "0.8s" }}
                    >
                        {brideName}
                    </h1>
                </div>

                <p className={`text-xl font-serif italic text-white/80 mb-6 ${startHero ? "animate-hero-fade" : "opacity-0"}`} style={{ animationDelay: "1.1s" }}>
                    are getting married
                </p>

                <div className={`pt-6 border-t border-white/5 w-full max-w-[220px] ${startHero ? "animate-hero-fade" : "opacity-0"}`} style={{ animationDelay: "1.3s" }}>
                    <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/50 leading-relaxed">
                        Thursday, 12 March 2026 <br />
                        Jagityala, Telangana
                    </p>
                </div>
            </div>

            {!hasScrolled && startHero && showScrollHint && (
                <div className="absolute bottom-10 flex flex-col items-center gap-1 text-white/20 z-30 animate-hero-fade" style={{ animationDelay: "1.6s" }}>
                    <span className="text-[8px] uppercase tracking-[0.6em] font-sans">Reveal Invitation</span>
                    <ChevronDown size={12} strokeWidth={1} className="animate-bounce" />
                </div>
            )}
        </section>
    );
};
