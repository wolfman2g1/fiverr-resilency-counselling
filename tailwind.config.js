/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./themes/resilency-counselling/layouts/**/*.html",
    "./themes/resilency-counselling/layouts/**/*.html",
    "./themes/resilency-counselling/layouts/**/*.js",
    "./themes/resilency-counselling/static/**/*.js",

  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#9F60C6',
          green: '#45DC00',
          blue: '#0057DA',
          yellow: '#FFF136',
          light: '#F5F7FB',
          white: '#FFFFFF',
          "dark-gray": '#212427',
          gray: '#434343'
        },
      },
      fontSize: {
        '4xl': '2.375rem',
        '6xl': '4rem'
      },
      fontFamily: {
        'times-new-roman': ['Times New Roman', 'serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
