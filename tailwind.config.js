const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Put font family name here
      fontFamily: {
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
