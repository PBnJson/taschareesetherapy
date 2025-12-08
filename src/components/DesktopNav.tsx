"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";

const links = [
  { href: "#home", label: "Home", type: "scroll" },
  { href: "#about", label: "About", type: "scroll" },
  { href: "#services", label: "Services", type: "scroll" },
  { href: "/insurances", label: "Insurances", type: "link" },
  { href: "#contact", label: "Contact", type: "scroll" },
];

const serviceAreas = [
  { name: "Canton, TX", slug: "canton-tx" },
  { name: "Dallas, TX", slug: "dallas-tx" },
];

export function DesktopNav() {
  const [serviceAreaOpen, setServiceAreaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServiceAreaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // If we're on the homepage, scroll smoothly
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on another page, navigate to homepage with hash
      router.push(`/${href}`);
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-6 mr-8">
      {links.map((link) =>
        link.type === "scroll" ? (
          <a
            key={link.href}
            href={pathname === "/" ? link.href : `/${link.href}`}
            onClick={(e) => handleScrollLink(e, link.href)}
            className="text-sm transition text-muted hover:text-fg cursor-pointer font-medium"
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition text-muted hover:text-fg cursor-pointer font-medium"
          >
            {link.label}
          </Link>
        )
      )}

      {/* Service Area Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setServiceAreaOpen(!serviceAreaOpen)}
          className="text-sm transition text-muted hover:text-fg cursor-pointer font-medium flex items-center gap-1"
        >
          Service Areas
          <svg
            className={`w-4 h-4 transition-transform ${serviceAreaOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {serviceAreaOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-muted/20 py-2 z-50">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="block px-4 py-2 text-sm text-fg/80 hover:bg-surface/50 hover:text-fg transition-colors"
                onClick={() => setServiceAreaOpen(false)}
              >
                {area.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Button
        onClick={() =>
          window.open(
            "https://onwardtherapyandwellness.com/tascha/",
            "_blank",
            "noopener,noreferrer"
          )
        }
        className="z-50 px-4 py-2 ml-2 cursor-pointer rounded-lg border-2 border-fg bg-accent text-fg font-semibold hover:bg-accent/80 transition-colors"
      >
        Book Now
      </Button>
    </nav>
  );
}
