module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: "'Karla', sans-serif;",
        impact: "'Impact', sans-serif;"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}