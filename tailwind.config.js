/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dioza: {
          red: "#b91c1c",
          deep: "#151313",
          cream: "#fff7e8",
          gold: "#d9a441",
          tomato: "#ef3b2d"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(21, 19, 19, 0.14)"
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
