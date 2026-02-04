"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    venueName: string;
    address: string;
    lat: number;
    long: number;
    googleMapsUrl?: string;
    icon?: React.ReactNode;
    isReversed?: boolean;
    accentColor?: "purple" | "marigold";
}

export const EventCard = ({
    title,
    date,
    time,
    venueName,
    address,
    lat,
    long,
    googleMapsUrl,
    icon,
    isReversed = false,
    accentColor = "purple",
}: EventCardProps) => {
    const mapUrl = googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;

    const theme = {
        purple: {
            primary: "text-purple",
            bg: "bg-purple",
            bgHover: "hover:bg-purple-dark",
            glow: "shadow-purple/20",
            border: "border-purple/20",
            light: "text-purple/60"
        },
        marigold: {
            primary: "text-marigold",
            bg: "bg-marigold",
            bgHover: "hover:bg-marigold-dark",
            glow: "shadow-marigold/20",
            border: "border-marigold/20",
            light: "text-marigold/60"
        }
    }[accentColor];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`max-w-5xl mx-auto px-6 mb-12 md:mb-24 flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center`}
        >
            {/* Arch Frame Section */}
            <div className="relative flex-1 group w-full max-w-md">
                {/* SVG Arch Mask / Frame */}
                <div className="relative overflow-hidden aspect-[4/5] rounded-t-full border-[12px] border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-1 bg-gold/20">
                    <div className="relative h-full w-full overflow-hidden rounded-t-full bg-cream-dark">
                        {/* Recursive Marigold Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-marigold via-transparent to-transparent bg-[length:30px_30px]" />

                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className={`w-full h-full ${theme.primary} transition-transform duration-1000 group-hover:scale-110 drop-shadow-xl`}>
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frame Ornaments - Removed to cleaner look */}
            </div>

            {/* Content Section */}
            <div className="relative flex-1 text-center md:text-left space-y-8 py-12 px-8">
                {/* Decorative Flourishes */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-80 pointer-events-none">
                    <Image src="/images/corner-flourish.png" alt="" width={64} height={64} className="object-contain" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-80 pointer-events-none rotate-180">
                    <Image src="/images/corner-flourish.png" alt="" width={64} height={64} className="object-contain" />
                </div>

                <div className="space-y-2">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gold font-sans tracking-[0.4em] uppercase text-sm"
                    >
                        Celebration
                    </motion.p>
                    <h2 className={`text-4xl md:text-7xl font-serif ${theme.primary}`}>
                        {title}
                    </h2>
                </div>

                {/* Icon Rows - Wrapped in a centered container for mobile, left-aligned for desktop */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <div className="w-full max-w-xs space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className={`p-2.5 rounded-full border ${theme.border} ${theme.primary} group-hover:bg-cream-dark transition-colors shrink-0`}>
                                <Calendar size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xl font-serif text-charcoal">{date}</p>
                                <p className="text-sm font-sans text-charcoal/60 lowercase tracking-widest">{time}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className={`p-2.5 rounded-full border ${theme.border} ${theme.primary} group-hover:bg-cream-dark transition-colors shrink-0`}>
                                <MapPin size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xl font-serif text-charcoal">{venueName}</p>
                                <p className="text-sm font-sans text-charcoal/60 leading-relaxed max-w-xs">{address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex justify-center md:justify-start">
                    <motion.a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 10 }}
                        className={`inline-flex items-center gap-3 text-lg font-serif italic ${theme.primary} border-b-2 border-gold/40 pb-1 hover:border-gold transition-all`}
                    >
                        Navigate to venue
                        <ChevronRight size={20} className="mt-1" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};
