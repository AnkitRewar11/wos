"use client";

import { useEffect } from "react";

export function ThemeController() {
  useEffect(() => {
    const applySavedTheme = () => {
      const savedTheme = document.cookie.split("; ").find((cookie) => cookie.startsWith("state2566-theme="))?.split("=")[1];
      document.documentElement.dataset.theme = savedTheme === "white" ? "white" : "black";
    };

    applySavedTheme();
  }, []);

  return null;
}
