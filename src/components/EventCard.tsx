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
            className={`w-full flex flex-col items-center transition-transform duration-700 ease-out ${isInView ? "translate-y-0" : "translate-y-12"}`}
        >
            <div className={`w-full max-w-[340px] rounded-[36px] border ${theme.border} bg-white px-6 pb-10 pt-12`}>
                {/* Title Section - Now at Top */}
                <div className="text-center space-y-2 mb-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#4A235A]/50 font-sans font-semibold">
                        Join us for
                    </p>
                    <h2 className={`text-4xl font-serif ${theme.primary} leading-tight`}>
                        {title}
                    </h2>
                </div>

                {/* Image Section - Middle */}
                <div className="flex justify-center mb-8">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-[6px] border-[#D4AF37]/20 shadow-sm">
                        <div className="absolute inset-0 flex items-center justify-center bg-white">
                            {icon}
                        </div>
                    </div>
                </div>

                {/* Information Hierarchy */}
                <div className="text-center space-y-8">
                    <div className="space-y-6">
                        {/* Stacked Info Blocks */}
                        <div className="inline-grid grid-cols-[24px_1fr] gap-x-4 gap-y-6 text-left mx-auto max-w-fit items-start">
                            {/* Date */}
                            <Calendar className="text-gold mt-1" size={20} />
                            <p className="text-xl font-serif text-charcoal">{date}</p>

                            {/* Time */}
                            <Clock className="text-gold mt-1" size={20} />
                            <p className="text-sm font-sans uppercase tracking-[0.2em] text-charcoal/70 pt-1">{time}</p>

                            {/* Venue */}
                            <MapPin className="text-gold mt-1" size={20} />
                            <div className="space-y-0.5">
                                <p className="text-xl font-serif text-charcoal">{venueName}</p>
                                <p className="text-sm font-sans text-charcoal/50 leading-relaxed">{address}</p>
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
