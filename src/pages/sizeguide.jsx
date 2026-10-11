
import { useState } from "react";
import {
    Ruler,
    CheckCircle2,
    ArrowRight,
    MoveDown,
    Maximize2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SizeGuide() {
    const [activeTab, setActiveTab] = useState("abaya");

    const abayaSizes = [
        { size: "XS", length: "52", bust: "36–38" },
        { size: "S", length: "54", bust: "38–40" },
        { size: "M", length: "56", bust: "40–42" },
        { size: "L", length: "58", bust: "42–44" },
        { size: "XL", length: "60", bust: "44–46" },
        { size: "XXL", length: "62", bust: "46–48" },
    ];

    const hijabSizes = [
        {
            size: "Standard",
            measurement: "70 × 30",
            bestFor: "Everyday styling",
        },
        {
            size: "Large",
            measurement: "80 × 35",
            bestFor: "Fuller coverage",
        },
        {
            size: "Extra Large",
            measurement: "90 × 40",
            bestFor: "Maximum coverage",
        },
    ];

    const measurementSteps = [
        {
            number: "01",
            title: "Bust",
            description:
                "Measure around the fullest part of your bust while keeping the measuring tape comfortable and level.",
            icon: Maximize2,
        },
        {
            number: "02",
            title: "Length",
            description:
                "Measure from the top of your shoulder down to where you want the abaya to end.",
            icon: MoveDown,
        },
        {
            number: "03",
            title: "Compare",
            description:
                "Compare your measurements with our chart and select the closest available size.",
            icon: Ruler,
        },
    ];

    const fitTips = [
        "Take measurements while wearing light clothing.",
        "Keep the measuring tape straight and comfortable.",
        "If you are between two sizes, consider your preferred fit.",
        "For a relaxed fit, choose the larger size.",
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#080808] text-white">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-red-600/[0.07] blur-[130px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-red-600/[0.05] blur-[130px]" />

                {/* Background typography */}
                <div className="pointer-events-none absolute bottom-[-45px] right-[-20px] hidden select-none text-[17vw] font-black uppercase tracking-[-12px] text-white/[0.025] lg:block">
                    FIT
                </div>

                <div className="relative mx-auto max-w-[1480px] px-5 pb-24 pt-36 sm:px-8 md:pb-28 md:pt-40 lg:px-12">
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#FF2323]" />

                            <p className="text-[9px] font-medium uppercase tracking-[5px] text-red-500">
                                Find Your Perfect Fit
                            </p>
                        </div>

                        <h1 className="text-5xl font-light leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
                            Size
                            <br />
                            <span className="font-serif italic text-white/90">
                                Guide.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                            Find the right fit for your abayas and hijabs with
                            our carefully prepared measurement guide. Compare
                            your measurements with the charts below before
                            placing your order.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[3px] text-gray-600">
                        <Ruler size={14} className="text-red-600" />
                        Measurements in inches
                    </div>
                </div>
            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}
            <section className="border-b border-black/[0.06] bg-white">
                <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
                    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                        <div>
                            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-red-600">
                                The Right Choice
                            </p>

                            <h2 className="text-3xl font-light leading-tight tracking-[-1.5px] sm:text-4xl">
                                A better fit starts
                                <br />
                                <span className="font-serif italic">
                                    with the right measurements.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-2xl text-sm leading-7 text-gray-500 md:justify-self-end">
                            Every body is unique. Our size charts are designed
                            to give you a reliable starting point when choosing
                            your size. Take your measurements carefully and
                            compare them with the chart for the best possible
                            fit.
                        </p>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SIZE CHART SECTION
            ===================================================== */}
            <section className="bg-[#fafafa] py-20 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
                    {/* Tabs */}
                    <div className="mb-16 flex justify-center">
                        <div className="inline-flex border border-black/10 bg-white p-1 shadow-sm">
                            <button
                                type="button"
                                onClick={() => setActiveTab("abaya")}
                                className={`px-6 py-3 text-[10px] font-semibold uppercase tracking-[2px] transition-all duration-300 sm:px-9 ${
                                    activeTab === "abaya"
                                        ? "bg-[#080808] text-white"
                                        : "text-gray-500 hover:text-black"
                                }`}
                            >
                                Abaya
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("hijab")}
                                className={`px-6 py-3 text-[10px] font-semibold uppercase tracking-[2px] transition-all duration-300 sm:px-9 ${
                                    activeTab === "hijab"
                                        ? "bg-[#080808] text-white"
                                        : "text-gray-500 hover:text-black"
                                }`}
                            >
                                Hijab
                            </button>
                        </div>
                    </div>

                    {/* =================================================
                        ABAYA
                    ================================================= */}
                    {activeTab === "abaya" && (
                        <div>
                            <div className="mb-10 text-center">
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                                    <Ruler size={20} strokeWidth={1.5} />
                                </div>

                                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[4px] text-red-600">
                                    Abaya Collection
                                </p>

                                <h2 className="text-3xl font-light tracking-[-1px] sm:text-4xl">
                                    Abaya Size Chart
                                </h2>

                                <p className="mt-4 text-sm text-gray-500">
                                    All measurements are in inches.
                                </p>
                            </div>

                            <div className="overflow-hidden border border-black/[0.08] bg-white">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[650px] text-left">
                                        <thead className="bg-[#080808] text-white">
                                            <tr>
                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Size
                                                </th>

                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Abaya Length
                                                </th>

                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Bust
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {abayaSizes.map((item, index) => (
                                                <tr
                                                    key={item.size}
                                                    className={`group transition-colors duration-300 hover:bg-[#fafafa] ${
                                                        index !==
                                                        abayaSizes.length - 1
                                                            ? "border-b border-black/[0.06]"
                                                            : ""
                                                    }`}
                                                >
                                                    <td className="px-6 py-6">
                                                        <span className="text-sm font-semibold">
                                                            {item.size}
                                                        </span>
                                                    </td>

                                                    <td className="px-6 py-6 text-sm text-gray-500">
                                                        {item.length}"
                                                    </td>

                                                    <td className="px-6 py-6 text-sm text-gray-500">
                                                        {item.bust}"
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* =================================================
                        HIJAB
                    ================================================= */}
                    {activeTab === "hijab" && (
                        <div>
                            <div className="mb-10 text-center">
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                                    <Ruler size={20} strokeWidth={1.5} />
                                </div>

                                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[4px] text-red-600">
                                    Hijab Collection
                                </p>

                                <h2 className="text-3xl font-light tracking-[-1px] sm:text-4xl">
                                    Hijab Size Chart
                                </h2>

                                <p className="mt-4 text-sm text-gray-500">
                                    Measurements are shown as width × length
                                    in inches.
                                </p>
                            </div>

                            <div className="overflow-hidden border border-black/[0.08] bg-white">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[650px] text-left">
                                        <thead className="bg-[#080808] text-white">
                                            <tr>
                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Size
                                                </th>

                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Measurement
                                                </th>

                                                <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px]">
                                                    Best For
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {hijabSizes.map((item, index) => (
                                                <tr
                                                    key={item.size}
                                                    className={`group transition-colors duration-300 hover:bg-[#fafafa] ${
                                                        index !==
                                                        hijabSizes.length - 1
                                                            ? "border-b border-black/[0.06]"
                                                            : ""
                                                    }`}
                                                >
                                                    <td className="px-6 py-6">
                                                        <span className="text-sm font-semibold">
                                                            {item.size}
                                                        </span>
                                                    </td>

                                                    <td className="px-6 py-6 text-sm text-gray-500">
                                                        {item.measurement}"
                                                    </td>

                                                    <td className="px-6 py-6 text-sm text-gray-500">
                                                        {item.bestFor}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* =====================================================
                HOW TO MEASURE
            ===================================================== */}
            <section className="bg-white py-20 md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-red-600">
                            Simple Measurements
                        </p>

                        <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl">
                            How to measure
                            <br />
                            <span className="font-serif italic">
                                yourself correctly.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-px bg-black/[0.08] md:grid-cols-3">
                        {measurementSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="group bg-white p-8 transition-all duration-500 hover:bg-[#080808] hover:text-white md:p-10"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-[10px] font-semibold tracking-[3px] text-red-600">
                                            {step.number}
                                        </span>

                                        <Icon
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-gray-300 transition-colors duration-300 group-hover:text-red-500"
                                        />
                                    </div>

                                    <h3 className="mt-12 text-xl font-medium">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FIT TIPS
            ===================================================== */}
            <section className="bg-[#080808] py-20 text-white md:py-24">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-8 bg-red-600" />

                                <p className="text-[9px] font-semibold uppercase tracking-[4px] text-red-500">
                                    Before You Order
                                </p>
                            </div>

                            <h2 className="text-3xl font-light leading-tight tracking-[-1.5px] sm:text-4xl">
                                Small details make
                                <br />
                                <span className="font-serif italic text-white/80">
                                    a big difference.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
                                Follow these simple tips when taking your
                                measurements to make your selection more
                                accurate.
                            </p>
                        </div>

                        <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2">
                            {fitTips.map((tip, index) => (
                                <div
                                    key={tip}
                                    className="group bg-[#080808] p-7 transition-colors duration-300 hover:bg-white/[0.04]"
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <span className="text-[9px] tracking-[3px] text-gray-600">
                                            0{index + 1}
                                        </span>

                                        <CheckCircle2
                                            size={17}
                                            strokeWidth={1.5}
                                            className="text-red-600"
                                        />
                                    </div>

                                    <p className="text-sm leading-6 text-gray-400">
                                        {tip}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                HELP CTA
            ===================================================== */}
            <section className="relative overflow-hidden bg-white py-24 md:py-28">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[100px]" />

                <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
                    <Sparkles
                        size={20}
                        className="mx-auto mb-6 text-red-600"
                        strokeWidth={1.5}
                    />

                    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-red-600">
                        Need Assistance?
                    </p>

                    <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl md:text-5xl">
                        Still not sure about
                        <br />
                        <span className="font-serif italic">
                            your perfect size?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                        Our team is happy to help you choose the right fit.
                        Reach out to us and we will guide you through the
                        selection process.
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

export default SizeGuide;

