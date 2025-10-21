import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ServicesSection() {
  const services = [
    {
      title: "PTSD Treatment",
      description:
        "Specialized therapy for post-traumatic stress, including combat-related trauma, using evidence-based approaches like EMDR and prolonged exposure therapy.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      color: "navy",
    },
    {
      title: "Anxiety & Depression",
      description:
        "Compassionate support for managing anxiety, depression, and mood disorders through cognitive behavioral techniques and mindfulness practices.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      color: "sage",
    },
    {
      title: "Transition Support",
      description:
        "Guidance through the challenges of transitioning from military to civilian life, including identity shifts, career changes, and lifestyle adjustments.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
      color: "lavender",
    },
    {
      title: "Relationship Counseling",
      description:
        "Support for veterans and their partners or families, addressing communication, trust, intimacy, and the unique stressors military life brings.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      color: "navy",
    },
    {
      title: "Anger Management",
      description:
        "Tools and strategies to understand and manage anger, develop healthy coping mechanisms, and improve emotional regulation.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      color: "sage",
    },
    {
      title: "Sleep & Nightmares",
      description:
        "Specialized treatment for insomnia, nightmares, and sleep disturbances commonly experienced by veterans, using imagery rehearsal therapy.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      ),
      color: "lavender",
    },
  ];

  const colorMap = {
    navy: "bg-navy/10 text-navy",
    sage: "bg-sage/20 text-sage",
    lavender: "bg-lavender/20 text-accent",
  };

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-white via-sage/5 to-lavender/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-navy mb-6">
              Virtual Therapy Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Specialized mental health support designed specifically for
              veterans and their families. All sessions are conducted via secure
              video conferencing, allowing you to receive care from the comfort
              and privacy of your own space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 ${colorMap[service.color as keyof typeof colorMap]} rounded-full flex items-center justify-center mb-4`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-navy to-primary text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  How Virtual Therapy Works
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">1.</span>
                    <span>
                      Schedule your session through our secure online booking
                      system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">2.</span>
                    <span>
                      Receive a confidential video link before your appointment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">3.</span>
                    <span>
                      Connect from any private location with internet access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sage mr-3 mt-1 font-bold">4.</span>
                    <span>
                      Engage in therapy just like an in-person session
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Session Information
                </h3>
                <div className="space-y-3 text-white/90">
                  <p>
                    <strong>Duration:</strong> 50-60 minutes
                  </p>
                  <p>
                    <strong>Frequency:</strong> Weekly or bi-weekly (flexible)
                  </p>
                  <p>
                    <strong>Platform:</strong> HIPAA-compliant video
                    conferencing
                  </p>
                  <p>
                    <strong>Insurance:</strong> Many plans accepted, including
                    Tricare
                  </p>
                  <p>
                    <strong>Availability:</strong> Evening and weekend
                    appointments available
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button className="text-lg px-8 py-4">
              Schedule Your First Session
            </Button>
            <p className="mt-4 text-gray-600">
              First consultation is always free
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
