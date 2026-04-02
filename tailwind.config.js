/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#eef7f1',
          100: '#d7eadc',
          200: '#b2d7bd',
          300: '#8ac39e',
          400: '#5ca87a',
          500: '#3d895f',
          600: '#2d6f4b',
          700: '#23583c',
          800: '#1d4630',
          900: '#183a28',
        },
        iris: {
          50: '#f5f2ff',
          100: '#ece5ff',
          200: '#ddd0ff',
          300: '#c5b0ff',
          400: '#aa88ff',
          500: '#8d5ef8',
          600: '#7842df',
          700: '#6430ba',
          800: '#542b97',
          900: '#46287a',
        },
        sand: '#c6904b',
        ink: '#17201b',
        mist: '#f5f4ef',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
        display: ['Manrope', '"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(23, 32, 27, 0.08)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top left, rgba(61,137,95,0.18), transparent 36%), radial-gradient(circle at 80% 20%, rgba(141,94,248,0.12), transparent 28%), radial-gradient(circle at bottom right, rgba(198,144,75,0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
}
