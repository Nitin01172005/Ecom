/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:"#fea928",
        secondary: "#ead900"
      },
      container:{
        center: true,
        padding: {
          DEFAULT:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
}

