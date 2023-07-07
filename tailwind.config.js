/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html",
  "./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')", 
        'LA': "url('../img/LA.jpg')", 
        'seattle': "url('../img/seattle.jpg')", 
        'new_york': "url('../img/new_york.jpg')", 
        'norway': "url('../img/norway.jpg')", 
        'sydney': "url('../img/sydney.jpg')", 
        'miami': "url('../img/miami.jpg')", 
        'switzerland': "url('../img/switzerland.jpg')", 
        'bali': "url('../img/bali.jpg')", 
        'chicago': "url('../img/chicago.jpg')", 
        'europe': "url('../img/europe.jpg')", 
        'iceland': "url('../img/iceland.jpg')",
        'instagram': "url('../img/svg/instagram.svg')", 
        'twitter': "url('../img/svg/twitter.svg')"
      },
      backgroundColor: theme => ({

        ...theme('colors'),
        'primary': '#CC2D4A', 
        'secundary': '#8FA206', 
        'terciary': '#61AEC9'
      }),
      textColor: {

        'primary': '#cc2D4A', 
        'secundary': '#8FA206', 
        'terciary': '#61aec9'

      }, 
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], 
      },
      fill: {

        'primary':'#CC2D4A'
      }
    },
  },

  plugins: [

    require('tailwind-scrollbar-hide')
   

  ],
}

