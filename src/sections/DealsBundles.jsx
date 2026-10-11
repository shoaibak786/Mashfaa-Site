import { useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Heart,
} from "lucide-react";
import bundles from "../data/bundle";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function DealsBundles() {
    const [currentBundle, setCurrentBundle] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [cartMessage, setCartMessage] = useState("");

    const { addToCart } = useCart();

    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    const changeBundle = (index) => {
        if (index === currentBundle || isChanging) return;

        setIsChanging(true);

        setTimeout(() => {
            setCurrentBundle(index);
            setIsChanging(false);
        }, 250);
    };

    const nextBundle = () => {
        changeBundle((currentBundle + 1) % bundles.length);
    };

    const previousBundle = () => {
        changeBundle(
            (currentBundle - 1 + bundles.length) % bundles.length
        );
    };

    const handleShopBundle = () => {
        const bundle = bundles[currentBundle];

        if (!bundle) return;

        /*
         * Bundle ko ek single cart item ki tarah save kar rahe hain.
         * Is se customer ko discounted bundle price milegi.
         */
        const bundleCartItem = {
            id: `bundle-${bundle.id}`,
            name: bundle.name,
            category: "Deals & Bundles",
            price: bundle.bundlePrice,
            oldPrice: bundle.totalPrice,
            image: bundle.products[0]?.image,
            secondImage: bundle.products[0]?.image,
            rating: 5,
            reviews: 0,
            badge: bundle.badge,
            isNew: false,
            bestSeller: false,
            stock: 10,

            // Bundle ke original products bhi save rahenge
            bundleId: bundle.id,
            isBundle: true,
            bundleProducts: bundle.products,
            bundleDescription: bundle.description,
            bundleTotalPrice: bundle.totalPrice,
            bundleSaving: bundle.totalPrice - bundle.bundlePrice,
        };

        addToCart(bundleCartItem, 1);

        setCartMessage(
            `"${bundle.name}" added to your bag.`
        );

        setTimeout(() => {
            setCartMessage("");
        }, 3000);
    };

    // ================= WISHLIST =================
    const handleWishlist = () => {
        const bundle = bundles[currentBundle];

        if (!bundle) return;

        const wishlistBundle = {
            id: `bundle-${bundle.id}`,
            name: bundle.name,
            category: "Deals & Bundles",
            price: bundle.bundlePrice,
            oldPrice: bundle.totalPrice,
            image: bundle.products[0]?.image,
            secondImage: bundle.products[0]?.image,
            rating: 5,
            reviews: 0,
            badge: bundle.badge,
            isNew: false,
            bestSeller: false,
            stock: 10,

            bundleId: bundle.id,
            isBundle: true,
            bundleProducts: bundle.products,
            bundleDescription: bundle.description,
            bundleTotalPrice: bundle.totalPrice,
            bundleSaving: bundle.totalPrice - bundle.bundlePrice,
        };

        toggleWishlist(wishlistBundle);
    };

    const bundle = bundles[currentBundle];

    // Current bundle wishlist mein hai ya nahi
    const isWishlisted = bundle
        ? isInWishlist(`bundle-${bundle.id}`)
        : false;

    return (
        <section className="relative overflow-hidden bg-black px-5 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">

            {/* ================= BACKGROUND GLOW ================= */}
            <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#FF2323]/[0.035] blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* ================= SECTION HEADER ================= */}
                <div className="mb-9 md:mb-12">

                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                        {/* LEFT */}
                        <div>

                            <div className="mb-5 flex items-center gap-4">

                                <span className="h-px w-8 bg-[#FF2323]" />

                                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#FF2323] sm:text-[11px]">
                                    Exclusive Offers
                                </p>

                            </div>

                            <h2
                                className="text-3xl font-medium uppercase leading-[1] tracking-[0.04em] text-white md:text-4xl lg:text-5xl"
                                style={{ fontFamily: "'Nunito', sans-serif" }}
                            >
                                Deals <span className="font-light italic">&</span>
                                <br />
                                <span className="font-light">Bundles</span>
                            </h2>

                        </div>

                        {/* RIGHT DESCRIPTION */}
                        <div className="flex items-end gap-5">

                            <p className="max-w-[400px] text-sm leading-6 text-white/45 md:text-right md:text-[15px]">
                                Curated combinations of our favorite pieces,
                                thoughtfully paired to create complete looks
                                at better value.
                            </p>

                            {/* WISHLIST BUTTON */}
                            <button
                                type="button"
                                onClick={handleWishlist}
                                aria-label={
                                    isWishlisted
                                        ? "Remove bundle from wishlist"
                                        : "Add bundle to wishlist"
                                }
                                className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
                                    isWishlisted
                                        ? "border-[#FF2323] bg-[#FF2323] text-white"
                                        : "border-white/15 text-white hover:border-[#FF2323] hover:bg-[#FF2323] hover:text-white"
                                }`}
                            >
                                <Heart
                                    size={16}
                                    strokeWidth={1.5}
                                    fill={
                                        isWishlisted
                                            ? "currentColor"
                                            : "none"
                                    }
                                />
                            </button>

                        </div>

                    </div>

                </div>

                {/* ================= BUNDLE CONTENT ================= */}
                <div
                    className={`grid overflow-hidden border border-white/[0.10] transition-all duration-300 md:grid-cols-[1.08fr_0.92fr] ${
                        isChanging
                            ? "translate-y-1 opacity-0"
                            : "translate-y-0 opacity-100"
                    }`}
                >

                    {/* ================= PRODUCTS ================= */}
                    <div className="relative bg-[#111111] p-5 sm:p-6 md:p-8 lg:p-10">

                        {/* Bundle top bar */}
                        <div className="mb-6 flex items-center justify-between">

                            <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/35 sm:text-[9px]">
                                Bundle {String(currentBundle + 1).padStart(2, "0")}
                            </span>

                            <span className="bg-[#FF2323] px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3 sm:text-[8px]">
                                {bundle.badge}
                            </span>

                        </div>

                        {/* Product images */}
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">

                            {bundle.products.map((product, index) => (
                                <div
                                    key={product.name}
                                    className="group relative min-w-0"
                                >

                                    <div className="aspect-[4/5] w-full overflow-hidden bg-[#F3F3F3]">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
                                        />

                                    </div>

                                    {/* Number */}
                                    <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center border border-white/10 bg-black/80 text-[7px] font-medium text-white backdrop-blur-sm">
                                        0{index + 1}
                                    </span>

                                    {/* Product name */}
                                    <p className="mt-3 truncate text-[8px] font-medium uppercase tracking-[0.13em] text-white/65 sm:text-[9px]">
                                        {product.name}
                                    </p>

                                </div>
                            ))}

                        </div>

                        {/* Bottom editorial line */}
                        <div className="mt-7 flex items-center gap-3">

                            <span className="h-px w-6 bg-[#FF2323]" />

                            <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
                                Curated For You
                            </span>

                        </div>

                    </div>

                    {/* ================= BUNDLE INFO ================= */}
                    <div className="flex flex-col justify-center bg-white px-6 py-9 sm:px-8 sm:py-10 md:px-9 lg:px-12">

                        {/* Label */}
                        <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#888888] sm:text-[9px]">
                            Curated Collection
                        </p>

                        {/* Bundle name */}
                        <h3
                            className="mt-4 text-2xl font-medium uppercase leading-[1.05] tracking-[0.02em] text-black sm:text-3xl md:text-4xl"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            {bundle.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-4 max-w-sm text-[12px] leading-6 text-[#666666] sm:text-[13px]">
                            {bundle.description}
                        </p>

                        {/* ================= INCLUDED PRODUCTS ================= */}
                        <div className="mt-6 border-y border-[#E5E5E5] py-5">

                            <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#888888] sm:text-[9px]">
                                Includes
                            </p>

                            <div className="space-y-3">

                                {bundle.products.map((product) => (
                                    <div
                                        key={product.name}
                                        className="flex items-center justify-between gap-4"
                                    >

                                        <span className="truncate text-[10px] font-medium text-black sm:text-[11px]">
                                            {product.name}
                                        </span>

                                        <span className="shrink-0 text-[9px] text-[#888888] sm:text-[10px]">
                                            Rs. {product.price.toLocaleString()}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* ================= PRICING ================= */}
                        <div className="mt-6">

                            <div className="flex flex-wrap items-end gap-3">

                                <span className="text-xl font-semibold text-black sm:text-2xl">
                                    Rs. {bundle.bundlePrice.toLocaleString()}
                                </span>

                                <span className="text-xs text-[#999999] line-through sm:text-sm">
                                    Rs. {bundle.totalPrice.toLocaleString()}
                                </span>

                            </div>

                            <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#FF2323] sm:text-[9px]">
                                Save {bundle.badge.replace("Save ", "")}
                            </p>

                        </div>

                        {/* ================= CTA ================= */}
                        <button
                            type="button"
                            onClick={handleShopBundle}
                            className="group mt-7 flex w-fit items-center gap-3 border-b border-black/70 pb-2 text-[9px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:border-[#FF2323] hover:text-[#FF2323] sm:text-[10px]"
                        >
                            Shop Bundle

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.6}
                                className="transition-transform duration-300 group-hover:rotate-45"
                            />
                        </button>

                        {/* Cart feedback */}
                        {cartMessage && (
                            <p className="mt-4 text-[8px] font-semibold uppercase tracking-[0.15em] text-green-600">
                                {cartMessage}
                            </p>
                        )}

                    </div>

                </div>

                {/* ================= NAVIGATION ================= */}
                <div className="mt-6 flex items-center justify-between sm:mt-7">

                    {/* Dots */}
                    <div className="flex items-center gap-2">

                        {bundles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeBundle(index)}
                                aria-label={`Go to bundle ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    currentBundle === index
                                        ? "w-8 bg-[#FF2323]"
                                        : "w-1.5 bg-white/25 hover:bg-white/50"
                                }`}
                            />
                        ))}

                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-2">

                        <button
                            onClick={previousBundle}
                            aria-label="Previous bundle"
                            className="flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:h-10 sm:w-10"
                        >
                            <ArrowLeft
                                size={15}
                                strokeWidth={1.5}
                            />
                        </button>

                        <button
                            onClick={nextBundle}
                            aria-label="Next bundle"
                            className="flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:h-10 sm:w-10"
                        >
                            <ArrowRight
                                size={15}
                                strokeWidth={1.5}
                            />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default DealsBundles;