import {
    Truck,
    ShieldCheck,
    BadgeCheck,
    Headphones,
} from "lucide-react";

const features = [
    {
        number: "01",
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Reliable delivery across Pakistan, right to your doorstep.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Secure Payment",
        description:
            "A safe and secure checkout experience for every order.",
    },
    {
        number: "03",
        icon: BadgeCheck,
        title: "Quality Assured",
        description:
            "Thoughtfully selected products with quality in mind.",
    },
    {
        number: "04",
        icon: Headphones,
        title: "Easy Support",
        description:
            "Our support team is here whenever you need assistance.",
    },
];

function WhyShopWithUs() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">

            {/* ================= SUBTLE BACKGROUND ================= */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#FF2323]/[0.018] blur-3xl" />


            <div className="relative mx-auto max-w-7xl">

                {/* ================= HEADER ================= */}
                <div className="mb-10 text-center md:mb-14">

                    {/* Label */}
                    <div className="mb-5 flex items-center justify-center gap-4">

                        <span className="h-px w-8 bg-[#FF2323]" />

                        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#FF2323] sm:text-[11px]">
                            The MASHFAA Promise
                        </p>

                        <span className="h-px w-8 bg-[#FF2323]" />

                    </div>


                    {/* Heading */}
                    <h2
                        className="text-3xl font-medium uppercase leading-[1] tracking-[0.04em] text-black md:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                        Why Shop <span className="font-light italic">With Us</span>
                    </h2>


                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-[480px] text-sm leading-6 text-[#777777] md:text-[15px]">
                        Thoughtful fashion, reliable service, and an experience
                        designed around you.
                    </p>

                </div>


                {/* ================= FEATURES ================= */}
                <div className="grid grid-cols-2 border-t border-[#E5E5E5] md:grid-cols-4">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.number}
                                className={`
                                    group relative
                                    min-h-[230px]
                                    border-b border-[#E5E5E5]
                                    px-4 py-7
                                    transition-colors duration-500
                                    hover:bg-[#FAFAFA]
                                    sm:px-6 sm:py-8
                                    md:min-h-[250px]
                                    md:border-b-0
                                    md:px-7 md:py-9
                                    lg:px-9
                                    ${
                                        index !== features.length - 1
                                            ? "md:border-r"
                                            : ""
                                    }
                                    ${
                                        index % 2 === 0
                                            ? "border-r"
                                            : "border-r-0"
                                    }
                                    md:border-r-[#E5E5E5]
                                `}
                            >

                                {/* ================= TOP ROW ================= */}
                                <div className="mb-8 flex items-center justify-between">

                                    {/* Number */}
                                    <span className="text-[8px] font-medium tracking-[0.22em] text-[#999999] sm:text-[9px]">
                                        {feature.number}
                                    </span>


                                    {/* Icon */}
                                    <div className="flex h-9 w-9 items-center justify-center border border-[#E5E5E5] text-black transition-all duration-500 group-hover:border-[#FF2323] group-hover:bg-[#FF2323] group-hover:text-white">
                                        <Icon
                                            size={16}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                </div>


                                {/* ================= CONTENT ================= */}
                                <h3 className="text-[12px] font-semibold uppercase tracking-[0.04em] text-black sm:text-sm md:text-base">
                                    {feature.title}
                                </h3>


                                <p className="mt-3 max-w-[220px] text-[10px] leading-5 text-[#777777] sm:text-[11px] md:text-xs md:leading-6">
                                    {feature.description}
                                </p>


                                {/* ================= ACCENT LINE ================= */}
                                <span className="mt-6 block h-px w-6 bg-[#FF2323] transition-all duration-500 group-hover:w-12" />

                            </div>
                        );
                    })}

                </div>


                {/* ================= BOTTOM STATEMENT ================= */}
                <div className="mt-8 flex items-center justify-center gap-3">

                    <span className="h-px w-5 bg-[#D8D8D8]" />

                    <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#999999] sm:text-[9px]">
                        Designed With You In Mind
                    </p>

                    <span className="h-px w-5 bg-[#D8D8D8]" />

                </div>

            </div>

        </section>
    );
}

export default WhyShopWithUs;