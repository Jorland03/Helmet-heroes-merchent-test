/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          750: '#15161d',
          800: '#1a1b26',
          900: '#0f0f12',
        },
        gold: {
          300: '#ffe55c',
          400: '#ffd700',
          500: '#bfa21e',
        },
        rarity: {
          common: '#9ca3af',
          rare: '#3b82f6',
          epic: '#a855f7',
          legendary: '#f59e0b',
          mythic: '#ef4444',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}