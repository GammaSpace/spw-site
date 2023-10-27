/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bodyBg: "#f6f2ec",
        mazeGreen: "#3ca14b",
        boxYellow: "#fdfec8"
      }
    },
  },
  plugins: [],
}

