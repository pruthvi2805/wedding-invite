"use client";

import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { Mandala } from "@/components/Mandala";
import { motion } from "framer-motion";
import { Share2, Heart } from "lucide-react";
import Image from "next/image";

import { weddingDetails } from "@/config/wedding";

export default function Home() {
    const { groom, bride, rsvp, events } = weddingDetails;
    // Empty number triggers the contact picker for sharing with anyone
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(rsvp.message + " " + (typeof window !== 'undefined' ? window.location.href : ""))}`;

    return (
        <main className="text-charcoal selection:bg-marigold selection:text-white overflow-x-hidden">
            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full bg-[#E5E5E5] mix-blend-multiply" />
            </div>

            {/* Hero Section */}
            <Hero
                groomName={groom.name}
                brideName={bride.name}
                groomParents={groom.parents}
                brideParents={bride.parents}
            />

            {/* Event Sections Container */}
            <div className="relative bg-[#FDFBF2] py-12 md:py-24 space-y-12 md:space-y-32">
                {/* Mid-page Decorative Divider */}
                <div className="flex justify-center items-center gap-4 opacity-40 my-12 md:my-24">
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-gold" />
                    <div className="text-gold animate-spin-slow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M12 2L15 9L22 9L17 14L19 21L12 17L5 21L7 14L2 9L9 9L12 2Z" />
                        </svg>
                    </div>
                    <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-gold" />
                </div>

                <EventCard
                    title={events.wedding.title}
                    date={events.wedding.date}
                    time={events.wedding.time}
                    venueName={events.wedding.venue}
                    address={events.wedding.address}
                    lat={events.wedding.coordinates.lat}
                    long={events.wedding.coordinates.lng}
                    googleMapsUrl={events.wedding.googleMapsUrl}
                    accentColor="purple"
                    icon={
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-full overflow-hidden flex items-center justify-center"
                        >
                            <Image
                                src="/images/wedding-couple-clean.png"
                                alt="Traditional Wedding Couple"
                                fill
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </motion.div>
                    }
                />

                <EventCard
                    title={events.reception.title}
                    date={events.reception.date}
                    time={events.reception.time}
                    venueName={events.reception.venue}
                    address={events.reception.address}
                    lat={events.reception.coordinates.lat}
                    long={events.reception.coordinates.lng}
                    googleMapsUrl={events.reception.googleMapsUrl}
                    accentColor="marigold"
                    isReversed
                    icon={
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-full overflow-hidden flex items-center justify-center bg-transparent"
                        >
                            <Image
                                src="/images/reception-couple-clean.png"
                                alt="Reception Couple"
                                fill
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    }
                />
            </div>

            {/* Footer / RSVP / Share */}
            <footer className="relative bg-[#4A235A] text-[#FFFDF5] py-32 px-6 text-center overflow-hidden">
                {/* Optional Bottom Fade Enhancement */}
                <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-20 bg-gradient-to-t from-black/10 to-transparent" />
                {/* Decorative Pattern - Replaced Mandala with simple texture or removed to avoid blocking */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[20px] border-gold/20" />
                    <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full border-[40px] border-gold/10" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-2xl mx-auto space-y-12"
                >
                    <div className="flex justify-center text-marigold mb-8">
                        <Heart size={48} strokeWidth={1} />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif">We await your presence</h2>

                    <p className="text-xl font-serif italic text-gold/80 leading-relaxed">
                        "Your blessings and presence are the most precious gifts we could receive.
                        Join us as we embark on this beautiful journey together."
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FAF7F0] hover:bg-white text-[#3D2B52] px-10 py-4 rounded-full font-sans font-medium flex items-center gap-3 transition-colors shadow-2xl"
                        >
                            <Share2 size={20} />
                            Share Invitation
                        </motion.a>
                    </div>

                    <div className="pt-24 border-t border-cream/10">
                        <p className="text-sm font-sans tracking-[0.5em] uppercase opacity-45">
                            {groom.name} & {bride.name} • {events.wedding.date.split(',')[1].trim().split(' ')[1]} {events.wedding.date.split(',')[1].trim().split(' ')[2]}
                        </p>
                    </div>
                </motion.div>
            </footer>
        </main>
    );
}
