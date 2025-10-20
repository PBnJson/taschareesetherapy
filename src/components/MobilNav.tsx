"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobilNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  pathname === link.href
                    ? "text-brand-700 font-medium"
                    : "text-gray-700 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-center mt-3"
              onClick={() => setOpen(false)}
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
