import { oldMoneyColors } from './oldMoneyTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ...oldMoneyColors,
        clay: oldMoneyColors.slate,
        arch: {
          light: '#F3F0E8',
          pure: '#FFFDF8',
          dark: '#151F19',
          muted: '#756C5C',
          accent: '#365E43',
          gold: '#B79A55'
        }
      },
      boxShadow: {
        'clay-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'clay-md': '0 10px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'clay-lg': '0 20px 45px -8px rgba(0, 0, 0, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px rgba(54, 94, 67, 0.18)',
      }
    },
  },
  plugins: [],
}
