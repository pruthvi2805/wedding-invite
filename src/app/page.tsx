"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Heart } from "lucide-react";
import Image from "next/image";

import { weddingDetails } from "@/config/wedding";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Smooth entry delay
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const { groom, bride, rsvp, events } = weddingDetails;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(rsvp.message + " " + (typeof window !== 'undefined' ? window.location.href : ""))}`;

    return (
        <main className="text-charcoal selection:bg-marigold selection:text-white overflow-x-hidden min-h-screen bg-[#3D2B52]">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#3D2B52] flex items-center justify-center p-10"
                    >
                        <div className="space-y-4 text-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-gold"
                            >
                                <Heart size={40} strokeWidth={1} />
                            </motion.div>
                            <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-sans">
                                Loading Ceremony
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Global Grainy Texture */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full bg-[#E5E5E5] mix-blend-multiply" />
            </div>

            {/* Hero Section - The guided entry starts here */}
            <Hero
                groomName={groom.name}
                brideName={bride.name}
            />

            {/* Transitional Flow - SEAMLESS BLENDING */}
            <div className="relative bg-[#3D2B52]">
                {/* Hero to Events Gradient */}
                <div className="h-32 bg-gradient-to-b from-[#3D2B52] to-[#F7F3E8]" />

                <div className="bg-[#F7F3E8] space-y-24 py-12">
                    {/* Warmer Family Section */}
                    <section className="relative px-6 text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-6"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] text-[#3D2B52]/60 block font-sans font-bold">
                                With blessings from
                            </span>

                            <div className="space-y-10">
                                <div className="space-y-2">
                                    <p className="text-2xl font-serif text-[#3D2B52] font-semibold leading-tight px-4">
                                        {groom.parents}
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-sans font-bold">
                                        Groom&apos;s Family
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-2xl font-serif text-[#3D2B52] font-semibold leading-tight px-4">
                                        {bride.parents}
                                    </p>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-sans font-bold">
                                        Bride&apos;s Family
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Symbolic Divider */}
                        <div className="flex justify-center pt-8">
                            <div className="w-8 h-[1px] bg-gold/30" />
                            <div className="mx-3 w-1.5 h-1.5 rounded-full border border-gold rotate-45" />
                            <div className="w-8 h-[1px] bg-gold/30" />
                        </div>
                    </section>

                    <EventCard
                        title={events.wedding.title}
                        date={events.wedding.date}
                        time={events.wedding.time}
                        venueName={events.wedding.venue}
                        address={events.wedding.address}
                        googleMapsUrl={events.wedding.googleMapsUrl}
                        accentColor="purple"
                        icon={
                            <Image
                                src="/images/wedding-couple-clean.png"
                                alt="Wedding"
                                fill
                                className="object-contain"
                                sizes="300px"
                            />
                        }
                    />

                    <EventCard
                        title={events.reception.title}
                        date={events.reception.date}
                        time={events.reception.time}
                        venueName={events.reception.venue}
                        address={events.reception.address}
                        googleMapsUrl={events.reception.googleMapsUrl}
                        accentColor="marigold"
                        icon={
                            <Image
                                src="/images/reception-couple-clean.png"
                                alt="Reception"
                                fill
                                className="object-contain"
                                sizes="300px"
                            />
                        }
                    />
                </div>

                {/* Events to Footer Gradient */}
                <div className="h-32 bg-gradient-to-b from-[#F7F3E8] to-[#3D2B52]" />
            </div>

            {/* Footer / RSVP / Share */}
            <footer className="relative bg-[#3D2B52] text-[#FFFDF5] py-24 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full border-[15px] border-gold/20" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    className="relative z-10 space-y-10"
                >
                    <div className="flex justify-center text-gold mb-4">
                        <Heart size={44} strokeWidth={1} />
                    </div>

                    <h2 className="text-4xl font-serif">We await your presence</h2>

                    <p className="text-sm font-sans italic text-gold/80 leading-relaxed px-2">
                        &quot;Your blessings and presence are the most precious gifts we could receive.&quot;
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 pt-6">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={async () => {
                                const shareData = {
                                    title: "Wedding Invitation | Pruthvi & Akruthi",
                                    text: rsvp.message,
                                    url: "https://akruthi.kpruthvi.com"
                                };

                                try {
                                    if (navigator.share) {
                                        await navigator.share(shareData);
                                    } else {
                                        window.open(whatsappUrl, '_blank');
                                    }
                                } catch (err) {
                                    window.open(whatsappUrl, '_blank');
                                }
                            }}
                            className="bg-[#FAF7F0] text-[#3D2B52] px-8 py-3.5 rounded-full font-serif font-medium flex items-center gap-3 shadow-xl active:bg-white"
                        >
                            <Share2 size={18} />
                            Share Invitation
                        </motion.button>
                    </div>

                    <div className="pt-16 border-t border-cream/10">
                        <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
                            {groom.name} & {bride.name}
                        </p>
                    </div>
                </motion.div>
            </footer>
        </main >
    );
}
