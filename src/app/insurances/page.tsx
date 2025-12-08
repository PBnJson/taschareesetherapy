"use client";

import Link from "next/link";
import Card from "../../ui/Card";

const insurances = [
  { name: "Aetna", logo: null },
  { name: "Anthem", logo: null },
  { name: "Blue Cross Blue Shield", logo: null },
  { name: "Carelon Behavioral Health", logo: null },
  { name: "Cigna and Evernorth", logo: null },
  { name: "First Health", logo: null },
  { name: "Meritain Health", logo: null },
  { name: "Optum", logo: null },
  { name: "Oscar Health", logo: null },
  { name: "United Medical Resources (UMR)", logo: null },
  { name: "United Healthcare UHC | UBH", logo: null },
  { name: "Baylor Scott & White", logo: null },
];

export default function InsurancesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface/30 to-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-fg mb-6 font-serif">
              Accepted Insurances
            </h1>
            <p className="text-xl text-fg/80 leading-relaxed">
              I accept most major insurance plans to make therapy accessible. If
              you don&apos;t see your insurance listed, please{" "}
              <Link
                href="/#contact"
                className="text-accent underline hover:text-accent/80"
              >
                contact me
              </Link>{" "}
              to discuss options.
            </p>
          </div>

          {/* Insurance Grid */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/60">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {insurances.map((insurance) => (
                  <div
                    key={insurance.name}
                    className="flex items-center justify-center p-4 rounded-lg bg-surface/30 border border-muted/20 hover:bg-surface/50 transition-colors"
                  >
                    <span className="text-fg font-medium text-center">
                      {insurance.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Card className="bg-gradient-to-br from-surface/50 to-accent/10">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Insurance Questions?
              </h2>
              <p className="text-fg/80 mb-4">
                Insurance coverage can be confusing. I&apos;m happy to help
                verify your benefits before your first session. Many plans cover
                100% of therapy costs after your deductible is met.
              </p>
              <p className="text-fg/80">
                <strong>Self-pay options</strong> are also available for those
                without insurance or who prefer not to use it.
              </p>
            </Card>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-muted hover:text-fg transition-colors underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
