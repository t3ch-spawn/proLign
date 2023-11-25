/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primOrange: "#FF3B0E",
        overlay: "rgb(0, 0, 0, 0.2)",
        lightOrange : '#FCE3C8'
      },

      fontFamily: {
        grotesk: "Space Grotesk",
      },

      screens: {
        "-1000": { max: "1000px" },
        "-850": { max: "850px" },
        "-800": { max: "800px" },
        "-750": { max: "750px" },
        "-500": { max: "500px" },
        "-450": { max: "450px" },
        "-300": { max: "300px" },
      },
    },
  },
  plugins: [],
};
