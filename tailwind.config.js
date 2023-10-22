/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Red':'#D62828',
        'Dark_Blue':'#003049',
        'Orange':'#F77F00',
        'xanthous':'#FCBF49',
        'Vanilla':'#EAE2B7'
      }
    },
  },
  plugins: [],
}

