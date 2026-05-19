'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from 'lucide-react';

const contactItems = [
  {
    icon: <Phone className="w-7 h-7 text-brand-gold" />,
    title: 'Call / WhatsApp',
    value: '+91 97699 64070',
    description: 'Available for direct consultation bookings.',
    link: 'https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20a%20consultation',
  },
  {
    icon: <Mail className="w-7 h-7 text-brand-gold" />,
    title: 'Email Us',
    value: 'vedicvisionaries@gmail.com',
    description: 'Share your concerns & receive personalized guidance.',
    link: 'mailto:vedicvisionaries@gmail.com',
  },
  {
    icon: <Smartphone className="w-7 h-7 text-brand-gold" />,
    title: 'Quick Connect',
    value: 'WhatsApp Support',
    description: 'Fast response for urgent consultation requirements.',
    link: 'https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20a%20consultation',
  },
  {
    icon: <MapPin className="w-7 h-7 text-brand-gold" />,
    title: 'Consultation Mode',
    value: 'Online & Offline',
    description: 'Video, phone & in-person sessions available.',
    link: 'https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20a%20consultation',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand-green to-[#0f5c2c] text-white">

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Header */}
        <div className="text-center mb-20">

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-white leading-tight">
            Begin Your{' '}
            <span className="text-brand-gold">
              Spiritual Journey
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed">
            Connect with us for personalized spiritual consultations,
            guidance, and energy alignment services.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">

          {contactItems.map((item, index) => (

            <Link
              href={item.link}
              target="_blank"
              key={index}
              className="group"
            >

              <div
                className="
                  relative overflow-hidden h-full
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-[2rem]
                  p-8
                  hover:bg-white/10
                  hover:border-brand-gold/30
                  transition-all duration-300
                  hover:-translate-y-1
                  shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                "
              >

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Arrow */}
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-white/30 group-hover:text-brand-gold transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-brand-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Value */}
                  <p className="text-brand-gold font-medium text-lg mb-4">
                    {item.value}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center mb-20">

          <Link
            href="https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            className="
              inline-flex items-center gap-3
              bg-brand-gold hover:bg-brand-yellow
              text-brand-green
              px-8 py-4
              rounded-2xl
              font-semibold
              transition-all duration-300
              hover:scale-[1.02]
              shadow-lg
            "
          >
            Book Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

        {/* Closing Quote */}
        <div className="text-center border-t border-white/10 pt-16">

          <p className="font-serif text-3xl md:text-4xl italic text-brand-gold leading-relaxed mb-6">
            “Align your energies. Transform your life.”
          </p>

          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Authentic Vedic guidance for clarity, positivity,
            harmony, and spiritual growth.
          </p>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-16 text-center">

          <p className="text-white/50 text-sm tracking-wide">
            © 2026 The Vedic Visionaries. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}