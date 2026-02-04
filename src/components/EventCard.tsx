"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Map } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    venueName: string;
    address: string;
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
    googleMapsUrl,
    icon,
    isReversed = false,
    accentColor = "purple",
}: EventCardProps) => {
    const theme = {
        purple: {
            primary: "text-[#4A235A]",
            bg: "bg-[#4A235A]",
            border: "border-[#4A235A]/10",
        },
        marigold: {
            primary: "text-[#D4AF37]",
            bg: "bg-[#D4AF37]",
            border: "border-[#D4AF37]/10",
        }
    }[accentColor];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`max-w-6xl mx-auto px-6 mb-24 md:mb-32 flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center`}
        >
            {/* Visual Anchor */}
            <div className="relative flex-1 group w-full max-w-sm">
                <div className="relative aspect-[4/5] rounded-t-full border-[1px] border-gold/40 shadow-2xl p-4 bg-white/50 backdrop-blur-sm">
                    <div className="relative h-full w-full overflow-hidden rounded-t-full bg-cream-dark">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className={`w-full h-full transition-transform duration-1000 group-hover:scale-105`}>
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information Hierarchy */}
            <div className="flex-1 text-center md:text-left space-y-10">
                <div className="space-y-3">
                    <p className="text-nav-label">Celebration</p>
                    <h2 className={`text-section-title ${theme.primary} leading-tight`}>
                        {title}
                    </h2>
                </div>

                <div className="space-y-6">
                    {/* Stacked Info Blocks */}
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Calendar className="text-gold" size={20} />
                        <p className="text-xl md:text-2xl font-serif text-charcoal">{date}</p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Clock className="text-gold" size={20} />
                        <p className="text-body-warm text-charcoal/80 uppercase tracking-widest">{time}</p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4 items-start">
                        <MapPin className="text-gold mt-1 shrink-0" size={20} />
                        <div className="space-y-1">
                            <p className="text-xl md:text-2xl font-serif text-charcoal">{venueName}</p>
                            <p className="text-body-warm text-charcoal/60 leading-relaxed max-w-xs">{address}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <motion.a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-scale-tap inline-flex items-center gap-3 bg-[#3D2B52] text-white px-8 py-4 rounded-full font-serif italic text-lg shadow-xl"
                    >
                        <Map size={20} />
                        Open in Maps
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};
