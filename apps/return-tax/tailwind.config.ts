const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        primary: {
          'blue-400': '#0061ff',
        },
        blue: {
          '100': '#e6f0ff',
          '200': '#b3d1ff',
          '400': '#3385ff',
        },
        dark: {
          '300': '#6f7786',
          '400': '#3e4149',
        },
        red: {
          '100': '#ffe6e6',
          '200': '#ffb3b3',
          '600': '#ff3333',
        },
        mint: {
          '200': '#b3ffe6',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config
