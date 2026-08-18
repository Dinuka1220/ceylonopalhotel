import React from 'react';
import { Award, Clock, HeartHandshake } from 'lucide-react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function AboutUsSection({ onOpenEnquiry, onSelectImage }) {
  return (
    <section id="about" className="relative z-20 bg-white pt-16 pb-16 md:pt-15 md:pb-24">

      {/* Bottom Layer: Bottom Brush Image */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-0 pointer-events-none w-full">
        <img
          src="/images/aboutbottombrush.png"
          alt=""
          className="w-full h-20 sm:h-28 md:h-36 object-cover mt-[8rem]"
        />
      </div>

      {/* Next Layer: Background Image */}
      <div className="absolute  pointer-events-none">
        <img
          src="/images/aboutbgimg.png"
          alt="tree"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: About Text & Story */}
          <div className="lg:col-span-6 space-y-6">

            {/* Tagline */}
            <div>
              <span className="text-[#c6a258] text-xs font-bold uppercase tracking-widest block font-sans-body">
                About Us
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#0b1a2c] leading-tight mt-2 max-w-[55rem]">
                A LEGENDARY WELCOME, <br />
                <span className="text-[#0b1a2c]">EVERY TIME</span>
              </h2>
            </div>

            {/* Paragraph Text */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans-body">
              <p>
                Welcome to our charming hotel in Galle, where comfort, warm hospitality, and the beauty of Sri Lanka come together. We provide a peaceful and welcoming environment for couples, families, and travelers looking to enjoy a memorable stay.
                Located close to Galle's beautiful beaches and attractions, our hotel offers comfortable accommodation, refreshing facilities, delicious dining, and friendly service. Whether you are visiting for a relaxing holiday or exploring the historic charm of Galle, we are here to make every moment of your stay special.
              </p>

            </div>



            {/* Bottom Row: Social Icons & Action Button */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              {/* Social Media Circular Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-[#0b1a2c] text-white flex items-center justify-center hover:bg-[#c6a258] hover:text-[#0b1a2c] transition-all duration-300 shadow-xs"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>

                <a href="#facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#0b1a2c] text-white flex items-center justify-center hover:bg-[#c6a258] hover:text-[#0b1a2c] transition-all duration-300 shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a href="#instagram"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#0b1a2c] text-white flex items-center justify-center hover:bg-[#c6a258] hover:text-[#0b1a2c] transition-all duration-300 shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#0b1a2c] text-white flex items-center justify-center hover:bg-[#c6a258] hover:text-[#0b1a2c] transition-all duration-300 shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>


            </div>

          </div>

          {/* RIGHT COLUMN: Overlapping Circular Collage */}
          <div className="lg:col-span-6 relative flex justify-center items-center">

            <div className="relative w-full max-w-[480px] aspect-square">

              {/* Bottom Left Circular Image */}
              <div>
                <img
                  src="/images/aboutcircleimg.png"
                  alt="Luxury bedroom suite at Ceylon One Villas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}