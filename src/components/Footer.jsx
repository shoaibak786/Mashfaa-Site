import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaPinterestP,
    FaArrowUp,
    FaTruck,
    FaShieldAlt,
    FaUndoAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const footerLinkClass =
        "group flex items-center text-sm text-gray-500 transition duration-300 hover:text-white";

    const footerArrowClass =
        "mr-0 w-0 overflow-hidden text-red-600 transition-all duration-300 group-hover:mr-2 group-hover:w-3";

    return (
        <footer
            data-gsap="section"
            className="relative overflow-hidden bg-[#080808] text-white"
        >
            {/* TOP ACCENT */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

            {/* BACKGROUND DECOR */}
            <div className="pointer-events-none absolute -left-52 top-40 h-[500px] w-[500px] rounded-full bg-red-600/[0.035] blur-[150px]" />

            <div className="pointer-events-none absolute -right-52 bottom-20 h-[500px] w-[500px] rounded-full bg-red-600/[0.025] blur-[150px]" />

            {/* DECORATIVE TYPOGRAPHY */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[15vw] font-black uppercase tracking-[-10px] text-white/[0.015] lg:block">
                ELEGANCE
            </div>

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                {/* BRAND INTRO */}
                <div className="border-b border-white/[0.07] py-20 sm:py-24 lg:py-28">
                    <div
                        data-gsap="fade-up"
                        className="max-w-4xl"
                    >
                        <p className="mb-6 flex items-center gap-4 text-[9px] font-medium tracking-[5px] text-red-500">
                            <span className="h-px w-8 bg-red-600" />
                            MODERN WOMEN'S ACCESSORIES
                        </p>

                        <h2 className="text-5xl font-light leading-[0.95] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-8xl">
                            Elegance
                            <br />

                            <span className="font-serif italic text-white/90">
                                in every detail.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                            Discover thoughtfully selected accessories designed to
                            complement your everyday style with confidence and
                            timeless elegance.
                        </p>
                    </div>
                </div>

                {/* NAVIGATION AREA */}
                <div
                    data-gsap="stagger"
                    className="grid gap-14 border-b border-white/[0.07] py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
                >

                    {/* SHOP */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-[1px] w-5 bg-red-600" />

                            <h3 className="text-[10px] font-semibold tracking-[3px] text-white">
                                SHOP
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/new-arrivals"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    New Arrivals
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop?category=Handbags"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Handbags
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop?category=Brooches"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Brooches
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop?category=Hijabs"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Hijabs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop?category=Abayas"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Abayas
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop?category=Deals%20%26%20Bundles"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Deals & Bundles
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CUSTOMER CARE */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-[1px] w-5 bg-red-600" />

                            <h3 className="text-[10px] font-semibold tracking-[3px] text-white">
                                CUSTOMER CARE
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/contact"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shipping"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Shipping & Delivery
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/returns"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Returns & Exchange
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/faqs"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    FAQs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/size-guide"
                                    className={footerLinkClass}
                                >
                                    <span className={footerArrowClass}>→</span>
                                    Size Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-[1px] w-5 bg-red-600" />

                            <h3 className="text-[10px] font-semibold tracking-[3px] text-white">
                                CONTACT
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-[8px] uppercase tracking-[3px] text-gray-600">
                                    Visit Us
                                </p>

                                <p className="mt-2 text-sm text-gray-400">
                                    Lahore, Pakistan
                                </p>
                            </div>

                            <div>
                                <p className="text-[8px] uppercase tracking-[3px] text-gray-600">
                                    Email
                                </p>

                                <a
                                    href="mailto:hello@yourbrand.com"
                                    className="mt-2 block text-sm text-gray-400 transition hover:text-red-500"
                                >
                                    hello@yourbrand.com
                                </a>
                            </div>

                            <div>
                                <p className="text-[8px] uppercase tracking-[3px] text-gray-600">
                                    Phone
                                </p>

                                <a
                                    href="tel:+923000000000"
                                    className="mt-2 block text-sm text-gray-400 transition hover:text-red-500"
                                >
                                    +92 300 0000000
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-[1px] w-5 bg-red-600" />

                            <h3 className="text-[10px] font-semibold tracking-[3px] text-white">
                                FOLLOW US
                            </h3>
                        </div>

                        <p className="max-w-xs text-sm leading-7 text-gray-500">
                            Follow us for new arrivals, styling inspiration and
                            exclusive updates.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="group flex h-11 w-11 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaInstagram className="text-sm transition-transform duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="group flex h-11 w-11 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaFacebookF className="text-sm transition-transform duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="#"
                                aria-label="TikTok"
                                className="group flex h-11 w-11 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaTiktok className="text-sm transition-transform duration-300 group-hover:scale-110" />
                            </a>

                            <a
                                href="#"
                                aria-label="Pinterest"
                                className="group flex h-11 w-11 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaPinterestP className="text-sm transition-transform duration-300 group-hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* PREMIUM SERVICE STRIP */}
                <div
                    data-gsap="stagger"
                    className="grid border-b border-white/[0.07] py-10 sm:grid-cols-3"
                >
                    <div className="flex items-center justify-center gap-4 border-b border-white/[0.06] py-5 sm:border-b-0 sm:border-r">
                        <FaTruck className="text-sm text-red-600" />

                        <div>
                            <p className="text-[9px] font-semibold tracking-[2px]">
                                FAST DELIVERY
                            </p>

                            <p className="mt-1 text-[10px] text-gray-600">
                                Delivered with care
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 border-b border-white/[0.06] py-5 sm:border-b-0 sm:border-r">
                        <FaShieldAlt className="text-sm text-red-600" />

                        <div>
                            <p className="text-[9px] font-semibold tracking-[2px]">
                                SECURE SHOPPING
                            </p>

                            <p className="mt-1 text-[10px] text-gray-600">
                                Safe & protected checkout
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 py-5">
                        <FaUndoAlt className="text-sm text-red-600" />

                        <div>
                            <p className="text-[9px] font-semibold tracking-[2px]">
                                EASY RETURNS
                            </p>

                            <p className="mt-1 text-[10px] text-gray-600">
                                Simple return process
                            </p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div
                    data-gsap="fade-up"
                    className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p className="text-[9px] tracking-[1.5px] text-gray-600">
                        © 2026 MASHFAA — ALL RIGHTS RESERVED
                    </p>

                    <div className="flex items-center gap-5">
                        <Link
                            to="/privacy-policy"
                            className="text-[9px] tracking-[1.5px] text-gray-600 transition hover:text-white"
                        >
                            PRIVACY
                        </Link>

                        <span className="h-3 w-px bg-white/10" />

                        <Link
                            to="/terms"
                            className="text-[9px] tracking-[1.5px] text-gray-600 transition hover:text-white"
                        >
                            TERMS
                        </Link>
                    </div>

                    {/* BACK TO TOP */}
                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
                    >
                        <FaArrowUp className="text-xs transition-transform duration-300 group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;