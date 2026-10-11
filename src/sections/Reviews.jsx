import { useState } from "react";
import {
    Star,
    Quote,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "Ayesha K.",
        location: "Lahore, Pakistan",
        review:
            "The abaya quality was beautiful and exactly as shown. The fabric, stitching, and overall finish felt so premium.",
        product: "Premium Abaya",
    },
    {
        id: 2,
        name: "Maham R.",
        location: "Islamabad, Pakistan",
        review:
            "I loved how effortlessly elegant everything looked. My hijab arrived beautifully packed and the quality was excellent.",
        product: "Elegant Hijab",
    },
    {
        id: 3,
        name: "Hira S.",
        location: "Karachi, Pakistan",
        review:
            "The bundle was such a convenient way to complete my look. Everything matched beautifully and delivery was smooth.",
        product: "Complete Abaya Look",
    },
    {
        id: 4,
        name: "Zoya A.",
        location: "Rawalpindi, Pakistan",
        review:
            "The handbag looked even better in person. The finishing was neat and the packaging made the whole experience feel special.",
        product: "Classic Handbag",
    },
    {
        id: 5,
        name: "Sana M.",
        location: "Faisalabad, Pakistan",
        review:
            "I ordered a hijab and brooch together and both pieces were lovely. The colors were exactly what I expected.",
        product: "Everyday Essentials",
    },
    {
        id: 6,
        name: "Iqra N.",
        location: "Multan, Pakistan",
        review:
            "Really appreciated the attention to detail. The product felt thoughtfully made and the ordering process was very smooth.",
        product: "Signature Brooch",
    },
];

function Reviews() {
    const [currentReview, setCurrentReview] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const changeReview = (index) => {
        if (index === currentReview || isChanging) return;

        setIsChanging(true);

        setTimeout(() => {
            setCurrentReview(index);
            setIsChanging(false);
        }, 250);
    };

    const nextReview = () => {
        changeReview((currentReview + 1) % reviews.length);
    };

    const previousReview = () => {
        changeReview(
            (currentReview - 1 + reviews.length) % reviews.length
        );
    };

    const review = reviews[currentReview];

    return (
        <section
            data-gsap="section"
            className="bg-[#111111] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-12"
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div
                    data-gsap="fade-up"
                    className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between"
                >

                    <div>

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#FF2323]" />

                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#FF2323]">
                                Customer Stories
                            </p>
                        </div>

                        <h2
                            className="text-3xl font-semibold uppercase leading-[0.92] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            What Our
                            <br />
                            <span className="font-medium text-white/35">
                                Customers Say
                            </span>
                        </h2>

                    </div>

                    {/* COUNTER */}
                    <div className="flex items-center gap-3">

                        <span className="text-[10px] tracking-[0.2em] text-white/40">
                            REVIEW
                        </span>

                        <span className="text-sm font-medium text-white">
                            {String(currentReview + 1).padStart(2, "0")}
                        </span>

                        <span className="text-white/20">
                            /
                        </span>

                        <span className="text-sm text-white/35">
                            {String(reviews.length).padStart(2, "0")}
                        </span>

                    </div>

                </div>

                {/* REVIEW CONTENT */}
                <div
                    data-gsap="fade-up"
                    className={`relative grid min-h-[300px] items-center border-b border-white/10 transition-all duration-300 md:min-h-[320px] md:grid-cols-[0.8fr_1.5fr] lg:grid-cols-[0.7fr_1.6fr] ${
                        isChanging
                            ? "translate-y-1 opacity-0"
                            : "translate-y-0 opacity-100"
                    }`}
                >

                    {/* LEFT META */}
                    <div className="hidden h-full border-r border-white/10 md:flex md:flex-col md:justify-between md:py-12">

                        <div>
                            <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                                Verified Customer
                            </span>

                            <div className="mt-4 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={11}
                                        fill="currentColor"
                                        strokeWidth={0}
                                        className="text-[#FF2323]"
                                    />
                                ))}
                            </div>
                        </div>

                        <div>

                            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white">
                                {review.name}
                            </p>

                            <p className="mt-2 text-[10px] text-white/35">
                                {review.location}
                            </p>

                            <div className="mt-5 h-px w-8 bg-[#FF2323]" />

                            <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-white/30">
                                Purchased
                            </p>

                            <p className="mt-2 text-[10px] text-white/60">
                                {review.product}
                            </p>

                        </div>

                    </div>

                    {/* MAIN REVIEW */}
                    <div className="relative px-1 py-8 md:px-10 md:py-8 lg:px-16">

                        {/* QUOTE MARK */}
                        <Quote
                            size={64}
                            strokeWidth={0.7}
                            className="absolute right-0 top-8 text-white/[0.06] md:right-8 md:top-6 lg:right-14"
                        />

                        <p className="max-w-3xl text-lg font-medium leading-[1.5] tracking-[-0.01em] text-white md:text-xl lg:text-2xl lg:leading-[1.5]">
                            “{review.review}”
                        </p>

                        {/* MOBILE META */}
                        <div className="mt-9 md:hidden">

                            <div className="mb-4 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={11}
                                        fill="currentColor"
                                        strokeWidth={0}
                                        className="text-[#FF2323]"
                                    />
                                ))}
                            </div>

                            <p className="text-xs font-medium uppercase tracking-[0.08em] text-white">
                                {review.name}
                            </p>

                            <p className="mt-1 text-[10px] text-white/35">
                                {review.location}
                            </p>

                        </div>

                    </div>

                </div>

                {/* BOTTOM NAVIGATION */}
                <div
                    data-gsap="fade-up"
                    className="flex items-center justify-between pt-5"
                >

                    {/* DOTS */}
                    <div className="flex items-center gap-2">

                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => changeReview(index)}
                                aria-label={`Go to review ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    currentReview === index
                                        ? "w-9 bg-[#FF2323]"
                                        : "w-1.5 bg-white/20 hover:bg-white/50"
                                }`}
                            />
                        ))}

                    </div>

                    {/* ARROWS */}
                    <div className="flex items-center gap-2">

                        <button
                            onClick={previousReview}
                            aria-label="Previous review"
                            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                        >
                            <ArrowLeft
                                size={15}
                                strokeWidth={1.5}
                            />
                        </button>

                        <button
                            onClick={nextReview}
                            aria-label="Next review"
                            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
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

export default Reviews;