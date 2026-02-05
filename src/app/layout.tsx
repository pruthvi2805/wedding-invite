import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-cormorant",
    display: "swap"
});

export const metadata: Metadata = {
    metadataBase: new URL('https://akruthi.kpruthvi.com'),
    title: "Wedding Invitation | Pruthvi & Akruthi",
    description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
    openGraph: {
        type: "website",
        url: "https://akruthi.kpruthvi.com",
        title: "Wedding Invitation | Pruthvi & Akruthi",
        description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Wedding Invitation | Pruthvi & Akruthi",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Wedding Invitation | Pruthvi & Akruthi",
        description: "We are joyfully inviting you to celebrate the wedding of Pruthvi and Akruthi. 12th March 2026.",
        images: ["/images/og-image.png"],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Wedding: Pruthvi & Akruthi",
    },
};

export const viewport: Viewport = {
    themeColor: '#3D2B52',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
            <body className="bg-[#3D2B52] text-charcoal antialiased">
                {children}
            </body>
        </html>
    );
}
