import React, { useRef, useEffect } from 'react';
import PaintBrushDivider from './PaintBrushDivider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection({ onOpenEnquiry, onSelectImage }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current ? headerRef.current.children : [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Card & items animation
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          cardRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-0 bg-slate-900 text-slate-900 overflow-hidden pt-16 md:pt-24">

      {/* Background Beachfront Villa Image (.lenticular-castoff-1 / _52-1) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/images/whychooseusbg.jpg')" }}
      >
        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/50 via-[#000000]/10 to-transparent"></div>
      </div>

      <div className="max-w-[1728px] mx-auto px-4 md:px-16 relative z-10 py-12 md:py-20">

        {/* Right Header Area matching Figma (.why-choose-us & .a-serene-escape...) */}
        <div ref={headerRef} className="flex flex-col items-end text-right mb-10 md:mb-10 space-y-2">

          <div className="font-poppins text-[15px] font-medium text-[#132742] tracking-wide  px-4 py-1 rounded-full ">
            Why Choose Us
          </div>

          <h2 className="font-urbanist text-3xl sm:text-4xl md:text-[30px] font-semibold text-[#132742] leading-[1.25] uppercase max-w-2xl  p-4 rounded-2xl ">
            A SERENE ESCAPE BY THE BEACH <br />
            <span>WHERE LUXURY MEETS NATURE</span>
          </h2>

        </div>

        {/* Floating Glassmorphic Caption Card matching Figma (.caption-card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-4 hidden lg:block">
            {/* Left side empty space to let background resort image shine */}
          </div>

          <div className="lg:col-span-8 flex justify-end">
            <div ref={cardRef} className="figma-caption-card w-full max-w-[732px] p-6 sm:p-10 space-y-6 relative z-20 border border-white/50">

              {/* Item 1: Peaceful Natural Setting */}
              <div className="space-y-1">
                <h3 className="font-poppins text-[20px] font-medium text-[#132742]">
                  Peaceful Natural Setting
                </h3>
              </div>

              {/* Item 2: Luxury & Comfort */}
              <div className="space-y-2 pt-2 ">
                <h3 className="font-poppins text-[20px] font-medium text-[#132742]">
                  Luxury & Comfort
                </h3>
                <p className="font-inter text-[15px] leading-[23px] text-black/90">
                  Our elegantly designed rooms offer the perfect balance of style and comfort. Wake up to breathtaking views of the garden and unwind in a cozy, well-appointed space.
                </p>
              </div>

              {/* Item 3: Unforgettable Experiences */}
              <div className="space-y-2 pt-2">
                <h3 className="font-poppins text-[20px] font-medium text-[#132742]">
                  Unforgettable Experiences
                </h3>
                <p className="font-inter text-[15px] leading-[23px] text-black/90">
                  Beyond relaxation, Villa Amecey offers plenty of activities to make your stay truly special. Whether you prefer adventure or pure relaxation, there's something for everyone.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Paint Brush Edge Stroke Divider at bottom of Section 2 (_14-white-grunge-brush-stroke-13-1) */}
      <div className="relative z-20 mt-8">
        <img
          src="/images/brushimg.png"
          alt=""
          className="w-full h-20 sm:h-28 md:h-36 object-cover"
        />
      </div>

    </section>
  );
}
