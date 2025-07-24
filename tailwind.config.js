// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./node_modules/shadcn-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter Tight"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tw-animate-css"),
  ],
};
