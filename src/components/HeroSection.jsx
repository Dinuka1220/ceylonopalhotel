import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection({ onOpenEnquiry, onSelectImage }) {
  return (
    <section id="home" className="relative  pt-[160px] md:pt-[175px] pb-28 md:pb-36 overflow-hidden min-h-screen lg:min-h-[118vh] max-h-screen">

      <div className="max-w-[1728px]  mx-auto px-4 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">

          {/* LEFT COLUMN: Main Text Specs directly from Figma CSS */}
          <div className="lg:col-span-5 space-y-3">

            {/* Subheading .discover-tranquil-living */}
            <div className="font-urbanist text-[16px] font-medium tracking-[0.05em] mt-[0rem] text-[#000000]">
              Discover Tranquil Living
            </div>

            {/* Headline .iconic-and-luxury-villa */}
            <h1 className="font-urbanist text-5xl sm:text-7xl lg:text-[60px] xl:text-[75px] font-medium text-[#132742] leading-[1.05] tracking-tight text-stroke-1">
              Iconic and <br />
              <span>Luxury Villa</span>
            </h1>

            {/* Body Text .looking-for-the-perfect-destination... */}
            <p className="font-inter text-[12px] leading-[21px] text-black/70 max-w-[462px]">
              Looking for the perfect destination to relax and recharge? Our villa offers an idyllic paradise, complete with spacious rooms, high-end amenities, and private outdoor spaces where you can unwind in style.
            </p>

            {/* Enquire Now Button .frame-20 */}
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#b08f5a] hover:bg-[#9a7b48] text-white font-onest text-[13px] font-semibold px-5 py-[5px] rounded-[30px] transition-all duration-300 shadow-[0px_10px_15px_5px_rgba(0,0,0,0.25)] hover:shadow-xl cursor-pointer"
              >
                Enquire Now
              </button>
            </div>

            <div className="relative z-10 grid grid-cols-[auto_1fr_auto] items-center gap-6 px-8 py-10 sm:px-1 sm:py-5">
              {/* Col 1: big R */}
              <span
                className="select-none font-['Urbanist'] text-[110px] font-extrabold leading-none text-[#132742] sm:text-[150px]"
                aria-hidden="true"
              >
                R
              </span>

              {/* Col 2: stacked text */}
              <div className="-ml-4 font-['Inter'] text-3xl font-bold leading-tight text-[#132742] sm:-ml-6 sm:text-[33px]">
                <p>elax</p>
                <p>echarge</p>
                <p>efresh</p>
              </div>

              {/* Col 3: View Packages + arrow */}
              <div className="flex items-center gap-4 justify-self-end">
                <a
                  href="#packages"
                  className="flex h-[40px] items-center justify-center whitespace-nowrap rounded-full bg-[#b08f5a] px-8 text-white font-semibold text-[#132742] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Packages
                </a>
                <a
                  href="#packages"
                  aria-label="View packages"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#b08f5a] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>
            </div>






          </div>

          {/* RIGHT COLUMN: Arch Layout & Image Collages matching Figma */}
          <div className="lg:col-span-7 relative pt-4 lg:pt-0">
            <div className="grid grid-cols-12">

              <div>
                <div className="w-2xl overflow-hidden relative top-[-5rem]">
                  <img
                    src="/images/heromain.png"
                    alt="Iconic Luxury Villa Pool View"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section >
  );
}
