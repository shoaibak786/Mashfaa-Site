import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    ArrowRight,
    ArrowLeft,
    ShieldCheck,
    Sparkles,
    Lock,
    Truck,
    Check,
    Package,
    Heart,
    RotateCcw,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
    } = useCart();

    const freeShippingThreshold = 15000;

    const progress = Math.min(
        (cartTotal / freeShippingThreshold) * 100,
        100
    );

    const remainingForShipping = Math.max(
        freeShippingThreshold - cartTotal,
        0
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    /* =========================================================
       EMPTY CART
    ========================================================= */

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-white text-black flex flex-col">
                <Navbar solid={true} />

                <main className="flex-1 flex items-center justify-center px-5 py-20 sm:py-24">
                    <div className="w-full max-w-xl text-center">

                        <div className="text-[8px] tracking-[0.5em] text-gray-300 mb-6">
                            01 / YOUR BAG
                        </div>

                        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-7">
                            <div className="absolute inset-0 rounded-full border border-black/10" />

                            <div className="absolute inset-3 rounded-full border border-black/5" />

                            <div className="absolute inset-7 rounded-full bg-[#f7f7f7] flex items-center justify-center">
                                <ShoppingBag size={28} strokeWidth={1} />
                            </div>
                        </div>

                        <p className="text-[8px] uppercase tracking-[0.45em] text-[#FF2323] font-semibold mb-3">
                            MASHFAA COLLECTION
                        </p>

                        <h1
                            className="text-3xl sm:text-5xl font-light tracking-tight mb-4"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            Your Bag Is{" "}
                            <span className="italic font-normal">
                                Waiting
                            </span>
                        </h1>

                        <p className="max-w-md mx-auto text-xs sm:text-sm text-gray-500 leading-6 mb-7">
                            Your carefully selected pieces will appear here.
                            Explore our latest collection and discover something
                            made for your style.
                        </p>

                        <Link
                            to="/shop"
                            className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 text-[9px] uppercase tracking-[0.3em] font-semibold hover:bg-[#FF2323] transition-all duration-500"
                        >
                            Explore Collection

                            <ArrowRight
                                size={14}
                                className="transition-transform duration-500 group-hover:translate-x-2"
                            />
                        </Link>

                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">

            <Navbar solid={true} />

            <main className="flex-1 pt-24 sm:pt-28 pb-14 sm:pb-18">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <section className="px-5 sm:px-8 lg:px-12">

                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-3 mb-4">

                            <span className="w-7 sm:w-10 h-px bg-[#FF2323]" />

                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#FF2323] font-semibold">
                                Your Selection
                            </span>

                            <span className="text-[8px] text-gray-400">
                                ({totalItems})
                            </span>

                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">

                            <div>

                                <h1
                                    className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.04em] leading-[0.9]"
                                    style={{ fontFamily: "'Nunito', sans-serif" }}
                                >
                                    Shopping
                                    <br />
                                    <span className="italic font-normal">
                                        Bag.
                                    </span>
                                </h1>

                            </div>

                            <div className="lg:text-right">

                                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400 mb-1">
                                    Curated for you
                                </p>

                                <p className="text-[10px] sm:text-xs text-gray-500 leading-5 max-w-xs lg:ml-auto">
                                    Review your selected pieces before completing your order.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SHIPPING PROGRESS
                ===================================================== */}

                <section className="mt-8 sm:mt-10 border-y border-black/10">

                    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4">

                        <div className="flex flex-col gap-2.5">

                            <div className="flex items-start justify-between gap-4">

                                {remainingForShipping > 0 ? (

                                    <div className="flex items-start gap-2.5">

                                        <Truck
                                            size={14}
                                            strokeWidth={1.5}
                                            className="mt-0.5 flex-shrink-0"
                                        />

                                        <p className="text-[9px] sm:text-xs text-gray-600 leading-5">

                                            Add{" "}

                                            <span className="font-semibold text-black">
                                                Rs. {remainingForShipping.toLocaleString()}
                                            </span>

                                            {" "}more for{" "}

                                            <span className="font-semibold text-black">
                                                FREE SHIPPING
                                            </span>

                                        </p>

                                    </div>

                                ) : (

                                    <div className="flex items-center gap-2">

                                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <Check
                                                size={11}
                                                className="text-emerald-700"
                                            />
                                        </div>

                                        <p className="text-[9px] sm:text-xs font-medium text-emerald-700">
                                            Free Express Shipping Unlocked
                                        </p>

                                    </div>

                                )}

                                <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                                    {Math.round(progress)}%
                                </span>

                            </div>

                            <div className="relative h-[3px] bg-gray-100">

                                <div
                                    className="absolute left-0 top-0 h-full bg-black transition-all duration-1000"
                                    style={{ width: `${progress}%` }}
                                />

                                {progress < 100 && (
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full transition-all duration-1000"
                                        style={{
                                            left: `calc(${progress}% - 4px)`,
                                        }}
                                    />
                                )}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CART CONTENT
                ===================================================== */}

                <section className="px-5 sm:px-8 lg:px-12 mt-7 sm:mt-9">

                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-7 lg:gap-10 xl:gap-12">

                            {/* =================================================
                                LEFT
                            ================================================= */}

                            <div className="xl:col-span-8">

                                {/* TOP BAR */}

                                <div className="flex items-center justify-between pb-3 border-b border-black">

                                    <div>

                                        <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-semibold">
                                            Selected Pieces
                                        </p>

                                        <p className="text-[8px] text-gray-400 mt-1">
                                            {totalItems}{" "}
                                            {totalItems === 1 ? "piece" : "pieces"}
                                        </p>

                                    </div>

                                    <button
                                        onClick={clearCart}
                                        className="text-[8px] uppercase tracking-[0.22em] text-gray-400 hover:text-[#FF2323] transition-colors"
                                    >
                                        Clear Bag
                                    </button>

                                </div>


                                {/* =================================================
                                    PRODUCT LIST
                                ================================================= */}

                                <div>

                                    {cartItems.map((item, index) => {

                                        const itemId = item.id ?? item._id;

                                        const itemTotal =
                                            Number(item.price) * item.quantity;

                                        return (
                                            <article
                                                key={itemId}
                                                className="group relative py-5 sm:py-7 border-b border-black/10"
                                            >

                                                {/* PRODUCT NUMBER */}

                                                <span className="absolute left-0 top-6 hidden sm:block text-[8px] text-gray-300 tracking-widest">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>


                                                <div className="flex gap-3 sm:gap-7 sm:pl-10">

                                                    {/* IMAGE / BUNDLE IMAGES */}

                                                    <Link
                                                        to={
                                                            item.isBundle
                                                                ? "/shop"
                                                                : `/product/${itemId}`
                                                        }
                                                        className="relative w-[82px] h-[110px] sm:w-36 sm:h-48 bg-[#f5f5f5] overflow-hidden flex-shrink-0"
                                                    >

                                                        {item.isBundle ? (

                                                            <div
                                                                className={
                                                                    "grid h-full w-full gap-[2px] bg-white " +
                                                                    (
                                                                        (
                                                                            item.bundleImages ||
                                                                            item.bundleProducts?.map(
                                                                                (product) => product.image
                                                                            ) ||
                                                                            [item.image]
                                                                        ).length === 3
                                                                            ? "grid-cols-2 grid-rows-2"
                                                                            : "grid-cols-2"
                                                                    )
                                                                }
                                                            >

                                                                {(
                                                                    item.bundleImages ||
                                                                    item.bundleProducts?.map(
                                                                        (product) => product.image
                                                                    ) ||
                                                                    [item.image]
                                                                ).map(
                                                                    (image, imageIndex, images) => {

                                                                        /* =========================================
                                                                           3 PRODUCTS
                                                                           First = left full height
                                                                           Second + Third = right stacked
                                                                        ========================================= */

                                                                        if (images.length === 3) {

                                                                            if (imageIndex === 0) {
                                                                                return (
                                                                                    <div
                                                                                        key={imageIndex}
                                                                                        className="row-span-2 h-full overflow-hidden bg-[#f5f5f5]"
                                                                                    >
                                                                                        <img
                                                                                            src={image}
                                                                                            alt={`${item.name} product ${imageIndex + 1}`}
                                                                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                                                        />
                                                                                    </div>
                                                                                );
                                                                            }

                                                                            return (
                                                                                <div
                                                                                    key={imageIndex}
                                                                                    className="h-full overflow-hidden bg-[#f5f5f5]"
                                                                                >
                                                                                    <img
                                                                                        src={image}
                                                                                        alt={`${item.name} product ${imageIndex + 1}`}
                                                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                                                    />
                                                                                </div>
                                                                            );
                                                                        }

                                                                        /* =========================================
                                                                           2 PRODUCTS
                                                                           Both = 50% width / full height
                                                                        ========================================= */

                                                                        return (
                                                                            <div
                                                                                key={imageIndex}
                                                                                className="h-full overflow-hidden bg-[#f5f5f5]"
                                                                            >
                                                                                <img
                                                                                    src={image}
                                                                                    alt={`${item.name} product ${imageIndex + 1}`}
                                                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}

                                                            </div>

                                                        ) : (

                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                                                            />

                                                        )}

                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-all" />

                                                        <div className="absolute bottom-2 left-2 right-2 hidden translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:block">

                                                            <div className="bg-white/95 py-2 text-center text-[7px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                                                                {item.isBundle
                                                                    ? "View Bundle"
                                                                    : "View Product"}
                                                            </div>

                                                        </div>

                                                    </Link>


                                                    {/* PRODUCT INFO */}

                                                    <div className="flex-1 min-w-0">

                                                        {/* TITLE ROW */}

                                                        <div className="flex justify-between gap-2.5">

                                                            <div className="min-w-0">

                                                                <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] text-gray-400 mb-1.5">
                                                                    {item.category}
                                                                </p>

                                                                <Link
                                                                    to={`/product/${itemId}`}
                                                                    className="block text-sm sm:text-lg font-medium tracking-tight hover:text-[#FF2323] transition-colors line-clamp-2"
                                                                    style={{
                                                                        fontFamily: "'Nunito', sans-serif",
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </Link>

                                                                <div className="flex items-center gap-1.5 mt-2">

                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                                                                    <span className="text-[7px] uppercase tracking-[0.15em] text-gray-400">
                                                                        In Stock
                                                                    </span>

                                                                </div>

                                                            </div>


                                                            {/* DELETE */}

                                                            <button
                                                                onClick={() =>
                                                                    removeFromCart(itemId)
                                                                }
                                                                className="w-7 h-7 flex items-center justify-center flex-shrink-0 text-gray-300 hover:text-[#FF2323] hover:bg-red-50 transition-all"
                                                            >

                                                                <Trash2
                                                                    size={14}
                                                                    strokeWidth={1.4}
                                                                />

                                                            </button>

                                                        </div>


                                                        {/* QUANTITY / PRICE */}

                                                        <div className="mt-5 sm:mt-7">

                                                            <div className="flex items-end justify-between gap-4">

                                                                {/* QUANTITY */}

                                                                <div>

                                                                    <p className="text-[7px] uppercase tracking-[0.22em] text-gray-400 mb-1.5">
                                                                        Quantity
                                                                    </p>

                                                                    <div className="inline-flex items-center w-max h-8 sm:h-9 border border-black/15 bg-white">

                                                                        <button
                                                                            onClick={() =>
                                                                                updateQuantity(
                                                                                    itemId,
                                                                                    item.quantity - 1
                                                                                )
                                                                            }
                                                                            className="w-8 sm:w-9 h-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                                                        >
                                                                            <Minus size={10} />
                                                                        </button>

                                                                        <span className="w-7 sm:w-9 text-center text-[10px] sm:text-[11px] font-medium">
                                                                            {item.quantity}
                                                                        </span>

                                                                        <button
                                                                            onClick={() =>
                                                                                updateQuantity(
                                                                                    itemId,
                                                                                    item.quantity + 1
                                                                                )
                                                                            }
                                                                            className="w-8 sm:w-9 h-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                                                        >
                                                                            <Plus size={10} />
                                                                        </button>

                                                                    </div>

                                                                </div>


                                                                {/* PRICE */}

                                                                <div className="text-right">

                                                                    <p className="text-[7px] uppercase tracking-[0.22em] text-gray-400 mb-1.5">
                                                                        Total
                                                                    </p>

                                                                    <p className="text-xs sm:text-sm font-semibold">
                                                                        Rs. {itemTotal.toLocaleString()}
                                                                    </p>

                                                                </div>

                                                            </div>

                                                            {item.quantity > 1 && (

                                                                <p className="text-[7px] text-gray-400 text-right mt-1">
                                                                    Rs.{" "}
                                                                    {Number(
                                                                        item.price
                                                                    ).toLocaleString()}{" "}
                                                                    each
                                                                </p>

                                                            )}

                                                        </div>

                                                    </div>

                                                </div>

                                            </article>
                                        );
                                    })}

                                </div>


                                {/* CONTINUE SHOPPING */}

                                <div className="pt-5 sm:pt-6 flex justify-between items-center">

                                    <Link
                                        to="/shop"
                                        className="group inline-flex items-center gap-2.5 text-[8px] sm:text-[9px] uppercase tracking-[0.22em] font-semibold hover:text-[#FF2323] transition-colors"
                                    >

                                        <ArrowLeft
                                            size={13}
                                            className="transition-transform group-hover:-translate-x-1"
                                        />

                                        Continue Shopping

                                    </Link>

                                    <div className="hidden sm:flex items-center gap-2 text-[8px] text-gray-400 uppercase tracking-[0.18em]">

                                        <Lock size={10} />

                                        Secure Shopping

                                    </div>

                                </div>


                                {/* =================================================
                                    SERVICE FEATURES
                                ================================================= */}

                                <div className="grid grid-cols-3 mt-3 sm:mt-5 border-t border-black/10">

                                    {/* Express Delivery */}

                                    <div className="py-4 sm:py-5 px-1 sm:px-5 border-r border-black/10 text-center flex flex-col items-center">

                                        <Truck
                                            size={16}
                                            strokeWidth={1.3}
                                            className="mb-2"
                                        />

                                        <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.06em] sm:tracking-[0.18em] font-semibold leading-4">
                                            Express Delivery
                                        </p>

                                        <p className="text-[7px] sm:text-[8px] text-gray-400 leading-4 sm:leading-5 mt-1.5 max-w-[105px] sm:max-w-[160px]">
                                            Fast and reliable delivery to your doorstep.
                                        </p>

                                    </div>


                                    {/* Easy Exchanges */}

                                    <div className="py-4 sm:py-5 px-1 sm:px-5 border-r border-black/10 text-center flex flex-col items-center">

                                        <RotateCcw
                                            size={16}
                                            strokeWidth={1.3}
                                            className="mb-2"
                                        />

                                        <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.06em] sm:tracking-[0.18em] font-semibold leading-4">
                                            Easy Exchanges
                                        </p>

                                        <p className="text-[7px] sm:text-[8px] text-gray-400 leading-4 sm:leading-5 mt-1.5 max-w-[105px] sm:max-w-[160px]">
                                            Simple exchange process for eligible orders.
                                        </p>

                                    </div>


                                    {/* Quality Assured */}

                                    <div className="py-4 sm:py-5 px-1 sm:px-5 text-center flex flex-col items-center">

                                        <ShieldCheck
                                            size={16}
                                            strokeWidth={1.3}
                                            className="mb-2"
                                        />

                                        <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.06em] sm:tracking-[0.18em] font-semibold leading-4">
                                            Quality Assured
                                        </p>

                                        <p className="text-[7px] sm:text-[8px] text-gray-400 leading-4 sm:leading-5 mt-1.5 max-w-[105px] sm:max-w-[160px]">
                                            Carefully selected pieces made for you.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                RIGHT — SUMMARY
                            ================================================= */}

                            <aside className="xl:col-span-4">

                                <div className="xl:sticky xl:top-24">

                                    <div className="relative bg-[#f7f7f7] p-5 sm:p-7">

                                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/20" />

                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-black/20" />


                                        {/* HEADER */}

                                        <div className="flex items-start justify-between mb-5 sm:mb-6">

                                            <div>

                                                <p className="text-[7px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-1.5">
                                                    MASHFAA
                                                </p>

                                                <h2
                                                    className="text-xl sm:text-2xl font-light"
                                                    style={{
                                                        fontFamily: "'Nunito', sans-serif",
                                                    }}
                                                >
                                                    Order Summary
                                                </h2>

                                            </div>

                                            <Sparkles
                                                size={16}
                                                strokeWidth={1.2}
                                            />

                                        </div>


                                        {/* ROWS */}

                                        <div className="space-y-3 pb-5 border-b border-black/10">

                                            <div className="flex justify-between">

                                                <span className="text-[9px] text-gray-500">
                                                    Subtotal
                                                </span>

                                                <span className="text-[11px] font-medium">
                                                    Rs. {cartTotal.toLocaleString()}
                                                </span>

                                            </div>

                                            <div className="flex justify-between">

                                                <span className="text-[9px] text-gray-500">
                                                    Shipping
                                                </span>

                                                <span className="text-[9px] font-medium">

                                                    {remainingForShipping <= 0 ? (

                                                        <span className="text-emerald-700">
                                                            FREE
                                                        </span>

                                                    ) : (
                                                        "At checkout"
                                                    )}

                                                </span>

                                            </div>

                                            <div className="flex justify-between">

                                                <span className="text-[9px] text-gray-500">
                                                    Taxes & Duties
                                                </span>

                                                <span className="text-[9px] text-gray-400">
                                                    Included
                                                </span>

                                            </div>

                                        </div>


                                        {/* TOTAL */}

                                        <div className="py-5 flex items-end justify-between gap-5">

                                            <div>

                                                <p className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mb-1">
                                                    Total
                                                </p>

                                                <p className="text-[8px] text-gray-400">
                                                    Inclusive of taxes
                                                </p>

                                            </div>

                                            <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                                                Rs. {cartTotal.toLocaleString()}
                                            </span>

                                        </div>


                                        {/* CHECKOUT */}

                                        <Link
                                            to="/checkout"
                                            className="group relative overflow-hidden w-full h-12 sm:h-14 bg-black text-white flex items-center justify-center gap-3 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-semibold"
                                        >

                                            <span className="relative z-10">
                                                Proceed To Checkout
                                            </span>

                                            <ArrowRight
                                                size={14}
                                                className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
                                            />

                                            <div className="absolute inset-0 bg-[#FF2323] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                                        </Link>


                                        {/* SECURE */}

                                        <div className="flex items-center justify-center gap-2 mt-3">

                                            <Lock
                                                size={10}
                                                strokeWidth={1.5}
                                            />

                                            <span className="text-[7px] uppercase tracking-[0.18em] text-gray-400">
                                                Secure & Encrypted Checkout
                                            </span>

                                        </div>

                                    </div>


                                    {/* DELIVERY */}

                                    <div className="mt-3 border border-black/10 p-4 sm:p-5">

                                        <div className="flex gap-3">

                                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0">

                                                <Package
                                                    size={14}
                                                    strokeWidth={1.3}
                                                />

                                            </div>

                                            <div>

                                                <p className="text-[8px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                                                    Delivery Information
                                                </p>

                                                <p className="text-[8px] text-gray-400 leading-5">

                                                    {remainingForShipping > 0
                                                        ? `Add Rs. ${remainingForShipping.toLocaleString()} more for free express shipping.`
                                                        : "Your order qualifies for complimentary express shipping."}

                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    {/* TRUST */}

                                    <div className="mt-3 flex items-center justify-between px-1">

                                        <div className="flex items-center gap-1.5">

                                            <ShieldCheck
                                                size={12}
                                                strokeWidth={1.3}
                                            />

                                            <span className="text-[7px] uppercase tracking-[0.12em] text-gray-400">
                                                Quality Assured
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-1.5">

                                            <Heart
                                                size={12}
                                                strokeWidth={1.3}
                                            />

                                            <span className="text-[7px] uppercase tracking-[0.12em] text-gray-400">
                                                Made For You
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </aside>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BRAND FOOTER AREA
                ===================================================== */}

                <section className="mt-12 sm:mt-16 px-5 sm:px-8 lg:px-12">

                    <div className="max-w-7xl mx-auto border-t border-black/10 pt-6 sm:pt-7">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                            <div className="flex items-center gap-3">

                                <span className="w-6 h-px bg-[#FF2323]" />

                                <span className="text-[7px] uppercase tracking-[0.3em] text-gray-400">
                                    Designed With Intention
                                </span>

                            </div>

                            <p className="text-[7px] text-gray-400 uppercase tracking-[0.18em]">
                                MASHFAA — MODESTLY REFINED
                            </p>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}