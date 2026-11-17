/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'Noto Sans SC', 'sans-serif'],
        glitch: ['Rubik Glitch', 'cursive'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        punk: {
          black: '#0a0a0a',
          surface: '#141414',
          red: '#e63946',
          orange: '#f4a261',
          green: '#2a9d8f',
          white: '#f5f5f5',
          muted: '#737373',
        }
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'flicker': 'flicker 2s linear infinite',
        'scan': 'scan 8s linear infinite',
        'tape': 'tape 0.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '52%': { opacity: '0.1' },
          '54%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        tape: {
          '0%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
