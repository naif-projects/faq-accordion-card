module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-lighter': 'hsl(0, 0%, 95%)',
        'primary-light': 'hsla(0, 0%, 100%, 0.75)',
        'primary-base': 'hsl(184, 100%, 22%)',
        'primary-dark': 'hsl(179, 100%, 13%)',

        'secondary-base': 'hsl(31, 77%, 52%)',
      },

      fontFamily: {
        primary: ["'Big Shoulders Display'", 'sans-serif'],
        secondary: ["'Lexend Deca'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
