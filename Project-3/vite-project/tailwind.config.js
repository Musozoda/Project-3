/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],darkMode: 'class',
  theme: {
    screens: {

      'xl':  {"max":'1275px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '975px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '790px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '528px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

