/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "binance-dark": "#181A20",
        "binance-yellow": "#F0B90B",
        "binance-light-yellow" : "#FCD535",
        "binance-slight-dark" : "#2B3139"
      },
      fontFamily: {
        "binance-plex": ["Binance", "sans-serif"],
      },
      colors: {
        "binance-light": "#EAECEF",
        "binance-yellow": "#F0B90B",
        "binance-dark": "#181A20",
      },
      lineHeight: {
        64: "64px",
      },
      width: {
        132: "132px",
      },
      height: {
        64: "64px",
      },
    },
  },
  plugins: [],
};
