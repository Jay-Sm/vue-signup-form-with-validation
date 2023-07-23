/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        formRed: 'hsl(0, 100%, 74%) ',
        formGreen: 'hsl(154, 59%, 51%)',
        formPurple: 'hsl(248, 32%, 49%)',
        formDarkBlue: 'hsl(249, 10%, 26%)',
        formGreyishBlue: 'hsl(246, 25%, 77%)'
      },
      dropShadow: {
        'solid': '0 8px 0px rgba(0, 0, 0, 0.20)',
      }
    }
  },
  plugins: []
}
