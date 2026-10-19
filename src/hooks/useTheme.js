import { useState, useEffect } from "react";

export const ACCENT_PALETTES = {
  violet: {
    name: "Violet",
    primary: "#8B5CF6",
    primaryDark: "#7C3AED",
    primaryLight: "#A78BFA",
    preview: "bg-[#8B5CF6]"
  },
  emerald: {
    name: "Emerald",
    primary: "#10B981",
    primaryDark: "#059669",
    primaryLight: "#34D399",
    preview: "bg-[#10B981]"
  },
  cyan: {
    name: "Cyan",
    primary: "#06B6D4",
    primaryDark: "#0891B2",
    primaryLight: "#22D3EE",
    preview: "bg-[#06B6D4]"
  },
  amber: {
    name: "Amber",
    primary: "#F59E0B",
    primaryDark: "#D97706",
    primaryLight: "#FBBF24",
    preview: "bg-[#F59E0B]"
  },
  rose: {
    name: "Rose",
    primary: "#F43F5E",
    primaryDark: "#E11D48",
    primaryLight: "#FB7185",
    preview: "bg-[#F43F5E]"
  },
  blue: {
    name: "Cobalt",
    primary: "#3B82F6",
    primaryDark: "#2563EB",
    primaryLight: "#60A5FA",
    preview: "bg-[#3B82F6]"
  }
};

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [accent, setAccentState] = useState(
    () => localStorage.getItem("portfolio_accent") || "violet"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const palette = ACCENT_PALETTES[accent] || ACCENT_PALETTES.violet;
    const root = document.documentElement;
    root.style.setProperty("--primary", palette.primary);
    root.style.setProperty("--primary-dark", palette.primaryDark);
    root.style.setProperty("--primary-light", palette.primaryLight);
    localStorage.setItem("portfolio_accent", accent);
  }, [accent]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setAccent = (key) => {
    if (ACCENT_PALETTES[key]) {
      setAccentState(key);
    }
  };

  return { theme, toggle, accent, setAccent, accents: ACCENT_PALETTES };
}
