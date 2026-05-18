/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dioza: {
          red: '#b91c1c',
          tomato: '#e43d30',
          cream: '#fff7e8',
          deep: '#161211',
          gold: '#d9a441',
          olive: '#596138',
        },
      },
      boxShadow: {
        soft: '0 22px 60px rgba(22, 18, 17, 0.14)',
        glow: '0 20px 50px rgba(185, 28, 28, 0.25)',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
