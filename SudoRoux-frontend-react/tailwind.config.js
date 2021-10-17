// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx}'],
    safelist: [/^sm:w-/, /^md:w-/, /^lg:w-/, /^xl:w-/, /^justify-/, /^items-/, /^flex-/, /^font-/, /^text-/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Tajawal', 'sans-serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.bg-green': {
          backgroundColor: '#3cc0c2',
        },
        '.text-green': {
          color: '#3cc0c2',
        },
        '.border-green': {
          borderColor: '#3cc0c2',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
