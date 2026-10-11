import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shipping = () => {
    return (
        <div className="min-h-screen bg-white text-[#111]">
            <Navbar />

            {/* HERO */}
            <section className="border-b border-black/10 bg-[#080808] px-6 py-24 text-white sm:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-5 flex items-center gap-3 text-[9px] font-medium tracking-[5px] text-red-500">
                        <span className="h-px w-8 bg-red-600" />
                        DELIVERY INFORMATION
                    </p>

                    <h1 className="text-5xl font-light tracking-[-2px] sm:text-6xl lg:text-7xl">
                        Shipping
                        <br />
                        <span className="font-serif italic text-white/80">
                            & delivery.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                        Everything you need to know about how we process,
                        dispatch and deliver your Mashfaa order.
                    </p>
                </div>
            </section>

            {/* SHIPPING CONTENT */}
            <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
                <div className="mx-auto max-w-5xl">

                    {/* INTRO */}
                    <div className="max-w-3xl">
                        <p className="text-[9px] font-semibold tracking-[4px] text-red-600">
                            OUR DELIVERY PROMISE
                        </p>

                        <h2 className="mt-4 text-3xl font-light tracking-[-1px] sm:text-4xl">
                            Delivered with care.
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-gray-500">
                            At Mashfaa, we carefully prepare every order before
                            dispatch. Our goal is to make sure your products
                            reach you safely, securely and on time.
                        </p>
                    </div>

                    {/* SHIPPING CARDS */}
                    <div className="mt-16 grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">

                        <div className="bg-white p-8 sm:p-10">
                            <span className="text-[10px] font-semibold tracking-[3px] text-red-600">
                                01
                            </span>

                            <h3 className="mt-5 text-lg font-medium">
                                Order Processing
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Orders are carefully checked and prepared
                                before being handed over to our delivery
                                partner.
                            </p>

                            <p className="mt-5 text-xs font-medium text-gray-700">
                                Usually within 1–2 business days
                            </p>
                        </div>

                        <div className="bg-white p-8 sm:p-10">
                            <span className="text-[10px] font-semibold tracking-[3px] text-red-600">
                                02
                            </span>

                            <h3 className="mt-5 text-lg font-medium">
                                Standard Delivery
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Once dispatched, your order will be delivered
                                directly to the address provided during
                                checkout.
                            </p>

                            <p className="mt-5 text-xs font-medium text-gray-700">
                                Estimated delivery: 3–5 business days
                            </p>
                        </div>

                        <div className="bg-white p-8 sm:p-10">
                            <span className="text-[10px] font-semibold tracking-[3px] text-red-600">
                                03
                            </span>

                            <h3 className="mt-5 text-lg font-medium">
                                Order Tracking
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-gray-500">
                                Once your order has been dispatched, tracking
                                information can be provided so you can follow
                                your delivery.
                            </p>

                            <p className="mt-5 text-xs font-medium text-gray-700">
                                Tracking available after dispatch
                            </p>
                        </div>

                    </div>

                    {/* DETAILS */}
                    <div className="mt-20 grid gap-16 lg:grid-cols-2">

                        {/* DELIVERY AREAS */}
                        <div>
                            <p className="text-[9px] font-semibold tracking-[4px] text-red-600">
                                DELIVERY AREAS
                            </p>

                            <h2 className="mt-4 text-2xl font-light">
                                Where we deliver
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-gray-500">
                                We currently offer delivery across Pakistan.
                                Delivery availability may vary depending on
                                the location and courier service.
                            </p>

                            <ul className="mt-7 space-y-4 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-600" />
                                    Major cities and urban areas
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-600" />
                                    Nationwide delivery within Pakistan
                                </li>

                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-600" />
                                    Remote areas may require additional time
                                </li>
                            </ul>
                        </div>

                        {/* IMPORTANT INFO */}
                        <div>
                            <p className="text-[9px] font-semibold tracking-[4px] text-red-600">
                                IMPORTANT INFORMATION
                            </p>

                            <h2 className="mt-4 text-2xl font-light">
                                Before your order arrives
                            </h2>

                            <div className="mt-7 space-y-6">

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Delivery Address
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-500">
                                        Please make sure your delivery address
                                        and contact number are correct before
                                        placing your order.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Delivery Delays
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-500">
                                        Unexpected courier delays, weather
                                        conditions or public holidays may
                                        occasionally affect delivery times.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold">
                                        Need Help?
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-500">
                                        If you have any questions about your
                                        delivery, please contact our customer
                                        care team.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* NOTE */}
                    <div className="mt-20 border-l-2 border-red-600 bg-gray-50 px-6 py-6 sm:px-8">
                        <p className="text-[9px] font-semibold tracking-[3px] text-gray-500">
                            PLEASE NOTE
                        </p>

                        <p className="mt-3 text-sm leading-7 text-gray-600">
                            Delivery times are estimates and may vary depending
                            on your location, courier availability and other
                            unforeseen circumstances.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Shipping;