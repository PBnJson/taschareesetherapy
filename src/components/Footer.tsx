import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="container place-items-center py-10 grid gap-8 md:grid-cols-3">
        <div className="place-items-center">
          <h3 className="font-semibold text-brand-700">Tascha Reese</h3>
          <p className="mt-3 text-sm text-gray-600">
            Compassionate therapy available for you.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-brand-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm text-gray-600">
            Dallas–Fort Worth, TX
            <br />
            <a href="mailto:hello@example.com" className="hover:text-brand-700">
              hello@example.com
            </a>
            <br />
            (555) 123-4567
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Tascha Reese. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
