
import { useState } from "react";
import {
    Plus,
    Minus,
    ArrowRight,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqData = [
    {
        category: "Orders",
        questions: [
            {
                question: "How can I place an order?",
                answer:
                    "Simply browse our products, select the item you want, choose the required options, and add it to your bag. Once you are ready, proceed to checkout and complete your order.",
            },
            {
                question: "Can I cancel my order after placing it?",
                answer:
                    "If your order has not yet been processed, you may contact our customer care team as soon as possible to request cancellation.",
            },
            {
                question: "How can I check my order status?",
                answer:
                    "Once your order has been processed and shipped, tracking information can be provided through your order details or by contacting our customer care team.",
            },
        ],
    },
    {
        category: "Shipping",
        questions: [
            {
                question: "How long does delivery take?",
                answer:
                    "Orders are generally processed within 1–2 business days. Standard delivery may take approximately 3–5 business days depending on the delivery location.",
            },
            {
                question: "Do you offer nationwide delivery?",
                answer:
                    "Yes, Mashfaa delivers to major cities and locations across Pakistan. Delivery availability may vary depending on the location.",
            },
            {
                question: "How can I track my order?",
                answer:
                    "Once your order has been dispatched, tracking information will be shared when available so you can follow your shipment.",
            },
        ],
    },
    {
        category: "Returns & Exchanges",
        questions: [
            {
                question: "Can I return or exchange an item?",
                answer:
                    "Eligible products can be returned or exchanged according to our Returns & Exchange Policy. Items generally need to be unused, unworn, and in their original condition.",
            },
            {
                question: "What if I receive a damaged or incorrect item?",
                answer:
                    "Please contact our customer care team as soon as possible with your order details. Our team will review the issue and guide you through the next steps.",
            },
            {
                question: "Are sale items eligible for return?",
                answer:
                    "Certain sale, promotional, or specially discounted items may have different return conditions. Please check the applicable product or promotional terms before placing your order.",
            },
        ],
    },
    {
        category: "Payments",
        questions: [
            {
                question: "What payment methods do you accept?",
                answer:
                    "Available payment methods are displayed during checkout. Payment options may vary depending on your location and current payment setup.",
            },
            {
                question: "Is my payment information secure?",
                answer:
                    "We take reasonable measures to protect customer information and payment details. Sensitive payment information should always be entered only through the secure checkout process.",
            },
        ],
    },
    {
        category: "Products",
        questions: [
            {
                question: "How do I choose the right size?",
                answer:
                    "Please refer to our Size Guide before placing your order. If you are still unsure, you can contact our customer care team for assistance.",
            },
            {
                question: "Will the product look exactly like the pictures?",
                answer:
                    "We make every effort to display products as accurately as possible. However, slight differences in color may occur depending on lighting, photography, and your screen settings.",
            },
        ],
    },
];

function FAQItem({ question, answer, isOpen, onClick, number }) {
    return (
        <div
            className={`border-b border-black/[0.08] transition-colors duration-300 ${
                isOpen ? "bg-[#fafafa]" : "bg-white"
            }`}
        >
            <button
                type="button"
                onClick={onClick}
                className="group flex w-full items-center gap-5 px-5 py-6 text-left sm:px-7"
            >
                {/* Number */}
                <span
                    className={`hidden w-8 shrink-0 text-[9px] font-semibold tracking-[2px] transition-colors duration-300 sm:block ${
                        isOpen ? "text-[#FF2323]" : "text-gray-300"
                    }`}
                >
                    {number}
                </span>

                {/* Question */}
                <span
                    className={`flex-1 text-sm leading-6 transition-colors duration-300 sm:text-[15px] ${
                        isOpen
                            ? "font-semibold text-black"
                            : "font-medium text-gray-700 group-hover:text-black"
                    }`}
                >
                    {question}
                </span>

                {/* Icon */}
                <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                            ? "border-[#FF2323] bg-[#FF2323] text-white"
                            : "border-black/10 text-gray-500 group-hover:border-black/30"
                    }`}
                >
                    {isOpen ? (
                        <Minus size={15} strokeWidth={1.8} />
                    ) : (
                        <Plus size={15} strokeWidth={1.8} />
                    )}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-7 pl-5 pr-16 sm:pl-[68px] sm:pr-20">
                        <div className="h-px w-8 bg-[#FF2323]" />

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FAQs() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const handleToggle = (category, index) => {
        const id = `${category}-${index}`;

        setOpenFAQ((current) => (current === id ? null : id));
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#080808] text-white">
                {/* Decorative glows */}
                <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-red-600/[0.07] blur-[140px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-red-600/[0.05] blur-[140px]" />

                {/* Background typography */}
                <div className="pointer-events-none absolute bottom-[-45px] right-[-25px] hidden select-none text-[16vw] font-black uppercase tracking-[-12px] text-white/[0.025] lg:block">
                    FAQ
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
                            Frequently
                            <br />
                            <span className="font-serif italic text-white/90">
                                Asked Questions.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                            Find quick answers to common questions about orders,
                            shipping, returns, payments, and our products.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[3px] text-gray-600">
                        <MessageCircle
                            size={14}
                            className="text-[#FF2323]"
                        />
                        We're here to help
                    </div>
                </div>
            </section>

            {/* =====================================================
                FAQ CONTENT
            ===================================================== */}
            <section className="bg-white py-20 md:py-24">
                <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
                    {/* Intro */}
                    <div className="mb-16 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                        <div>
                            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                                Help Center
                            </p>

                            <h2 className="text-3xl font-light tracking-[-1.5px] sm:text-4xl">
                                How can
                                <br />
                                <span className="font-serif italic">
                                    we help?
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-xl text-sm leading-7 text-gray-500 md:justify-self-end">
                            Browse the questions below to find the information
                            you need. Select a question to reveal its answer.
                        </p>
                    </div>

                    {/* FAQ Categories */}
                    <div className="space-y-16">
                        {faqData.map((section, sectionIndex) => (
                            <div key={section.category}>
                                {/* Category heading */}
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="text-[9px] font-semibold tracking-[3px] text-gray-400">
                                        0{sectionIndex + 1}
                                    </span>

                                    <span className="h-px w-8 bg-[#FF2323]" />

                                    <h3 className="text-[10px] font-semibold uppercase tracking-[3px] text-black">
                                        {section.category}
                                    </h3>
                                </div>

                                {/* Questions */}
                                <div className="overflow-hidden border-t border-black/[0.08]">
                                    {section.questions.map((faq, index) => {
                                        const id = `${section.category}-${index}`;

                                        return (
                                            <FAQItem
                                                key={id}
                                                question={faq.question}
                                                answer={faq.answer}
                                                number={`0${index + 1}`}
                                                isOpen={openFAQ === id}
                                                onClick={() =>
                                                    handleToggle(
                                                        section.category,
                                                        index
                                                    )
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                QUICK LINKS
            ===================================================== */}
            <section className="border-y border-black/[0.06] bg-[#fafafa]">
                <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8">
                    <div className="grid gap-px bg-black/[0.08] sm:grid-cols-2">
                        <Link
                            to="/shipping"
                            className="group bg-white p-8 transition-all duration-500 hover:bg-[#080808] hover:text-white"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                                    Information
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2323]"
                                />
                            </div>

                            <h3 className="mt-8 text-xl font-medium">
                                Shipping & Delivery
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Learn more about delivery times, order
                                processing and tracking.
                            </p>
                        </Link>

                        <Link
                            to="/returns"
                            className="group bg-white p-8 transition-all duration-500 hover:bg-[#080808] hover:text-white"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                                    Customer Care
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2323]"
                                />
                            </div>

                            <h3 className="mt-8 text-xl font-medium">
                                Returns & Exchange
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Review our return eligibility and exchange
                                process.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT CTA
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
                        Still have
                        <br />
                        <span className="font-serif italic">
                            questions?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
                        Our customer care team is happy to help you with
                        anything you need.
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

