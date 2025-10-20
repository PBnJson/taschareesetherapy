export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Dr. Sarah Mitchell",
    image: "https://yourdomain.com/images/dr-mitchell.jpg",
    jobTitle: "Licensed Clinical Psychologist",
    description:
      "Specialized virtual therapy for veterans, PTSD treatment, and trauma recovery",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Virtual",
      addressRegion: "Nationwide",
      addressCountry: "US",
    },
    telephone: "(555) 123-4567",
    email: "contact@healingpathstherapy.com",
    url: "https://yourdomain.com",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    availableService: [
      {
        "@type": "Service",
        name: "PTSD Treatment",
        description: "Specialized therapy for post-traumatic stress disorder",
      },
      {
        "@type": "Service",
        name: "Virtual Therapy",
        description: "Online therapy sessions via secure video conferencing",
      },
      {
        "@type": "Service",
        name: "Veteran Mental Health",
        description: "Mental health support specifically for military veterans",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
