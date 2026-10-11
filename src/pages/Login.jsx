import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, LockKeyhole } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

    if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
        newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
        return;
    }

    // Temporary frontend login state
    localStorage.setItem("mashfaa-user", "logged-in");

    // Open account after login
    navigate("/account");
};
    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Navbar solid={true} />

            <main className="flex-1 pt-28 pb-16 sm:pt-32">
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

                    {/* Header */}
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF2323]">
                            Welcome Back
                        </p>

                        <h1 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                            Sign In
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
                            Sign in to your Mashfaa account to access your
                            orders, wishlist and account details.
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="mx-auto mt-10 w-full max-w-md">
                        <div className="border border-black/[0.08] bg-white p-6 sm:p-8">

                            {/* Security Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                                    <LockKeyhole size={18} strokeWidth={1.6} />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className={`w-full border bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
                                            errors.email
                                                ? "border-red-500"
                                                : "border-black/10"
                                        }`}
                                    />

                                    {errors.email && (
                                        <p className="mt-1.5 text-[10px] text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-[9px] font-semibold uppercase tracking-[0.18em]"
                                        >
                                            Password
                                        </label>

                                        <button
                                            type="button"
                                            className="text-[9px] font-medium uppercase tracking-[0.12em] text-black/50 transition-colors hover:text-[#FF2323]"
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>

                                    <div className="relative">
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
                                            placeholder="Enter your password"
                                            className={`w-full border bg-white px-4 py-3.5 pr-12 text-sm outline-none transition-colors placeholder:text-black/30 focus:border-black ${
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
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
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

                                {/* Remember */}
                                <label className="flex cursor-pointer items-center gap-2 pt-1">
                                    <input
                                        type="checkbox"
                                        className="h-3.5 w-3.5 accent-[#FF2323]"
                                    />

                                    <span className="text-[10px] text-black/50">
                                        Remember me
                                    </span>
                                </label>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-3 bg-black py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF2323]"
                                >
                                    Sign In

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
                                    Or
                                </span>

                                <div className="h-px flex-1 bg-black/10" />
                            </div>

                            {/* Signup */}
                            <div className="text-center">
                                <p className="text-xs text-black/50">
                                    Don't have an account?
                                </p>

                                <Link
                                    to="/signup"
                                    className="mt-2 inline-block border-b border-black pb-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-[#FF2323] hover:text-[#FF2323]"
                                >
                                    Create an Account
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

export default Login;