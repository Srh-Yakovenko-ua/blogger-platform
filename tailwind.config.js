module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#F8346B",
      "font-color-black": "#1A1718",
      "font-color-grey": "#737067",
      "background-white": "#FCFBFB",
      "background-grey": "#FAF7F8",
      "link-color": "#3677F7",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      full: "50%",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
