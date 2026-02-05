"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { Share2, Heart } from "lucide-react";
import { useInViewOnce } from "@/components/useInViewOnce";
import { Countdown } from "@/components/Countdown";
import Image from "next/image";

import { weddingDetails } from "@/config/wedding";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { elementRef: footerRef, isInView: footerInView } = useInViewOnce({ rootMargin: "-30% 0px", threshold: 0.2 });

    useEffect(() => {
        // Reduced timeout: 2s stay + 2s fade out = 4s total
        const timer = setTimeout(() => setIsLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    const { groom, bride, rsvp, events } = weddingDetails;

    return (
        <main className="text-charcoal selection:bg-marigold selection:text-white overflow-x-hidden min-h-screen bg-[#3D2B52]">
            <div
                className="fixed inset-0 z-[100] bg-[#3D2B52] flex items-center justify-center p-10 animate-fade-out pointer-events-none"
                // Shortened stay (2s delay) and fade out (2s duration)
                style={{ animationDuration: "2s", animationDelay: "2s", animationFillMode: "forwards" }}
            >
                <div className="space-y-4 text-center">
                    <p className="text-xl md:text-2xl font-serif text-gold/90 italic leading-relaxed animate-fade-in">
                        {weddingDetails.tagline}
                    </p>
                </div>
            </div>

            {/* Hero Section - The guided entry starts here */}
            {/* Adjusted startDelay to 3s to match the faster welcome sequence */}
            <Hero
                groomName={groom.name}
                brideName={bride.name}
                startDelay={3000}
            />

            <div className="relative bg-[#F7F3E8] z-10 w-full">
                {/* Warmer Family Section */}
                <section className="relative px-6 pt-10 text-center space-y-8">
                    <div className="space-y-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#3D2B52]/60 block font-sans font-bold">
                            With blessings from
                        </span>

                        <div className="space-y-10">
                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-sans font-bold">
                                    Groom&apos;s Parents
                                </p>
                                <p className="text-2xl font-serif text-[#3D2B52] leading-snug px-4 text-balance">
                                    {groom.parents.replace(/Mrs\.\s/g, "Mrs.\u00A0")}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-sans font-bold">
                                    Bride&apos;s Parents
                                </p>
                                <p className="text-2xl font-serif text-[#3D2B52] leading-snug px-4 text-balance">
                                    {bride.parents.replace(/Mrs\.\s/g, "Mrs.\u00A0")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Symbolic Divider */}
                    <div className="flex justify-center pt-8">
                        <div className="w-8 h-[1px] bg-gold/30" />
                        <div className="mx-3 w-1.5 h-1.5 rounded-full border border-gold rotate-45" />
                        <div className="w-8 h-[1px] bg-gold/30" />
                    </div>
                </section>

                <div className="mt-14 px-6">
                    <div className="rounded-[32px] border border-[#4A235A]/10 bg-white px-6 py-10 text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#4A235A]/60 font-sans font-semibold">
                            Wedding Celebrations
                        </p>
                        <h2 className="mt-3 text-3xl font-serif text-[#4A235A]">Join us for the ceremonies</h2>
                        <p className="mt-3 text-sm font-sans text-[#4A235A]/60">
                            Two ceremonies, one timeless celebration.
                        </p>
                    </div>
                </div>

                <div className="space-y-24 px-6 pb-28 pt-14">
                    <EventCard
                        title={events.wedding.title}
                        date={events.wedding.date}
                        time={events.wedding.time}
                        venueName={events.wedding.venue}
                        address={events.wedding.address}
                        googleMapsUrl={events.wedding.googleMapsUrl}
                        accentColor="marigold"
                        icon={
                            <Image
                                src="/images/wedding-caricature.jpg"
                                alt="Wedding"
                                fill
                                className="object-contain p-2"
                                sizes="240px"
                                priority
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
                                src="/images/reception-couple.jpg"
                                alt="Reception"
                                fill
                                className="object-contain p-2"
                                sizes="240px"
                                priority
                            />
                        }
                    />
                </div>
            </div>

            {/* Countdown Section */}
            <Countdown targetDate="2026-03-12T10:55:00" />

            {/* Footer / RSVP / Share */}
            <footer className="relative bg-[#3D2B52] text-[#FFFDF5] pt-24 pb-28 px-6 text-center overflow-hidden">
                <div
                    ref={footerRef}
                    className={`relative z-10 space-y-10`}
                >
                    <div className="flex justify-center text-gold mb-4">
                        <Heart size={44} strokeWidth={1} />
                    </div>

                    <h2 className="text-4xl font-serif">We await your presence</h2>

                    <p className="text-sm font-sans italic text-gold/80 leading-relaxed px-2">
                        &quot;Your blessings and presence are the most precious gifts we could receive.&quot;
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 pt-6">
                        <button
                            onClick={async () => {
                                const currentUrl = typeof window !== 'undefined' ? window.location.href : "https://akruthi.kpruthvi.com";
                                const shareData = {
                                    title: "Wedding Invitation | Pruthvi & Akruthi",
                                    text: rsvp.message + currentUrl,
                                    url: currentUrl
                                };

                                try {
                                    if (navigator.share) {
                                        await navigator.share({
                                            title: shareData.title,
                                            text: shareData.text
                                        });
                                    } else {
                                        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text)}`, '_blank');
                                    }
                                } catch (err) {
                                    // Only fallback to WhatsApp if it wasn't a user cancellation
                                    if (err instanceof Error && err.name !== 'AbortError') {
                                        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text)}`, '_blank');
                                    }
                                }
                            }}
                            className="bg-[#FAF7F0] text-[#3D2B52] px-8 py-3.5 rounded-full font-serif font-medium flex items-center gap-3 border border-white/20 active:scale-95 transition-transform duration-200"
                        >
                            <Share2 size={18} />
                            Share Invitation
                        </button>
                    </div>

                    <div className="pt-16 border-t border-cream/10">
                        <p className="text-xl font-serif italic text-gold/60 tracking-wide">
                            Until we see you there
                        </p>
                    </div>
                </div>
            </footer>
        </main >
    );
}
