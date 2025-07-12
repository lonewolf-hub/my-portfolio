"use client";

import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 p-2 rounded-full shadow-md bg-white dark:bg-zinc-800 hover:scale-105 focus:outline-none flex items-center justify-center"
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
