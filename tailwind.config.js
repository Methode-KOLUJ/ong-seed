// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // supporte les routes App Router
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
