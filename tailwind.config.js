/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7F5AF0",
          light: "#A68DFF",
        },
        accent: "#F0A35A",
      },
    },
  },
  plugins: [],
}
