"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/EventCard";
import { Share2, Heart } from "lucide-react";
import { useInViewOnce } from "@/components/useInViewOnce";
import Image from "next/image";

import { weddingDetails } from "@/config/wedding";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { elementRef: footerRef, isInView: footerInView } = useInViewOnce({ rootMargin: "-30% 0px", threshold: 0.2 });

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const { groom, bride, rsvp, events } = weddingDetails;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(rsvp.message + " " + (typeof window !== 'undefined' ? window.location.href : ""))}`;

    return (
        <main className="text-charcoal selection:bg-marigold selection:text-white overflow-x-hidden min-h-screen bg-[#3D2B52]">
            {isLoading && (
                <div className="fixed inset-0 z-[100] bg-[#3D2B52] flex items-center justify-center p-10 animate-fade-out">
                    <div className="space-y-4 text-center">
                        <div className="mx-auto h-12 w-12 rounded-full border border-gold/50 border-t-transparent animate-spin-slow" />
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-sans">
                            Loading Ceremony
                        </p>
                    </div>
                </div>
            )}

            <section className="relative h-[100svh] min-h-[100svh] w-full bg-[#3D2B52] overflow-hidden flex flex-col items-center justify-center px-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
                <div className="absolute inset-0 opacity-[0.08]">
                    <div className="absolute -top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-gold/50" />
                    <div className="absolute -bottom-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full border border-gold/30" />
                </div>

                <div className="relative z-10 text-center space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.55em] text-white/50 font-sans">
                        Wedding Invitation
                    </span>
                    <div className="space-y-2">
                        <h1 className="text-[4.1rem] leading-[0.88] font-serif font-semibold text-white tracking-tight">
                            {groom.name}
                        </h1>
                        <span className="text-2xl font-serif text-gold/90 italic">&</span>
                        <h1 className="text-[4.1rem] leading-[0.88] font-serif font-semibold text-white tracking-tight">
                            {bride.name}
                        </h1>
                    </div>
                    <p className="text-xl font-serif italic text-white/75">
                        request the honor of your presence
                    </p>
                    <div className="pt-6 border-t border-white/10 w-full max-w-[240px] mx-auto">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-sans leading-relaxed">
                            Thursday, 12 March 2026 <br />
                            Jagityala, Telangana
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-10 text-white/30 text-[10px] uppercase tracking-[0.5em] font-sans">
                    Scroll
                </div>
            </section>

            <section className="relative bg-[#F7F3E8] w-full">
                <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-[#3D2B52] to-[#F7F3E8]" />
                <div className="px-6 pt-16 pb-10 text-center space-y-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#3D2B52]/60 font-sans font-bold">
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
                    <div className="flex justify-center pt-4">
                        <div className="w-10 h-[1px] bg-gold/30" />
                        <div className="mx-3 w-2 h-2 rounded-full border border-gold rotate-45" />
                        <div className="w-10 h-[1px] bg-gold/30" />
                    </div>
                </div>
            </section>

            <section className="relative bg-[#F7F3E8] w-full">
                <div className="px-6 pt-6 pb-16">
                    <div className="rounded-[32px] border border-[#4A235A]/10 bg-white px-6 py-10 text-center space-y-3">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#4A235A]/60 font-sans font-semibold">
                            Wedding Celebrations
                        </p>
                        <h2 className="text-3xl font-serif text-[#4A235A]">Ceremony details</h2>
                        <p className="text-sm font-sans text-[#4A235A]/60">
                            Please join us for the wedding and reception.
                        </p>
                    </div>

                    <div className="mt-12 space-y-24">
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
                                    sizes="320px"
                                    loading="lazy"
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
                                    sizes="320px"
                                    loading="lazy"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-[#F7F3E8] to-[#3D2B52]" />
            </section>

            {/* Footer / RSVP / Share */}
            <footer className="relative bg-[#3D2B52] text-[#FFFDF5] pt-24 pb-28 px-6 text-center overflow-hidden">
                <div
                    ref={footerRef}
                    className={`relative z-10 space-y-10 transition-all duration-700 ease-out ${footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                            className="bg-[#FAF7F0] text-[#3D2B52] px-8 py-3.5 rounded-full font-serif font-medium flex items-center gap-3 border border-white/20 active:scale-95 transition-transform duration-200"
                        >
                            <Share2 size={18} />
                            Share Invitation
                        </button>
                    </div>

                    <div className="pt-16 border-t border-cream/10">
                        <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
                            {groom.name} & {bride.name}
                        </p>
                    </div>
                </div>
            </footer>
        </main >
    );
}
