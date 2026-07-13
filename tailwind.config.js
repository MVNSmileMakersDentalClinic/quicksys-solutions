/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8fb",
          100: "#d5eef5",
          200: "#aedce9",
          300: "#78c2d7",
          400: "#3f9fbc",
          500: "#2683a1",
          600: "#226986",
          700: "#22576e",
          800: "#24495c",
          900: "#223e4e",
          950: "#142833",
        },
        ink: {
          50: "#f4f7f8",
          900: "#0f1b22",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
