/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors — edit these two hex values to re-theme the whole
        // site (buttons, links, logo badge, gradient text, hero background).
        primary: {
          DEFAULT: "#1d5fd1",
          foreground: "#ffffff",
        },
        "primary-glow": "#38bdf8",
        border: "#dbe3ee",
        muted: {
          foreground: "#5b6779",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
