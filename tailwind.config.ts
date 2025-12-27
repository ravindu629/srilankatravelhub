import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef6e7',
          100: '#fcecc4',
          200: '#f9d79d',
          300: '#f6c376',
          400: '#f4b359',
          500: '#f2a33c',
          600: '#f09536',
          700: '#ed842e',
          800: '#eb7427',
          900: '#e7561a',
        },
        accent: {
          50: '#e8f5f0',
          100: '#c6e5da',
          200: '#a0d4c1',
          300: '#7ac3a8',
          400: '#5eb695',
          500: '#42a982',
          600: '#3c9a7a',
          700: '#33886f',
          800: '#2b7765',
          900: '#1d5852',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
