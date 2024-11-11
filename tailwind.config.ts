import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["var(--inter)"],
      },
      backgroundImage: {
        "hero-bg": "url('/bg-imgs/hero-background.png')",
        "hero-bg1": "url('/bg-imgs/hero-background1.png')",
        "hero-bg2": "url('/bg-imgs/hero-background2.png')",
        "features-bg": "url('/bg-imgs/features-bg.png')",
        "spacer-img": "url('/bg-imgs/spacer-image.png')",
        "stats-bg": "url('/bg-imgs/stats-bg.png')",
        "news-bg": "url('/bg-imgs/news-bg.png')",
      },
      backgroundPosition: {
        "right-mobile": "calc(100% + 428px)",
        "right-tablet": "calc(100% + 330px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
