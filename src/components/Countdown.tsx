"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const Countdown = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const target = new Date(targetDate).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        // Initial calc
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num: number) => num.toString().padStart(2, "0");

    if (!isClient) return null; // Avoid hydration mismatch

    return (
        <section className="w-full py-20 px-6 text-center bg-[#F7F3E8] border-t border-b border-[#4A235A]/5">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-14 font-sans text-[#4A235A]/60 font-semibold">
                The Celebration Begins In
            </p>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-24">
                <TimeUnit value={formatNumber(timeLeft.days)} label="Days" />
                <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
                <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
                <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" />
            </div>
        </section>
    );
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-5xl md:text-7xl font-serif text-[#4A235A] leading-none font-light">
            {value}
        </span>
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase mt-3 font-sans text-[#4A235A]/40 font-medium">
            {label}
        </span>
    </div>
);
