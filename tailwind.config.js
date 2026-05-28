/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        stone: {
          950: '#0A0A09',
          925: '#111110',
          900: '#161614',
          800: '#1e1e1b',
          700: '#2a2a27',
          600: '#3a3a36',
          500: '#5a5a55',
          400: '#8a8a83',
          300: '#b4b4ab',
          200: '#d4d4c8',
          100: '#eeeeea',
        },
        gold: {
          50:  '#fdf8ed',
          100: '#faefd0',
          200: '#f3db99',
          300: '#ecc35d',
          400: '#e6ad33',
          500: '#C9A84C',
          600: '#b08a3a',
          700: '#8d6d2e',
          800: '#6b5224',
          900: '#50401e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
