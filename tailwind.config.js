/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        neutral: "#D0D6F9",
      },
      backgroundImage: {
        heroDesktop: "url(./assets/home/background-home-desktop.jpg)",
        heroTablet: "url(./assets/home/background-home-tablet.jpg)",
        heroMobile: "url(./assets/home/background-home-mobile.jpg)",
        destinationDesktop:
          "url(./assets/destination/background-destination-desktop.jpg)",
        destinationTablet:
          "url(./assets/destination/background-destination-tablet.jpg)",
        destinationMobile:
          "url(./assets/destination/background-destination-mobile.jpg)",
        crewMobile: "url(./assets/crew/background-crew-mobile.jpg)",
        crewTablet: "url(./assets/crew/background-crew-tablet.jpg)",
        crewDesktop: "url(./assets/crew/background-crew-desktop.jpg)",
        techDesktop:
          "url(./assets/technology/background-technology-desktop.jpg)",
        techTablet: "url(./assets/technology/background-technology-tablet.jpg)",
        techMobile: "url(./assets/technology/background-technology-mobile.jpg)",
      },
    },
  },
  plugins: [],
};
