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
          50: "#f7fafc",
          100: "#eef3f7",
          200: "#dce5ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, -18px) scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-up-delay": "fade-up 0.8s ease-out 0.15s both",
        "fade-up-delay-2": "fade-up 0.8s ease-out 0.3s both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};
