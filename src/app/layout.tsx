import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { DeviceRestriction } from "@/components/DeviceRestriction";

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

export const metadata: Metadata = {
    title: "Wedding Invitation | Pruthvi & Akruthi",
    description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
    openGraph: {
        type: "website",
        url: "https://akruthi.kpruthvi.com",
        title: "Wedding Invitation | Pruthvi & Akruthi",
        description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
        images: [
            {
                url: "https://akruthi.kpruthvi.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Pruthvi & Akruthi Wedding Invitation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wedding Invitation | Pruthvi & Akruthi",
        description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
        images: ["https://akruthi.kpruthvi.com/images/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <body className="bg-[#3D2B52] text-charcoal antialiased">
                <DeviceRestriction>
                    {children}
                </DeviceRestriction>
            </body>
        </html>
    );
}
