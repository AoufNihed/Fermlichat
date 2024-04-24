/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#00082f",
          "200": "rgba(255, 255, 255, 0.7)",
        },
        darkslategray: "#272c46",
        white: "#fff",
        lightskyblue: "#afbdff",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
