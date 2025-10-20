"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition ${
            pathname === link.href
              ? "text-brand-700 font-semibold"
              : "text-gray-600 hover:text-brand-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <Link href="/contact" className="btn-primary ml-2">
        Book a Session
      </Link>
    </nav>
  );
}
