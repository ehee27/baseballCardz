import daisy from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ui-sans-serif', 'Squada One'],
    },
  },
  plugins: [daisy],
  daisyui: {
    themes: ['halloween'],
  },
}
