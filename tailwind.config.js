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
        'bg-walk':
          'url(https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      },
      boxShadow: {
        default: '0px 0px 20px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
};
