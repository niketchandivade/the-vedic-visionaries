import Image from "next/image";

import { Clock3, Contact, Mail, Phone, Pin } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-brand-beige via-white to-brand-yellow/10">
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
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-yellow/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-200/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-brand-yellow font-semibold tracking-widest uppercase mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-brand-green">
            Let’s Connect With You
          </h2>
          <p className="mt-5 text-brand-green max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions, suggestions, or want to know more about our
            services? Fill out the form below and our team will get back to you
            shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-5 sm:p-8 lg:p-10">
  
  {/* Heading */}
  <div className="flex items-center gap-3 sm:gap-4 mb-8">
    <h3 className="text-xl sm:text-2xl font-bold text-brand-green">
      Get In Touch
    </h3>
  </div>

  <div className="space-y-6">
    
    {/* Phone */}
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="min-w-12 min-h-12 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-gold/20">
        <Phone className="w-5 h-5 text-brand-gold" />
      </div>

      <div className="min-w-0">
        <h4 className="font-semibold text-base sm:text-lg text-brand-green">
          Phone
        </h4>

        <p className="text-brand-green mt-1 break-words text-sm sm:text-base">
          +91 97699 64070
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="min-w-12 min-h-12 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-gold/20">
        <Mail className="w-5 h-5 text-brand-gold" />
      </div>

      <div className="min-w-0">
        <h4 className="font-semibold text-base sm:text-lg text-brand-green">
          Email
        </h4>

        <p className="text-brand-green mt-1 break-all text-sm sm:text-base">
          vedicvisionaries02@gmail.com
        </p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="min-w-12 min-h-12 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-yellow/10 flex items-center justify-center border border-brand-gold/20">
        <Clock3 className="w-5 h-5 text-brand-gold" />
      </div>

      <div className="min-w-0">
        <h4 className="font-semibold text-base sm:text-lg text-brand-green">
          Working Hours
        </h4>

        <p className="text-brand-green mt-1 text-sm sm:text-base">
          Mon - Fri : 10:00 AM - 5:00 PM
        </p>
      </div>
    </div>

  </div>
</div>

          {/* Inquiry CTA */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-brand-green mb-6">
                Submit Your Inquiry
              </h3>

              <p className="text-brand-green text-lg leading-relaxed mb-8">
                We’d love to hear from you. Click the button below to fill out
                our inquiry form and our team will get back to you as soon as
                possible.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdEBcWD_ND-qBd0a9uTJZLJaeV3STIGjP6PpJmBAH3MZbIAzA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-2xl bg-brand-gold hover:bg-brand-yellow/90 transition-all duration-300 py-4 font-semibold text-white shadow-lg hover:shadow-xl"
              >
                Open Inquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
