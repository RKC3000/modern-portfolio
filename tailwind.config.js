/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
        reverse: "spin 3s linear reverse infinite",
        "arc-core": "pulse 0.2s infinite",
      },
    },
    fontFamily: {
      stark: ["Roboto Mono"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
