 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Kanit: ["Kanit", "serif"]
    },
    colors: {
      som :"#FF974E",
      dum :"#282828",
    },
    backgroundImage: {
      'BG': "url('img/BG GOMODE.png')",
      'BGG': "url('img/ky.png')",
      'KY':"url('img/k6y.png')",
    }

    },
  },
  plugins: [],
}