import React from "react";
import {
  UtensilsCrossed,
  Waves,
  Sailboat,
  BedDouble,
  Palmtree,
} from "lucide-react";

/**
 * OurFacilities
 * -------------------------------------------------------------
 * Fully responsive "Our Facilities" section built with
 * React + Tailwind CSS.
 * -------------------------------------------------------------
 */

const FACILITIES = [
  {
    id: "dining",
    title: "Dining Experience",
    description:
      "Savor delicious local and international dishes prepared with fresh ingredients, served in a relaxing atmosphere where every meal becomes a memorable part of your stay.",
    Icon: UtensilsCrossed,
  },
  {
    id: "pool",
    title: "Swimming Pool",
    description:
      "Relax and refresh beside our inviting swimming pool, offering a peaceful space to enjoy the tropical sunshine, unwind after sightseeing, and create wonderful holiday memories.",
    Icon: Waves,
  },
  {
    id: "package",
    title: "Package Booking",
    description:
      "Discover convenient hotel packages designed for couples, families, and travelers, combining comfortable accommodation and memorable experiences while making your Galle getaway simple and enjoyable.",
    Icon: Sailboat,
  },
  {
    id: "accommodation",
    title: "Comfortable Accommodation",
    description:
      "Enjoy peaceful, stylish rooms featuring comfortable beds, modern amenities, elegant interiors, and a welcoming atmosphere designed to provide restful nights and a relaxing stay.",
    Icon: BedDouble,
  },
  {
    id: "beach",
    title: "Beach Access",
    description:
      "Enjoy easy access to beautiful beaches near Galle, where you can relax beside the ocean, take refreshing walks, admire sunsets, and experience Sri Lanka's coastal beauty.",
    Icon: Palmtree,
  },
];

function FacilityCard({ title, description, Icon }) {
  return (
    <div
      className="
        group relative flex flex-col items-center text-center
        w-full max-w-[280px] sm:max-w-none mx-auto
        rounded-lg bg-white/40 backdrop-blur-md
        shadow-[0_4px_14px_rgba(0,0,0,0.25)]
        px-6 py-8 sm:py-10
        transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:bg-white/55
      "
    >
      <div
        className="
          flex items-center justify-center
          w-12 h-12 sm:w-[50px] sm:h-[50px] mb-5
          text-[#132742]
        "
      >
        <Icon className="w-full h-full" strokeWidth={1.75} />
      </div>

      <h3
        className="
          font-bold text-[#132742]
          text-lg sm:text-xl
          leading-tight mb-4
        "
      >
        {title}
      </h3>

      <p
        className="
          text-[#132742]/90
          text-[13px] sm:text-[15px]
          leading-[1.5] tracking-wide
          max-w-[220px] sm:max-w-[180px]
        "
        style={{ fontFamily: "'Arapey', serif" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function OurFacilities({
  backgroundImage = "/images/facilitybg.png",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0f1a]">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-5.29deg, rgba(255,255,255,0) 0%, rgba(188,188,188,0.13) 20%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="
              text-white uppercase font-bold tracking-wide
              text-3xl sm:text-4xl lg:text-5xl
              mb-3 sm:mb-4
            "
          >
            Our Facilities
          </h2>
          <p className="text-white text-sm sm:text-base font-light">
            Check out our awesome Facilities
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2 sm:gap-6
            lg:grid-cols-3 lg:gap-6
            xl:grid-cols-5 xl:gap-6
            max-w-[1500px] mx-auto
          "
        >
          {FACILITIES.map((facility) => (
            <FacilityCard key={facility.id} {...facility} />
          ))}
        </div>
      </div>


      <div className="relative z-50  -mb-[4rem]   bottom-0">
        <img
          src="/images/brushimg.png"
          alt="asdad"
          className="w-full h-20 sm:h-28 md:h-36 object-cover"
        />
      </div>
    </section>
  );
}
