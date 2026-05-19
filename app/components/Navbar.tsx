"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Home", value: "/" },
  { label: "About", value: "about-us" },
  { label: "Services", value: "our-services" },
  { label: "Testimonials", value: "testimonials" },
  { label: "FAQs", value: "faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-brand-white/95 backdrop-blur-sm border-b border-brand-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex flex-col cursor-pointer">
              <Image
                src="/VV Logo.png"
                alt="The Vedic Visionaries Logo"
                width={220}
                height={100}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.value}
                href={`/${item.value.toLowerCase()}`}
                className={`font-sans text-sm tracking-wide uppercase transition-colors duration-300 ${
                  pathname === `/${item.value.toLowerCase()}` ||
                  (item.value === "/" && pathname === "/")
                    ? "text-brand-gold font-semibold"
                    : "text-brand-green/70 hover:text-brand-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEBcWD_ND-qBd0a9uTJZLJaeV3STIGjP6PpJmBAH3MZbIAzA/viewform"
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green/90 text-white font-medium py-2 px-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Enquiry
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-brown hover:text-brand-brownLight p-2"
              type="button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-green" /> : <Menu className="h-6 w-6 text-brand-green" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-beige border-t border-brand-gold/20 animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.value}
                href={`/${item.value.toLowerCase()}`}
                className={`block w-full text-left px-3 py-4 text-base font-medium ${
                  pathname === `/${item.value.toLowerCase()}` ||
                  (item.value === "/" && pathname === "/")
                    ? "bg-brand-gold/20 text-brand-gold"
                    : "text-brand-green hover:bg-brand-gold/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEBcWD_ND-qBd0a9uTJZLJaeV3STIGjP6PpJmBAH3MZbIAzA/viewform"
              target="_blank"
              rel="noreferrer"
              className="w-full mt-4 bg-brand-brown text-brand-gold px-3 py-4 font-bold uppercase tracking-wide"
            >
              Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
