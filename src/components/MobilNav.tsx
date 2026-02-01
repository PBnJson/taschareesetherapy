"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home", type: "scroll" },
  { href: "#about", label: "About", type: "scroll" },
  { href: "#services", label: "Services", type: "scroll" },
  { href: "/insurances", label: "Insurances", type: "link" },
  { href: "#contact", label: "Contact", type: "scroll" },
  {
    href: "/legal",
    label: "Professional Accountability and Client Rights",
    type: "link",
    sizeClass: "text-xs",
  },
];

const serviceAreas = [
  { name: "Canton, TX", slug: "canton-tx" },
  { name: "Dallas, TX", slug: "dallas-tx" },
];

export function MobilNav() {
  const [open, setOpen] = useState(false);
  const [serviceAreaOpen, setServiceAreaOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="btn-outline px-3 py-1.5 text-sm"
        aria-label="Toggle menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 border-t border-gray-200 bg-white shadow-md">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((link) =>
              link.type === "scroll" ? (
                <a
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className={`${link.sizeClass ?? "text-sm"} text-gray-700 hover:text-brand-700 cursor-pointer`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${link.sizeClass ?? "text-sm"} text-gray-700 hover:text-brand-700 cursor-pointer`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Service Area Dropdown */}
            <div>
              <button
                onClick={() => setServiceAreaOpen(!serviceAreaOpen)}
                className="text-sm text-gray-700 hover:text-brand-700 cursor-pointer flex items-center gap-1 w-full text-left"
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
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="text-sm text-gray-600 hover:text-brand-700"
                      onClick={() => {
                        setServiceAreaOpen(false);
                        setOpen(false);
                      }}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              onClick={(e) => handleScrollLink(e, "#contact")}
              className="btn-primary text-center mt-3 cursor-pointer"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
