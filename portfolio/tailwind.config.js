export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "110rem": "110rem",
      },
      colors: {
        primary: "#8B5CF6",
        primaryDark: "#6D28D9",
        dark: "#0a0a0a",

        // theme colors (kaytbdlo b dark/light)
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        content: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(139, 92, 246, 0.35)",
      },
    },
  },
  plugins: [],
}