import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function NewArrivals() {
    const newArrivals = useMemo(() => {
        return products.filter(
            (product) =>
                product.isNew === true ||
                product.newArrival === true ||
                product.badge?.toLowerCase() === "new"
        );
    }, []);

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* Hero */}
            <section className="bg-black text-white">
                <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF2323]">
                        Latest Collection
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        New Arrivals
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                        Discover the latest pieces added to the Mashfaa
                        collection, designed for effortless and timeless style.
                    </p>
                </div>
            </section>

            {/* Products */}
            <main className="mx-auto max-w-[1480px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2323]">
                            Fresh In
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                            Latest pieces
                        </h2>
                    </div>

                    <p className="text-sm text-black/50">
                        {newArrivals.length}{" "}
                        {newArrivals.length === 1 ? "product" : "products"}
                    </p>
                </div>

                {newArrivals.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-14">
                        {newArrivals.map((product) => (
                            <ProductCard
                                key={product.id ?? product._id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[350px] items-center justify-center border border-black/10">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">
                                New arrivals coming soon
                            </h3>

                            <p className="mt-3 text-sm text-black/50">
                                We're preparing something special for you.
                            </p>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}