import Link from "next/link";
import type { Metadata } from "next";
import Card from "../../../ui/Card";
import Button from "../../../ui/Button";
import FaqAccordion, { cantonFaqItems } from "../../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Therapist Serving Canton, TX | Virtual & In-Person | Tascha Reese",
  description:
    "Trauma-informed therapy for Canton, TX residents with flexible virtual sessions and in-person appointments in Dallas. PTSD, anxiety, depression, life transitions, veterans, and more.",
  alternates: {
    canonical: "https://taschareesetherapy.com/service-areas/canton-tx",
  },
  openGraph: {
    title: "Therapist Serving Canton, TX | Virtual & In-Person | Tascha Reese",
    description:
      "PTSD, anxiety, depression, and trauma therapy for Canton residents. Virtual care across East Texas plus in-person sessions in Dallas.",
    url: "https://taschareesetherapy.com/service-areas/canton-tx",
    siteName: "Tascha Reese Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function CantonTXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg via-surface/30 to-bg">
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-accent/20 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-fg/80">
                Serving Canton & East Texas
              </span>
            </div>
            <h1 className="tracking-wider text-5xl font-bold text-fg mb-6 font-serif">
              Virtual Therapy for Canton, TX
            </h1>
            <p className="text-xl text-fg/80 leading-relaxed">
              Compassionate, professional mental health support for residents of
              Canton and the surrounding East Texas communities—all from the
              comfort of your home.
            </p>
          </div>

          {/* Two Column: Virtual Benefits + Services */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/60">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Why Choose Virtual Therapy?
              </h2>
              <ul className="space-y-3 text-fg/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>No commute—save time and gas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Sessions from home, office, or any private space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Same evidence-based treatment as in-person</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>HIPAA-compliant video platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Flexible evenings & weekend scheduling</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white/60">
              <h2 className="text-2xl font-semibold text-fg mb-4">
                Services Available
              </h2>
              <ul className="space-y-2 text-fg/80">
                <li>• PTSD & Trauma Treatment</li>
                <li>• Anxiety & Depression</li>
                <li>• Life Transitions & Adjustment</li>
                <li>• Relationship Counseling</li>
                <li>• Anger Management</li>
                <li>• Veteran & Military Support</li>
              </ul>
              <p className="text-sm text-fg/60 mt-4">
                Adults, veterans, and families welcome.
              </p>
            </Card>
          </div>

          {/* About Canton - With border and larger text */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border border-muted/30 rounded-2xl p-8 bg-white/30">
              <h2 className="text-3xl font-semibold text-fg mb-6 text-center">
                Serving the Canton Community
              </h2>
              <div className="text-fg/80 space-y-5 text-center max-w-3xl mx-auto text-lg leading-relaxed">
                <p>
                  Canton is known for its rich history and the world-famous
                  First Monday Trade Days. As a tight-knit community, residents
                  understand the importance of taking care of one another—and
                  that includes mental health.
                </p>
                <p>
                  Whether you&apos;re dealing with daily stress, processing past
                  trauma, or seeking support during a difficult transition,
                  I&apos;m here to help—without requiring a long drive.
                </p>
                <p className="text-fg/60 text-base">
                  Also serving{" "}
                  <strong>
                    Tyler, Athens, Terrell, Kaufman, Wills Point, Van, Ben
                    Wheeler, and Edgewood
                  </strong>{" "}
                  via secure virtual sessions.
                </p>
              </div>
            </div>
          </div>

          {/* In-Person Option - Compact callout */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/50 border border-accent/30">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-fg"
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
                <h3 className="text-lg font-semibold text-fg mb-1">
                  Prefer In-Person?
                </h3>
                <p className="text-fg/80 text-sm">
                  In-person sessions available at my Dallas office.{" "}
                  <Link
                    href="/service-areas/dallas-tx"
                    className="text-accent hover:text-accent/80 underline"
                  >
                    Learn more →
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* FAQ - Accordion */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-fg mb-6 text-center">
              Questions About Therapy in Canton
            </h2>
            <FaqAccordion items={cantonFaqItems} />
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-fg mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-fg/80 mb-6">
              Schedule a free 15-minute consultation to see if we&apos;re a good
              fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://onwardtherapyandwellness.com/tascha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-fg bg-accent text-fg hover:bg-accent/80"
              >
                Book a Session
              </Link>
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you see clients in person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Virtual therapy is available for Canton residents, and in-person sessions are offered at my Dallas office by appointment.",
                },
              },
              {
                "@type": "Question",
                name: "Is virtual therapy effective for trauma, anxiety, or depression?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. I use evidence-based approaches (including trauma-informed care) that translate well to secure video sessions.",
                },
              },
              {
                "@type": "Question",
                name: "Do you accept insurance for Canton clients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most major plans are accepted. See the Accepted Insurances page or contact me to verify your benefits.",
                },
              },
              {
                "@type": "Question",
                name: "I live in a rural area and feel isolated—can virtual therapy help?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Virtual sessions let you access care without travel, even if you're far from town or prefer to stay home. We can work on coping with isolation, building routines, and staying connected safely.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
