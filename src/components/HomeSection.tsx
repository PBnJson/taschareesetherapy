"use client";

import { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { motion } from "motion/react";

// Custom hook for intersection observation
function useIntersectionObserver(threshold = 0.5) {
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
      <section className="relative min-h-[91vh] flex items-center bg-gradient-to-br from-surface via-accent to-muted overflow-x-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="text-fg/90">
              <motion.h1
                className="mb-6 text-5xl font-bold leading-tight md:text-6xl font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Real Conversations. Real Change.
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
                <Button
                  onClick={() =>
                    window.open(
                      "https://onward-therapy-and-wellness.clientsecure.me/request/clinician",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  variant="cta"
                >
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
                  * Most insurances accepted
                </p>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-fit overflow-visible"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Blurred background sofa image */}
              <div className="absolute left-[145px] -top-29 -z-10 h-[100vh] w-[900px] overflow-hidden opacity-60">
                <div className="relative h-full w-full">
                  <Image
                    src={"/images/blurred_sofa.jpg"}
                    fill
                    alt=""
                    className="object-cover scale-100"
                    style={{ filter: "blur(12px)" }}
                  />
                </div>
              </div>

              {/* Main portrait image */}
              <div className="relative overflow-hidden rounded-t-[160px] mt-[150px]">
                <Image
                  src={"/images/tascha_credentials.jpeg"}
                  priority={true}
                  width={320}
                  height={390}
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
        className="bg-gradient-to-br from-bg to-surface py-16 h-30vh"
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={
            testimonialsSection.isVisible ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-12 text-center text-5xl font-bold text-fg font-serif tracking-wider">
            What People Are Saying
          </h2>

          <div className="relative mx-auto max-w-5xl">
            {/* Left quotation mark */}
            <div className="absolute -left-35 bottom-25 hidden text-muted/90 lg:block">
              <svg
                className="h-32 w-32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 320"
              >
                <path
                  d="M82.87 129.48S77.32 98.96 114.31 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.59 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61zm154.26 0S231.58 98.96 268.57 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.58 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Right quotation mark */}
            <div className="absolute -right-35 top-25 hidden rotate-180 text-muted/90 lg:block">
              <svg
                className="h-32 w-32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 320"
              >
                <path
                  d="M82.87 129.48S77.32 98.96 114.31 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.59 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61zm154.26 0S231.58 98.96 268.57 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.58 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border-l-4 border-accent bg-surface/50 p-8 shadow-lg">
                <p className="mb-4 italic text-fg/90 font-serif">
                  &quot;After struggling for years, I finally found someone who
                  gets it. The virtual sessions made it so much easier to open
                  up. I&apos;m sleeping better and my family says I&apos;m more
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
          </div>
        </motion.div>
      </section>
    </div>
  );
}
