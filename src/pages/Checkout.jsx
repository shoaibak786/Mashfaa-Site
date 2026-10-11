import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    ChevronDown,
    Lock,
    MapPin,
    Package,
    ShieldCheck,
    ShoppingBag,
    Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useCart();

    const freeShippingThreshold = 15000;
    const isFreeShipping = cartTotal >= freeShippingThreshold;

    const shipping = isFreeShipping ? 0 : 250;
    const grandTotal = cartTotal + shipping;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        notes: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Delivery address is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.province) {
            newErrors.province = "Please select your province";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Online payment will be integrated later.
        const orderNumber = `MSF-${Date.now().toString().slice(-6)}`;

        navigate("/order-success", {
            state: {
                orderNumber,
                total: grandTotal,
            },
        });
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-white text-black flex flex-col">
                <Navbar solid={true} />

                <main className="flex-1 flex items-center justify-center px-5 py-24">
                    <div className="w-full max-w-xl text-center">

                        <div className="text-[8px] tracking-[0.5em] text-gray-300 mb-6">
                            02 / CHECKOUT
                        </div>

                        <div className="relative mx-auto w-24 h-24 mb-7">
                            <div className="absolute inset-0 rounded-full border border-black/10" />
                            <div className="absolute inset-3 rounded-full border border-black/5" />

                            <div className="absolute inset-7 rounded-full bg-[#f7f7f7] flex items-center justify-center">
                                <ShoppingBag size={26} strokeWidth={1} />
                            </div>
                        </div>

                        <p className="text-[8px] uppercase tracking-[0.45em] text-[#FF2323] font-semibold mb-3">
                            MASHFAA COLLECTION
                        </p>

                        <h1
                            className="text-3xl sm:text-5xl font-light tracking-tight mb-4"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            Your Bag Is{" "}
                            <span className="italic font-normal">Empty</span>
                        </h1>

                        <p className="max-w-md mx-auto text-xs sm:text-sm text-gray-500 leading-6 mb-7">
                            Add some beautiful pieces to your bag before
                            continuing to checkout.
                        </p>

                        <Link
                            to="/shop"
                            className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 text-[9px] uppercase tracking-[0.3em] font-semibold hover:bg-[#FF2323] transition-all duration-500"
                        >
                            Explore Collection

                            <ArrowRight
                                size={14}
                                className="transition-transform duration-500 group-hover:translate-x-2"
                            />
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">

            <Navbar solid={true} />

            <main className="flex-1 pt-24 sm:pt-28 pb-14">

                {/* ================= HEADER ================= */}
                <section className="px-5 sm:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-7 sm:w-10 h-px bg-[#FF2323]" />

                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#FF2323] font-semibold">
                                Secure Checkout
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

                            <div>
                                <h1
                                    className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.04em] leading-[0.9]"
                                    style={{ fontFamily: "'Nunito', sans-serif" }}
                                >
                                    Checkout
                                    <br />
                                    <span className="italic font-normal">
                                        Details.
                                    </span>
                                </h1>
                            </div>

                            {/* Progress */}
                            <div className="flex items-center gap-2 sm:gap-3">

                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                                        <Check size={11} />
                                    </div>

                                    <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.18em] font-semibold">
                                        Cart
                                    </span>
                                </div>

                                <span className="w-7 sm:w-12 h-px bg-black/15" />

                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#FF2323] text-white flex items-center justify-center text-[8px] font-semibold">
                                        02
                                    </div>

                                    <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.18em] font-semibold">
                                        Checkout
                                    </span>
                                </div>

                                <span className="w-7 sm:w-12 h-px bg-black/15" />

                                <div className="flex items-center gap-2 opacity-40">
                                    <div className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center text-[8px]">
                                        03
                                    </div>

                                    <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.18em]">
                                        Complete
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CHECKOUT CONTENT ================= */}
                <section className="px-5 sm:px-8 lg:px-12 mt-9 sm:mt-11">

                    <div className="max-w-7xl mx-auto">

                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">

                                {/* ================= LEFT ================= */}
                                <div className="xl:col-span-7">

                                    {/* Customer Information */}
                                    <div className="border-b border-black pb-4 mb-7">

                                        <div className="flex items-start gap-3">

                                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0">
                                                <span className="text-[9px] font-semibold">
                                                    01
                                                </span>
                                            </div>

                                            <div>
                                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-1">
                                                    Your Information
                                                </p>

                                                <h2
                                                    className="text-xl sm:text-2xl font-light"
                                                    style={{
                                                        fontFamily: "'Nunito', sans-serif",
                                                    }}
                                                >
                                                    Customer Details
                                                </h2>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <InputField
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            error={errors.firstName}
                                            required
                                        />

                                        <InputField
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            error={errors.lastName}
                                            required
                                        />

                                        <InputField
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                        <InputField
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="03XX XXXXXXX"
                                            error={errors.phone}
                                            required
                                        />

                                    </div>

                                    {/* Delivery Address */}
                                    <div className="border-b border-black pb-4 mb-7 mt-10">

                                        <div className="flex items-start gap-3">

                                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0">
                                                <MapPin size={14} strokeWidth={1.4} />
                                            </div>

                                            <div>
                                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-1">
                                                    Where Should We Deliver?
                                                </p>

                                                <h2
                                                    className="text-xl sm:text-2xl font-light"
                                                    style={{
                                                        fontFamily: "'Nunito', sans-serif",
                                                    }}
                                                >
                                                    Delivery Address
                                                </h2>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="space-y-4">

                                        <InputField
                                            label="Complete Address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            placeholder="House / Flat / Street / Area"
                                            error={errors.address}
                                            required
                                        />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                            <InputField
                                                label="City"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                error={errors.city}
                                                required
                                            />

                                            <SelectField
                                                label="Province"
                                                name="province"
                                                value={formData.province}
                                                onChange={handleChange}
                                                error={errors.province}
                                                required
                                            />

                                        </div>

                                        <InputField
                                            label="Postal Code"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            placeholder="Optional"
                                        />

                                        <div>
                                            <label className="block text-[8px] uppercase tracking-[0.2em] font-semibold mb-2">
                                                Delivery Notes
                                                <span className="text-gray-400 font-normal ml-1">
                                                    Optional
                                                </span>
                                            </label>

                                            <textarea
                                                name="notes"
                                                value={formData.notes}
                                                onChange={handleChange}
                                                rows="3"
                                                placeholder="Any special instructions for delivery..."
                                                className="w-full bg-[#f7f7f7] border border-transparent px-4 py-3 text-[11px] outline-none resize-none focus:bg-white focus:border-black/20 transition-all placeholder:text-gray-400"
                                            />
                                        </div>

                                    </div>

                                    {/* Payment */}
                                    <div className="border-b border-black pb-4 mb-7 mt-10">

                                        <div className="flex items-start gap-3">

                                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0">
                                                <span className="text-[9px] font-semibold">
                                                    02
                                                </span>
                                            </div>

                                            <div>
                                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-1">
                                                    Payment Method
                                                </p>

                                                <h2
                                                    className="text-xl sm:text-2xl font-light"
                                                    style={{
                                                        fontFamily: "'Nunito', sans-serif",
                                                    }}
                                                >
                                                    Choose Payment
                                                </h2>
                                            </div>

                                        </div>
                                    </div>

                                    {/* COD */}
                                    <div className="border border-black p-4 sm:p-5 bg-[#fafafa]">

                                        <div className="flex items-center gap-4">

                                            <div className="w-5 h-5 rounded-full border-[5px] border-[#FF2323] bg-white flex-shrink-0" />

                                            <div className="flex-1">

                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">

                                                    <p className="text-[10px] uppercase tracking-[0.16em] font-semibold">
                                                        Cash on Delivery
                                                    </p>

                                                    <span className="text-[7px] uppercase tracking-[0.15em] text-[#FF2323] font-semibold">
                                                        Available
                                                    </span>

                                                </div>

                                                <p className="text-[9px] text-gray-400 leading-5 mt-1">
                                                    Pay in cash when your order is delivered to your doorstep.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Security */}
                                    <div className="grid grid-cols-3 mt-5 border-t border-black/10">

                                        <div className="py-4 text-center border-r border-black/10">
                                            <Lock
                                                size={15}
                                                strokeWidth={1.3}
                                                className="mx-auto mb-2"
                                            />

                                            <p className="text-[7px] uppercase tracking-[0.1em] font-semibold">
                                                Secure
                                            </p>

                                            <p className="text-[7px] text-gray-400 mt-1">
                                                Protected checkout
                                            </p>
                                        </div>

                                        <div className="py-4 text-center border-r border-black/10">
                                            <Truck
                                                size={15}
                                                strokeWidth={1.3}
                                                className="mx-auto mb-2"
                                            />

                                            <p className="text-[7px] uppercase tracking-[0.1em] font-semibold">
                                                Delivery
                                            </p>

                                            <p className="text-[7px] text-gray-400 mt-1">
                                                Fast dispatch
                                            </p>
                                        </div>

                                        <div className="py-4 text-center">
                                            <ShieldCheck
                                                size={15}
                                                strokeWidth={1.3}
                                                className="mx-auto mb-2"
                                            />

                                            <p className="text-[7px] uppercase tracking-[0.1em] font-semibold">
                                                Quality
                                            </p>

                                            <p className="text-[7px] text-gray-400 mt-1">
                                                Assured products
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                {/* ================= RIGHT ================= */}
                                <aside className="xl:col-span-5">

                                    <div className="xl:sticky xl:top-24">

                                        <div className="relative bg-[#f7f7f7] p-5 sm:p-7">

                                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/20" />
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-black/20" />

                                            <div className="flex items-start justify-between mb-6">

                                                <div>

                                                    <p className="text-[7px] uppercase tracking-[0.3em] text-[#FF2323] font-semibold mb-1.5">
                                                        MASHFAA
                                                    </p>

                                                    <h2
                                                        className="text-xl sm:text-2xl font-light"
                                                        style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}
                                                    >
                                                        Your Order
                                                    </h2>

                                                </div>

                                                <Package
                                                    size={17}
                                                    strokeWidth={1.2}
                                                />

                                            </div>

                                            {/* Products */}
                                            <div className="space-y-4 pb-5 border-b border-black/10">

                                                {cartItems.map((item) => {

                                                    const itemId = item.id ?? item._id;

                                                    const bundleImages =
                                                        item.bundleImages ||
                                                        item.bundleProducts?.map(
                                                            (product) => product.image
                                                        ) ||
                                                        [item.image];

                                                    return (
                                                        <div
                                                            key={itemId}
                                                            className="flex gap-3"
                                                        >

                                                            {/* =========================================
                                                                PRODUCT / BUNDLE IMAGE
                                                            ========================================= */}

                                                            <div className="relative w-16 h-20 bg-white flex-shrink-0 overflow-hidden">

                                                                {item.isBundle ? (

                                                                    <div
                                                                        className={
                                                                            "grid h-full w-full gap-[1px] bg-white " +
                                                                            (
                                                                                bundleImages.length === 3
                                                                                    ? "grid-cols-2 grid-rows-2"
                                                                                    : "grid-cols-2"
                                                                            )
                                                                        }
                                                                    >

                                                                        {bundleImages.map(
                                                                            (image, imageIndex) => {

                                                                                /* 3 PRODUCTS:
                                                                                   First image left full height
                                                                                   Other two stacked right
                                                                                */

                                                                                if (
                                                                                    bundleImages.length === 3 &&
                                                                                    imageIndex === 0
                                                                                ) {
                                                                                    return (
                                                                                        <div
                                                                                            key={imageIndex}
                                                                                            className="row-span-2 h-full overflow-hidden bg-[#f5f5f5]"
                                                                                        >
                                                                                            <img
                                                                                                src={image}
                                                                                                alt={`${item.name} product 1`}
                                                                                                className="h-full w-full object-cover"
                                                                                            />
                                                                                        </div>
                                                                                    );
                                                                                }

                                                                                /* 2 PRODUCTS:
                                                                                   Both images 50/50
                                                                                */

                                                                                return (
                                                                                    <div
                                                                                        key={imageIndex}
                                                                                        className="h-full overflow-hidden bg-[#f5f5f5]"
                                                                                    >
                                                                                        <img
                                                                                            src={image}
                                                                                            alt={`${item.name} product ${imageIndex + 1}`}
                                                                                            className="h-full w-full object-cover"
                                                                                        />
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )}

                                                                    </div>

                                                                ) : (

                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover"
                                                                    />

                                                                )}

                                                                {/* Quantity */}

                                                                <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 bg-black text-white rounded-full flex items-center justify-center text-[7px]">
                                                                    {item.quantity}
                                                                </span>

                                                            </div>


                                                            {/* PRODUCT INFO */}

                                                            <div className="flex-1 min-w-0">

                                                                <p className="text-[7px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                                                                    {item.category}
                                                                </p>

                                                                <p
                                                                    className="text-[10px] sm:text-[11px] font-medium line-clamp-2"
                                                                    style={{
                                                                        fontFamily: "'Nunito', sans-serif",
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </p>

                                                                <p className="text-[9px] text-gray-500 mt-2">
                                                                    Rs.{" "}
                                                                    {Number(
                                                                        item.price
                                                                    ).toLocaleString()}
                                                                    {" "}× {item.quantity}
                                                                </p>

                                                            </div>

                                                            <p className="text-[10px] font-semibold whitespace-nowrap">
                                                                Rs.{" "}
                                                                {(
                                                                    Number(item.price) *
                                                                    item.quantity
                                                                ).toLocaleString()}
                                                            </p>

                                                        </div>
                                                    );
                                                })}

                                            </div>

                                            {/* Totals */}
                                            <div className="space-y-3 py-5 border-b border-black/10">

                                                <div className="flex justify-between">
                                                    <span className="text-[9px] text-gray-500">
                                                        Subtotal
                                                    </span>

                                                    <span className="text-[10px] font-medium">
                                                        Rs.{" "}
                                                        {cartTotal.toLocaleString()}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between">

                                                    <span className="text-[9px] text-gray-500">
                                                        Shipping
                                                    </span>

                                                    <span className="text-[9px] font-medium">

                                                        {isFreeShipping ? (
                                                            <span className="text-emerald-700">
                                                                FREE
                                                            </span>
                                                        ) : (
                                                            `Rs. ${shipping.toLocaleString()}`
                                                        )}

                                                    </span>

                                                </div>

                                            </div>

                                            {/* Total */}
                                            <div className="py-5 flex items-end justify-between">

                                                <div>

                                                    <p className="text-[7px] uppercase tracking-[0.25em] text-gray-400 mb-1">
                                                        Total Amount
                                                    </p>

                                                    <p className="text-[8px] text-gray-400">
                                                        Cash on delivery
                                                    </p>

                                                </div>

                                                <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                                                    Rs.{" "}
                                                    {grandTotal.toLocaleString()}
                                                </span>

                                            </div>

                                            <button
                                                type="submit"
                                                className="group relative overflow-hidden w-full h-12 sm:h-14 bg-black text-white flex items-center justify-center gap-3 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-semibold"
                                            >

                                                <span className="relative z-10">
                                                    Place Order
                                                </span>

                                                <ArrowRight
                                                    size={14}
                                                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-2"
                                                />

                                                <div className="absolute inset-0 bg-[#FF2323] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                                            </button>

                                            <div className="flex items-center justify-center gap-2 mt-3">

                                                <Lock
                                                    size={10}
                                                    strokeWidth={1.5}
                                                />

                                                <span className="text-[7px] uppercase tracking-[0.18em] text-gray-400">
                                                    Your information is secure
                                                </span>

                                            </div>

                                        </div>

                                        {/* Free Shipping */}
                                        <div className="mt-3 border border-black/10 p-4">

                                            <div className="flex gap-3">

                                                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0">
                                                    <Truck
                                                        size={14}
                                                        strokeWidth={1.3}
                                                    />
                                                </div>

                                                <div>

                                                    <p className="text-[8px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                                                        Shipping Information
                                                    </p>

                                                    <p className="text-[8px] text-gray-400 leading-5">

                                                        {isFreeShipping
                                                            ? "Your order qualifies for complimentary express shipping."
                                                            : `Add Rs. ${(freeShippingThreshold - cartTotal).toLocaleString()} more to unlock free shipping.`}

                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </aside>

                            </div>

                        </form>

                    </div>

                </section>

                {/* Back to Cart */}
                <section className="px-5 sm:px-8 lg:px-12 mt-10">

                    <div className="max-w-7xl mx-auto border-t border-black/10 pt-5">

                        <Link
                            to="/cart"
                            className="group inline-flex items-center gap-2.5 text-[8px] sm:text-[9px] uppercase tracking-[0.22em] font-semibold hover:text-[#FF2323] transition-colors"
                        >
                            <ArrowLeft
                                size={13}
                                className="transition-transform group-hover:-translate-x-1"
                            />

                            Back To Shopping Bag
                        </Link>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

/* ================= INPUT COMPONENT ================= */

function InputField({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    error,
    required = false,
}) {
    return (
        <div>
            <label className="block text-[8px] uppercase tracking-[0.2em] font-semibold mb-2">
                {label}

                {required && (
                    <span className="text-[#FF2323] ml-1">
                        *
                    </span>
                )}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full h-11 bg-[#f7f7f7] border px-4 text-[11px] outline-none transition-all placeholder:text-gray-400 ${
                    error
                        ? "border-[#FF2323] bg-red-50/30"
                        : "border-transparent focus:bg-white focus:border-black/20"
                }`}
            />

            {error && (
                <p className="text-[7px] text-[#FF2323] mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

/* ================= SELECT COMPONENT ================= */

function SelectField({
    label,
    name,
    value,
    onChange,
    error,
    required = false,
}) {
    return (
        <div>
            <label className="block text-[8px] uppercase tracking-[0.2em] font-semibold mb-2">
                {label}

                {required && (
                    <span className="text-[#FF2323] ml-1">
                        *
                    </span>
                )}
            </label>

            <div className="relative">

                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`appearance-none w-full h-11 bg-[#f7f7f7] border px-4 pr-10 text-[11px] outline-none transition-all ${
                        error
                            ? "border-[#FF2323]"
                            : "border-transparent focus:bg-white focus:border-black/20"
                    }`}
                >
                    <option value="">
                        Select Province
                    </option>

                    <option value="Punjab">
                        Punjab
                    </option>

                    <option value="Sindh">
                        Sindh
                    </option>

                    <option value="Khyber Pakhtunkhwa">
                        Khyber Pakhtunkhwa
                    </option>

                    <option value="Balochistan">
                        Balochistan
                    </option>

                    <option value="Islamabad Capital Territory">
                        Islamabad Capital Territory
                    </option>

                    <option value="Gilgit-Baltistan">
                        Gilgit-Baltistan
                    </option>

                    <option value="Azad Jammu & Kashmir">
                        Azad Jammu & Kashmir
                    </option>
                </select>

                <ChevronDown
                    size={13}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                />

            </div>

            {error && (
                <p className="text-[7px] text-[#FF2323] mt-1">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Checkout;