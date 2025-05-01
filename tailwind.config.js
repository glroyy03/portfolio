// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF0000",
          background: "#000000",
          accent: "#FFFFFF"
        }
      }
    },
    plugins: []
  };
  