/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        '--primary-green': '#387C2F',
        '--secondary-green': '#98BE5A',
      },
    },
  },
  plugins: [],
};
