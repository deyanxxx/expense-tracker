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
      // => @media (min-width: 320px & max-width: 639px) { ... }

      'sm': {'min':'640px', 'max':'767px'},
      // => @media (min-width: 640px & max-width: 766px) { ... }

      'md': {'min':'768px', 'max':'1023px'},
      // => @media (min-width: 768px & max-width: 1023px) { ... }

      'lg': {'min':'1024px', 'max':'1279px'},
      // => @media (min-width: 1024px & max-width: 1279px) { ... }

      'xl': {'min':'1280px', 'max':'1532px'},
      // => @media (min-width: 1280px & max-width: 1532px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

