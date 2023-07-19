/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '10rem',
          '2xl': '20rem',
        },
      },
      colors: {
        grey: {
          DEFAULT: '#7D7F7C',
        },
        green: {
          DEFAULT: '#05CC72',
          700: '#1DA865',
        },
      },
      fontFamily: {
        sans: ['Inter'],
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(90deg, rgba(250,250,250,1) 0%, rgba(226,226,226,1) 100%)',
      },
    },
  },
  plugins: [],
};
