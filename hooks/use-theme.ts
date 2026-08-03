"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const saved =
      (localStorage.getItem("theme") as "light" | "dark") ?? "light";

    setThemeState(saved);

    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const setTheme = (value: "light" | "dark") => {
    setThemeState(value);

    localStorage.setItem("theme", value);

    document.documentElement.classList.toggle("dark", value === "dark");
  };

  return {
    theme,
    setTheme,
    mounted: theme !== null,
  };
}
