import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nandini Malusare",
      text: "The Vedic Visionaries session felt like a supportive conversation and made me feel truly validated.",
    },
    {
      name: "Seema Phanse",
      text: "Very satisfied with the Vedic Vastu consultation. The guidance was practical, clear, and easy to follow. Excellent knowledge of Vastu principles and very professional service.",
    },
    {
      name: "Amit",
      text: "Very soft spoken and explains why the problem exists and how to overcome it. It was an enriching experience discussing my Kundali.",
    },
    {
      name: "Chavda Nilesh",
      text: "Good work. Every point was explained patiently with practical remedies. Truly satisfied with the service.",
    },
    {
      name: "Pooja Rajesh Hatanakar",
      text: "Very good and helpful consultation. The remedies suggested were genuinely useful.",
    },
    {
      name: "Neha Warkar",
      text: "I really liked the way everything was explained clearly and patiently. The advice gave me confidence and peace of mind.",
    },
    {
      name: "Sachin Singh",
      text: "The Numerology session gave me a lot of clarity about my career and personal life. The explanation was detailed and relatable.",
    },
    {
      name: "Jinali",
      text: "She guided us very nicely and explained everything well. She has great knowledge and her remedies really help.",
    },
    {
      name: "Sana",
      text: "I was genuinely surprised by the accuracy of the consultation. The remedies were simple yet powerful.",
    },
    {
      name: "Drashti Udani",
      text: "Excellent guidance, positive experience, and very accurate predictions. Thank you so much 🙏",
    },
    {
      name: "Mr. Susvirkar",
      text: "Felt very positive after the session. Highly recommended.",
    },
    {
      name: "Shaurya Lokhande",
      text: "One of the best Vedic consultation experiences we have had.",
    },
    {
      name: "Nikhil Bhatti",
      text: "Bahut knowledgeable aur supportive team hai. Consultation ke dauraan bilkul comfortable feel hua. Dhanyawaad.",
    },
    {
      name: "Vinit",
      text: "Har sawaal ka patiently jawaab diya gaya. Consultation ke baad kaafi positivity aur peace feel hui.",
    },
  ];

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-brand-beige/20 via-white to-brand-beige/30">
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

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className="flex flex-wrap justify-center items-center gap-5 mb-8">
              {["Real Voices", "Real Guidance", "Real Transformation"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-5">
                    <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm">
                      {item}
                    </span>

                    {index !== 2 && (
                      <span className="text-brand-gold/60 hidden md:block">
                        •
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-8">
              Client Experiences{" "}
              <span className="text-brand-gold">& Transformations</span>
            </h2>

            <div className="w-24 h-[2px] bg-brand-gold/60 mx-auto rounded-full mb-8" />

            <p className="text-lg md:text-xl text-brand-green/70 leading-relaxed">
              Every reading by Astrologer Ankur Tripathi is focused on bringing
              clarity, alignment, and peace. These testimonials reflect the
              trust people have built over the past 10+ years.
            </p>
          </div>

          <h6 className="text-center font-serif text-2xl md:text-3xl font-bold text-brand-green leading-tight mb-8">
            Testimonials
          </h6>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden
            bg-white/90 backdrop-blur-sm
            border border-brand-gold/10
            rounded-[2rem]
            p-8
            shadow-sm
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300
          "
              >
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Quote Icon */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-gold/15 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-brand-gold" />
                  </div>

                  {/* Text */}
                  <p className="text-brand-green/75 leading-relaxed text-[15px] md:text-base mb-8 italic">
                    &quot;{item.text}&quot;
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-[1px] bg-brand-gold/40 mb-5" />

                  {/* Name */}
                  <h3 className="font-serif text-xl font-bold text-brand-green group-hover:text-brand-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
