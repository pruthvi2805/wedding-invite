"use client";

import { useEffect, useState } from "react";
import { Smartphone } from "lucide-react";

export function DeviceRestriction({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkDevice = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Prevent hydration mismatch
    if (!isMounted) return null;

    if (isDesktop) {
        return (
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
        );
    }

    return <>{children}</>;
}
