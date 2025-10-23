"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { InlineWidget } from "react-calendly";
import Image from "next/image";

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-surface via-accent to-muted">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-6 pl-2 pr-2 md:grid-cols-2">
            <div className="text-fg">
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl font-serif">
                Welcome Home to Healing
              </h1>

              <p className="mb-8 text-xl md:text-2xl italic font-serif/normal text-fg/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                repellat consectetur magni maiores amet earum
              </p>

              <p className="mb-8 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                consequatur dolores repellat tenetur. Perferendis aperiam sed
                provident animi nihil rerum expedita corporis culpa molestias
                impedit.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => setIsModalOpen(true)}>
                  Book a Session
                </Button>
                <Button variant="primary">Learn About Services</Button>
              </div>
            </div>

            <div className="relative mx-auto w-fit">
              <div className="overflow-hidden rounded-3xl border-8 border-fg/10 bg-fg/5 backdrop-blur-sm">
                <Image
                  src={"/images/tascha_credentials.jpeg"}
                  width={300}
                  height={400}
                  alt="Tascha sitting and smiling with credentials behind her."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-bg py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-fg">
                Veteran-Focused
              </h3>
              <p className="text-muted">
                Specialized understanding of military culture and challenges
              </p>
            </div>

            <div className="p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface/30">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-fg">
                100% Virtual
              </h3>
              <p className="text-muted">
                Connect from the comfort and privacy of your own space
              </p>
            </div>

            <div className="p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fg/10">
                <svg
                  className="h-8 w-8 text-fg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-fg">
                Compassionate Care
              </h3>
              <p className="text-muted">
                A judgment-free environment where you can be yourself
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-bg to-surface py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-fg font-serif">
            What Veterans Are Saying
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-accent bg-surface/50 p-8 shadow-lg">
              <p className="mb-4 italic text-fg/90 font-serif">
                &quot;After struggling for years, I finally found someone who
                gets it. The virtual sessions made it so much easier to open up.
                I&apos;m sleeping better and my family says I&apos;m more
                present.&quot;
              </p>
              <p className="font-semibold text-fg">- Marine Corps Veteran</p>
            </div>

            <div className="rounded-2xl border-l-4 border-muted bg-surface/50 p-8 shadow-lg">
              <p className="mb-4 italic text-fg/90 font-serif">
                &quot;I was skeptical about online therapy, but being able to
                talk from home made all the difference. She helped me work
                through my PTSD triggers and gave me tools I use every
                day.&quot;
              </p>
              <p className="font-semibold text-fg">- Army Veteran</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Your Session"
      >
        <div className="h-[600px]">
          <InlineWidget url="https://calendly.com/your-calendly-url" />
        </div>
      </Modal>
    </div>
  );
}
