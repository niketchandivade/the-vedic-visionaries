"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Faq() {
  const FAQS = [
    {
      q: "Are your consultations online or offline?",
      a: "We provide both: Online consultations worldwide Offline site visits for Vastu consultations (India, UK & UAE)",
    },
    {
      q: "How do I book a consultation?",
      a: "You can contact us through: Website inquiry form, WhatsApp, Call booking, Google Form registration",
    },
    {
      q: "What details are required for Astrology/Numerology consultation?",
      a: "Usually: Full Name, Date of Birth, Time of Birth, Place of Birth",
    },
    {
      q: "What details are required for Vastu consultation?",
      a: "Usually:, Property floor plan/map, Direction details, Photos/videos of the property, Site visit (if required)",
    },
    {
      q: "Is birth time necessary?",
      a: "Accurate birth time helps provide more precise predictions. However, if unavailable, alternate methods may be used.",
    },
    {
      q: "Do you provide marriage compatibility (Kundli Matching)?",
      a: "Yes, we provide detailed compatibility analysis including: Guna Milan, Emotional Compatibility, Financial Stability, Family Adjustment, Physical & Mental Compatibility",
    },
    {
      q: "What is required for a Vastu site visit?",
      a: "Please keep: Property map/layout, Compass directions, Existing photos/videos, Basic property details ready",
    },
    {
      q: "Can Vastu help with financial and relationship issues?",
      a: "Improper energy balance may affect peace, health, finances, and relationships. Vastu aims to improve harmony and positivity.",
    },
    {
      q: "How long does a consultation take?",
      a: "Depending on the service: Astrology: 45–90 mins, Numerology: 30–60 mins, Vastu Consultation: 1–3 hours",
    },
    {
      q: "Is advance payment required?",
      a: "Yes, registration/booking confirmation may require advance payment.",
    },
    {
      q: "Will I receive a report?",
      a: "Yes, detailed guidance and remedies are shared after consultation.",
    },
    {
      q: "Do you provide customized packages?",
      a: "Yes, customized packages are available based on your requirements.",
    },
    {
      q: "Are remedies expensive?",
      a: "Most remedies are practical, simple, and budget-friendly.",
    },
  ];

  const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={`group rounded-2xl border bg-white overflow-hidden transition-all duration-300
      
      ${
        isOpen
          ? "border-brand-gold/30 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "border-brand-gold/10 hover:border-brand-gold/20 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]"
      }`}
      >
        {/* Question */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left p-6 md:p-7 transition-all duration-300"
        >
          <span
            className={`font-serif text-lg md:text-xl font-semibold pr-6 transition-colors duration-300 leading-relaxed
          
          ${
            isOpen
              ? "text-brand-gold"
              : "text-brand-green group-hover:text-brand-gold"
          }`}
          >
            {q}
          </span>

          {/* Icon */}
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
            
          ${
            isOpen
              ? "bg-brand-gold/10 border border-brand-gold/20"
              : "bg-brand-yellow/10 border border-brand-gold/10"
          }`}
          >
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-brand-gold" />
            ) : (
              <ChevronDown className="w-5 h-5 text-brand-gold" />
            )}
          </div>
        </button>

        {/* Answer */}
        <div
          className={`grid transition-all duration-300 ease-in-out
        
        ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 md:px-7 pb-7">
              {/* Divider */}
              <div className="h-px bg-brand-gold/10 mb-6" />

              <p className="text-brand-green/70 leading-relaxed text-base md:text-lg">
                {a}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/VVbackground.svg"
          alt="Vedic Background"
          className="w-full h-full object-cover opacity-[0.15]"
          width={"100"}
          height={"100"}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br " />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gold/20 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-sm font-medium tracking-wide text-brand-green">
                Frequently Asked Questions
              </span>
            </div> */}

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
            FAQ&apos;s
          </h2>

          <div className="w-24 h-[2px] bg-brand-gold mx-auto rounded-full mt-6 mb-8" />

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gold leading-relaxed">
            Answers to some commonly asked questions regarding consultations,
            booking process, and spiritual guidance services.
          </p>
        </div>

        {/* FAQ Wrapper */}
        <div className="bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-4 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
