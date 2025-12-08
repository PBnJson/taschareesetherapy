"use client";

import Link from "next/link";
import Card from "../../../ui/Card";
import Button from "../../../ui/Button";

export default function DallasTXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface/30 to-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-accent/20 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-fg/80">
                Service Area
              </span>
            </div>
            <h1 className="text-5xl font-bold text-fg mb-6 font-serif">
              Therapy Services in Dallas, TX
            </h1>
            <p className="text-xl text-fg/80 leading-relaxed">
              Professional mental health support for Dallas residents—available
              both virtually and in-person at our convenient Greenville Avenue
              location.
            </p>
          </div>

          {/* In-Person Notice */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-accent/30 to-surface/50 border-2 border-accent/40">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-fg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-fg mb-2">
                    In-Person Sessions Available
                  </h2>
                  <p className="text-fg/80 mb-3">
                    Prefer face-to-face therapy? I offer in-person sessions at
                    my Dallas office location:
                  </p>
                  <address className="not-italic text-fg/80 mb-3">
                    <strong>Onward Therapy & Wellness</strong>
                    <br />
                    11910 Greenville Ave, Suite 511
                    <br />
                    Dallas, TX 75243
                  </address>
                  <p className="text-sm text-fg/60 italic">
                    * In-person sessions available by appointment only
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/60">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Choose Your Session Type
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-surface/30 border border-muted/20">
                  <h3 className="font-semibold text-fg mb-2 flex items-center gap-2">
                    <span className="text-accent">●</span> In-Person Therapy
                  </h3>
                  <p className="text-fg/80 text-sm">
                    Traditional face-to-face sessions at my Greenville Avenue
                    office. Ideal for those who prefer a dedicated therapeutic
                    space outside the home.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface/30 border border-muted/20">
                  <h3 className="font-semibold text-fg mb-2 flex items-center gap-2">
                    <span className="text-accent">●</span> Virtual Therapy
                  </h3>
                  <p className="text-fg/80 text-sm">
                    Secure video sessions from anywhere in Texas. Perfect for
                    busy schedules, mobility concerns, or simply the comfort of
                    home.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/60">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Services Available
              </h2>
              <ul className="space-y-3 text-fg/80">
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>PTSD & Trauma Treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Anxiety & Depression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Life Transitions & Adjustment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Relationship Counseling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Anger Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted mt-1">•</span>
                  <span>Veteran & Military Support</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* About Dallas */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-surface/50 to-accent/10">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Serving the Dallas Metroplex
              </h2>
              <p className="text-fg/80 mb-4">
                Dallas is a vibrant, fast-paced city—and with that comes unique
                stressors. Whether you&apos;re navigating career pressures,
                relationship challenges, or working through past trauma, having
                professional support makes all the difference.
              </p>
              <p className="text-fg/80">
                My office is conveniently located near the intersection of
                Greenville Avenue and Forest Lane, with easy access from{" "}
                <strong>
                  Richardson, Plano, Garland, Mesquite, and surrounding DFW
                  communities
                </strong>
                .
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-fg mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-fg/80 mb-6">
              Take the first step toward feeling better. Schedule a free
              15-minute consultation to see if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://onwardtherapyandwellness.com/tascha/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                variant="cta"
                className="border-2 border-fg bg-accent text-fg hover:bg-accent/80"
              >
                Book a Session
              </Button>
              <Link href="/#contact">
                <Button
                  variant="primary"
                  className="border-2 border-fg bg-transparent text-fg hover:bg-fg/10 w-full"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
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
