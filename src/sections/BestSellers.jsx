import { ArrowUpRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function BestSellers() {
    const bestSellers = products
        .filter((product) => product.bestSeller)
        .slice(0, 4);

    return (
        <section className="relative overflow-hidden bg-[#F5F5F5] px-5 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">

            {/* ================= SUBTLE BACKGROUND GLOW ================= */}
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#FF2323]/[0.025] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= SECTION HEADER ================= */}
                <div className="mb-9 md:mb-12">

                    <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

                        {/* LEFT CONTENT */}
                        <div className="max-w-2xl">

                            {/* Label */}
                            <div className="mb-5 flex items-center gap-4">

                                <span className="h-px w-8 bg-[#FF2323]" />

                                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#FF2323] sm:text-[11px]">
                                    Customer Favorites
                                </p>

                            </div>

                            {/* Heading */}
                            <h2
                                className="text-3xl font-medium uppercase leading-[1] tracking-[0.04em] text-black md:text-4xl lg:text-5xl"
                                style={{ fontFamily: "'Nunito', sans-serif" }}
                            >
                                Best <span className="font-light italic">Sellers</span>
                            </h2>

                            {/* Description */}
                            <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#666666] md:text-[15px]">
                                Discover the pieces our customers love the most,
                                thoughtfully selected for effortless everyday style.
                            </p>

                        </div>


                        {/* ================= CTA ================= */}
                        <div className="md:pb-1">

                            <button
                                className="group inline-flex items-center gap-3 border-b border-black/70 pb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:border-[#FF2323] hover:text-[#FF2323]"
                            >
                                Shop Best Sellers

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.7}
                                    className="transition-transform duration-300 group-hover:rotate-45"
                                />
                            </button>

                        </div>

                    </div>

                </div>


                {/* ================= PRODUCT GRID ================= */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-4 md:gap-y-12 lg:gap-x-6">

                    {bestSellers.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            permanentCartButton={true}
                        />
                    ))}

                </div>


                {/* ================= BOTTOM SELECTION BAR ================= */}
                <div className="mt-12 border-t border-[#D9D9D9] pt-5 md:mt-14">

                    <div className="flex items-center justify-between gap-4">

                        {/* LEFT */}
                        <div className="flex items-center gap-3">

                            <span className="relative flex h-1.5 w-1.5">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2323]/40" />

                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF2323]" />

                            </span>

                            <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#666666] sm:text-[9px]">
                                MASHFAA Selection
                            </p>

                        </div>


                        {/* RIGHT */}
                        <p className="text-right text-[8px] uppercase tracking-[0.2em] text-[#999999] sm:text-[9px]">
                            04 Featured Pieces
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default BestSellers;