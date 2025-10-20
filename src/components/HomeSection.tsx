"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
// import { InlineWidget } from "react-calendly";

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary to-sage min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="leaves"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20 50 Q30 30, 40 50 T60 50"
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaves)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome Home to Healing
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-serif italic">
                A safe space for veterans and their families to find peace,
                understanding, and strength.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                I understand the unique challenges you face. Whether you're
                dealing with PTSD, transition stress, or relationship struggles,
                I'm here to walk this path with you. Virtual sessions mean you
                can connect from wherever you feel most comfortable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setIsModalOpen(true)}>
                  Book a Session
                </Button>
                <Button variant="secondary">Learn More About Services</Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
                  alt="Dr. Sarah Mitchell - Therapist for Veterans"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-sage"
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
              <h3 className="text-xl font-semibold mb-2 text-navy">
                Veteran-Focused
              </h3>
              <p className="text-gray-600">
                Specialized understanding of military culture and challenges
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
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
              <h3 className="text-xl font-semibold mb-2 text-navy">
                100% Virtual
              </h3>
              <p className="text-gray-600">
                Connect from the comfort and privacy of your own space
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-navy"
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
              <h3 className="text-xl font-semibold mb-2 text-navy">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                A judgment-free environment where you can be yourself
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-sage/10 to-lavender/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">
            What Veterans Are Saying
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-sage">
              <p className="text-gray-700 mb-4 italic font-serif">
                "After struggling for years, I finally found someone who gets
                it. The virtual sessions made it so much easier to open up. I'm
                sleeping better and my family says I'm more present."
              </p>
              <p className="text-navy font-semibold">- Marine Corps Veteran</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-lavender">
              <p className="text-gray-700 mb-4 italic font-serif">
                "I was skeptical about online therapy, but being able to talk
                from home made all the difference. She helped me work through my
                PTSD triggers and gave me tools I use every day."
              </p>
              <p className="text-navy font-semibold">- Army Veteran</p>
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
