/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        '--primary-green': '#387C2F',
        '--secondary-green': '#98BE5A',
        'bg-input': '#ffffff4d',
      },
      backgroundImage: {
        'bg-walk': 'url(/src/assets/images/bg-walk.jpg)',
      },
      boxShadow: {
        default: '0px 0px 20px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
};
