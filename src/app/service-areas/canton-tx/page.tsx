import Link from "next/link";
import type { Metadata } from "next";
import Card from "../../../ui/Card";
import Button from "../../../ui/Button";
import FaqAccordion, { cantonFaqItems } from "../../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Therapist Serving Canton, TX | In-Person & Telehealth | Tascha Reese",
  description:
    "Trauma-informed therapy for Canton, TX residents. In-person sessions at our Dallas office or convenient telehealth. PTSD, anxiety, depression, life transitions, veterans.",
  alternates: {
    canonical: "https://taschareesetherapy.com/service-areas/canton-tx",
  },
  openGraph: {
    title:
      "Therapist Serving Canton, TX | In-Person & Telehealth | Tascha Reese",
    description:
      "PTSD, anxiety, depression, and trauma therapy for Canton residents. In-person in Dallas or telehealth from home.",
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
              Therapy for Canton, TX Residents
            </h1>
            <p className="text-xl text-fg/80 leading-relaxed">
              Compassionate, professional mental health support for residents of
              Canton and the surrounding East Texas communities. Visit my Dallas
              office or connect from home, whatever works best for you.
            </p>
          </div>

          {/* Session Options - Lead with In-Person */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/60 border-2 border-accent/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-fg">
                  In-Person Sessions
                </h2>
              </div>
              <p className="text-fg/80 mb-4">
                Meet face-to-face at my Dallas office—about 60 minutes from
                Canton. Many clients find the dedicated space helpful for deeper
                work.
              </p>
              <address className="not-italic text-fg/70 text-sm border-t border-muted/20 pt-3 mt-3">
                <strong>Office Location:</strong>
                <br />
                11910 Greenville Ave, Suite 511
                <br />
                Dallas, TX 75243
              </address>
            </Card>

            <Card className="bg-white/60">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-surface/50 rounded-full flex items-center justify-center">
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-fg">
                  Telehealth Option
                </h2>
              </div>
              <p className="text-fg/80 mb-4">
                Can&apos;t make the drive? No problem. Secure video sessions
                offer the same quality care from home, work, or anywhere in
                Texas.
              </p>
              <ul className="text-fg/70 text-sm space-y-1">
                <li>✓ HIPAA-compliant platform</li>
                <li>✓ Same evidence-based treatment</li>
                <li>✓ Flexible scheduling</li>
              </ul>
            </Card>
          </div>

          {/* Services Available */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-white/50">
              <h2 className="text-2xl font-semibold text-fg mb-4 text-center">
                Services Available to Canton Residents
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-fg/80">
                <ul className="space-y-2">
                  <li>• PTSD & Trauma Treatment</li>
                  <li>• Anxiety & Depression</li>
                  <li>• Life Transitions & Adjustment</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Relationship Counseling</li>
                  <li>• Anger Management</li>
                  <li>• Veteran & Military Support</li>
                </ul>
              </div>
              <p className="text-sm text-fg/60 mt-4 text-center">
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
                  I&apos;m here to help. Drive to Dallas for in-person sessions
                  or connect from home—your choice.
                </p>
                <p className="text-fg/60 text-base">
                  Also serving residents of{" "}
                  <strong>
                    Tyler, Athens, Terrell, Kaufman, Wills Point, Van, Ben
                    Wheeler, and Edgewood
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* FAQ - Accordion */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-fg mb-6 text-center">
              Questions About Therapy for Canton Residents
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
                name: "Do you see Canton clients in person?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Canton residents can schedule in-person sessions at my Dallas office (about 60 minutes away) or choose telehealth sessions from home.",
                },
              },
              {
                "@type": "Question",
                name: "Is telehealth as effective as in-person therapy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. I use evidence-based approaches (including trauma-informed care) that work equally well via secure video sessions.",
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
                name: "I live in a rural area and feel isolated.Can you help?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Telehealth sessions are available or meeting in Dallas might be better. We can work on coping with isolation, building routines, and staying connected.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
