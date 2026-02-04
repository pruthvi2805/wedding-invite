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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full px-6 mb-20 flex flex-col gap-10 items-center"
        >
            {/* Visual Anchor */}
            <div className="relative w-full max-w-[300px]">
                <div className="relative aspect-[4/5] rounded-t-full border border-gold/40 p-3 bg-white/30 backdrop-blur-sm">
                    <div className="relative h-full w-full overflow-hidden rounded-t-full bg-[#F7F3E8]">
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="w-full h-full transition-transform duration-700">
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information Hierarchy */}
            <div className="w-full text-center space-y-8">
                <div className="space-y-2">
                    <p className="text-nav-label">Celebration</p>
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
                    <motion.a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-[#3D2B52] text-white px-8 py-3.5 rounded-full font-serif italic text-lg shadow-lg active:bg-[#4A2B62]"
                    >
                        <Map size={18} />
                        Get Directions
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};
