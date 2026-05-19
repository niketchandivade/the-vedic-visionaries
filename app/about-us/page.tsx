import {
  Award,
  Sparkles,
  Stars,
  Orbit,
  ArrowRight,
  MessageCircle,
  ScrollText,
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
  Phone,
  Video,
  MapPin,
  Smartphone,
  Quote,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/VVbackground.svg"
            alt="Vedic Background"
            className="w-full h-full object-cover opacity-[0.15]"
            width={'100'}
            height={'100'}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br " />
        </div>
        
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-center">
              {/* Heading */}
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-8">
                About <span className="text-brand-gold">Us</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed mb-10 max-w-3xl">
                Blending authentic Vedic wisdom with practical modern guidance
                to help individuals gain clarity, confidence, positivity, and
                spiritual balance in everyday life.
              </p>

              {/* Highlights */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Card 1 */}
                <div className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-2xl px-6 py-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all duration-300">
                    <Award className="w-6 h-6 text-brand-gold" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-green">
                      Certified Astrologer
                    </h3>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-2xl px-6 py-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-brand-gold" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-green">
                      10+ Years Experience
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-brand-green text-brand-white shadow-lg">
                <Stars className="w-5 h-5 text-brand-yellow" />

                <span className="font-medium tracking-wide">
                  Modern + Vedic Astrology for Real-Life Clarity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        {/* Decorative Blur */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
            {/* Right Side - Content */}
            <div className="flex flex-col justify-center items-center">
              {/* Main Heading */}
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-8">
                Guiding Lives Through{" "}
                <span className="text-brand-gold">Vedic Wisdom</span>
              </h2>

              {/* Highlights */}
              <div className="flex justify-center flex-wrap gap-4 mb-10">
                {/* Certified */}
                <div className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-2xl px-6 py-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all duration-300">
                    <Award className="w-6 h-6 text-brand-gold" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-green">
                      Certified Astrologer
                    </h3>
                  </div>
                </div>

                {/* Experience */}
                <div className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-2xl px-6 py-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold/10 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-brand-gold" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-green">
                      10+ Years Experience
                    </h3>
                  </div>
                </div>
              </div>

              {/* Intro */}
              <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed mb-8">
                The Vedic Visionaries is a trusted name in modern Vedic
                astrology, known for providing clear, practical, and deeply
                insightful guidance. With over 10+ years of professional
                experience, he has helped thousands of individuals navigate
                life’s challenges with confidence and peace.
              </p>

              <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed mb-10">
                our approach blends the ancient wisdom of Vedic astrology with
                modern interpretation, offering guidance that is spiritual yet
                practical, intuitive yet logical — helping people understand
                their destiny with clarity.
              </p>

              {/* Journey Card */}
              <div className="bg-white/70 backdrop-blur-sm border border-brand-gold/10 rounded-3xl p-8 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center">
                    <Orbit className="w-6 h-6 text-brand-gold" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-green">
                    A Journey Rooted in Purpose
                  </h3>
                </div>

                <p className="text-brand-green/70 leading-relaxed text-lg">
                  Since childhood, The Vedic Visionaries felt a strong connection with cosmic
                  energies, planetary movements, and spiritual sciences. What
                  began as curiosity evolved into a deep passion, leading him to
                  pursue astrology professionally.
                </p>

                <p className="text-brand-green/70 leading-relaxed text-lg mt-5">
                  Today, The Vedic Visionaries stands as a certified astrologer, delivering
                  accurate readings and meaningful solutions across India and
                  abroad.
                </p>
              </div>

              {/* Mission Card */}
              <div className="w-full bg-brand-green text-brand-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-white/10 border border-brand-gold/20 flex items-center justify-center">
                      <Stars className="w-6 h-6 text-brand-yellow" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold">
                      Our Mission
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl italic leading-relaxed text-brand-white/90">
                    “To help people find clarity, alignment, and peace through
                    honest, compassionate, and reliable astrology.”
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <button
                  className="
              inline-flex items-center gap-3
              bg-brand-gold hover:bg-brand-yellow
              text-brand-green
              px-8 py-4 rounded-2xl
              font-semibold tracking-wide
              transition-all duration-300
              hover:scale-[1.02]
              shadow-lg
            "
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/30 via-white to-brand-beige/20">
        {/* Decorative Blurs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight">
              What Makes Our{" "}
              <span className="text-brand-gold">Approach Unique?</span>
            </h2>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full mt-6 mb-8" />

            {/* Description */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              A balanced blend of ancient Vedic wisdom, practical solutions, and
              compassionate guidance designed for modern life challenges.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <Sparkles className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Modern + Vedic Combined
              </h3>

              <p className="text-brand-green/70 leading-relaxed text-lg">
                The Vedic Visionaries blends traditional Vedic principles with a modern
                understanding of life, careers, relationships, and human
                psychology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <MessageCircle className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Calm, Clear & Non-Judgmental
              </h3>

              <p className="text-brand-green/70 leading-relaxed text-lg">
                Every consultation is explained in simple Hindi or English so
                anyone can understand their chart without confusion or fear.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <ScrollText className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Accurate Manual Chart Reading
              </h3>

              <p className="text-brand-green/70 leading-relaxed text-lg">
                Every Kundali, compatibility check, and prediction is personally
                analysed manually — never generated through automated reports.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <ShieldCheck className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Solutions That Work
              </h3>

              <p className="text-brand-green/70 leading-relaxed text-lg">
                Remedies are practical, safe, spiritual, and easy to follow —
                including mantras, yantras, routine corrections, and lifestyle
                guidance.
              </p>
            </div>
          </div>

          {/* Bottom Guidance Card */}
          <div className="mt-16 bg-brand-green rounded-[2rem] p-10 md:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-brand-gold/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-brand-white/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-8">
                <Stars className="w-10 h-10 text-brand-yellow" />
              </div>

              {/* Heading */}
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-8">
                Guidance for Real-Life Problems
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Relationships",
                  "Marriage",
                  "Career",
                  "Finance",
                  "Vastu",
                  "Health",
                  "Business",
                  "Family Issues",
                  "Spiritual Growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-5 py-3 rounded-2xl bg-brand-white/10 border border-brand-gold/20 text-brand-white backdrop-blur-sm hover:bg-brand-gold/10 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-brand-beige/20 to-white">
        {/* Decorative Glow */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-brand-yellow/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 blur-3xl rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-brand-gold/50" />

              <span className="text-brand-gold tracking-[0.3em] uppercase text-sm font-semibold">
                Expertise
              </span>

              <div className="w-16 h-[1px] bg-brand-gold/50" />
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-6">
              Areas of <span className="text-brand-gold">Expertise</span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Personalized spiritual guidance and practical astrological
              solutions designed to bring clarity, alignment, and confidence in
              every aspect of life.
            </p>
          </div>

          {/* Main Expertise Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            {/* Card 1 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <Stars className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Birth Chart / Janam Kundali Analysis
              </h3>

              <p className="text-brand-green/70 text-lg leading-relaxed">
                Deep insights into your life purpose, strengths, challenges, and
                future timeline through detailed planetary analysis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <HeartHandshake className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Matchmaking / Kundali Milan
              </h3>

              <p className="text-brand-green/70 text-lg leading-relaxed">
                Accurate compatibility readings for marriage and long-term
                relationships to support harmony, trust, and emotional
                alignment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2rem] p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 transition-all duration-300">
                <Orbit className="w-7 h-7 text-brand-gold" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-green mb-5 group-hover:text-brand-gold transition-colors duration-300">
                Vedic Astrology Consultations
              </h3>

              <p className="text-brand-green/70 text-lg leading-relaxed">
                Holistic guidance based on planetary energies, dasha cycles,
                karmic patterns, and spiritual alignment.
              </p>
            </div>
          </div>

          {/* Additional Specializations */}
          <div className="bg-brand-green rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              {/* Title */}
              <div className="text-center mb-12">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-5">
                  Additional Specializations
                </h3>

                <div className="w-24 h-[2px] bg-brand-gold/70 mx-auto rounded-full" />
              </div>

              {/* Specializations */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Vastu Consultation",
                  "Numerology",
                  "Palmistry",
                  "Gemstone Recommendations",
                  "Yantra & Mantra Remedies",
                  "Financial Astrology",
                  "Career Guidance",
                  "Health Guidance",
                  "Spiritual Guidance",
                  "Annual Predictions",
                  "Courses & Workshops",
                  "Corporate Astrology Sessions",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                px-5 py-3 rounded-2xl
                bg-brand-white/10
                border border-brand-gold/20
                text-brand-white
                backdrop-blur-sm
                hover:bg-brand-gold/10
                hover:border-brand-gold/40
                transition-all duration-300
              "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/20 via-white to-brand-beige/30">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Philosophy Section */}
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="w-24 h-[2px] bg-brand-gold/60 mx-auto rounded-full mb-8" />

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-8">
              “Astrology should{" "}
              <span className="text-brand-gold">guide you,</span> not scare
              you.”
            </h2>

            <p className="text-xl md:text-2xl text-brand-green/70 leading-relaxed max-w-4xl mx-auto">
              The Vedic Visionaries believes astrology is not destiny — it’s a roadmap. The
              planets show tendencies, but your choices shape your life.
            </p>

            {/* Values */}
            <div className="flex flex-wrap justify-center items-center gap-5 mt-12">
              {["Truth", "Clarity", "Compassion", "Confidentiality"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-5">
                    <div className="px-6 py-3 rounded-2xl bg-white border border-brand-gold/15 shadow-sm text-brand-green font-medium hover:shadow-md transition-all duration-300">
                      {item}
                    </div>

                    {index !== 3 && (
                      <span className="text-brand-gold text-xl hidden md:block">
                        •
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Consultation + Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-1 mb-24">
            {/* Consultation Methods */}
            <div className="bg-white/80 backdrop-blur-sm border border-brand-gold/10 rounded-[2.5rem] p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center">
                  <PhoneCall className="w-7 h-7 text-brand-gold" />
                </div>

                <div>
                  <h3 className="font-serif text-4xl font-bold text-brand-green">
                    How People Consult Us
                  </h3>

                  <p className="text-brand-green/60 mt-1">
                    Flexible consultation options available worldwide
                  </p>
                </div>
              </div>

              {/* Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone Call",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp Call",
                  },
                  {
                    icon: Video,
                    title: "Video Call",
                  },
                  {
                    icon: MapPin,
                    title: "In-Person",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-brand-beige/40 border border-brand-gold/10 hover:bg-brand-yellow/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-brand-gold/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>

                      <span className="text-brand-green font-medium">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Languages */}
              <div className="pt-6 border-t border-brand-gold/10">
                <p className="text-brand-green/70 text-lg">
                  <span className="font-semibold text-brand-green">
                    Languages:
                  </span>{" "}
                  Hindi, English & Marathi
                </p>
              </div>
            </div>
          </div>

          {/* Purpose Section */}
          <div className="relative overflow-hidden bg-white border border-brand-gold/10 rounded-[3rem] p-12 md:p-16 shadow-sm">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-brand-yellow/10 border border-brand-gold/20 flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-brand-gold" />
              </div>

              <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-8 leading-tight">
                The Purpose of{" "}
                <span className="text-brand-gold">This Platform</span>
              </h3>

              <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed">
                This website has been created to offer easy access to services
                for anyone seeking clarity in love, career, financial stability,
                family peace, and spiritual balance.
              </p>

              <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed mt-6">
                You deserve guidance that is pure, compassionate, and genuinely
                helpful — and that is exactly what The Vedic Visionaries
                delivers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
