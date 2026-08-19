import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function Header({ onOpenEnquiry }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40 font-sans">

      {/*
        Wrap both bars in one relative container so the logo badge
        can be absolutely positioned from the very top of the header,
        overlapping the navy bar exactly like the reference image.
      */}
      <div className="relative w-full">

        {/* ── NAVY TOP INFO BAR ── */}
        <div className="h-[47px] w-full bg-[#0e1e31] flex items-center px-4 md:px-16">
          <div className="max-w-[1728px] w-full mx-auto flex items-center justify-between">

            {/* Left: Phone + Email */}
            <div className="hidden lg:flex  items-center gap-6 text-white/70 text-[13px] md:text-[15px]  lg:text-[11px] xl:text-[15px] font-medium tracking-[0.05em]"
              style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-white/70 shrink-0" />
                +94 785452785
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <Mail size={16} className="text-white/70 shrink-0" />
                ceylonopal@gmail.com
              </span>
            </div>

            {/* Right: Social Icons — leave enough right padding for the badge area */}
            <div className="hidden lg:flex  items-center gap-5 text-white/70 pr-2">
              <a href="#" aria-label="Facebook" className="hover:text-[#b08f5a] transition-colors">
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#b08f5a] transition-colors">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#b08f5a] transition-colors">
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>

          </div>
        </div>

        {/* ── WHITE NAV BAR ── */}
        <div className="w-full bg-transparent  h-20 md:h-24 flex items-center">
          <div className="max-w-[1728px] w-full mx-auto px-4 md:px-16 flex items-center justify-between">

            {/* Left Nav Links */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-16 xl:ml-[10rem] ">
              <a href="#home"
                className="font-['Josefin_Sans'] text-lg lg:text-md font-bold text-[#035186] hover:text-[#b08f5a] transition-colors">
                Home
              </a>
              <a href="#about"
                className="font-['Josefin_Sans'] text-lg lg:text-md font-bold text-black hover:text-[#b08f5a] transition-colors">
                About Us
              </a>
            </nav>

            {/* Center spacer so nav links don't crowd behind the badge */}
            <div className="hidden md:block w-[200px] lg:w-[294px]" />

            {/* Right Nav Links */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-16 lg:mr-[10rem] ">
              <a href="#gallery"
                className="font-['Josefin_Sans'] text-lg lg:text-md font-bold text-black hover:text-[#b08f5a] transition-colors">
                Gallery
              </a>
              <a href="#contact"
                className="font-['Josefin_Sans'] text-lg lg:text-md font-bold text-black hover:text-[#b08f5a] transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-[#132742] ml-auto p-2 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/*
          ── FLOATING LOGO BADGE ──
          Absolutely positioned from the top of the entire combined wrapper,
          centered horizontally. Starts at top=0 so it overlaps the navy bar,
          matching the reference design exactly.
        */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
          <a
            href="#home"
            className="flex flex-col items-center justify-center
             w-[170px] md:w-[220px] lg:w-[294px]
             h-[115px] md:h-[140px] lg:h-[157px]
             bg-white rounded-b-[20px]
             shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
             px-3 pt-3 pb-4
             hover:scale-[1.01] transition-transform"
            aria-label="Ceylon Opal Villas Homepage"
          >
            <img
              src="/images/logo.png"
              alt="Ceylon Opal Villas"
              className="w-[100px] md:w-[120px] lg:w-[140px] h-auto object-contain"
            />
          </a>
        </div>

        {/* Mobile Nav Drawer */}
        {open && (
          <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50 flex flex-col gap-4 px-6 py-6 md:hidden">
            <a href="#home" onClick={() => setOpen(false)}
              className="font-['Josefin_Sans'] text-lg font-bold text-[#035186] hover:text-[#b08f5a]">Home</a>
            <a href="#about" onClick={() => setOpen(false)}
              className="font-['Josefin_Sans'] text-lg font-bold text-[#132742] hover:text-[#b08f5a]">About Us</a>
            <a href="#gallery" onClick={() => setOpen(false)}
              className="font-['Josefin_Sans'] text-lg font-bold text-[#132742] hover:text-[#b08f5a]">Gallery</a>
            <a href="#contact" onClick={() => setOpen(false)}
              className="font-['Josefin_Sans'] text-lg font-bold text-[#132742] hover:text-[#b08f5a]">Contact Us</a>
            {onOpenEnquiry && (
              <button
                onClick={() => { setOpen(false); onOpenEnquiry(); }}
                className="mt-2 bg-[#b08f5a] text-white font-bold text-sm rounded-full py-3 px-6 text-center shadow-md"
              >
                Enquire Now
              </button>
            )}
          </nav>
        )}

      </div>
    </header>
  );
}