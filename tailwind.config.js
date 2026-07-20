/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "rgb(241, 237, 224)",
          light: "rgb(248, 246, 239)",
          dark: "rgb(230, 224, 205)",
        },
        verde: {
          DEFAULT: "rgb(178, 177, 124)",
          light: "rgb(197, 196, 152)",
          dark: "rgb(150, 149, 100)",
        },
        cafe: {
          DEFAULT: "rgb(185, 165, 137)",
          light: "rgb(205, 189, 166)",
          dark: "rgb(155, 133, 105)",
        },
        tinta: {
          DEFAULT: "rgb(46, 38, 31)",
        },
      },
      fontFamily: {
        nectarine: ["Nectarine", "serif"],
        anticdidone: ["Antic Didone", "serif"],
        fraunces: ["Fraunces", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
