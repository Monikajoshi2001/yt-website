/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ThemeColor: "#165088",
        NavbarIconsColor: "#A1C8EC",
        HomeHeadingColor: "#4c4c4c",
        HomeTextColor: "#6a6a6a",
        ButtonHoverColor: "#096ECD"
        
      },
      fontSize: {
        ClampForHomeHeading: "clamp(1rem, 5vw, 4rem)",
        ClampForHomeText: "clamp(0.25rem, 3vw, 2rem)"
      }
    },
  },
  plugins: [],
}

