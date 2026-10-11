
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import hijabImage from "../assets/categories/Hijabs/Hijab Maroon.png";
import abayaImage from "../assets/categories/Abayas/Abaya Brown.png";

function Categories() {
    return (
        <section className="bg-white px-5 pt-10 pb-10 md:px-5 md:pt-14 md:pb-12 lg:px-10 lg:pt-16 lg:pb-14">
            <div className="mx-auto max-w-7xl">

                {/* ================= SECTION HEADING ================= */}
                <div className="mb-8 text-center md:mb-10">

                    <div className="mb-5 flex items-center justify-center gap-4">
                        <span className="h-px w-8 bg-[#FF2323]" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#FF2323] sm:text-[12px]">
                            Explore Collection
                        </p>

                        <span className="h-px w-8 bg-[#FF2323]" />
                    </div>

                    <h2
                        className="text-3xl font-medium uppercase tracking-[0.04em] text-black md:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                        Shop By <span className="font-light italic">Category</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[420px] text-sm leading-6 text-[#666666] md:text-base">
                        Discover our curated collections and find pieces that complete
                        your everyday style.
                    </p>

                </div>


                {/* ================= CATEGORY GRID ================= */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">

                    {/* ================= ABAYAS ================= */}
                    <Link
                        to="/shop?category=Abayas"
                        className="group relative col-span-2 row-span-2 h-[460px] overflow-hidden bg-[#f5f5f5] sm:h-[520px]"
                    >

                        <img
                            src={abayaImage}
                            alt="Abayas"
                            className="h-full w-full object-cover object-[center_35%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-all duration-700 group-hover:from-black/85" />

                        <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-700 group-hover:border-white/20" />

                        <span className="absolute left-4 top-4 flex h-7 min-w-7 items-center justify-center border border-white/20 bg-[#FF2323]/90 px-2 text-[9px] font-medium tracking-[0.15em] text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 sm:left-6 sm:top-6 md:left-7 md:top-7">
                            01
                        </span>

                        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 md:p-7">

                            <div className="flex items-end justify-between gap-4">

                                <div>
                                    <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.2em] text-white/60">
                                        Modest Collection
                                    </p>

                                    <h3 className="text-2xl font-medium uppercase tracking-[0.08em] transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">
                                        Abayas
                                    </h3>

                                    <div className="mt-3 flex items-center gap-3">
                                        <span className="h-px w-7 bg-[#FF2323] transition-all duration-500 group-hover:w-12" />

                                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                                            Shop Now
                                        </p>
                                    </div>
                                </div>

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-11 sm:w-11">
                                    <ArrowUpRight
                                        size={17}
                                        strokeWidth={1.6}
                                        className="transition-transform duration-500 group-hover:rotate-45"
                                    />
                                </div>

                            </div>
                        </div>
                    </Link>


                    {/* ================= HIJABS ================= */}
                    <Link
                        to="/shop?category=Hijabs"
                        className="group relative h-[220px] overflow-hidden bg-[#f5f5f5] sm:h-[250px]"
                    >

                        <img
                            src={hijabImage}
                            alt="Hijabs"
                            className="h-full w-full object-cover object-[center_15%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-all duration-600 group-hover:from-black/85" />

                        <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-white/20" />

                        <span className="absolute left-3 top-3 flex h-6 min-w-6 items-center justify-center border border-white/15 bg-[#FF2323]/90 px-1.5 text-[8px] font-medium tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                            02
                        </span>

                        <CategoryContent
                            subtitle="Everyday Essentials"
                            title="Hijabs"
                        />

                    </Link>


                    {/* ================= BROOCHES ================= */}
                    <Link
                        to="/shop?category=Brooches"
                        className="group relative h-[220px] overflow-hidden bg-[#f5f5f5] sm:h-[250px]"
                    >

                        <img
                            src={hijabImage}
                            alt="Brooches"
                            className="h-full w-full object-cover object-[center_15%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/85" />

                        <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-white/20" />

                        <span className="absolute left-3 top-3 flex h-6 min-w-6 items-center justify-center border border-white/15 bg-[#FF2323]/90 px-1.5 text-[8px] font-medium tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                            03
                        </span>

                        <CategoryContent
                            subtitle="Signature Details"
                            title="Brooches"
                        />

                    </Link>


                    {/* ================= HANDBAGS ================= */}
                    <Link
                        to="/shop?category=Handbags"
                        className="group relative h-[220px] overflow-hidden bg-[#f5f5f5] sm:h-[250px]"
                    >

                        <img
                            src={abayaImage}
                            alt="Handbags"
                            className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/85" />

                        <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-white/20" />

                        <span className="absolute left-3 top-3 flex h-6 min-w-6 items-center justify-center border border-white/15 bg-[#FF2323]/90 px-1.5 text-[8px] font-medium tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                            04
                        </span>

                        <CategoryContent
                            subtitle="Timeless Accessories"
                            title="Handbags"
                        />

                    </Link>


                    {/* ================= DEALS & BUNDLES ================= */}
                    <Link
                        to="/shop?category=Deals"
                        className="group relative h-[220px] overflow-hidden bg-[#f5f5f5] sm:h-[250px]"
                    >

                        <img
                            src={hijabImage}
                            alt="Deals & Bundles"
                            className="h-full w-full object-cover object-[center_30%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/85" />

                        <div className="pointer-events-none absolute inset-0 border border-white/10 transition-all duration-500 group-hover:border-white/20" />

                        <span className="absolute left-3 top-3 flex h-6 min-w-6 items-center justify-center border border-white/15 bg-[#FF2323]/90 px-1.5 text-[8px] font-medium tracking-[0.12em] text-white backdrop-blur-sm sm:left-5 sm:top-5">
                            05
                        </span>

                        <CategoryContent
                            subtitle="Curated Offers"
                            title="Deals & Bundles"
                        />

                    </Link>

                </div>


                {/* ================= VIEW ALL ================= */}
                <div className="mt-10 flex justify-center md:mt-12">

                    <Link
                        to="/shop"
                        className="group flex items-center gap-3 border-b border-black pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:border-[#FF2323] hover:text-[#FF2323]"
                    >
                        View All Collections

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:rotate-45"
                        />

                    </Link>

                </div>

            </div>
        </section>
    );
}


/* ================= CATEGORY CONTENT ================= */

function CategoryContent({ subtitle, title }) {
    return (
        <div className="absolute bottom-0 flex w-full items-end justify-between gap-3 p-4 text-white sm:p-5">

            <div>

                <p className="mb-2 text-[7px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-[8px]">
                    {subtitle}
                </p>

                <h3 className="text-[14px] font-medium uppercase tracking-[0.12em] transition-transform duration-500 group-hover:-translate-y-1 sm:text-base">
                    {title}
                </h3>

                <div className="mt-2 flex items-center gap-2">

                    <span className="h-px w-5 bg-[#FF2323] transition-all duration-500 group-hover:w-9" />

                    <p className="text-[7px] uppercase tracking-[0.18em] text-white/70 sm:text-[8px]">
                        Shop Now
                    </p>

                </div>

            </div>

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">

                <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-500 group-hover:rotate-45"
                />

            </div>

        </div>
    );
}

export default Categories;

