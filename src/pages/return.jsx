
import {
    RefreshCcw,
    PackageCheck,
    Clock3,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Returns() {
    const features = [
        {
            icon: Clock3,
            title: "Return Window",
            text: "Return or exchange requests should be made within the specified return period.",
        },
        {
            icon: PackageCheck,
            title: "Original Condition",
            text: "Items should be unused, unworn, and returned with their original packaging and tags.",
        },
        {
            icon: RefreshCcw,
            title: "Easy Exchange",
            text: "Eligible products can be exchanged for another available size or item.",
        },
        {
            icon: ShieldCheck,
            title: "Quality Check",
            text: "Returned products are inspected before a return or exchange is approved.",
        },
    ];

    const steps = [
        {
            number: "01",
            title: "Contact Us",
            text: "Contact our customer care team with your order number and reason for the return.",
        },
        {
            number: "02",
            title: "Request Review",
            text: "Our team reviews your request and confirms whether the item is eligible.",
        },
        {
            number: "03",
            title: "Send The Item",
            text: "Once approved, carefully pack the item and send it back according to our instructions.",
        },
        {
            number: "04",
            title: "Resolution",
            text: "After inspection, we process your exchange or eligible refund.",
        },
    ];

    const eligibility = [
        "The item must be unused and unworn.",
        "Original tags and packaging should be intact.",
        "The product should be returned in its original condition.",
        "Proof of purchase or order details may be required.",
        "Items received damaged or incorrectly should be reported as soon as possible.",
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#080808] text-white">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-red-600/[0.07] blur-[140px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-red-600/[0.05] blur-[140px]" />

                {/* Background typography */}
                <div className="pointer-events-none absolute bottom-[-50px] right-[-25px] hidden select-none text-[15vw] font-black uppercase tracking-[-12px] text-white/[0.025] lg:block">
                    CARE
                </div>

                <div className="relative mx-auto max-w-[1480px] px-5 pb-24 pt-36 sm:px-8 md:pb-28 md:pt-40 lg:px-12">
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#FF2323]" />

                            <p className="text-[9px] font-medium uppercase tracking-[5px] text-red-500">
                                Customer Care
                            </p>
                        </div>

                        <h1 className="text-5xl font-light leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
                            Returns
                            <br />
                            <span className="font-serif italic text-white/90">
                                & Exchange.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                            We want you to love every purchase from Mashfaa. If
                            your order isn't right, our simple return and
                            exchange process is here to help.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[3px] text-gray-600">
                        <RefreshCcw size={14} className="text-red-600" />
                        Simple & transparent process
                    </div>
                </div>
            </section>

            {/* =====================================================
                POLICY INTRO
            ===================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-24 lg:px-12">
                    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                        <div>
                            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                                Our Policy
                            </p>

                            <h2 className="text-3xl font-light leading-tight tracking-[-1.5px] sm:text-4xl">
                                Easy returns.
                                <br />
                                <span className="font-serif italic">
                                    Clear process.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm leading-7 text-gray-500 md:justify-self-end">
                            If you receive an incorrect, damaged, or unsuitable
                            item, you can contact us to request a return or
                            exchange within the eligible return period. We aim
                            to make every step as straightforward as possible.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-16 grid gap-px bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group bg-white p-7 transition-all duration-500 hover:bg-[#080808] hover:text-white lg:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.4}
                                            className="text-red-600"
                                        />

                                        <span className="text-[9px] tracking-[3px] text-gray-300 transition-colors duration-300 group-hover:text-gray-600">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-10 text-lg font-medium">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                                        {feature.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                HOW IT WORKS
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#080808] text-white">
                <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-red-600/[0.05] blur-[130px]" />

                <div className="relative mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-24 lg:px-12">
                    <div className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-4">
                            <span className="h-px w-8 bg-red-600" />

                            <p className="text-[9px] font-semibold uppercase tracking-[4px] text-red-500">
                                How It Works
                            </p>
                        </div>

                        <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl">
                            Return or exchange
                            <br />
                            <span className="font-serif italic text-white/80">
                                in 4 simple steps.
                            </span>
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="group bg-[#080808] p-8 transition-colors duration-500 hover:bg-white/[0.04] lg:p-9"
                            >
                                <span className="text-[10px] font-semibold tracking-[3px] text-red-600">
                                    {step.number}
                                </span>

                                <div className="mt-10 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-red-600" />

                                <h3 className="mt-7 text-lg font-medium">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-gray-500">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                ELIGIBILITY
            ===================================================== */}
            <section className="bg-[#fafafa] py-20 md:py-24">
                <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
                    <div className="mb-12">
                        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                            Before You Return
                        </p>

                        <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl">
                            Return
                            <span className="font-serif italic">
                                {" "}
                                eligibility.
                            </span>
                        </h2>
                    </div>

                    <div className="border-t border-black/[0.08]">
                        {eligibility.map((item, index) => (
                            <div
                                key={item}
                                className="group flex items-start gap-5 border-b border-black/[0.08] py-6"
                            >
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-[#FF2323]">
                                    <CheckCircle2
                                        size={14}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div className="flex-1">
                                    <span className="mr-4 text-[9px] tracking-[2px] text-gray-400">
                                        0{index + 1}
                                    </span>

                                    <span className="text-sm leading-6 text-gray-600">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                IMPORTANT NOTE
            ===================================================== */}
            <section className="bg-white py-4 pb-20 md:pb-24">
                <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
                    <div className="relative overflow-hidden border border-black/[0.08] bg-[#080808] p-8 text-white sm:p-10 md:p-12">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-600/[0.06] blur-[70px]" />

                        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10">
                                    <ShieldCheck
                                        size={20}
                                        className="text-red-600"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[3px] text-red-500">
                                        Important
                                    </p>

                                    <h3 className="mt-1 text-lg font-medium">
                                        Please Note
                                    </h3>
                                </div>
                            </div>

                            <p className="max-w-3xl text-sm leading-7 text-gray-500">
                                Return and exchange eligibility may vary
                                depending on the product and its condition.
                                Some sale, promotional, personalized, or
                                hygiene-sensitive items may have different
                                return conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="relative overflow-hidden bg-white py-24 md:py-28">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[110px]" />

                <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
                    <Sparkles
                        size={20}
                        strokeWidth={1.5}
                        className="mx-auto mb-6 text-[#FF2323]"
                    />

                    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                        We're Here To Help
                    </p>

                    <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl md:text-5xl">
                        Need help with
                        <br />
                        <span className="font-serif italic">
                            a return?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                        Our customer care team is here to help you with your
                        return or exchange request.
                    </p>

                    <Link
                        to="/contact"
                        className="group mt-8 inline-flex items-center gap-3 bg-[#080808] px-8 py-4 text-[10px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#FF2323]"
                    >
                        Contact Us

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

