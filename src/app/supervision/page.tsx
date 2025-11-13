"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Button from "../../ui/Button";
import Card from "../../ui/Card";

export default function SupervisionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licensureStatus: "",
    supervisionType: "individual",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          licensure_status: formData.licensureStatus,
          supervision_type: formData.supervisionType,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        licensureStatus: "",
        supervisionType: "individual",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-16 bg-gradient-to-br from-bg via-fg/5 to-surface/5">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-navy/10 px-6 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-navy uppercase tracking-wider">
                Professional Development
              </span>
            </div>
            <h1 className="text-5xl font-bold text-navy mb-6">
              Clinical Supervision for LMSWs
            </h1>
            <p className="text-xl text-fg/80 leading-relaxed">
              You&apos;re here because you&apos;re seeking clinical supervision
              to advance your career as a Licensed Master Social Worker. I
              provide Board Approved clinical supervision to help you achieve
              full clinical licensure (LCSW).
            </p>
          </div>

          {/* Stylized Inspirational Text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-3xl md:text-4xl font-serif italic text-navy/80 leading-relaxed">
              &ldquo;Time to invest in your professional future.&rdquo;
            </p>
          </div>

          {/* Why This Page Exists */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-surface/50 to-accent/10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-navy"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-navy mb-3">
                  Why This Separate Page?
                </h2>
                <p className="text-fg/80 leading-relaxed">
                  This page is dedicated exclusively to clinical supervision
                  services for Licensed Master Social Workers (LMSWs) pursuing
                  their full clinical licensure. This is a separate professional
                  development service from therapy and counseling. If
                  you&apos;re looking for mental health therapy services, please
                  visit the{" "}
                  <Link
                    href="/"
                    className="text-navy underline hover:text-navy/80"
                  >
                    main page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Card>

          {/* Supervision Services Info */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/70">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy">
                    Individual Supervision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  One-on-one supervision tailored to your specific clinical
                  development needs, case consultations, and professional growth
                  toward full licensure.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Personalized feedback and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Case-by-case consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/70">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-fg/20 rounded-full flex items-center justify-center mr-4">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy">
                    Group Supervision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Group supervision environment with peer support, shared
                  experiences, and diverse perspectives to enhance your clinical
                  skills.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Collaborative learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Peer support and networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy mr-2">•</span>
                    <span>Cost-effective option</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
                Inquire About Supervision
              </h2>
              <p className="text-center text-fg/80 mb-8">
                Fill out the form below and I&apos;ll get back to you within 1-2
                business days to discuss your supervision needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="licensureStatus"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current Licensure Status *
                  </label>
                  <input
                    type="text"
                    id="licensureStatus"
                    name="licensureStatus"
                    value={formData.licensureStatus}
                    onChange={handleChange}
                    required
                    placeholder="e.g., LMSW, provisional, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="supervisionType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Supervision Type Preference *
                  </label>
                  <select
                    id="supervisionType"
                    name="supervisionType"
                    value={formData.supervisionType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  >
                    <option value="individual">Individual Supervision</option>
                    <option value="group">Group Supervision</option>
                    <option value="either">Either/Flexible</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell me about your supervision needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Share your goals, timeline for licensure, any specific areas you'd like to focus on, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-1 border-fg bg-transparent text-fg hover:bg-fg/10"
                  variant="primary"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">
                    Thank you for your inquiry! I&apos;ll get back to you within
                    1-2 business days.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    There was an error sending your inquiry. Please try again or
                    contact me directly at treese@therapysecure.com
                  </p>
                )}
              </form>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-fg/60 mb-4">
                Board Approved Supervisor • 30+ Years Experience • Licensed in
                Texas
              </p>
              <p className="text-sm text-fg/80">
                For therapy services, please visit the{" "}
                <Link
                  href="/"
                  className="text-navy underline hover:text-navy/80"
                >
                  main page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
