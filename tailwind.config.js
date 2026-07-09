/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        line: "#2f3336",
        muted: "#71767b",
        soft: "#eff3f4",
        brand: "#1d9bf0"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 18px rgba(239, 243, 244, 0.55)"
      }
    }
  },
  plugins: []
};
