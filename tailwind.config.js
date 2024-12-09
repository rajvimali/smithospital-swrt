module.exports = {
  content: ["./**/*.html"], // Scan all HTML files for class usage
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#9333ea",
      },
      maxWidth: {
        container: "1440px",
        mxcontainer: "1920px",
      },
    },
  },
  plugins: [],
};
