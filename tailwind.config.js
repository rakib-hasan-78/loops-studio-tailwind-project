/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      xs:'480px',
      sm:'650px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        sans:['Josefin Sans', 'sans-serif'],
        alata:['Alata']
      }
    },
  },
  plugins: [],
}

