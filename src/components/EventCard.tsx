"use client";

import { MapPin, Calendar, Clock, Map } from "lucide-react";
import { useInViewOnce } from "./useInViewOnce";

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    venueName: string;
    address: string;
    googleMapsUrl?: string;
    icon?: React.ReactNode;
    accentColor?: "purple" | "marigold";
}

export const EventCard = ({
    title,
    date,
    time,
    venueName,
    address,
    googleMapsUrl,
    icon,
    accentColor = "purple",
}: EventCardProps) => {
    const { elementRef, isInView } = useInViewOnce({ rootMargin: "-20% 0px", threshold: 0.1 });
    const theme = {
        purple: {
            primary: "text-[#4A235A]",
            bg: "bg-[#4A235A]",
            border: "border-[#4A235A]/20",
        },
        marigold: {
            primary: "text-[#D4AF37]",
            bg: "bg-[#D4AF37]",
            border: "border-[#D4AF37]/20",
        }
    }[accentColor];

    return (
        <div
            ref={elementRef}
            className={`w-full flex flex-col items-center transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
            <div className={`w-full max-w-[360px] rounded-[36px] border ${theme.border} bg-white px-6 pb-12 pt-12`}>
                <div className="flex justify-center">
                    <div className="relative h-[240px] w-[240px]">
                        <div className="absolute inset-0 rounded-[44px] border border-gold/25 bg-[#F7F3E8]" />
                        <div className="absolute inset-0 p-6 relative">{icon}</div>
                    </div>
                </div>

                {/* Information Hierarchy */}
                <div className="mt-8 text-center space-y-8">
                    <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#4A235A]/50 font-sans font-semibold">
                            Celebration
                        </p>
                        <h2 className={`text-3xl font-serif ${theme.primary} leading-tight`}>
                            {title}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Stacked Info Blocks */}
                        <div className="flex items-center justify-center gap-4">
                            <Calendar className="text-gold" size={18} />
                            <p className="text-xl font-serif text-charcoal">{date}</p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <Clock className="text-gold" size={18} />
                            <p className="text-sm font-sans uppercase tracking-[0.2em] text-charcoal/70">{time}</p>
                        </div>

                        <div className="flex items-center justify-center gap-4 items-start">
                            <MapPin className="text-gold mt-1 shrink-0" size={18} />
                            <div className="space-y-0.5">
                                <p className="text-xl font-serif text-charcoal">{venueName}</p>
                                <p className="text-sm font-sans text-charcoal/50 leading-relaxed px-4">{address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#3D2B52] text-white px-8 py-3.5 rounded-full font-serif italic text-lg border border-white/10 active:scale-95 transition-transform duration-200"
                        >
                            <Map size={18} />
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
