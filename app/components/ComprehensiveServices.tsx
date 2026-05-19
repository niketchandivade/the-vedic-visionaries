"use client";

import React from "react";
import { Home, Hexagon, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  sections: {
    heading: string;
    items: string[];
  }[];
  highlights: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Astrology Consultation",
    icon: <Home className="w-12 h-12" />,
    sections: [
      {
        heading: "Guidance For:",
        items: [
          "Career & Business",
          "Marriage & Relationships",
          "Love Compatibility",
          "Financial Growth",
          "Family & Child Concerns",
          "Health & Mental Peace",
          "Foreign Settlement",
          "Muhurat Guidance",
          "Kundli Analysis",
          "Horoscope Reading",
          "Dasha & Transit Predictions",
        ],
      },
    ],
    highlights: [
      "Detailed Analysis",
      "Personalized Remedies",
      "Practical Guidance",
      "Spiritual Solutions",
    ],
  },
  {
    title: "Vastu Shastra Consultation",
    icon: <Home className="w-12 h-12" />,
    sections: [
      {
        heading: "Residential Vastu",
        items: [
          "Flat & Apartment Vastu",
          "Bunglow Vastu",
          "Plot Analysis",
          "Entrance & Direction Correction",
          "Kitchen & Bedroom Vastu",
          "Energy Balancing",
        ],
      },
      {
        heading: "Commercial Vastu",
        items: [
          "Office Vastu",
          "Shop Vastu",
          "Factory & Business Space Vastu",
          "Salon / Clinic / Studio Vastu",
        ],
      },
    ],
    highlights: [
      "Site Visit & Mapping",
      "Degree Analysis",
      "Direction Correction",
      "Energy Balancing Remedies",
      "Yantra Recommendations",
      "Detailed Report & Guidance",
    ],
  },
  {
    title: "Numerology Consultation",
    icon: <Hexagon className="w-12 h-12" />,
    sections: [
      {
        heading: "Services Include:",
        items: [
          "Name Numerology",
          "Mobile Number Analysis",
          "Business Name Suggestions",
          "Lucky Number Guidance",
          "Signature Analysis",
          "Relationship Compatibility",
          "Career & Financial Numbers",
        ],
      },
    ],
    highlights: [
      "Positive Vibrations",
      "Better Opportunities",
      "Improved Stability",
      "Energy Alignment",
    ],
  },
];

const ComprehensiveServices: React.FC = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
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

      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Small Label */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gold/20 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="text-sm font-medium tracking-wide text-brand-green">
              Spiritual Services
            </span>
          </div> */}

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-green leading-tight">
            Our <span className="text-brand-gold">Services</span>
          </h2>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
            Personalized Vedic guidance designed to help you achieve clarity,
            positivity, balance, and spiritual alignment in every aspect of
            life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Service Header */}
              <div className="p-8 bg-gradient-to-br from-brand-green/15 to-brand-gold/15 border-b border-brand-gold/10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <div className="text-brand-gold">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-brand-green leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8 space-y-10">
                {/* Sections */}
                {service.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    {/* Section Heading */}
                    <h4 className="font-serif font-semibold text-brand-green text-lg mb-5 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      {section.heading}
                    </h4>

                    {/* Items */}
                    <ul className="space-y-4">
                      {section.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-3 text-brand-green/70 leading-relaxed"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-gold mt-2 shrink-0" />

                          <span className="group-hover:text-brand-green transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Highlights */}
                <div className="border-t border-brand-gold/10 pt-8">
                  <h4 className="font-serif font-semibold text-brand-green text-lg mb-5">
                    {service.title === "Astrology Consultation"
                      ? "What You Receive"
                      : service.title === "Vastu Shastra Consultation"
                        ? "Consultation Includes"
                        : "Benefits"}
                  </h4>

                  <ul className="space-y-4">
                    {service.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-3 text-brand-green/70"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                        </div>

                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {/* <button className="w-full mt-4 bg-brand-green hover:bg-brand-green/90 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
                  Book Consultation
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices;
