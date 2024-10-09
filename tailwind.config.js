/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust this path as needed

  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(22, 65%, 57%)',
          200: 'hsl(0, 0%, 6%)',
          300: 'hsl(0, 0%, 95%)',
          400: 'hsl(0, 0%, 98%)',
          500: 'hsl(0, 0%, 89%)',
          600: 'hsl(0, 0%, 81%)',
        },
        secondary: {
          100: 'hsl(21, 94%, 75%)',
          200: 'hsl(0, 0%, 100%)',
          300: 'hsl(0, 0%, 0%)',
          400: 'hsl(0, 0%, 10%)',
          500: 'hsl(0, 0%, 95%)',
          600: 'hsl(0, 0%, 90%)',
          700: 'hsl(0, 0%, 48%)',
        },
        background: 'hsl(0, 0%, 98%)', 
        third: 'hsl(0, 0%, 81%)', 
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        light: '200',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      maxWidth: {
        'max-container': '69.375rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
