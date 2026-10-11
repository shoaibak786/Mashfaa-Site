
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    FileText,
    ShoppingBag,
    CreditCard,
    AlertCircle,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
    const terms = [
        {
            number: "01",
            title: "Acceptance of Terms",
            text: "By accessing or using the Mashfaa website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with these terms, please do not use our website.",
        },
        {
            number: "02",
            title: "Website Use",
            text: "You agree to use the website only for lawful purposes. You must not attempt to interfere with website functionality, gain unauthorized access, misuse website content, or engage in activities that could harm the website or other users.",
        },
        {
            number: "03",
            title: "Product Information",
            text: "We make reasonable efforts to display product descriptions, images, colors, sizes, and prices as accurately as possible. However, slight differences may occur due to screen settings, photography, lighting, or product variations.",
        },
        {
            number: "04",
            title: "Product Availability",
            text: "Products displayed on our website are subject to availability. We reserve the right to limit quantities or discontinue products without prior notice.",
        },
        {
            number: "05",
            title: "Orders",
            text: "Placing an order does not necessarily guarantee acceptance. We may contact you to verify order information or may cancel an order in situations such as product unavailability, pricing errors, suspected fraudulent activity, or other legitimate reasons.",
        },
        {
            number: "06",
            title: "Pricing & Payments",
            text: "Product prices are displayed on the website and may change from time to time. Applicable delivery fees or other charges may be shown during checkout. Orders must be paid using the payment methods available at the time of purchase.",
        },
        {
            number: "07",
            title: "Shipping & Delivery",
            text: "Delivery estimates are provided as general guidelines and may vary depending on location, courier availability, weather, public holidays, and other circumstances outside our control.",
        },
        {
            number: "08",
            title: "Returns & Exchanges",
            text: "Returns and exchanges are handled according to our Returns & Exchange Policy. Eligibility may depend on the product, its condition, and the applicable return requirements.",
        },
        {
            number: "09",
            title: "Intellectual Property",
            text: "Unless otherwise stated, content available on the Mashfaa website, including text, graphics, images, logos, designs, and other materials, is owned by or used by Mashfaa and may not be copied, reproduced, modified, or distributed without appropriate permission.",
        },
        {
            number: "10",
            title: "User Accounts",
            text: "If you create an account, you are responsible for keeping your account information accurate and maintaining the confidentiality of your login credentials. Please notify us if you believe your account has been accessed without authorization.",
        },
        {
            number: "11",
            title: "Limitation of Liability",
            text: "We take reasonable steps to maintain the website and provide our services, but we do not guarantee that the website will always be available, uninterrupted, or completely free of errors.",
        },
        {
            number: "12",
            title: "Changes to These Terms",
            text: "Mashfaa may update these Terms & Conditions from time to time. Updated terms will be published on this page, and continued use of the website after changes are published may constitute acceptance of the updated terms.",
        },
        {
            number: "13",
            title: "Contact Us",
            text: "If you have any questions regarding these Terms & Conditions, please contact our customer care team.",
        },
    ];

    const features = [
        {
            icon: FileText,
            title: "Website Use",
            text: "Please use our website responsibly and provide accurate information when required.",
        },
        {
            icon: ShoppingBag,
            title: "Orders",
            text: "Product availability, pricing, and order acceptance may be subject to change.",
        },
        {
            icon: CreditCard,
            title: "Payments",
            text: "Orders must be completed using the payment methods available during checkout.",
        },
        {
            icon: AlertCircle,
            title: "Important",
            text: "Policies may be updated when necessary to reflect changes to our services.",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#080808] text-white">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#FF2323]/[0.07] blur-[130px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[120px]" />

                <div className="relative mx-auto max-w-[1480px] px-5 pb-24 pt-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32 lg:pt-28">
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#FF2323]" />

                            <p className="text-[9px] font-semibold uppercase tracking-[5px] text-[#FF2323]">
                                Legal
                            </p>
                        </div>

                        <h1 className="max-w-4xl text-4xl font-light leading-[1] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-7xl">
                            Terms
                            <br />
                            <span className="font-serif italic text-white/75">
                                & Conditions.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                            Please read these terms carefully before using the
                            Mashfaa website or placing an order.
                        </p>

                        <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[2px] text-white/35">
                            <span>Last updated</span>
                            <span className="h-px w-8 bg-white/20" />
                            <span>October 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="border-b border-black/[0.07]">
                <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
                    <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-12">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                                Overview
                            </p>
                        </div>

                        <p className="max-w-3xl text-base leading-8 text-black/65 sm:text-lg">
                            These Terms & Conditions govern your use of the
                            Mashfaa website and your purchase of products
                            through our online store. By using our website,
                            you agree to these terms.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURE CARDS */}
            <section className="bg-[#FAFAFA]">
                <div className="mx-auto max-w-[1250px] px-5 py-16 sm:px-8 lg:py-20">
                    <div className="mb-10">
                        <p className="text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                            Before You Shop
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Important information
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group bg-white p-7 transition duration-300 hover:bg-black hover:text-white sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.4}
                                            className="text-black transition group-hover:text-[#FF2323]"
                                        />

                                        <span className="text-[9px] tracking-[2px] text-black/25 transition group-hover:text-white/25">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-8 text-sm font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-black/55 transition group-hover:text-white/50">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TERMS */}
            <section>
                <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-24">
                    <div className="mb-16 max-w-2xl">
                        <p className="text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                            Our Terms
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Terms of service
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-black/50">
                            Please review the following terms before using
                            Mashfaa or completing a purchase.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {terms.map((term) => (
                            <article
                                key={term.number}
                                className="group grid gap-5 border-t border-black/[0.08] py-9 md:grid-cols-[90px_280px_1fr] md:gap-8"
                            >
                                <span className="text-xs font-medium tracking-[2px] text-[#FF2323]">
                                    {term.number}
                                </span>

                                <h3 className="text-lg font-semibold tracking-tight">
                                    {term.title}
                                </h3>

                                <p className="text-sm leading-7 text-black/55 sm:text-base">
                                    {term.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUICK REMINDER */}
            <section className="bg-[#080808] text-white">
                <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 lg:py-16">
                    <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-4">
                            <CheckCircle2
                                size={21}
                                strokeWidth={1.5}
                                className="mt-1 shrink-0 text-[#FF2323]"
                            />

                            <div>
                                <h3 className="text-sm font-semibold">
                                    Shop with confidence
                                </h3>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                                    We aim to keep our policies clear,
                                    transparent, and easy to understand.
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/shipping"
                            className="inline-flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[2px] text-white transition hover:text-[#FF2323]"
                        >
                            Shipping Information
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#F5F5F3]">
                <div className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-8 lg:py-24">
                    <p className="text-[9px] font-semibold uppercase tracking-[4px] text-[#FF2323]">
                        Need Assistance?
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Have questions about our terms?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/50">
                        If you have questions about our policies or your order,
                        our customer care team is ready to assist.
                    </p>

                    <Link
                        to="/contact"
                        className="group mt-8 inline-flex items-center gap-4 bg-black px-8 py-4 text-[10px] font-semibold uppercase tracking-[2px] text-white transition duration-300 hover:bg-[#FF2323]"
                    >
                        Contact Us

                        <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

