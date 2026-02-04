/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Minimum 2.5rem, Scales with viewport, Maximum 6rem
        'fluid-h1': 'clamp(2.5rem, 8vw, 5rem)', 
        // Minimum 1.8rem, Scales, Max 3.5rem
        'fluid-h2': 'clamp(1.8rem, 5vw, 3.5rem)',
        // Readable body text that doesn't get too small
        'fluid-p': 'clamp(1rem, 2vw, 1.25rem)',
      },
      colors: {
        background: "#020617",
        surface: "#0f172a",
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#10b981",
      },
      animation: {
        'aurora': 'aurora 10s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}