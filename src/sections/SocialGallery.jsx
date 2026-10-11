import {
    FaInstagram,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const SocialGallery = () => {
    const galleryItems = [
        {
            image: "/images/social-1.jpg",
            alt: "Women's accessories styling",
        },
        {
            image: "/images/social-2.jpg",
            alt: "Elegant women's fashion accessories",
        },
        {
            image: "/images/social-3.jpg",
            alt: "Women's handbag styling",
        },
        {
            image: "/images/social-4.jpg",
            alt: "Minimal fashion accessories",
        },
        {
            image: "/images/social-5.jpg",
            alt: "Women's jewelry styling",
        },
        {
            image: "/images/social-6.jpg",
            alt: "Modern women's accessories",
        },
    ];

    return (
        <section
            data-gsap="section"
            className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >

            {/* Subtle Background */}
            <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-red-600/[0.035] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}

                <div
                    data-gsap="fade-up"
                    className="mx-auto max-w-2xl text-center"
                >

                    <div className="mb-6 flex items-center justify-center gap-4">
                        <span className="h-px w-8 bg-red-600 sm:w-12" />

                        <span className="text-[9px] font-semibold tracking-[4px] text-red-600 sm:text-[10px]">
                            FOLLOW OUR STYLE
                        </span>

                        <span className="h-px w-8 bg-red-600 sm:w-12" />
                    </div>

                    <h2 className="text-4xl font-light tracking-[-1px] text-black sm:text-5xl md:text-6xl">
                        Style Beyond{" "}
                        <span className="font-serif italic">
                            The Ordinary
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                        Discover our latest looks, styling inspiration and
                        everyday moments through our social feed.
                    </p>

                    {/* Instagram Handle */}

                    <a
                        href="#"
                        className="group mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[1.5px] text-black transition-colors duration-300 hover:text-red-600"
                    >
                        <FaInstagram className="text-sm" />

                        @yourbrand

                        <FaArrowUpRightFromSquare className="text-[9px] opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                </div>

                {/* ================= GALLERY ================= */}

                <div
                    data-gsap="stagger"
                    className="mt-12 grid grid-cols-2 gap-2 sm:mt-14 sm:grid-cols-3 sm:gap-3 lg:mt-16 lg:gap-4"
                >

                    {galleryItems.map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            data-gsap="scale"
                            className="group relative aspect-square overflow-hidden bg-gray-100"
                        >

                            {/* Image */}

                            <img
                                src={item.image}
                                alt={item.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/45" />

                            {/* Instagram Icon */}

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-100">
                                    <FaInstagram className="text-lg" />
                                </div>

                            </div>

                            {/* Red Corner Accent */}

                            <div className="absolute right-0 top-0 h-0 w-0 border-l-[28px] border-t-[28px] border-l-transparent border-t-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        </a>
                    ))}

                </div>

                {/* ================= BOTTOM CTA ================= */}

                <div
                    data-gsap="fade-up"
                    className="mt-12 text-center sm:mt-14"
                >

                    <a
                        href="#"
                        className="group inline-flex items-center gap-4 border-b border-black pb-2 text-[10px] font-semibold tracking-[2.5px] text-black transition-colors duration-300 hover:border-red-600 hover:text-red-600"
                    >
                        VIEW OUR INSTAGRAM

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default SocialGallery;