/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      omyu_pretty: ['omyu_pretty'],
    },
    extend: {
      colors: {
        '--primary-green': '#387C2F',
        '--secondary-green': '#98BE5A',
      },
    },
  },
  plugins: [],
};
