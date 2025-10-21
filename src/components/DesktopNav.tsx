"use client";

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
    <nav className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
          className="text-sm transition text-gray-600 hover:text-brand-700 cursor-pointer"
        >
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        onClick={(e) => scrollToSection(e, "#contact")}
        className="btn-primary ml-2 cursor-pointer"
      >
        Book a Session
      </a>
    </nav>
  );
}
