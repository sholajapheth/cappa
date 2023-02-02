/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        pri: "#014157",
        sec: "rgb(0, 84, 112)",
      },
      fontFamily: {
        kau: ["'Kaushan Script'", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
