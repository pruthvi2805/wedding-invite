import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                purple: {
                    DEFAULT: "#5B2C6F",
                    dark: "#4A235A",
                    light: "#7D3C98",
                },
                marigold: {
                    DEFAULT: "#FF9900",
                    dark: "#E68A00",
                    light: "#FFAD33",
                },
                gold: {
                    DEFAULT: "#D4AF37",
                    light: "#E5C76B",
                },
                cream: {
                    DEFAULT: "#FFFDF5",
                    dark: "#F9F4E8",
                },
                charcoal: "#2D2D2D",
                maroon: {
                    DEFAULT: "#8B1538",
                    dark: "#6B102B",
                },
                teal: {
                    DEFAULT: "#1B4D5C",
                    dark: "#143A45",
                },
            },
            fontFamily: {
                serif: ["var(--font-cormorant)"],
                sans: ["var(--font-inter)"],
            },
            backgroundImage: {
                'pattern-marigold': "url('/assets/images/pattern-marigold.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
