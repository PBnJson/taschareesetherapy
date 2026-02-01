import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start text-center md:text-left">
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/tascha_logo.png"
              alt="Tascha Reese Therapy Logo"
              width={180}
              height={160}
              className="object-contain"
            />
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-700 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-700 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-700 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-xs hover:text-brand-700 transition-colors"
                >
                  Professional Accountability and Client Rights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (CRITICAL FOR GOOGLE) */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Contact & Location
            </h4>
            <address className="text-sm text-gray-600 not-italic space-y-3">
              <p>
                <strong className="block text-gray-900">
                  Tascha Reese, LCSW
                </strong>
                <span className="text-xs text-gray-500">
                  (Inside Onward Therapy & Wellness)
                </span>
              </p>

              <p>
                11910 Greenville Ave, Suite 511
                <br />
                Dallas, TX 75243
              </p>

              <p className="text-xs text-gray-500 pt-1">
                * In-person appointments available by request
              </p>

              <div className="pt-2 space-y-1">
                <a
                  href="mailto:taschareese@taschareesetherapy.com"
                  className="block hover:text-brand-700 transition-colors"
                >
                  taschareese@taschareesetherapy.com
                </a>
                <a
                  href="tel:9033726883"
                  className="block hover:text-brand-700 transition-colors"
                >
                  (903) 372-6883
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-4 text-center md:text-left text-xs text-gray-500">
          © {new Date().getFullYear()} Tascha Reese, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
