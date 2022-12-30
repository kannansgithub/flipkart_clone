/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill,minmax(200px,1fr))'
    },
    extend: {
      backgroundImage: {
        'checkbox-checked': "url('/img/checked.svg')"
      },

      width: {
        '90': '20rem'
      },
      height: {
        '90': '22rem'
      },
      colors: {
        primary: '#2874F1',
        secondary: '#fb641b',
        tertiary: '#ff9f00',
        plus: '#ffe500',
        lightgray: '#f1f3f6',
        footer: '#172337',
        fheader: '#878787',
        fborder: '#454d5e',
        rating: '#388e3c'
      },
      fontSize: {
        'md': '16px'
      }

    },
  },
  fontFamily: {
    roboto: ['Roboto', 'Arial', 'sans-serif']
  },

  plugins: [
    function ({ addUtilities })
    {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': 'white',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
