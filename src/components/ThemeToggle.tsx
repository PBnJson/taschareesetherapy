"use client";
import { useEffect, useState } from "react";

type Theme = "quiet" | "silt";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("quiet");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 rounded-xl border border-muted bg-surface/90 px-2 py-2 shadow">
      <button
        onClick={() => setTheme("quiet")}
        className={`rounded-lg px-3 py-1 text-sm ${
          theme === "quiet" ? "bg-accent text-white" : "hover:bg-bg"
        }`}
        aria-pressed={theme === "quiet"}
      >
        Quiet
      </button>
      <button
        onClick={() => setTheme("silt")}
        className={`rounded-lg px-3 py-1 text-sm ${
          theme === "silt" ? "bg-accent text-white" : "hover:bg-bg"
        }`}
        aria-pressed={theme === "silt"}
      >
        Silt
      </button>
    </div>
  );
}
