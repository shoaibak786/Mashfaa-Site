const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
    };

    return (
        <section
            data-gsap="section"
            className="relative overflow-hidden bg-black px-5 py-10 sm:py-24"
        >

            {/* Background Glow */}
            <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-red-600/[0.06] blur-[120px]" />

            {/* Main Card */}
            <div className="relative mx-auto max-w-6xl overflow-hidden border border-white/10 bg-white/[0.02]">

                {/* Top Accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                <div
                    data-gsap="stagger"
                    className="px-6 py-16 text-center sm:px-12 sm:py-20 md:px-20"
                >

                    {/* Label */}
                    <div className="mb-7 flex items-center justify-center gap-4">

                        <span className="h-px w-8 bg-red-600 sm:w-12" />

                        <span className="text-[10px] font-medium tracking-[5px] text-red-500 sm:text-xs">
                            STAY CONNECTED
                        </span>

                        <span className="h-px w-8 bg-red-600 sm:w-12" />

                    </div>

                    {/* Heading */}
                    <h2 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl">
                        Join Our Style List
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Be the first to discover our latest collections, exclusive
                        offers, and timeless modest fashion inspiration.
                    </p>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
                    >

                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="h-14 flex-1 border border-white/15 bg-black/50 px-5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-red-600"
                        />

                        <button
                            type="submit"
                            className="h-14 border border-red-600 bg-red-600 px-9 text-[11px] font-semibold tracking-[2px] text-white transition duration-300 hover:bg-transparent hover:text-red-500"
                        >
                            SUBSCRIBE
                        </button>

                    </form>

                    {/* Bottom Text */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[1.5px] text-gray-600">

                        <span className="h-1 w-1 rounded-full bg-red-600" />

                        No spam

                        <span className="text-gray-700">
                            •
                        </span>

                        Unsubscribe anytime

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;