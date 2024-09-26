/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-logo": "#000000",
        header: "#F3F3F3",
        "header-text": "#000000",
        "primary-button": "#2042B9",
        "section-text": "#5E3BEE",
        "section-button": "#5E3BEE",
        "section-button-hover": "#4B2BC4",
        "section-stack": "#27272A",
        "white-text": "#F5FCFF",
        "section-card": "#2B2B39",
        "hover-link": "#27272A",
        "about-me-white": "#FAFAFE",
        "card-desc": "#1C1E53",
        "card-link": "#2042B9",
      },
      boxShadow: {
        header: "0px 10px 50px rgba(0, 0, 0, 0.2)",
      },
      transitionDelay: {
        "delay-100": "100ms",
      },
      transitionProperty: {
        dark: "background-color, border-color, text-decoration-color, color, fill, stroke",
      },
    },
  },
  plugins: [],
};
