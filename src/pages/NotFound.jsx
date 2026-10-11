
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* ================= HERO / 404 ================= */}
            <section className="relative min-h-[78vh] overflow-hidden bg-[#080808] flex items-center justify-center">
                {/* Background Decorative Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[30vw] md:text-[25vw] lg:text-[22vw] font-black tracking-[-0.08em] text-white/[0.025] leading-none">
                        404
                    </span>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

                {/* Red Glow */}
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FF2323]/10 blur-[100px]" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#FF2323]/10 blur-[100px]" />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 text-center">
                    {/* Small Label */}
                    <div className="flex items-center justify-center gap-3 mb-7">
                        <span className="w-10 h-px bg-[#FF2323]" />
                        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/60">
                            Page Not Found
                        </span>
                        <span className="w-10 h-px bg-[#FF2323]" />
                    </div>

                    {/* 404 */}
                    <h1 className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] font-black tracking-[-0.08em] text-white">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-12 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        This page took a little detour.
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base leading-7 text-white/55">
                        The page you're looking for doesn't exist or may have
                        been moved. Let's get you back to something beautiful.
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            to="/"
                            className="group inline-flex items-center justify-center gap-3 min-w-[180px] px-6 py-3.5 bg-[#FF2323] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            <Home size={16} strokeWidth={2} />
                            Back Home
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/shop"
                            className="group inline-flex items-center justify-center gap-3 min-w-[180px] px-6 py-3.5 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                        >
                            <Search size={16} strokeWidth={2} />
                            Explore Shop
                        </Link>
                    </div>

                    {/* Go Back */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 hover:text-[#FF2323]"
                    >
                        <ArrowLeft size={14} />
                        Go Back
                    </button>
                </div>
            </section>

            {/* ================= BRAND MESSAGE ================= */}
            <section className="border-b border-black/10 bg-white">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#FF2323] font-bold mb-2">
                                Mashfaa
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                                Discover your next favourite piece.
                            </h3>
                        </div>

                        <Link
                            to="/new-arrivals"
                            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] border-b border-black pb-2 hover:text-[#FF2323] hover:border-[#FF2323] transition-colors duration-300"
                        >
                            View New Arrivals
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFound;