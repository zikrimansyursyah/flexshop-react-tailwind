module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        headline1: "url('/src/img/headline1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
