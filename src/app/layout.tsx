"use client";

import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { Smartphone } from "lucide-react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
    display: "swap"
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <head>
                <title>Wedding Invitation | Pruthvi & Akruthi</title>
                <meta name="description" content="We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026." />

                {/* Open Graph / Facebook / WhatsApp */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://akruthi.kpruthvi.com" />
                <meta property="og:title" content="Wedding Invitation | Pruthvi & Akruthi" />
                <meta property="og:description" content="We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026." />
                <meta property="og:image" content="https://akruthi.kpruthvi.com/images/og-image.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://akruthi.kpruthvi.com" />
                <meta property="twitter:title" content="Wedding Invitation | Pruthvi & Akruthi" />
                <meta property="twitter:description" content="We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026." />
                <meta property="twitter:image" content="https://akruthi.kpruthvi.com/images/og-image.png" />
            </head>
            <body className="bg-[#3D2B52] text-charcoal antialiased">
                {isDesktop ? (
                    <div className="fixed inset-0 z-[100] bg-[#3D2B52] flex flex-col items-center justify-center p-10 text-center">
                        <div className="max-w-md space-y-8 animate-in fade-in zoom-in duration-700">
                            <div className="flex justify-center text-[#D4AF37]">
                                <Smartphone size={64} strokeWidth={1} />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                                Designed for your mobile experience
                            </h1>
                            <p className="text-[#D4AF37]/80 text-xl font-serif italic">
                                This invitation is a mobile-first journey. Please open this link on your phone to experience the ceremony.
                            </p>
                            <div className="pt-10 border-t border-white/10 text-white/40 text-sm tracking-widest uppercase">
                                Pruthvi & Akruthi
                            </div>
                        </div>
                    </div>
                ) : (
                    children
                )}
            </body>
        </html>
    );
}

// Since we're using Client Components for the desktop check,
// we'll keep the actual static metadata in a separate export if needed,
// but for static export, this works well.
