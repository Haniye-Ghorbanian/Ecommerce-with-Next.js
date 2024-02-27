/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#400D54"
      },
      boxShadow: {
        "myShadow": "box-shadow: -3px -1px 20px 7px rgb(64 13 84 / 28%)"
      }
    },
  },
  plugins: [],
};
