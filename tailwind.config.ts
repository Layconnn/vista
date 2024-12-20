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
        'action-outline-base': 'var(--Color-Tokens-Action-Outline-Base, #000)',
        'content-dark': 'var(--Color-Tokens-Content-Dark-Primary, #000);',
        'dynamic-black': 'rgba(255, 255, 255, 0.20);',
        'neutral': 'var(--GlobalColors-Neutral-100, #000);',
        'about': 'var(--Color-Tokens-Content-Dark-Secondary, #727272)',
        'hero': 'rgba(0, 0, 0, 0.56);'
      },
      boxShadow: {
        'custom-shadow': '0px 10px 12px 0px rgba(255, 255, 255, 0.26) inset, 0px 0px 0px 1px #000, 0px 0px 0px 4px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        '140': '1.4', // 140% line-height
        '120': '1.2',
        '160': '1.6'
      },
      // animation: {
      //   marquee: 'marquee 10s linear infinite',
      // },
      // keyframes: {
      //   marquee: {
      //     '0%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(calc(-100px * 9))' },
      //   },
      // },

    },
  },
  plugins: [],
} satisfies Config;
