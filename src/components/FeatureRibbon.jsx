import React, { useRef, useEffect } from 'react';
import { UtensilsCrossed, Waves, PackageCheck, BedDouble, Sun } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ribbonItems = [
  { icon: UtensilsCrossed, label: 'Dining Experience' },
  { icon: Waves, label: 'Swimming Pool' },
  { icon: PackageCheck, label: 'Package Booking' },
  { icon: BedDouble, label: 'Comfortable Accommodation' },
  { icon: Sun, label: 'Beach Access' },
];

export default function FeatureRibbon() {
  const ribbonRef = useRef(null);
  const goldRibbonRef = useRef(null);
  const navyRibbonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        goldRibbonRef.current,
        { x: "-10%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ribbonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        navyRibbonRef.current,
        { x: "10%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ribbonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ribbonRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ribbonRef} className="relative z-30 -mt-16 sm:-mt-20 md:-mt-24 -mb-8 sm:-mb-10 md:-mb-12 font-['Inter'] select-none overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 25s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── 1. TOP GOLD ANGLED RIBBON (Auto-slides to Left) ── */}
      <div
        ref={goldRibbonRef}
        className="bg-[#b08f5a] text-[#132742] h-[55px] sm:h-[65px] md:h-[75px]
                   flex items-center shadow-lg w-[110vw] -ml-[7vw]
                   transform -rotate-[3.5deg] origin-top-right overflow-hidden relative z-10 "
      >
        <div className="animate-marquee-left flex items-center gap-8 sm:gap-12 md:gap-16">
          {[...ribbonItems, ...ribbonItems, ...ribbonItems, ...ribbonItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`gold-${idx}`} className="flex items-center gap-3 whitespace-nowrap text-sm sm:text-base md:text-[18px] font-semibold">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#132742] shrink-0" />
                <span>{item.label}</span>
                <span className="ml-6 md:ml-10 text-[#132742]/40">•</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 2. BOTTOM NAVY ANGLED RIBBON (Auto-slides to Right) ── */}
      <div
        ref={navyRibbonRef}
        className="bg-[#0e1e31] text-white h-[55px] sm:h-[65px] md:h-[75px]
                   flex items-center shadow-2xl w-[115vw] -ml-[7vw]
                   transform rotate-[1.8deg] origin-top-left overflow-hidden
                   -mt-4 sm:-mt-5 border-t border-b border-white/10 relative z-20"
      >
        <div className="animate-marquee-right flex items-center gap-8 sm:gap-12 md:gap-16">
          {[...ribbonItems, ...ribbonItems, ...ribbonItems, ...ribbonItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`navy-${idx}`} className="flex items-center gap-3 whitespace-nowrap text-sm sm:text-base md:text-[18px] font-medium text-white/90 hover:text-[#b08f5a] transition-colors cursor-pointer">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b08f5a] shrink-0" />
                <span>{item.label}</span>
                <span className="ml-6 md:ml-10 text-white/30">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
