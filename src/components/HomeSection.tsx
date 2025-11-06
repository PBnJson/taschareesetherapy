"use client";

import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "motion/react";

// Custom hook for intersection observation
function useIntersectionObserver(threshold = 0.25) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Use the custom hook for each section
  const trustSection = useIntersectionObserver(0.25);
  const testimonialsSection = useIntersectionObserver(0.25);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-surface via-accent to-muted">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="text-fg">
              <motion.h1
                className="mb-6 text-5xl font-bold leading-tight md:text-6xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Welcome Home to Healing
              </motion.h1>

              <motion.p
                className="mb-8 text-xl md:text-2xl italic font-serif/normal text-fg/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                I believe we all deserve unbiased support, honest feedback, and
                a fresh start. As a licensed clinical social worker with over 30
                years of experience in trauma therapy and PTSD treatment,
                I&apos;m here to provide judgment-free mental health counseling.
              </motion.p>

              <motion.p
                className="mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Secure virtual therapy sessions offer specialized support for
                anxiety, depression, PTSD, and life transitions, all from the
                comfort of your own space. Why not start your journey today?
                Simply reach out and I&apos;ll be there, every step of the way.
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <Button onClick={() => setIsModalOpen(true)}>
                  Book a Session
                </Button>
                <Button variant="primary">Learn About Services</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <p className="mt-2 text-sm text-gray-600 font-italic">
                  Most insurances accepted
                </p>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-fit"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-3xl border-8 border-fg/10 bg-fg/5 backdrop-blur-sm">
                <Image
                  src={"/images/tascha_credentials.jpeg"}
                  priority={true}
                  width={300}
                  height={400}
                  alt="Tascha sitting and smiling with credentials behind her."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section ref={trustSection.ref} className="bg-bg py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {/* Trust Item 1 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={
                trustSection.isVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 100 }
              }
              transition={{
                duration: 0.6,
                delay: isDesktop ? 0.4 : 0,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/25 bg-accent/20 p-2">
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
                Individual-Focused
              </h3>
              <p className="text-muted">
                30 year practitioner with a unique understanding of human
                behavior
              </p>
            </motion.div>
            {/* Trust Item 2 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={
                trustSection.isVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 100 }
              }
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/25 bg-surface/30 p-2">
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
            </motion.div>
            {/* Trust Item 3 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={
                trustSection.isVisible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 100 }
              }
              transition={{
                duration: 0.6,
                delay: isDesktop ? 0 : 0.4,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/25 bg-accent/25 p-2">
                <svg
                  className="h-8 w-8 text-red-500/50"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsSection.ref}
        className="bg-gradient-to-br from-bg to-surface py-16"
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={
            testimonialsSection.isVisible ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-fg font-serif">
            What People Are Saying
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-accent bg-surface/50 p-8 shadow-lg">
              <p className="mb-4 italic text-fg/90 font-serif">
                &quot;After struggling for years, I finally found someone who
                gets it. The virtual sessions made it so much easier to open up.
                I&apos;m sleeping better and my family says I&apos;m more
                present.&quot;
              </p>
              <p className="font-semibold text-fg">-Veteran</p>
            </div>

            <div className="rounded-2xl border-l-4 border-muted bg-surface/50 p-8 shadow-lg">
              <p className="mb-4 italic text-fg/90 font-serif">
                &quot;I was skeptical about online therapy, but being able to
                talk from home made all the difference. She helped me work
                through my PTSD triggers and gave me tools I use every
                day.&quot;
              </p>
              <p className="font-semibold text-fg">-Anonymous</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
