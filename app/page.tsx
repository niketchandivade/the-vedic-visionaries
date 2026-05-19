import {
  Star,
  Sun,
  Scroll,
  Calendar,
  Map,
  Sparkles,
  Hash,
  Globe,
  MessageCircle,
  Compass,
  HeartHandshake,
  ArrowRight,
  BadgeInfo,
  Smartphone,
  ImageIcon,
  Check,
  Wallet,
  CalendarDays,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/VVbackground.svg"
            alt="Vedic Background"
            className="w-full h-full object-cover opacity-[0.15]"
            width={'100'}
            height={'100'}
          />
          <div className="absolute inset-0 bg-gradient-to-br " />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-green leading-[1.1] animate-slide-up animation-delay-200">
            The <span className="text-brand-gold">Vedic</span> Visionaries
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-xl md:text-2xl text-brand-green/70 font-light tracking-wide animate-slide-up animation-delay-300">
            Your Map To Life
          </p>

          {/* Description */}
          <p className="mt-8 text-base md:text-xl leading-relaxed text-brand-green/70 max-w-3xl mx-auto animate-slide-up animation-delay-400">
            Authentic guidance through ancient Vedic sciences to help you
            achieve clarity, positivity, balance, success, and spiritual
            alignment.
          </p>

          {/* Service Pills */}
          <div className="mt-14 flex flex-wrap justify-center gap-5 animate-slide-up animation-delay-500">
            {/* Astrology */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/15 rounded-2xl px-7 py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-gold/10 transition-all duration-300">
                <Sparkles className="group-hover:rotate-6 w-7 h-7 text-brand-gold" />
              </div>

              <p className="text-brand-green font-semibold tracking-wide group-hover:text-brand-gold transition-colors">
                Astrology
              </p>
            </div>

            {/* Vastu */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/15 rounded-2xl px-7 py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-gold/10 transition-all duration-300">
                <Compass className="w-7 h-7 text-brand-gold group-hover:rotate-6" />
              </div>

              <p className="text-brand-green font-semibold tracking-wide group-hover:text-brand-gold transition-colors">
                Vastu Shastra
              </p>
            </div>

            {/* Numerology */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/15 rounded-2xl px-7 py-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-gold/10 transition-all duration-300">
                <Hash className="group-hover:rotate-6 w-7 h-7 text-brand-gold" />
              </div>

              <p className="text-brand-green font-semibold tracking-wide group-hover:text-brand-gold transition-colors">
                Numerology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* welcome to vedic visionaries */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white via-brand-beige/40 to-brand-white" />

        {/* Decorative Blurs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight text-brand-green">
            Welcome To{" "}
            <span className="text-brand-gold">The Vedic Visionaries</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-8 mb-10" />

          {/* Content Card */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

            <p className="text-lg md:text-xl leading-relaxed text-brand-green/80 max-w-3xl mx-auto">
              The Vedic Visionaries is dedicated to providing authentic
              spiritual consultations and personalized guidance through
              Astrology, Vastu Shastra, and Numerology.
            </p>

            <div className="w-16 h-px bg-brand-gold/30 mx-auto my-8" />

            <p className="text-lg md:text-xl leading-relaxed text-brand-green/70 max-w-3xl mx-auto">
              We help individuals and families align their energies for a more
              peaceful, successful, and positive life through practical remedies
              and traditional Vedic wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/60 via-white to-brand-beige/40">
        
        {/* Decorative Blur */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="font-serif text-4xl md:text-6xl text-brand-green leading-tight">
              Our <span className="text-brand-gold">Experience</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed">
              With years of spiritual consultation experience, we provide
              authentic Vedic guidance for individuals, families, and
              businesses.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Astrology Consultations",
              },
              {
                icon: "🧭",
                title: "Vastu Analysis & Site Visits",
              },
              {
                icon: "#",
                title: "Numerology Guidance",
              },
              {
                icon: "🪔",
                title: "Spiritual Remedies & Energy Alignment",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <span className="text-3xl text-brand-gold">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-brand-green leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/30 to-white">
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">

            <h2 className="font-serif text-4xl md:text-6xl text-brand-green leading-tight">
              Trusted Guidance{" "}
              <span className="text-brand-gold">Across Borders</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="text-lg md:text-xl leading-relaxed text-brand-green/70">
              We have guided clients in various aspects of life including
              career, business, relationships, finance, home harmony, and
              spiritual growth.
            </p>
          </div>

          {/* Countries */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                flag: "🇮🇳",
                country: "India",
              },
              {
                flag: "🇬🇧",
                country: "United Kingdom",
              },
              {
                flag: "🇦🇪",
                country: "United Arab Emirates",
              },
            ].map((item) => (
              <div
                key={item.country}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >

                
                {/* Flag Circle */}
                <div className="w-20 h-20 mx-auto rounded-full bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center text-4xl mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  {item.flag}
                </div>

                <h3 className="font-serif text-2xl text-brand-green font-semibold group-hover:text-brand-gold transition-colors duration-300">
                  {item.country}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-serif italic text-brand-gold">
              Trusted Spiritual Guidance Beyond Borders
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section (Why Choose Us) */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
        
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Trusted{" "}
              <span className="text-brand-gold">Spiritual Guidance</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Authentic Vedic wisdom combined with personalized guidance to help
              you achieve clarity, positivity, and balance in life.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-7 h-7 text-brand-gold" />,
                title: "Authentic Vedic Guidance",
                description:
                  "Traditional spiritual insights rooted in ancient Vedic sciences.",
              },
              {
                icon: <Scroll className="w-7 h-7 text-brand-gold" />,
                title: "Personalized Consultations",
                description:
                  "Guidance tailored specifically to your life path and concerns.",
              },
              {
                icon: <Sun className="w-7 h-7 text-brand-gold" />,
                title: "Practical Remedies",
                description:
                  "Simple and effective remedies designed for everyday life.",
              },
              {
                icon: <Globe className="w-7 h-7 text-brand-gold" />,
                title: "Confidential Services",
                description:
                  "Your personal information and consultations remain private.",
              },
              {
                icon: <Sparkles className="w-7 h-7 text-brand-gold" />,
                title: "Positive Energy Alignment",
                description:
                  "Helping create harmony, positivity, and spiritual balance.",
              },
              {
                icon: <HeartHandshake className="w-7 h-7 text-brand-gold" />,
                title: "Trusted Spiritual Support",
                description:
                  "Dedicated guidance and support throughout your spiritual journey.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif font-semibold text-2xl text-brand-green mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-brand-green/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Highlights Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
        {/* Decorative Blur */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Our <span className="text-brand-gold">Highlights</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Years of trusted spiritual consultations and personalized Vedic
              guidance helping individuals and families across multiple
              countries.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "10k+",
                label: "Consultations",
              },
              {
                value: "100+",
                label: "Vastu Visits",
              },
              {
                value: "Multiple",
                label: "Countries Served",
              },
              {
                value: "Trusted",
                label: "Personalized Guidance",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >



                {/* Stat */}
                <div className="font-serif text-5xl md:text-6xl font-bold text-brand-gold mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </div>

                {/* Divider */}
                <div className="w-12 h-[2px] bg-brand-gold/40 mx-auto rounded-full mb-5" />

                {/* Label */}
                <p className="text-brand-green text-lg font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/50 via-white to-brand-beige/20">
        
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Consultation <span className="text-brand-gold">Process</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              A simple and guided process designed to provide personalized
              spiritual insights, remedies, and Vedic guidance.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Book Your Consultation",
                description:
                  "Choose your preferred consultation type and schedule your appointment.",
              },
              {
                number: "02",
                title: "Share Your Details",
                description:
                  "Fill the consultation form and provide your concerns or required details.",
              },
              {
                number: "03",
                title: "Detailed Analysis",
                description:
                  "Receive in-depth spiritual analysis and personalized Vedic guidance.",
              },
              {
                number: "04",
                title: "Remedies & Guidance",
                description:
                  "Get practical remedies, recommendations, and ongoing support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-5 text-6xl font-serif font-bold text-brand-gold/10 select-none">
                  {item.number}
                </div>

                {/* Step Badge */}
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <span className="font-serif text-xl font-bold text-brand-gold">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-brand-green mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-brand-green/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Forms Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
        {/* Decorative Blur */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Begin Your{" "}
              <span className="text-brand-gold">Spiritual Journey</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              To provide accurate guidance and detailed analysis, kindly
              complete the relevant consultation form before booking your
              appointment.
            </p>
          </div>

          {/* Forms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-7 h-7 text-brand-gold" />,
                title: "Astrology Consultation",
                description:
                  "Share your birth details and consultation concerns for personalized astrological guidance.",
                button: "Open Astrology Form",
                link: "https://docs.google.com/forms/d/e/1FAIpQLScTYP7HN85wGthlgRlIc6Ihc-kRuwPz1OErlfJv1PCDzdS_pQ/viewform",
              },
              {
                icon: <Compass className="w-7 h-7 text-brand-gold" />,
                title: "Vastu Consultation",
                description:
                  "Submit your property details, map, floor plan, and Vastu concerns for analysis.",
                button: "Open Vastu Form",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSdaU_GudnEPK22Zas5_GfJHlp6UWoHnCXgcw3f6ETj9KQ7zZw/viewform",
              },
              {
                icon: <Hash className="w-7 h-7 text-brand-gold" />,
                title: "Numerology Consultation",
                description:
                  "Share your name, date of birth, and numerology requirements for detailed insights.",
                button: "Open Numerology Form",
                link: "https://docs.google.com/forms/d/e/1FAIpQLScTYP7HN85wGthlgRlIc6Ihc-kRuwPz1OErlfJv1PCDzdS_pQ/viewform",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top Gradient */}
                <div className="h-2 bg-gradient-to-r from-brand-gold/40 via-brand-yellow/50 to-brand-green/30" />

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-brand-green mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-green/70 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Button */}
                  <a
                    target="_blank"
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green/90 text-white font-medium py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {item.button}

                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Required <span className="text-brand-gold">Details</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Depending on the consultation type, clients may be requested to
              share relevant information for accurate analysis and personalized
              guidance.
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6 text-brand-gold" />,
                title: "Birth Details",
              },
              {
                icon: <Map className="w-6 h-6 text-brand-gold" />,
                title: "Property Map / Floor Plan",
              },
              {
                icon: <BadgeInfo className="w-6 h-6 text-brand-gold" />,
                title: "Name Spellings",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-brand-gold" />,
                title: "Mobile Number",
              },
              {
                icon: <ImageIcon className="w-6 h-6 text-brand-gold" />,
                title: "Property Images",
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-brand-gold" />,
                title: "Specific Concerns or Questions",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-brand-green leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Choose Your <span className="text-brand-gold">Guidance</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Select the consultation package that best matches your spiritual
              and personal guidance requirements.
            </p>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                badge: "Starter",
                title: "Basic Consultation",
                description:
                  "Perfect for general guidance and spiritual clarity.",
                features: [
                  "General Guidance",
                  "Basic Remedies",
                  "Online Support",
                ],
                featured: false,
              },
              {
                badge: "Most Popular",
                title: "Detailed Consultation",
                description:
                  "Comprehensive consultation with personalized insights.",
                features: [
                  "In-depth Analysis",
                  "Personalized Remedies",
                  "Detailed Report",
                  "Priority Guidance",
                ],
                featured: true,
              },
              {
                badge: "Premium",
                title: "Premium Consultation",
                description:
                  "Complete spiritual guidance with advanced support.",
                features: [
                  "Complete Analysis",
                  "Vastu + Astrology + Numerology",
                  "Site Visit (if applicable)",
                  "Energy Corrections",
                  "Continuous Support",
                ],
                featured: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300
          
          ${
            pkg.featured
              ? "bg-brand-green text-white border border-brand-gold/30 shadow-[0_15px_40px_rgba(0,0,0,0.12)] scale-[1.02]"
              : "bg-white/80 backdrop-blur-sm border border-brand-gold/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          }`}
              >
                {/* Top Gradient */}
                <div
                  className={`h-2 ${
                    pkg.featured
                      ? "bg-gradient-to-r from-brand-yellow via-brand-gold to-brand-yellow"
                      : "bg-gradient-to-r from-brand-gold/40 via-brand-yellow/50 to-brand-green/30"
                  }`}
                />

                <div className="p-8">
                  {/* Badge */}
                  <div
                    className={`inline-flex px-4 py-2 rounded-full text-sm font-medium mb-6
              
              ${
                pkg.featured
                  ? "bg-white/10 text-brand-yellow border border-white/10"
                  : "bg-brand-yellow/10 text-brand-green border border-brand-gold/20"
              }`}
                  >
                    {pkg.badge}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-serif text-3xl font-bold mb-4
              
              ${
                pkg.featured
                  ? "text-white"
                  : "text-brand-green group-hover:text-brand-gold"
              }`}
                  >
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed mb-8
              
              ${pkg.featured ? "text-white/80" : "text-brand-green/70"}`}
                  >
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0
                  
                    ${pkg.featured ? "bg-white/10" : "bg-brand-green/10"}`}
                        >
                          <Check
                            className={`w-3.5 h-3.5
                      
                      ${
                        pkg.featured ? "text-brand-yellow" : "text-brand-green"
                      }`}
                          />
                        </div>

                        <span
                          className={`leading-relaxed
                  
                    ${pkg.featured ? "text-white/90" : "text-brand-green/80"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20a%20consultation"
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-4 rounded-2xl font-medium transition-all duration-300
              
              ${
                pkg.featured
                  ? "bg-brand-yellow text-brand-green hover:bg-brand-gold"
                  : "bg-brand-green text-white hover:bg-brand-green/90"
              }`}
                  >
                    <button
                      className={`w-full py-4 rounded-2xl font-medium transition-all duration-300
              
              ${
                pkg.featured
                  ? "bg-brand-yellow text-brand-green hover:bg-brand-gold"
                  : "bg-brand-green text-white hover:bg-brand-green/90"
              }`}
                    >
                      Choose Package
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-brand-green/70 text-lg">
              Customized consultation packages are available based on your
              specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        {/* Decorative Blur */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Appointment &{" "}
              <span className="text-brand-gold">Payment Process</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Simple and secure consultation booking process designed for a
              smooth spiritual guidance experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Appointment Card */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-gold/40 via-brand-yellow/50 to-brand-green/30" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <CalendarDays className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-6 group-hover:text-brand-gold transition-colors duration-300">
                  Appointment Booking
                </h3>

                {/* Options */}
                <ul className="space-y-4 mb-8">
                  {[
                    "Online Consultation",
                    "Phone Consultation",
                    "Video Consultation",
                    "Site Visit (Vastu)",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-brand-green/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                      </div>

                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div className="rounded-2xl bg-brand-beige/40 border border-brand-gold/10 p-5">
                  <p className="text-brand-green/70 leading-relaxed">
                    Prior appointment required. Advance booking is recommended.
                    Time slots are subject to availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-green/30 via-brand-gold/40 to-brand-yellow/40" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <Wallet className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-6 group-hover:text-brand-gold transition-colors duration-300">
                  Payment Process
                </h3>

                {/* Content */}
                <p className="text-brand-green/70 leading-relaxed mb-6">
                  Consultation begins after payment confirmation. Kindly share
                  your payment screenshot after completing the transaction.
                </p>

                {/* Highlight Box */}
                <div className="rounded-2xl bg-brand-beige/40 border border-brand-gold/10 p-5 mb-8">
                  <p className="text-brand-green font-medium leading-relaxed">
                    Customized consultation packages are also available based on
                    your requirements.
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="https://wa.me/919769964070?text=Hello%20Vedic%20Visionaries,%20I%20want%20a%20consultation"
                  target="_blank"
                  rel="noreferrer"
                >
                <button className="w-full bg-brand-green hover:bg-brand-green/90 text-white py-4 rounded-2xl font-medium transition-all duration-300 shadow-sm hover:shadow-md">
                  Contact For Booking
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/40 via-white to-brand-beige/20">
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gold/20 shadow-sm mb-6">
        <span className="w-2 h-2 rounded-full bg-brand-gold" />
        <span className="text-sm font-medium tracking-wide text-brand-green">
          Spiritual Guidance
        </span>
      </div> */}

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Remedies &{" "}
              <span className="text-brand-gold">Important Guidelines</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Personalized spiritual remedies and positive practices designed to
              support harmony, balance, and energy alignment.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spiritual Remedies */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-gold/40 via-brand-yellow/50 to-brand-green/30" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <Sparkles className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-8 group-hover:text-brand-gold transition-colors duration-300">
                  Spiritual Remedies
                </h3>

                {/* List */}
                <ul className="space-y-5">
                  {[
                    "Vedic Remedies",
                    "Energy Cleansing",
                    "Direction Corrections",
                    "Mantra Guidance",
                    "Yantra Recommendations",
                    "Spiritual Practices",
                    "Positive Energy Alignment",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-brand-green/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                      </div>

                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Guidelines */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-green/30 via-brand-gold/40 to-brand-yellow/40" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <ShieldCheck className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-8 group-hover:text-brand-gold transition-colors duration-300">
                  Important Guidelines
                </h3>

                {/* List */}
                <ul className="space-y-5">
                  {[
                    "Perform remedies with faith and positivity.",
                    "Consistency gives better results.",
                    "Avoid negativity and stress.",
                    "Spiritual remedies support energy alignment.",
                    "Results may vary depending on individual karma and efforts.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-brand-green/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                      </div>

                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        {/* Decorative Blur */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-gold/20 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-sm font-medium tracking-wide text-brand-green">
                Privacy & Disclaimer
              </span>
            </div> */}

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              Your Trust &{" "}
              <span className="text-brand-gold">Confidentiality</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              We value your privacy and ensure that every consultation is
              handled with professionalism, confidentiality, and spiritual
              responsibility.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Privacy Card */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-green/30 via-brand-gold/40 to-brand-yellow/40" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <ShieldCheck className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-6 group-hover:text-brand-gold transition-colors duration-300">
                  Privacy
                </h3>

                {/* Content */}
                <p className="text-brand-green/70 leading-relaxed text-lg">
                  All client information, consultation details, reports, and
                  shared documents are kept strictly confidential and handled
                  with complete privacy.
                </p>
              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              {/* Top Gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-gold/40 via-brand-yellow/50 to-brand-green/30" />

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <AlertCircle className="w-7 h-7 text-brand-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-brand-green mb-6 group-hover:text-brand-gold transition-colors duration-300">
                  Disclaimer
                </h3>

                {/* Content */}
                <p className="text-brand-green/70 leading-relaxed text-lg">
                  Astrology, Numerology, and Vastu are spiritual guidance
                  sciences. Remedies, suggestions, and outcomes may vary based
                  on individual faith, karma, effort, and personal
                  circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
