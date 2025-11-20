export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://taschareesetherapy.com/#organization",
    name: "Tascha Reese, LCSW-S",
    alternateName: "Tascha Reese Therapy & Wellness",
    description:
      "Licensed Clinical Social Worker - Supervisor offering specialized virtual therapy for PTSD, anxiety, depression, trauma recovery, and clinical supervision for LMSWs seeking full licensure. Over 30 years of experience serving individuals, veterans, and families in Texas.",
    url: "https://taschareesetherapy.com",
    logo: "https://taschareesetherapy.com/images/tascha_credentials.jpeg",
    image: "https://taschareesetherapy.com/images/tascha_credentials.jpeg",
    telephone: "+19033726883",
    email: "taschareese@taschareesetherapy.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Texas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
        description: "By appointment only",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Tascha Reese",
      jobTitle: "Licensed Clinical Social Worker - Supervisor (LCSW-S)",
      description:
        "Board Approved Supervisor with over 30 years of experience in trauma therapy, PTSD treatment, and clinical social work. Specializes in serving individuals, veterans, families, and supervising LMSWs seeking full clinical licensure.",
      alumniOf: "Licensed in the State of Texas",
      knowsAbout: [
        "PTSD Treatment",
        "Trauma Therapy",
        "EMDR",
        "Anxiety & Depression",
        "Mood Disorders",
        "Adjustment Disorders",
        "Addictions",
        "Interpersonal Conflict",
        "Personality Disorders",
        "Medical Social Work",
        "Dual Diagnosis",
        "Clinical Supervision",
        "Veteran Mental Health",
        "Military to Civilian Transition",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Therapy & Clinical Supervision Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PTSD Treatment",
            description:
              "Specialized therapy for post-traumatic stress, including combat-related trauma, using evidence-based approaches like EMDR and prolonged exposure therapy.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anxiety & Depression Treatment",
            description:
              "Compassionate support for managing anxiety, depression, and mood disorders through cognitive behavioral techniques and mindfulness practices.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Military Transition Support",
            description:
              "Guidance through the challenges of transitioning from military to civilian life, including identity shifts, career changes, and lifestyle adjustments.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Relationship Counseling",
            description:
              "Support for veterans and their partners or families, addressing communication, trust, intimacy, and the unique stressors military life brings.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anger Management",
            description:
              "Tools and strategies to understand and manage anger, develop healthy coping mechanisms, and improve emotional regulation.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sleep & Nightmare Treatment",
            description:
              "Specialized treatment for insomnia, nightmares, and sleep disturbances commonly experienced by veterans, using imagery rehearsal therapy.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clinical Supervision for LMSWs",
            description:
              "Board Approved clinical supervision for Licensed Master Social Workers seeking full clinical licensure (LCSW). Individual and group supervision available.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Virtual Therapy Sessions",
            description:
              "100% virtual therapy sessions via HIPAA-compliant video conferencing, allowing clients to receive care from the comfort and privacy of their own space.",
            provider: {
              "@type": "Person",
              name: "Tascha Reese",
            },
          },
        },
      ],
    },
    additionalType: [
      "https://schema.org/HealthAndBeautyBusiness",
      "https://schema.org/ProfessionalService",
      "https://schema.org/PsychologicalTreatment",
      "https://schema.org/Psychotherapist",
      "https://schema.org/ClinicalSupervision",
      "https://schema.org/LicensedClinicalSocialWorker",
      "https://schema.org/LicensedMasterSocialWorker",
      "https://schema.org/LicensedClinicalSocialWorkerSupervisor",
      "https://schema.org/LicensedMasterSocialWorkerSupervisor",
      "https://schema.org/LicensedClinicalSocialWorkerSupervisor",
    ],
    knowsLanguage: "en-US",
    paymentAccepted: "Most insurance plans accepted",
    currenciesAccepted: "USD",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
