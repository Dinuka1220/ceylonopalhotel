import React, { useState } from "react";

/**
 * Social icons — kept as inline SVGs.
 */
const FacebookIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
);

const InstagramIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
);

const TwitterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.9 3H21.6l-5.9 6.74 6.94 9.26h-5.43l-4.25-5.55L8.9 19H6.2l6.31-7.22L5.85 3h5.57l3.84 5.08L18.9 3Zm-1.9 14.7h1.5L8.08 4.22H6.47L17 17.7Z" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
);

const MapPinIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
        <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
);

const socialLinks = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function ContactSection({
    backgroundImage = "/images/contactbg.jpg",
    mapEmbedUrl = buildMapEmbedUrl("16D, Imaduwa, South, Galle, Sri Lanka"),
    onSubmit,
}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            if (onSubmit) await onSubmit(form);
            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("Contact form submit failed:", err);
            setStatus("idle");
        }
    };

    return (
        <section className="relative w-full overflow-hidden bg-slate-900 py-12 sm:py-20 lg:py-24">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt="Hotel exterior background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-brightness-95" />
            </div>

            <div className="relative z-20  -mt-[6rem] mb-[3rem] top-0">
                <img
                    src="/images/aboutbottombrush.png"
                    alt=""
                    className="w-full h-20 sm:h-28 md:h-36 object-cover"
                />
            </div>

            {/* Main container with overlap positioning */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-col lg:block">

                    {/* LEFT GLASS PANEL (Where We Located) */}
                    <div
                        className="
              relative w-full  bg-[#214169]/40 p-6 backdrop-blur-xs border border-white/40 shadow-2xl
              sm:p-8
              lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%] lg:z-10 lg:p-8
            "
                    >
                        {/* Timeline vertical line on left margin */}
                        <div className="relative pl-6 sm:pl-7">
                            {/* Vertical line with dots */}
                            <div className="absolute left-1.5 top-2 bottom-3 flex flex-col justify-between items-center -translate-x-1/2">
                                <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
                                <div className="w-px flex-1 bg-white/40 my-1" />
                                <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
                                WHERE WE LOCATED
                            </h3>

                            {/* Paragraph */}
                            <p className="mt-3 text-xs leading-relaxed text-white/85 sm:text-sm sm:leading-relaxed  w-[20rem]">
                                Located in the beautiful coastal city of Galle, our hotel offers a peaceful stay surrounded by tropical scenery and the charm of southern Sri Lanka. Guests can easily explore the historic Galle Fort, beautiful beaches, local attractions, and nearby restaurants. Our hotel is an ideal place to enjoy your stay in Galle.
                            </p>

                            {/* Map Embed */}
                            <div className="mt-5 overflow-hidden border border-white/20 shadow-md w-[20rem]">
                                <iframe
                                    title="Hotel location map"
                                    src={mapEmbedUrl}
                                    width="100%"
                                    height="160"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block h-40 w-full sm:h-48"
                                />
                            </div>

                            {/* Location details */}
                            <div className="mt-4 flex items-center gap-3">
                                <MapPinIcon className="h-6 w-6 text-white flex-shrink-0" />
                                <div>
                                    <h4 className="text-sm font-bold text-white sm:text-base">Galle</h4>
                                    <p className="text-xs text-white/75">16D, Imaduwa, South, Galle</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT DARK PANEL (Contact Us Form) */}
                    <div
                        className="
              relative mt-6 w-full  bg-[#0E1E31]/80 p-6 shadow-2xl backdrop-blur-md border border-white/10
              sm:p-8
              lg:mt-0 lg:ml-auto lg:w-[58%] lg:z-20 lg:p-10 lg:pr-14
            "
                    >
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                            CONTACT US
                        </h2>

                        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                            <div>
                                <label className="block text-xs font-medium text-white/90 mb-1.5 sm:text-sm">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#121c27]/70 border border-white/30 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#b89758] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/90 mb-1.5 sm:text-sm">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#121c27]/70 border border-white/30 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#b89758] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/90 mb-1.5 sm:text-sm">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#121c27]/70 border border-white/30 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#b89758] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/90 mb-1.5 sm:text-sm">
                                    Your Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#121c27]/70 border border-white/30 rounded-2xl px-5 py-3 text-sm text-white resize-none focus:outline-none focus:border-[#b89758] transition-colors"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="rounded-full bg-[#b89758] hover:bg-[#a38349] px-9 py-2.5 text-sm font-semibold text-black shadow-md transition-all transform hover:scale-[1.02] disabled:opacity-70"
                                >
                                    {status === "submitting"
                                        ? "Sending..."
                                        : status === "sent"
                                            ? "Sent!"
                                            : "Submit"}
                                </button>
                            </div>
                        </form>

                        {/* Vertical Social Line Rail on Right Edge (Desktop) */}
                        <div className="absolute right-5 top-8 bottom-8 hidden lg:flex flex-col items-center justify-between pointer-events-auto">
                            {/* Top line */}
                            <div className="w-px flex-1 bg-white/30" />

                            {/* Social icons */}
                            <div className="my-4 flex flex-col items-center gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:text-[#b89758] hover:bg-white/10"
                                    >
                                        <Icon className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>

                            {/* Bottom line */}
                            <div className="w-px flex-1 bg-white/30" />
                        </div>

                        {/* Inline Social Icons for Mobile */}
                        <div className="mt-6 flex items-center justify-center gap-5 lg:hidden">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 hover:text-[#b89758]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            <div className="relative z-20  -mb-[6rem] bottom-0">
                <img
                    src="/images/footerbrush.png"
                    alt=""
                    className="w-full h-20 sm:h-28 md:h-36 object-cover"
                />
            </div>
        </section>
    );
}

function buildMapEmbedUrl(address) {
    const q = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${q}&output=embed`;
}