"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Theme = "quiet" | "silt" | "accessible";

export function ThemeToggle() {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<Theme>("quiet");

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Set default theme based on screen size on initial load
      if (theme === "quiet" || theme === "silt") {
        setTheme(mobile ? "quiet" : "silt");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 rounded-xl border border-muted bg-surface/90 p-2 shadow-lg">
      {/* Mobile: Quiet + Accessible */}
      {isMobile && (
        <>
          <button
            onClick={() => setTheme("quiet")}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              theme === "quiet" ? "bg-accent text-white" : "hover:bg-bg text-fg"
            }`}
            aria-label="Quiet theme"
            aria-pressed={theme === "quiet"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </button>
        </>
      )}

      {/* Desktop: Silt + Accessible */}
      {!isMobile && (
        <>
          <button
            onClick={() => setTheme("silt")}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              theme === "silt" ? "bg-accent text-white" : "hover:bg-bg text-fg"
            }`}
            aria-label="Silt theme"
            aria-pressed={theme === "silt"}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </>
      )}

      {/* Both: Accessible */}
      <button
        onClick={() => setTheme("accessible")}
        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
          theme === "accessible"
            ? "bg-accent text-white"
            : "hover:bg-bg text-fg"
        }`}
        aria-label="Accessible theme"
        aria-pressed={theme === "accessible"}
      >
        <Image
          src="/images/low_vision_access.svg"
          alt="Accessible theme"
          width={50}
          height={50}
          priority={true}
          className="p-2"
        />
      </button>
    </div>
  );
}
