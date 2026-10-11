import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
return ( <div className="min-h-screen bg-white text-[#111]"> <Navbar />


        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FF2323]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#FF2323]/5 blur-[110px]" />

            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 select-none lg:block">
                <span className="text-[180px] font-black leading-none tracking-[-15px] text-white/[0.025]">
                    CONTACT
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-6 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#FF2323]" />
                    <p className="text-[9px] font-semibold tracking-[5px] text-[#FF2323]">
                        GET IN TOUCH
                    </p>
                </div>

                <h1 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
                    Contact
                    <br />
                    <span className="font-serif italic text-white/75">
                        us.
                    </span>
                </h1>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                    Have a question about your order, products, delivery,
                    or anything else? Our team is always here to help.
                </p>

                <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[3px] text-white/35">
                    <span className="h-px w-12 bg-white/20" />
                    Mashfaa Customer Care
                </div>
            </div>
        </section>

        {/* ================= CONTACT CONTENT ================= */}
        <section className="relative px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

                {/* ================= CONTACT INFO ================= */}
                <div>
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#FF2323]" />
                        <p className="text-[9px] font-bold tracking-[4px] text-[#FF2323]">
                            CONTACT INFORMATION
                        </p>
                    </div>

                    <h2 className="text-3xl font-light leading-tight tracking-[-1.5px] sm:text-4xl">
                        We're here
                        <br />
                        <span className="font-serif italic text-black/65">
                            to help.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
                        Whether you need help choosing a product or have
                        a question about your order, our team is ready to
                        assist you.
                    </p>

                    {/* Contact Cards */}
                    <div className="mt-12 space-y-0 border-t border-black/10">

                        {/* Location */}
                        <div className="group flex gap-5 border-b border-black/10 py-6 transition-all duration-300 hover:pl-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#FF2323] group-hover:text-[#FF2323]">
                                <MapPin size={17} strokeWidth={1.5} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold tracking-[3px] text-gray-400">
                                    VISIT US
                                </p>

                                <p className="mt-2 text-sm text-gray-700">
                                    Lahore, Pakistan
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group flex gap-5 border-b border-black/10 py-6 transition-all duration-300 hover:pl-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#FF2323] group-hover:text-[#FF2323]">
                                <Mail size={17} strokeWidth={1.5} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold tracking-[3px] text-gray-400">
                                    EMAIL
                                </p>

                                <a
                                    href="mailto:hello@yourbrand.com"
                                    className="mt-2 block text-sm text-gray-700 transition-colors duration-300 hover:text-[#FF2323]"
                                >
                                    hello@yourbrand.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group flex gap-5 border-b border-black/10 py-6 transition-all duration-300 hover:pl-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#FF2323] group-hover:text-[#FF2323]">
                                <Phone size={17} strokeWidth={1.5} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold tracking-[3px] text-gray-400">
                                    PHONE
                                </p>

                                <a
                                    href="tel:+923000000000"
                                    className="mt-2 block text-sm text-gray-700 transition-colors duration-300 hover:text-[#FF2323]"
                                >
                                    +92 300 0000000
                                </a>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="group flex gap-5 py-6 transition-all duration-300 hover:pl-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#FF2323] group-hover:text-[#FF2323]">
                                <Clock size={17} strokeWidth={1.5} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold tracking-[3px] text-gray-400">
                                    RESPONSE TIME
                                </p>

                                <p className="mt-2 text-sm text-gray-700">
                                    Monday – Saturday, 10:00 AM – 8:00 PM
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= CONTACT FORM ================= */}
                <div className="relative overflow-hidden border border-black/10 bg-[#FAFAFA] p-7 sm:p-10 lg:p-12">
                    {/* Form decoration */}
                    <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-black/5" />
                    <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-[#FF2323]" />

                    <div className="relative">
                        <p className="text-[9px] font-bold tracking-[4px] text-[#FF2323]">
                            SEND US A MESSAGE
                        </p>

                        <h2 className="mt-3 text-2xl font-light tracking-[-1px] sm:text-3xl">
                            How can we help?
                        </h2>

                        <p className="mt-3 max-w-md text-xs leading-6 text-gray-500">
                            Fill in the details below and our team will
                            get back to you as soon as possible.
                        </p>

                        <form className="mt-10 space-y-7">

                            {/* Name */}
                            <div className="group">
                                <label className="text-[9px] font-bold tracking-[2px] text-gray-500">
                                    NAME
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FF2323]"
                                />
                            </div>

                            {/* Email */}
                            <div className="group">
                                <label className="text-[9px] font-bold tracking-[2px] text-gray-500">
                                    EMAIL
                                </label>

                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FF2323]"
                                />
                            </div>

                            {/* Subject */}
                            <div className="group">
                                <label className="text-[9px] font-bold tracking-[2px] text-gray-500">
                                    SUBJECT
                                </label>

                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FF2323]"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <label className="text-[9px] font-bold tracking-[2px] text-gray-500">
                                    MESSAGE
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="mt-2 w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FF2323]"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group mt-2 inline-flex items-center justify-center gap-4 bg-[#080808] px-8 py-4 text-[10px] font-bold tracking-[3px] text-white transition-all duration-300 hover:bg-[#FF2323]"
                            >
                                SEND MESSAGE

                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="border-t border-black/10 bg-[#080808] px-6 py-14 text-white sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                    <p className="text-[9px] font-bold tracking-[4px] text-[#FF2323]">
                        NEED QUICK HELP?
                    </p>

                    <h3 className="mt-2 text-xl font-light tracking-tight sm:text-2xl">
                        Find answers in our FAQs.
                    </h3>
                </div>

                <a
                    href="/faqs"
                    className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[10px] font-bold tracking-[2px] transition-colors duration-300 hover:border-[#FF2323] hover:text-[#FF2323]"
                >
                    VIEW FAQs
                    <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>
            </div>
        </section>

        <Footer />
    </div>
);


};

export default Contact;
