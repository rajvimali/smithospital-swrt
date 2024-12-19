module.exports = {
  content: ["./**/*.html"], // Scan all HTML files for class usage
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#9333ea",
      },
      maxWidth: {
        max-w-[1440px]: "1440px",
        mxmax-w-[1440px]: "1920px",
      },
    },
  },
  plugins: [],
};
