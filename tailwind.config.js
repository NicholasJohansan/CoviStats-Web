/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'watermelon': {
          DEFAULT: '#ff7070',
          fg: '#ffbebe'
        }
      },
    },
  },
  plugins: [],
}
