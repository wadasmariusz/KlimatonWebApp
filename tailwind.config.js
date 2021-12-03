module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "media", // or 'media' or 'class' or false to turn off dark mode
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#151B29",
        "primary-dark": "#111622",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
