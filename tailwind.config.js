/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef3f8",
          100: "#d5e1ec",
          200: "#a9c3d9",
          300: "#6f96b8",
          400: "#3d6f96",
          500: "#1f4f78",
          600: "#163d5e",
          700: "#11304b",
          800: "#0e2740",
          900: "#0b1f33",
          950: "#07141f",
        },
        ice: {
          50: "#eefbff",
          100: "#d5f4fc",
          200: "#aee9f8",
          300: "#76d7f0",
          400: "#34bde0",
          500: "#00a8c8",
          600: "#0087a8",
          700: "#066c88",
          800: "#0b586f",
          900: "#0e495d",
        },
        amber: {
          50: "#fff8eb",
          100: "#ffecc6",
          200: "#ffd788",
          300: "#ffbd4a",
          400: "#f5a524",
          500: "#e0890c",
          600: "#c46807",
          700: "#9c480a",
          800: "#803910",
          900: "#6c2f11",
        },
        frost: {
          50: "#f5f8fb",
          100: "#e8eef4",
          200: "#d0dbe7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
