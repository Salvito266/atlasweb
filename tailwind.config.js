/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        atlas: {
          bg: '#0B0F1A',
          surface: '#0F1424',
          primary: '#5E8BFF',
          accent: '#8E7DFF',
          glow1: '#3B82F6',
          glow2: '#A78BFA',
          border: '#1E2A44',
        },
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '110rem',
      },
      boxShadow: {
        glow: '0 0 80px rgba(94,139,255,0.15)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: 0.35 },
          '50%': { opacity: 0.6 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 10s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      backgroundImage: {
        grid:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
}