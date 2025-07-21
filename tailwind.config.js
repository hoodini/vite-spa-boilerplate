/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0A0A1A',
        'space-gray': '#1A1A3A',
        'neon-purple': '#6A00F4',
        'neon-blue': '#00BFFF',
        'neon-cyan': '#00FFFF',
        'neon-pink': '#FF00FF',
        'dark-purple': '#4A148C',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(106, 0, 244, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(106, 0, 244, 0.8)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, #0A0A1A 0%, #1A1A3A 25%, #16213E 50%, #0F3460 75%, #0A0A1A 100%)',
        'neon-gradient': 'linear-gradient(135deg, #6A00F4 0%, #00BFFF 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(26, 26, 58, 0.8) 0%, rgba(16, 33, 62, 0.8) 100%)',
      }
    },
  },
  plugins: [],
}