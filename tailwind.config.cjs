/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-home-desktop":
          "url('/src/assets/home/background-home-desktop.jpg')",
        "background-home-tablet":
          "url('/src/assets/home/background-home-tablet.jpg')",
        "background-home-mobile":
          "url('/src/assets/home/background-home-mobile.jpg')",

        "background-destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "background-destination-tablet":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "background-destination-mobile":
          "url('/src/assets/destination/background-destination-mobile.jpg')",

        "background-crew-desktop":
          "url('/src/assets/crew/background-crew-desktop.jpg')",
        "background-crew-tablet":
          "url('/src/assets/crew/background-crew-tablet.jpg')",
        "background-crew-mobile":
          "url('/src/assets/crew/background-crew-mobile.jpg')",

        "background-technology-desktop":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        "background-technology-tablet":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "background-technology-mobile":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
    },
    screens: {
      xxs: "376px",
      // => @media (min-width: 300px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      customxl: "1380px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#0B0D17",
      secondary: "#D0D6F9",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
