"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null); // `null` prevents initial mismatch

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);

    // Listen for system changes if user hasn't chosen manually
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  if (isDark === null) return null; // ✅ Avoid rendering mismatched DOM until hydrated

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="transition-all duration-300 p-2 rounded-full shadow-md bg-white dark:bg-zinc-800 hover:scale-105 focus:outline-none flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <FiMoon className="text-zinc-300 text-2xl" />
      ) : (
        <FiSun className="text-yellow-400 text-2xl" />
      )}
    </button>
  );
};

export default DarkMode;
