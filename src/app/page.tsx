"use client";

import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { motion } from "framer-motion";
import { Share2, Heart } from "lucide-react";
import Image from "next/image";

import { weddingDetails } from "@/config/wedding";

export default function Home() {
    const { groom, bride, rsvp, events } = weddingDetails;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(rsvp.message + " " + (typeof window !== 'undefined' ? window.location.href : ""))}`;

    return (
        <main className="text-charcoal selection:bg-marigold selection:text-white overflow-x-hidden">
            {/* Global Grainy Texture */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full bg-[#E5E5E5] mix-blend-multiply" />
            </div>

            {/* Hero Section - The guided entry starts here */}
            <Hero
                groomName={groom.name}
                brideName={bride.name}
            />

            {/* Transitional Flow */}
            <div className="relative bg-[#FDFBF2] py-24 md:py-32 space-y-32">

                {/* Warmer Family Section - Separate Chapter */}
                <section className="relative overflow-hidden border-y border-gold/10">
                    {/* Chapter Background - Solid, warmer cream to distinguish from other sections */}
                    <div className="absolute inset-0 bg-[#F7F3E8]" />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <span className="text-[11px] uppercase tracking-[0.5em] text-[#3D2B52] block font-sans font-semibold">
                                With blessings from
                            </span>

                            <div className="grid md:grid-cols-2 gap-12 md:gap-4 items-start pt-4">
                                <div className="space-y-3">
                                    <p className="text-2xl md:text-3xl font-serif text-[#3D2B52] font-semibold leading-tight">
                                        {groom.parents}
                                    </p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
                                        Groom&apos;s Family
                                    </p>
                                </div>

                                <div className="hidden md:flex items-center justify-center opacity-30">
                                    <div className="h-12 w-[1px] bg-[#3D2B52]" />
                                </div>

                                <div className="space-y-3">
                                    <p className="text-2xl md:text-3xl font-serif text-[#3D2B52] font-semibold leading-tight">
                                        {bride.parents}
                                    </p>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-sans font-bold">
                                        Bride&apos;s Family
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Symbolic Divider */}
                        <div className="flex justify-center pt-8">
                            <div className="w-10 h-[1px] bg-gold/50" />
                            <div className="mx-4 w-2 h-2 rounded-full border border-gold rotate-45" />
                            <div className="w-10 h-[1px] bg-gold/50" />
                        </div>
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src="/images/wedding-couple-clean.png"
                                alt="Wedding Ceremony"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
                    googleMapsUrl={events.reception.googleMapsUrl}
                    accentColor="marigold"
                    isReversed
                    icon={
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src="/images/reception-couple-clean.png"
                                alt="Reception Celebration"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    }
                />
            </div>

            {/* Footer / RSVP / Share */}
            <footer className="relative bg-[#3D2B52] text-[#FFFDF5] py-32 px-6 text-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-20 bg-gradient-to-t from-black/10 to-transparent" />

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
                    <div className="flex justify-center text-gold mb-8">
                        <Heart size={48} strokeWidth={1} />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif">We await your presence</h2>

                    <p className="text-body-warm italic text-gold/80 leading-relaxed px-4">
                        &quot;Your blessings and presence are the most precious gifts we could receive.
                        Join us as we embark on this beautiful journey together.&quot;
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
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
                                    console.log('Error sharing:', err);
                                    window.open(whatsappUrl, '_blank');
                                }
                            }}
                            className="bg-[#FAF7F0] text-[#3D2B52] px-10 py-4 rounded-full font-serif font-medium flex items-center gap-3 shadow-2xl hover:bg-white transition-colors"
                        >
                            <Share2 size={20} />
                            Share Invitation
                        </motion.button>
                    </div>

                    <div className="pt-24 border-t border-cream/10">
                        <p className="text-nav-label opacity-45">
                            {groom.name} & {bride.name} • {events.wedding.date.split(',')[1].trim().split(' ')[1]} {events.wedding.date.split(',')[1].trim().split(' ')[2]}
                        </p>
                    </div>
                </motion.div>
            </footer>
        </main >
    );
}
