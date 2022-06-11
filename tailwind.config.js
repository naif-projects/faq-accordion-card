module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-light': 'hsl(240, 5%, 91%)',
        'primary-base': 'hsl(240, 6%, 50%)',
        'primary-dark': 'hsl(237, 12%, 33%)',
        'primary-darker': 'hsl(238, 29%, 16%)',

        'secondary-base': 'hsl(14, 88%, 65%)',

        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
      },

      fontFamily: {
        primary: ["'Kumbh Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
