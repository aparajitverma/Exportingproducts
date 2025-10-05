/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf8f2',
          100: '#f3ecd7',
          200: '#e6d3a8',
          300: '#dabb7b',
          400: '#cfa656',
          500: '#c69749',
          600: '#a77e3d',
          700: '#876531',
          800: '#6a4f27',
          900: '#503c1e',
        },
        ink: '#0b0b0b',
        coal: '#111315',
      },
      boxShadow: {
        glow: '0 0 0 4px rgba(198, 151, 73, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 100% -10%, rgba(198,151,73,0.15), transparent 60%), radial-gradient(800px 400px at 0% 0%, rgba(198,151,73,0.08), transparent 60%)',
      },
    },
  },
  plugins: [],
}
