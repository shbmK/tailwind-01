/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html','./public/index.js' ],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363'
      },
      fontFamily:{
        rmono:['Roboto Mono']
      }
    },
  },
  plugins: [],
}

