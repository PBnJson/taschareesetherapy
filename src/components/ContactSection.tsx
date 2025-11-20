"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import Card from "../ui/Card";

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

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        reason: (e.target as HTMLFormElement).reason.value,
        referral_source:
          (e.target as HTMLFormElement).referralSource.value || "Not provided",
        message: formData.message || "No message provided",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Email sent successfully!");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Reset the form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
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
                {/* Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-fg"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-fg"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone (optional) */}
                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-fg"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>

                {/* Reason for contacting (dropdown) */}
                <div className="space-y-1">
                  <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-fg"
                  >
                    Reason for contacting{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please choose one
                    </option>
                    <option value="consult">Schedule a consultation</option>
                    <option value="general">General question</option>
                    <option value="speaking">
                      Speaking engagement / workshop
                    </option>
                    <option value="collaboration">
                      Referral / collaboration
                    </option>
                    <option value="other">Other non-urgent request</option>
                  </select>
                </div>

                {/* How did you hear about me? (dropdown) */}
                <div className="space-y-1">
                  <label
                    htmlFor="referralSource"
                    className="block text-sm font-medium text-fg"
                  >
                    How did you hear about me?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please choose one (optional)
                    </option>
                    <option value="google">Google / online search</option>
                    <option value="friend">Friend or family</option>
                    <option value="provider">Another provider</option>
                    <option value="social">Social media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Short message with no-PHI warning */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-fg"
                  >
                    Brief notes (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-fg/30 bg-background px-3 py-2 text-sm text-fg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="You can share general details about your request, but please do not include personal health information."
                  />
                  <p className="text-xs text-muted-foreground">
                    Please do <span className="font-semibold">not</span> include
                    personal health or medical information in this form. This
                    form is for general inquiries only and is not monitored
                    continuously. If you are in crisis, thinking about harming
                    yourself or others, or in an emergency, do not use this
                    form—call 911, dial{" "}
                    <span className="font-semibold">988</span> for the Suicide
                    &amp; Crisis Lifeline, or go to the nearest emergency room.
                  </p>
                </div>

                {/* Submit button + status messages (your existing code) */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-fg bg-transparent text-fg hover:bg-accent/10"
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
                        href="mailto:taschareese@taschareesetherapy.com"
                        className="text-gray-600 hover:text-navy transition-colors"
                      >
                        taschareese@taschareesetherapy.com
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
                        href="tel:+19033726883"
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

              <Card className="overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-fg mb-4">
                    In-Person Sessions
                  </h2>

                  {/* "By Appointment" is crucial for avoiding "Storefront" suspension if the door is locked */}
                  <div className="mb-4 inline-block rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                    * By appointment only
                  </div>

                  <div className="space-y-3 text-sm text-fg/80">
                    <p className="font-medium text-fg">Office Location:</p>

                    {/* Semantic Address Tag for SEO */}
                    <address className="not-italic leading-relaxed text-fg/60">
                      <span className="block font-medium text-fg">
                        Tascha Reese, LCSW
                      </span>
                      <span className="block text-xs uppercase tracking-wide text-fg/50 mb-1">
                        (Inside Onward Therapy & Wellness)
                      </span>
                      11910 Greenville Ave, Suite 511
                      <br />
                      Dallas, TX 75243
                    </address>

                    {/* Trust Signal: External Link to Google Maps */}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=11910+Greenville+Ave+Suite+511+Dallas+TX+75243"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-700 hover:text-brand-800 font-medium hover:underline mt-2"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>
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
