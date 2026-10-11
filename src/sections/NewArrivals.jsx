import { ArrowUpRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function NewArrivals() {
    return (
        <section className="relative overflow-hidden bg-[#fafafa] px-5 pt-12 pb-14 md:px-8 md:pt-16 md:pb-18 lg:px-10 lg:pt-18 lg:pb-20">

            {/* Subtle background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#FF2323]/[0.025] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= SECTION HEADING ================= */}
                <div className="mb-9 text-center md:mb-12">

                    <div className="mb-5 flex items-center justify-center gap-4">

                        <span className="h-px w-8 bg-[#FF2323]" />

                        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#FF2323] sm:text-[11px]">
                            Just In
                        </p>

                        <span className="h-px w-8 bg-[#FF2323]" />

                    </div>

                    <h2
                        className="text-3xl font-medium uppercase tracking-[0.04em] text-black md:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                        New <span className="font-light italic">Arrivals</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[460px] text-sm leading-6 text-[#777777] md:text-[15px]">
                        Discover the latest pieces added to our collection,
                        thoughtfully selected for your everyday style.
                    </p>

                </div>


                {/* ================= PRODUCT GRID ================= */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4 lg:gap-x-6">

                    {products
                        .filter((product) => product.isNew)
                        .slice(0, 4)
                        .map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                </div>


                {/* ================= VIEW ALL ================= */}
                <div className="mt-12 flex justify-center md:mt-14">

                    <button
                        className="group flex items-center gap-3 border-b border-black/70 pb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:border-[#FF2323] hover:text-[#FF2323]"
                    >
                        View All Products

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:rotate-45"
                        />
                    </button>

                </div>

            </div>
        </section>
    );
}

export default NewArrivals;