/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home-desktop":
          "url('/src/assets/home/background-home-desktop.jpg')",
      },
    },
    colors: {
      primary: "#0B0D17",
      secondary: "#D0D6F9",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
