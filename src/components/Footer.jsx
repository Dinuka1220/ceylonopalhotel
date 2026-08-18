import React from "react";
import { Clock, Phone } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

/**
 * Footer
 * Ceylon Opal Villas — site footer section.
 * Fully responsive: stacks on mobile, 2-col on tablet, 4-col on desktop.
 */

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

const pagesLinks = ["About Us", "Contact Info", "Facilities", "Gallery"];
const backLinks = ["Brand", "Social Links", "Company Registration", "Contracts"];

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl sm:text-xl font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-base text-white/90 hover:text-[#b08f5a] transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#152d49] w-full">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-0">
          {/* Brand / about column */}
          <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col">
              <img
                src="/images/logowhite.png"
                alt="Ceylon Opal Villas"
                className="w-[150px] sm:w-[110px] h-auto object-contain"
              />
            </div>

            <p className="text-base leading-relaxed text-[#f1f7ff] max-w-[400px]">
              Experience comfort, elegance, and warm Sri Lankan hospitality in
              the heart of Galle.
            </p>

            <div className="flex flex-row gap-2.5 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b08f5a] hover:bg-[#c7a56f] transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-[#ffffff]" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages column */}
          <FooterColumn title="Pages" links={pagesLinks} />

          {/* Back links column */}
          <FooterColumn title="Back Links" links={backLinks} />

          {/* Work hours column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl sm:text-xl font-bold text-white">
              Work Hours
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-3">
                <Clock className="w-5 h-5 text-[#b08f5a] shrink-0" />
                <span className="text-base text-white">24/7</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <Phone className="w-5 h-5 text-[#b08f5a] shrink-0" />
                <span className="text-base text-white">+94 76 00 00 000</span>
              </div>
              <p className="text-base leading-relaxed text-white max-w-[302px]">
                Our Support and Expert team is available 24/7 to answer your
                queries
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mt-5 sm:mt-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 pt-6">
          <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 text-center sm:text-left">
            <span className="text-sm text-white">
              Copyrights © 2026 Ceylon Opal Villas
            </span>
            <span className="hidden sm:inline-block w-2.5 h-px bg-white rotate-90" />
            <span className="text-sm text-white">
              Design by @dinukashalinda
            </span>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 text-center">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </a>
            <span className="hidden sm:inline-block w-2.5 h-px bg-white/70 rotate-90" />
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}