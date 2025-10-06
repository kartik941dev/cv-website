"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) setIsDark(stored === "dark");
      else setIsDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    } catch {}
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    const root = document.documentElement;
    try {
      if (isDark) {
        root.classList.remove("light");
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    } catch {}
  }, [isDark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 text-sm"
      onClick={() => setIsDark((v) => !(v ?? false))}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}


