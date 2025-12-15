export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { maxWidth: {
      "110rem" : "110rem",
    },
      colors: {
        primary: "#8B5CF6",
        primaryDark: "#6D28D9",
        dark: "#0a0a0a",
      },
      boxShadow: {
        glow: "0 0 25px rgba(139, 92, 246, 0.35)",
      }
    },
  },
  plugins: [],
}
