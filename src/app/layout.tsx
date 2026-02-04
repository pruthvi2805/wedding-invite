import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
    metadataBase: new URL("https://wedding-invite.pages.dev"),
    title: "Wedding Invitation | Pruthviraj & Sravani",
    description: "We are joyfully inviting you to celebrate our wedding union. Sunday, 11th August 2024.",
    openGraph: {
        title: "Wedding Invitation | Pruthviraj & Sravani",
        description: "You're cordially invited to celebrate the wedding of Pruthviraj and Sravani.",
        url: "https://wedding-invite.pages.dev",
        siteName: "Pruthviraj & Sravani Wedding",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Wedding Invitation",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Wedding Invitation | Pruthviraj & Sravani",
        description: "You're cordially invited to celebrate the wedding of Pruthviraj and Sravani.",
        images: ["/og-image.jpg"],
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
                {children}
            </body>
        </html>
    );
}
