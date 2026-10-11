import editorialBanner from "../assets/EditorialBanner/Editorial Banner.png";

function EditorialBanner() {
    return (
        <section
            data-gsap="section"
            className="bg-white px-5 py-7 md:px-8 md:py-10 lg:px-10 lg:py-12"
        >
            <div className="relative mx-auto h-[380px] max-w-7xl overflow-hidden bg-[#111111] md:h-[430px] lg:h-[460px]">

                {/* Background Image */}
                <img
                    data-gsap="scale"
                    src={editorialBanner}
                    alt="Mashfaa Fashion Editorial"
                    className="absolute inset-0 h-full w-full object-cover object-[center_0%]"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />

                {/* Border Frame */}
                <div className="absolute inset-4 z-10 border border-white/20 md:inset-6" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center md:justify-start md:px-14 lg:px-20">

                    <div
                        data-gsap="stagger"
                        className="max-w-xl text-white"
                    >

                        {/* Small Label */}
                        <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                            <span className="mt-1 h-px w-12 bg-[#FF2323]" />

                            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white">
                                The Mashfaa Edit
                            </p>

                            <span className="h-px w-8 bg-[#FF2323] md:hidden" />
                        </div>

                        {/* Main Heading */}
                        <h2
                            className="text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            Elegance,
                            <br />
                            Redefined.
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/80 md:mx-0 md:text-[15px]">
                            Discover effortless style, timeless details, and pieces
                            designed to become part of your everyday story.
                        </p>

                        {/* CTA */}
                        <button className="group mt-7 inline-flex items-center gap-3 border-b border-white pb-2 text-[10px] font-medium uppercase tracking-[0.22em]  transition-all duration-300 hover:border-[#FF2323] hover:text-[#FF2323]">
                            Explore The Edit

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default EditorialBanner;