"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { InlineWidget } from "react-calendly";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-white to-sage/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-navy mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-700">
              Ready to take the first step? Reach out today to schedule your
              free consultation or ask any questions you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <h2 className="text-2xl font-semibold text-navy mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
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
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </Card>

            {/* Contact Info & Booking */}
            <div className="space-y-8">
              <Card>
                <h2 className="text-2xl font-semibold text-navy mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-sage"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Email</p>
                      <a
                        href="mailto:contact@healingpathstherapy.com"
                        className="text-gray-600 hover:text-navy transition-colors"
                      >
                        treese@therapysecure.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-lavender/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 hover:text-navy transition-colors"
                      >
                        (903) 372-6883
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-navy"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-navy">Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 6pm
                      </p>
                      <p className="text-gray-600">Weekends: by appointment</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-navy to-primary text-white">
                <h2 className="text-2xl font-semibold mb-4">Book Directly</h2>
                <p className="mb-6 text-white/90">
                  Schedule your free consultation or first session using our
                  online calendar.
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      "https://onwardtherapyandwellness.com/tascha/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  variant="secondary"
                  className="w-full"
                >
                  View Available Times
                </Button>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Crisis Resources
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  If you&apos;re in crisis, please contact:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Veterans Crisis Line:</strong>{" "}
                    <a href="tel:988" className="text-navy hover:underline">
                      988 (Press 1)
                    </a>
                  </p>
                  <p>
                    <strong>Crisis Text Line:</strong> Text 838255
                  </p>
                  <p>
                    <strong>Emergency:</strong> 911
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
