"use client";

import Button from "../ui/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function DesktopNav() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-6 mr-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
          className="text-sm transition text-muted hover:text-fg cursor-pointer font-medium"
        >
          {link.label}
        </a>
      ))}
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
