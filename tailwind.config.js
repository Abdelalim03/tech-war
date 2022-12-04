/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      colors: {
        "background": "#0C0E24",
        "tech_button":"#332FD0",
        "main_title":"linear-gradient(90.51deg, #3494E6 -0.9%, #272499 112.96%)"
      },
        animation: {
          'spin-slow': 'spin 20s linear infinite',
        }
    },
  },
  plugins: [],
}
