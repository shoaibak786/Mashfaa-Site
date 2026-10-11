import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Eye,
    EyeOff,
    ArrowRight,
    UserRound,
    Mail,
    LockKeyhole,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword =
                "Please confirm your password";
        } else if (
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Temporary frontend signup state
        localStorage.setItem("mashfaa-user", "logged-in");

        localStorage.setItem(
            "mashfaa-user-data",
            JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
            })
        );

        // After signup, open Account
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Navbar solid={true} />

            <main className="flex-1 pt-28 pb-16 sm:pt-32">
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

                    {/* Header */}
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF2323]">
                            Join Mashfaa
                        </p>

                        <h1 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                            Create Account
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
                            Create your Mashfaa account and enjoy a
                            smoother shopping experience.
                        </p>
                    </div>

                    {/* Signup Card */}
                    <div className="mx-auto mt-10 w-full max-w-md">
                        <div className="border border-black/[0.08] bg-white p-6 sm:p-8">

                            {/* Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                                    <UserRound
                                        size={18}
                                        strokeWidth={1.5}
                                    />
                                </div>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >

                                {/* Name */}
                                <div className="grid gap-4 sm:grid-cols-2">

                                    {/* First Name */}
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                        >
                                            First Name
                                        </label>

                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                            className={`w-full border bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                                errors.firstName
                                                    ? "border-red-500"
                                                    : "border-black/10"
                                            }`}
                                        />

                                        {errors.firstName && (
                                            <p className="mt-1.5 text-[10px] text-red-500">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last name"
                                            className={`w-full border bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                                errors.lastName
                                                    ? "border-red-500"
                                                    : "border-black/10"
                                            }`}
                                        />

                                        {errors.lastName && (
                                            <p className="mt-1.5 text-[10px] text-red-500">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                    >
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <Mail
                                            size={15}
                                            strokeWidth={1.5}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                        />

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className={`w-full border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-black/10"
                                            }`}
                                        />
                                    </div>

                                    {errors.email && (
                                        <p className="mt-1.5 text-[10px] text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                    >
                                        Password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={15}
                                            strokeWidth={1.5}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                        />

                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Create a password"
                                            className={`w-full border bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                                errors.password
                                                    ? "border-red-500"
                                                    : "border-black/10"
                                            }`}
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (prev) => !prev
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 transition-colors hover:text-black"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={17} />
                                            ) : (
                                                <Eye size={17} />
                                            )}
                                        </button>
                                    </div>

                                    {errors.password && (
                                        <p className="mt-1.5 text-[10px] text-red-500">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                    >
                                        Confirm Password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={15}
                                            strokeWidth={1.5}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                                        />

                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={
                                                formData.confirmPassword
                                            }
                                            onChange={handleChange}
                                            placeholder="Confirm your password"
                                            className={`w-full border bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                                errors.confirmPassword
                                                    ? "border-red-500"
                                                    : "border-black/10"
                                            }`}
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (prev) => !prev
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 transition-colors hover:text-black"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff size={17} />
                                            ) : (
                                                <Eye size={17} />
                                            )}
                                        </button>
                                    </div>

                                    {errors.confirmPassword && (
                                        <p className="mt-1.5 text-[10px] text-red-500">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                </div>

                                {/* Terms */}
                                <label className="flex cursor-pointer items-start gap-2 pt-1">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-0.5 h-3.5 w-3.5 accent-[#FF2323]"
                                    />

                                    <span className="text-[10px] leading-4 text-black/50">
                                        I agree to Mashfaa's terms and
                                        conditions.
                                    </span>
                                </label>

                                {/* Signup Button */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-3 bg-black py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF2323]"
                                >
                                    Create Account

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="my-7 flex items-center gap-4">
                                <div className="h-px flex-1 bg-black/10" />

                                <span className="text-[8px] uppercase tracking-[0.2em] text-black/30">
                                    Already a member?
                                </span>

                                <div className="h-px flex-1 bg-black/10" />
                            </div>

                            {/* Login */}
                            <div className="text-center">
                                <Link
                                    to="/login"
                                    className="inline-block border-b border-black pb-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[#FF2323] hover:text-[#FF2323]"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Note */}
                    <p className="mx-auto mt-7 max-w-md text-center text-[9px] leading-5 text-black/35">
                        Your account information will be securely connected
                        to Mashfaa when backend authentication is integrated.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Signup;