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
    extend: {
      colors: {
        "light-grey": "#FCFBFB",
        "mid-grey": "#FAF7F8",
      },
      boxShadow: {
        regular: "0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
