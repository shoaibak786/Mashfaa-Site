import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    ShieldCheck,
    UserRound,
    LockKeyhole,
    Database,
} from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            {/* Hero */}
            <section className="bg-black text-white">
                <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 lg:px-12">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF2323]">
                        Legal
                    </p>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                        Your privacy matters to us. This policy explains how
                        Mashfaa collects, uses, and protects information when
                        you use our website.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-20">
                <div className="border-b border-black/10 pb-10">
                    <p className="text-sm text-black/50">
                        Last updated: October 2026
                    </p>

                    <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base">
                        At Mashfaa, we respect your privacy and are committed
                        to protecting the personal information you provide when
                        browsing our website, creating an account, placing an
                        order, or contacting our customer care team.
                    </p>
                </div>

                {/* Privacy Features */}
                <div className="grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border border-black/10 p-6">
                        <ShieldCheck
                            size={24}
                            strokeWidth={1.6}
                            className="mb-5"
                        />

                        <h3 className="font-semibold">
                            Privacy First
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                            We aim to handle customer information responsibly
                            and transparently.
                        </p>
                    </div>

                    <div className="border border-black/10 p-6">
                        <UserRound
                            size={24}
                            strokeWidth={1.6}
                            className="mb-5"
                        />

                        <h3 className="font-semibold">
                            Your Information
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                            We collect information that is needed to provide
                            our services and process your orders.
                        </p>
                    </div>

                    <div className="border border-black/10 p-6">
                        <LockKeyhole
                            size={24}
                            strokeWidth={1.6}
                            className="mb-5"
                        />

                        <h3 className="font-semibold">
                            Data Protection
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                            We take reasonable steps to protect information
                            against unauthorized access or misuse.
                        </p>
                    </div>

                    <div className="border border-black/10 p-6">
                        <Database
                            size={24}
                            strokeWidth={1.6}
                            className="mb-5"
                        />

                        <h3 className="font-semibold">
                            Limited Use
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-black/60">
                            Information is used for legitimate business and
                            customer service purposes.
                        </p>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold">
                            1. Information We Collect
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            Depending on how you use our website, we may
                            collect information such as your name, email
                            address, phone number, shipping address, billing
                            details, order information, account information,
                            and messages you send to our customer care team.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            2. How We Use Your Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            Your information may be used to process and deliver
                            orders, communicate with you about purchases,
                            provide customer support, improve our website and
                            services, prevent fraudulent activity, and comply
                            with applicable legal requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            3. Account Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            If you create an account, information associated
                            with your account may be stored so that you can
                            access features such as order history, saved
                            details, and other account-related functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            4. Payment Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            Payment information is handled through the payment
                            methods and services available at checkout. We do
                            not ask customers to send sensitive payment
                            information through email, social media, or
                            unofficial communication channels.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            5. Cookies & Website Data
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            Our website may use cookies or similar technologies
                            to remember preferences, maintain website
                            functionality, understand website usage, and
                            improve the overall shopping experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            6. Sharing of Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            We may share necessary information with trusted
                            service providers involved in delivering our
                            services, such as delivery and payment partners.
                            We do not intend to sell your personal information
                            to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            7. Data Security
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            We use reasonable administrative and technical
                            measures to help protect your information.
                            However, no online service can guarantee absolute
                            security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            8. Your Choices
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            Depending on the information and applicable
                            requirements, you may contact us regarding your
                            personal information, account details, or
                            communication preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            9. Changes to This Policy
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            We may update this Privacy Policy from time to time
                            as our website, services, or legal requirements
                            change. Any updated version will be published on
                            this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            10. Contact Us
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-black/60 sm:text-base">
                            If you have questions about this Privacy Policy or
                            how your information is handled, please contact our
                            customer care team.
                        </p>
                    </section>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#F7F7F7]">
                <div className="mx-auto max-w-[1100px] px-5 py-16 text-center sm:px-8">
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                        Have a privacy question?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/60">
                        Contact us if you need clarification about how your
                        information is used or protected.
                    </p>

                    <a
                        href="/contact"
                        className="mt-7 inline-flex bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#FF2323]"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}