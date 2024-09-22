/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'HakgyoansimNadeuriTTF-B': ['HakgyoansimNadeuriTTF-B'],
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
