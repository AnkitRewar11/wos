"use client";

import { useEffect, useState } from "react";
import { Asleep, Light } from "@carbon/icons-react";

type ThemeMode = "white" | "black";

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("black");

  useEffect(() => {
    const saved = document.cookie.split("; ").find((cookie) => cookie.startsWith("state2566-theme="))?.split("=")[1];
    if (saved === "white" || saved === "black") {
      setMode(saved);
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  function toggleTheme() {
    const nextMode = mode === "black" ? "white" : "black";
    setMode(nextMode);
    document.cookie = `state2566-theme=${nextMode}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.dataset.theme = nextMode;
  }

  return <button className="theme-toggle" type="button" data-theme-toggle onClick={toggleTheme} aria-label={`Switch to ${mode === "black" ? "white" : "black"} theme`}>
      {mode === "black" ? <Light size={16} /> : <Asleep size={16} />}
      <span>{mode === "black" ? "White theme" : "Black theme"}</span>
    </button>;
}
