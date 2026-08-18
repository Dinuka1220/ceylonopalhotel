import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
    {
        id: "single-room",
        title: "Single Room",
        image:
            "/images/bed1.png",
        alt: "Single Room",
    },
    {
        id: "double-room",
        title: "Double Room",
        image:
            "/images/bed2.png",
        alt: "Double Room",
    },
    {
        id: "triple-room",
        title: "Triple Room",
        image:
            "/images/bed3.png",
        alt: "Triple Room",
    },
];

const RoomTypes = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const roomsGridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.fromTo(
                    headerRef.current.children,
                    { y: 35, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            if (roomsGridRef.current) {
                gsap.fromTo(
                    roomsGridRef.current.children,
                    { y: 50, opacity: 0, scale: 0.96 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.18,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: roomsGridRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div ref={headerRef} className="flex flex-col items-center text-center">
                    <h2 className="font-bold uppercase text-[#132742] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[58px] tracking-tight">
                        Recommended Room Types
                    </h2>
                    <p className="mt-4 max-w-xl text-[#132742] text-sm sm:text-base tracking-wide font-serif leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Room Cards */}
                <div ref={roomsGridRef} className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="flex flex-col items-center gap-4 sm:items-start"
                        >
                            <div className="w-full overflow-hidden rounded-lg">
                                <img
                                    src={room.image}
                                    alt={room.alt}
                                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-60 lg:h-64"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-[#132742] sm:text-xl">
                                {room.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative z-20  -mb-[6rem]  mt-10 bottom-0">
                <img
                    src="/images/gallerytopbrush.png"
                    alt=""
                    className="w-full h-20 sm:h-28 md:h-36 object-cover"
                />
            </div>

        </section>
    );
};

export default RoomTypes;