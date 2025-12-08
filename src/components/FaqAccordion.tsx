"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-muted/20 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 text-left bg-white/30 hover:bg-white/50 transition-colors"
          >
            <h3 className="font-semibold text-fg pr-4">{item.question}</h3>
            <svg
              className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-fg/80 text-sm bg-white/20">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Pre-built FAQ items for Canton page
export const cantonFaqItems: FaqItem[] = [
  {
    question: "Do you see clients in person?",
    answer:
      "Yes. Virtual therapy is available for Canton residents, and in-person sessions are offered at my Dallas office by appointment.",
  },
  {
    question: "Is virtual therapy effective for trauma or anxiety?",
    answer:
      "Absolutely. I use evidence-based, trauma-informed approaches that work well over secure video.",
  },
  {
    question: "Do you accept insurance?",
    answer: (
      <>
        Most major plans are accepted.{" "}
        <Link
          href="/insurances"
          className="text-accent underline hover:text-accent/80"
        >
          See accepted insurances
        </Link>{" "}
        or contact me to verify.
      </>
    ),
  },
  {
    question: "I live rurally and feel isolated—can you help?",
    answer:
      "Yes. Virtual sessions let you access care without travel. We can work on coping with isolation, building routines, and staying connected.",
  },
];
