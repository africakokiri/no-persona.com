"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const DarkmodeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      className={className}
    >
      {theme === "dark" ? (
        <SunIcon strokeWidth={1} />
      ) : (
        <MoonIcon strokeWidth={1} />
      )}
    </button>
  );
};
