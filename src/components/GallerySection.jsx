import React from "react";
import { Play } from "lucide-react";

/**
 * GallerySection
 * -------------------------------------------------------------
 * Fully responsive "Gallery" section (Images & Videos) built with
 * React + Tailwind CSS. Recreates the bento-style layout from the
 * original design using CSS Grid instead of absolute positioning,
 * so it reflows cleanly on mobile, tablet, and desktop.
 *
 * Usage:
 *   <GallerySection />
 *   <GallerySection images={{ hero: "/img/hero.jpg", ... }} />
 */

const defaultImages = {
    hero: "/images/gallery/1.jpg",
    smallTopA: "/images/gallery/2.jpg",
    smallBottomA: "/images/gallery/3.jpg",
    smallTopB: "/images/gallery/4.jpg",
    smallBottomB: "/images/gallery/5.jpg",
    stripLeft: "/images/gallery/6.jpg",
    stripVideo: "/images/gallery/7.jpg",
    stripRight: "/images/gallery/8.jpg",
    bottomLeft: "/images/gallery/9.jpg",
    bottomCenter: "/images/gallery/10.jpg",
    bottomRight: "/images/gallery/11.jpg",
};

function GalleryImage({ src, alt, className = "", flip = false }) {
    return (
        <div
            className={`group relative h-full w-full overflow-hidden rounded-lg bg-slate-100 ${className}`}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${flip ? "-scale-x-100" : ""
                    }`}
            />
        </div>
    );
}

function VideoThumb({ src, alt }) {
    return (
        <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-lg bg-slate-100">
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/25">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                    <Play className="ml-0.5 h-4 w-4 fill-[#132742] text-[#132742] sm:h-5 sm:w-5" />
                </span>
            </div>
        </div>
    );
}

export default function GallerySection({ images = defaultImages }) {
    const img = { ...defaultImages, ...images };

    return (
        <section className="relative w-full overflow-hidden bg-[#CFC6AA] px-4 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            {/* Heading */}
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
                <h2 className="font-['Urbanist',_sans-serif] text-3xl font-bold uppercase leading-tight tracking-tight text-[#132742] sm:text-4xl lg:text-5xl">
                    Gallery
                </h2>
                <p className="mt-3 font-['Arapey',_serif] text-sm tracking-wide text-[#132742] sm:mt-4 sm:text-base">
                    Images &amp; Videos
                </p>
            </div>

            {/* Content */}
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:gap-5 lg:gap-6">
                {/* Top bento block: hero + 2x2 small pairs */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                    {/* Hero image spans 2 cols x 2 rows on tablet+ */}
                    <div className="col-span-2 aspect-[4/3] sm:aspect-auto sm:row-span-2 sm:h-[460px] lg:h-[474px]">
                        <GalleryImage src={img.hero} alt="Gallery hero" />
                    </div>

                    {/* Pair A */}
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[227px]">
                        <GalleryImage src={img.smallTopA} alt="Gallery thumbnail" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[227px]">
                        <GalleryImage src={img.smallTopB} alt="Gallery thumbnail" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[227px]">
                        <GalleryImage src={img.smallBottomA} alt="Gallery thumbnail" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[220px] lg:h-[227px]">
                        <GalleryImage src={img.smallBottomB} alt="Gallery thumbnail" />
                    </div>
                </div>

                {/* Middle strip: photo / video / photo */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <GalleryImage src={img.stripLeft} alt="Gallery photo" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <VideoThumb src={img.stripVideo} alt="Gallery video" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <GalleryImage src={img.stripRight} alt="Gallery photo" flip />
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <GalleryImage src={img.bottomLeft} alt="Gallery photo" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <GalleryImage src={img.bottomCenter} alt="Gallery photo" />
                    </div>
                    <div className="aspect-[4/3] sm:aspect-auto sm:h-[295px] lg:h-[295px]">
                        <GalleryImage src={img.bottomRight} alt="Gallery photo" flip />
                    </div>
                </div>
            </div>
        </section>
    );
}
