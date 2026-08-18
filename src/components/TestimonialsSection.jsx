import { useState } from "react";
import { Star, ChevronRight } from "lucide-react";

// Local images — place these in your project (e.g. src/assets/) and
// adjust the import paths to match where your files actually live.
import avatarShehani from "/images/girl.png";
import avatarPalitha from "/images/tes2.png";
import avatarLucas from "/images/tes3.png";
import testimonialImg from "/images/testimonialimg.png";

/**
 * TestimonialsSection
 * -----------------------------------------------------------------------
 * Fully responsive "Client's Reviews" section.
 * Click a name card on the left to load that guest's review on the right.
 *
 * Usage:
 *   import TestimonialsSection from "./TestimonialsSection";
 *   <TestimonialsSection />
 */

const REVIEWS = [
    {
        id: 1,
        name: "Shehani Madushika",
        country: "Sri Lanka",
        rating: 5,
        avatar: avatarShehani,
        quote:
            "From check-in to check-out, everything was seamless. The rooms felt like a quiet retreat and the breakfast spread was outstanding. It's rare to find a place this consistent — we're already planning our next visit.",
    },
    {
        id: 2,
        name: "Palitha Herath",
        country: "Sri Lanka",
        rating: 4,
        avatar: avatarPalitha,
        quote:
            "A genuinely relaxing getaway. The location is stunning, the staff remembered our names by day two, and small touches — fresh flowers, a welcome note — made the whole trip feel personal rather than generic.",
    },
    {
        id: 3,
        name: "Lucas Benjamin Carter",
        country: "Australia",
        rating: 5,
        avatar: avatarLucas,
        quote:
            "We had an amazing stay at the hotel. The room was clean, comfortable, and beautifully maintained, while the peaceful surroundings made our trip even more relaxing. The staff were friendly, helpful, and always ready to assist us.",
    },
];

export default function TestimonialsSection() {
    const [activeId, setActiveId] = useState(REVIEWS[0].id);
    const active = REVIEWS.find((r) => r.id === activeId) ?? REVIEWS[0];

    return (
        <section className="relative w-full overflow-hidden bg-white  py-16  sm:py-20  lg:py-24">
            {/*brush*/}
            <div className="relative z-20  -mt-[6rem] mb-[3rem] top-0">
                <img
                    src="/images/gallerybottombrush.png"
                    alt=""
                    className="w-full h-20 sm:h-28 md:h-36 object-cover  w-full"
                />
            </div>
            {/* Eyebrow + heading */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="font-[Urbanist,sans-serif] text-3xl font-bold uppercase tracking-wide text-[#132742] sm:text-4xl">
                    Testimonial
                </h2>
                <p className="mt-2 font-[Arapey,serif] text-sm tracking-wide text-[#132742]/70 sm:text-base">
                    What People Says
                </p>
            </div>

            <div className="relative z-10 mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
                {/* ---------------- Left: clickable name cards ---------------- */}
                <div className="flex flex-col gap-4">
                    {REVIEWS.map((review) => {
                        const isActive = review.id === activeId;
                        return (
                            <button
                                key={review.id}
                                type="button"
                                onClick={() => setActiveId(review.id)}
                                aria-pressed={isActive}
                                className={[
                                    "flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300",
                                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08F5A] focus-visible:ring-offset-2",
                                    isActive
                                        ? "border-transparent bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
                                        : "border-transparent bg-[#F7F7F9] hover:bg-[#EFEFF2]",
                                ].join(" ")}
                            >
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14"
                                />
                                <div className="min-w-0 flex-1">
                                    <p className="truncate font-[Poppins,sans-serif] text-sm font-bold text-[#1F2733] sm:text-base">
                                        {review.name}
                                    </p>
                                    <p className="mt-0.5 font-[Poppins,sans-serif] text-xs font-normal text-[#214169]/70">
                                        {review.country}
                                    </p>
                                </div>
                                <ChevronRight
                                    className={[
                                        "h-5 w-5 shrink-0 transition-colors",
                                        isActive ? "text-[#214169]" : "text-[#B0B4BC]",
                                    ].join(" ")}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* ---------------- Right: featured review ---------------- */}
                <div className="relative flex flex-col justify-center">
                    {/* decorative testimonial image (top right) */}
                    <img
                        src={testimonialImg}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-2 -top-8 h-24 w-auto object-contain opacity-90 sm:h-32 lg:-right-4 lg:-top-10 lg:h-40"
                    />

                    <p className="relative font-[Poppins,sans-serif] text-sm font-semibold text-[#214169]">
                        Testimonials
                    </p>

                    <h3 className="relative mt-1 font-[Urbanist,sans-serif] text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                        <span className="text-black">Client&rsquo;s </span>
                        <span className="text-[#214169]">Reviews</span>
                    </h3>

                    <div
                        className="mt-4 flex items-center gap-1"
                        aria-label={`${active.rating} out of 5 stars`}
                    >
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={[
                                    "h-4 w-4 sm:h-5 sm:w-5",
                                    i < active.rating
                                        ? "fill-[#B08F5A] text-[#B08F5A]"
                                        : "fill-transparent text-[#B08F5A]/40",
                                ].join(" ")}
                            />
                        ))}
                    </div>

                    <p
                        key={active.id}
                        className="relative mt-5 max-w-xl font-[Inter,sans-serif] text-sm leading-relaxed text-[#4B5563] sm:text-base animate-[fadein_0.4s_ease]"
                    >
                        {active.quote}
                    </p>

                    <p className="mt-6 font-[Inter,sans-serif] text-base font-bold text-[#214169]">
                        {active.name}
                        <span className="ml-2 font-normal text-[#214169]/60">
                            &mdash; {active.country}
                        </span>
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}