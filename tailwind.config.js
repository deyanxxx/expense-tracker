/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ],
    }]
  },
  
  theme: {
    screens: {

      'xs': {'min':'320px', 'max':'639px'},
      // => @media (min-width: 640px & max-width: 766px) { ... } small mobile

      'sm': {'min':'640px', 'max':'759px'},
      // => @media (min-width: 640px & max-width: 759px) { ... } mobile

      'md': {'min':'760px'},
      // => @media (min-width: 760px) { ... } tablet

      'lg': {'min':'1024px'},
      // => @media (min-width: 1024px) { ... } desktop and larger

    },
    extend: {},
  },
  plugins: [],
}

