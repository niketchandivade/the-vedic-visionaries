import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
        white: "#FFFFFF",
        beige: "#F8F5EE",
        green: "#15803D",
        yellow: "#FACC15",
        gold: "#D4AF37",
        text: "#1F2937",
        muted: "#6B7280",
        border: "#E7DFC9",
      },
      },
    },
  },
  // @ts-ignore - safelist is valid in Tailwind CSS config
  safelist: [
    // Brand colors
    'text-brand-white',
    'bg-brand-white',
    'text-brand-beige',
    'bg-brand-beige',
    'text-brand-green',
    'bg-brand-green',
    'text-brand-yellow',
    'bg-brand-yellow',
    'text-brand-gold',
    'bg-brand-gold',
    // With opacity
    'text-brand-white/80',
    'text-brand-white/90',
    'bg-brand-white/20',
    'text-brand-beige/30',
    'bg-brand-beige/30',
    'text-brand-beige/80',
    'text-brand-green/10',
    'text-brand-green/70',
    'text-brand-green/80',
    'bg-brand-green/10',
    'bg-brand-green/90',
    'bg-brand-green/95',
    'text-brand-yellow/30',
    'bg-brand-yellow/30',
    'text-brand-gold/20',
    'border-brand-gold/20',
    'border-brand-gold/15',
    'border-brand-gold/10',
    'border-brand-gold/50',
    'hover:text-brand-yellow',
    'group-hover:text-brand-yellow',
  ],
  plugins: [],
};

export default config;