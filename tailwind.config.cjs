module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-sage",
    "bg-sunset",
    "bg-tan",
    "bg-darkCyan",
    "bg-roseTaupe",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#cacaaa",
        sunset: "#eec584",
        tan: "#c8ab83",
        darkCyan: "#55868c",
        roseTaupe: "#7f636e",
      },
    },
  },
  plugins: [],
};
