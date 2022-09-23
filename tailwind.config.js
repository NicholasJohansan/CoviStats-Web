/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Josefin Sans', 'sans']
    },
    extend: {
      colors: {
        'pink': {
          DEFAULT: '#ffd5d5',
          'fg': '#ff4444',
          'light': '#fff3f3',
          'light-fg': '#ff6d6d'
        },
        'dark-pink': {
          DEFAULT: '#320d0d',
          'fg': '#ff4949',
          'light': '#3a0000',
          'light-fg': '#ff6666'
        },
        'watermelon': {
          DEFAULT: '#ff7070',
          fg: '#ffbebe'
        },
        'dark-watermelon': {
          DEFAULT: '#890000',
          "fg": "#5a0000"
        }
      },
    },
  },
  plugins: [],
}
