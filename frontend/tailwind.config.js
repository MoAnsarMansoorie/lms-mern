/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-small" : ["26px", "36px"],
        "course-details-heading-large" : ["36px", "48px"],
        "home-heading-small" : ["28px", "34px"],
        "home-heading-large" : ["48px", "56px"],
        "default" : ["16px", "24px"],
        "default-small" : ["14px", "20px"],
        "default-large" : ["20px", "28px"],
      },
    },
  },
  plugins: [],
}