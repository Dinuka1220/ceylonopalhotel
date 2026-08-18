import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-[#0e1e31] text-white h-[47px] flex items-center px-4 md:px-16 border-b border-white/10 relative z-50 font-urbanist">
      <div className="max-w-[1728px] w-full mx-auto flex items-center justify-between">
        
        {/* Left Side: Contact Info matching exact Figma CSS */}
        <div className="flex items-center space-x-8 text-white/70 text-[15px] font-medium tracking-wide">
          <a 
            href="tel:+94785452785" 
            className="flex items-center gap-2 hover:text-[#b08f5a] transition-colors focus:outline-none"
            aria-label="Call Ceylon Opal Villas"
          >
            <Phone className="w-4 h-4 text-white/70" />
            <span>+94 785452785</span>
          </a>

          <a 
            href="mailto:ceylonopal@gmail.com" 
            className="flex items-center gap-2 hover:text-[#b08f5a] transition-colors focus:outline-none"
            aria-label="Email Ceylon Opal Villas"
          >
            <Mail className="w-4 h-4 text-white/70" />
            <span>ceylonopal@gmail.com</span>
          </a>
        </div>

        {/* Right Side: Social Icons matching exact Figma layout */}
        <div className="flex items-center space-x-4">
          <a 
            href="#facebook" 
            aria-label="Facebook"
            className="text-white/80 hover:text-[#b08f5a] transition-all p-1"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a 
            href="#twitter" 
            aria-label="Twitter"
            className="text-white/80 hover:text-[#b08f5a] transition-all p-1"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a 
            href="#instagram" 
            aria-label="Instagram"
            className="text-white/80 hover:text-[#b08f5a] transition-all p-1"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a 
            href="#linkedin" 
            aria-label="LinkedIn"
            className="text-white/80 hover:text-[#b08f5a] transition-all p-1"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
