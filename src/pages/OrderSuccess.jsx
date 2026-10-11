
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    ArrowRight,
    Check,
    Home,
    Package,
    ShoppingBag,
    Truck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderSuccess() {
    const location = useLocation();

    const orderData = location.state || {};

    const orderNumber =
        orderData.orderNumber ||
        `MSF-${Date.now().toString().slice(-6)}`;

    const total =
        orderData.total || 0;

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">

            <Navbar solid={true} />

            <main className="flex-1 pt-24 sm:pt-28 pb-16">

                {/* ================= TOP LABEL ================= */}
                <section className="px-5 sm:px-8 lg:px-12">

                    <div className="max-w-5xl mx-auto">

                        <div className="flex items-center justify-center gap-3 mb-8">

                            <span className="w-8 sm:w-12 h-px bg-[#FF2323]" />

                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#FF2323] font-semibold">
                                Order Confirmed
                            </span>

                            <span className="w-8 sm:w-12 h-px bg-[#FF2323]" />

                        </div>

                    </div>

                </section>

                {/* ================= SUCCESS CONTENT ================= */}
                <section className="px-5 sm:px-8">

                    <div className="max-w-3xl mx-auto text-center">

                        {/* Success Icon */}
                        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-7">

                            <div className="absolute inset-0 rounded-full border border-black/10" />

                            <div className="absolute inset-3 rounded-full border border-[#FF2323]/20" />

                            <div className="absolute inset-7 rounded-full bg-black text-white flex items-center justify-center">
                                <Check
                                    size={28}
                                    strokeWidth={1.5}
                                />
                            </div>

                        </div>

                        {/* Heading */}
                        <p className="text-[8px] uppercase tracking-[0.45em] text-gray-400 mb-3">
                            Thank You For Shopping With Us
                        </p>

                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.04em] leading-[0.95]"
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                            }}
                        >
                            Your Order Is
                            <br />
                            <span className="italic font-normal">
                                Confirmed.
                            </span>
                        </h1>

                        <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-500 leading-6 mt-5">
                            Your order has been received successfully.
                            We'll carefully prepare your pieces and get them
                            ready for delivery.
                        </p>

                    </div>

                </section>

                {/* ================= ORDER INFO ================= */}
                <section className="px-5 sm:px-8 lg:px-12 mt-10 sm:mt-12">

                    <div className="max-w-3xl mx-auto">

                        <div className="relative bg-[#f7f7f7] p-5 sm:p-7">

                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/20" />

                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-black/20" />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0">

                                {/* Order Number */}
                                <div className="text-center sm:border-r border-black/10">

                                    <p className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                                        Order Number
                                    </p>

                                    <p className="text-sm sm:text-base font-semibold tracking-wide">
                                        {orderNumber}
                                    </p>

                                </div>

                                {/* Payment */}
                                <div className="text-center sm:border-r border-black/10">

                                    <p className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                                        Payment
                                    </p>

                                    <p className="text-sm sm:text-base font-semibold">
                                        Cash on Delivery
                                    </p>

                                </div>

                                {/* Total */}
                                <div className="text-center">

                                    <p className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mb-2">
                                        Order Total
                                    </p>

                                    <p className="text-sm sm:text-base font-semibold">
                                        Rs. {Number(total).toLocaleString()}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= DELIVERY STEPS ================= */}
                <section className="px-5 sm:px-8 lg:px-12 mt-10 sm:mt-12">

                    <div className="max-w-3xl mx-auto">

                        <div className="text-center mb-7">

                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-2">
                                What's Next
                            </p>

                            <h2
                                className="text-2xl sm:text-3xl font-light"
                                style={{
                                    fontFamily: "'Nunito', sans-serif",
                                }}
                            >
                                Your Order Journey
                            </h2>

                        </div>

                        <div className="grid grid-cols-3 border-y border-black/10">

                            {/* Step 1 */}
                            <div className="relative py-5 sm:py-6 px-2 text-center border-r border-black/10">

                                <div className="w-9 h-9 mx-auto bg-black text-white flex items-center justify-center mb-3">
                                    <Check
                                        size={15}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] font-semibold">
                                    Order Placed
                                </p>

                                <p className="text-[7px] sm:text-[8px] text-gray-400 mt-1">
                                    Confirmed
                                </p>

                            </div>

                            {/* Step 2 */}
                            <div className="relative py-5 sm:py-6 px-2 text-center border-r border-black/10">

                                <div className="w-9 h-9 mx-auto bg-[#f2f2f2] flex items-center justify-center mb-3">
                                    <Package
                                        size={15}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] font-semibold">
                                    Preparing
                                </p>

                                <p className="text-[7px] sm:text-[8px] text-gray-400 mt-1">
                                    Coming next
                                </p>

                            </div>

                            {/* Step 3 */}
                            <div className="relative py-5 sm:py-6 px-2 text-center">

                                <div className="w-9 h-9 mx-auto bg-[#f2f2f2] flex items-center justify-center mb-3">
                                    <Truck
                                        size={15}
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] font-semibold">
                                    Delivered
                                </p>

                                <p className="text-[7px] sm:text-[8px] text-gray-400 mt-1">
                                    On the way
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= ACTION BUTTONS ================= */}
                <section className="px-5 sm:px-8 mt-10">

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                        <Link
                            to="/shop"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-semibold hover:bg-[#FF2323] transition-all duration-500"
                        >
                            Continue Shopping

                            <ArrowRight
                                size={14}
                                className="transition-transform duration-500 group-hover:translate-x-2"
                            />
                        </Link>

                        <Link
                            to="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-black/15 px-8 py-4 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-semibold hover:bg-black hover:text-white transition-all duration-500"
                        >
                            <Home size={13} />

                            Back To Home
                        </Link>

                    </div>

                </section>

                {/* ================= TRUST ================= */}
                <section className="px-5 sm:px-8 lg:px-12 mt-10">

                    <div className="max-w-3xl mx-auto border-t border-black/10 pt-6">

                        <div className="grid grid-cols-3">

                            <div className="text-center">

                                <ShoppingBag
                                    size={15}
                                    strokeWidth={1.3}
                                    className="mx-auto mb-2"
                                />

                                <p className="text-[7px] uppercase tracking-[0.12em] font-semibold">
                                    Carefully Packed
                                </p>

                            </div>

                            <div className="text-center border-x border-black/10">

                                <Truck
                                    size={15}
                                    strokeWidth={1.3}
                                    className="mx-auto mb-2"
                                />

                                <p className="text-[7px] uppercase tracking-[0.12em] font-semibold">
                                    Fast Delivery
                                </p>

                            </div>

                            <div className="text-center">

                                <Check
                                    size={15}
                                    strokeWidth={1.3}
                                    className="mx-auto mb-2"
                                />

                                <p className="text-[7px] uppercase tracking-[0.12em] font-semibold">
                                    Quality Assured
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default OrderSuccess;

