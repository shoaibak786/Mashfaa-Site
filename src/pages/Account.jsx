import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    UserRound,
    Package,
    Heart,
    MapPin,
    Settings,
    LogOut,
    ChevronRight,
    ShoppingBag,
    Pencil,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Account() {
    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState("overview");

    const [user] = useState({
        firstName: "Shoaib",
        lastName: "Ajmal",
        email: "customer@example.com",
        phone: "+92 300 0000000",
    });

    const handleLogout = () => {
        navigate("/login");
    };

    const menuItems = [
        {
            id: "overview",
            label: "Overview",
            icon: UserRound,
        },
        {
            id: "orders",
            label: "My Orders",
            icon: Package,
        },
        {
            id: "wishlist",
            label: "Wishlist",
            icon: Heart,
        },
        {
            id: "addresses",
            label: "Addresses",
            icon: MapPin,
        },
        {
            id: "settings",
            label: "Account Settings",
            icon: Settings,
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black flex flex-col">
            <Navbar solid={true} />

            <main className="flex-1 pt-28 pb-16 sm:pt-32">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">

                    {/* Page Header */}
                    <div className="border-b border-black/10 pb-8">
                        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF2323]">
                            My Account
                        </p>

                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <h1 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                                    Welcome, {user.firstName}
                                </h1>

                                <p className="mt-3 text-sm text-black/45">
                                    Manage your account, orders and preferences.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="flex w-fit items-center gap-2 border-b border-black/20 pb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/60 transition-colors hover:border-[#FF2323] hover:text-[#FF2323]"
                            >
                                <LogOut size={14} strokeWidth={1.7} />
                                Logout
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[250px_1fr]">

                        {/* Sidebar */}
                        <aside>
                            <div className="border border-black/10 bg-[#F8F8F7] p-3">

                                {/* User Mini Profile */}
                                <div className="border-b border-black/10 px-4 pb-5 pt-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                                            <UserRound
                                                size={18}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium">
                                                {user.firstName} {user.lastName}
                                            </p>

                                            <p className="mt-1 truncate text-[9px] text-black/40">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Menu */}
                                <nav className="mt-3 space-y-1">
                                    {menuItems.map((item) => {
                                        const Icon = item.icon;
                                        const isActive =
                                            activeSection === item.id;

                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() =>
                                                    setActiveSection(item.id)
                                                }
                                                className={`flex w-full items-center justify-between px-4 py-3.5 text-left transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-black text-white"
                                                        : "text-black/55 hover:bg-white hover:text-black"
                                                }`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <Icon
                                                        size={15}
                                                        strokeWidth={1.6}
                                                    />

                                                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                                                        {item.label}
                                                    </span>
                                                </span>

                                                <ChevronRight
                                                    size={13}
                                                    strokeWidth={1.5}
                                                />
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <section>

                            {/* Overview */}
                            {activeSection === "overview" && (
                                <div>
                                    <div className="grid gap-4 sm:grid-cols-3">

                                        {/* Orders */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveSection("orders")
                                            }
                                            className="group border border-black/10 bg-white p-5 text-left transition-all duration-300 hover:border-black/30"
                                        >
                                            <Package
                                                size={19}
                                                strokeWidth={1.5}
                                                className="mb-8"
                                            />

                                            <p className="text-2xl font-medium">
                                                0
                                            </p>

                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">
                                                    Total Orders
                                                </span>

                                                <ChevronRight
                                                    size={14}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </div>
                                        </button>

                                        {/* Wishlist */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveSection("wishlist")
                                            }
                                            className="group border border-black/10 bg-white p-5 text-left transition-all duration-300 hover:border-black/30"
                                        >
                                            <Heart
                                                size={19}
                                                strokeWidth={1.5}
                                                className="mb-8"
                                            />

                                            <p className="text-2xl font-medium">
                                                0
                                            </p>

                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">
                                                    Wishlist
                                                </span>

                                                <ChevronRight
                                                    size={14}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </div>
                                        </button>

                                        {/* Addresses */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveSection("addresses")
                                            }
                                            className="group border border-black/10 bg-white p-5 text-left transition-all duration-300 hover:border-black/30"
                                        >
                                            <MapPin
                                                size={19}
                                                strokeWidth={1.5}
                                                className="mb-8"
                                            />

                                            <p className="text-2xl font-medium">
                                                0
                                            </p>

                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/45">
                                                    Saved Addresses
                                                </span>

                                                <ChevronRight
                                                    size={14}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </div>
                                        </button>
                                    </div>

                                    {/* Profile Card */}
                                    <div className="mt-6 border border-black/10">
                                        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                                    Personal Information
                                                </p>

                                                <p className="mt-1 text-xs text-black/40">
                                                    Your account details
                                                </p>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setActiveSection(
                                                        "settings"
                                                    )
                                                }
                                                className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-black/50 transition-colors hover:text-[#FF2323]"
                                            >
                                                <Pencil size={13} />
                                                Edit
                                            </button>
                                        </div>

                                        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                                            <div>
                                                <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                                                    Full Name
                                                </p>

                                                <p className="text-sm">
                                                    {user.firstName}{" "}
                                                    {user.lastName}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                                                    Email
                                                </p>

                                                <p className="text-sm break-all">
                                                    {user.email}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                                                    Phone
                                                </p>

                                                <p className="text-sm">
                                                    {user.phone}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                                                    Account Status
                                                </p>

                                                <p className="text-sm text-green-600">
                                                    Active
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shopping CTA */}
                                    <div className="mt-6 bg-black p-6 text-white sm:p-8">
                                        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF2323]">
                                                    Discover Mashfaa
                                                </p>

                                                <h2 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                                                    Find something you love.
                                                </h2>

                                                <p className="mt-2 text-xs leading-5 text-white/45">
                                                    Explore our latest modest
                                                    fashion collection.
                                                </p>
                                            </div>

                                            <Link
                                                to="/shop"
                                                className="group flex w-fit items-center gap-3 bg-white px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#FF2323] hover:text-white"
                                            >
                                                Shop Now

                                                <ShoppingBag
                                                    size={14}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orders */}
                            {activeSection === "orders" && (
                                <div className="border border-black/10">
                                    <div className="border-b border-black/10 p-5 sm:p-6">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                            My Orders
                                        </p>

                                        <p className="mt-2 text-xs text-black/40">
                                            View and track your previous orders.
                                        </p>
                                    </div>

                                    <div className="px-5 py-16 text-center sm:px-6">
                                        <Package
                                            size={30}
                                            strokeWidth={1.2}
                                            className="mx-auto text-black/25"
                                        />

                                        <h3 className="mt-5 text-sm font-medium">
                                            No orders yet
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-black/40">
                                            Once you place an order, your order
                                            history will appear here.
                                        </p>

                                        <Link
                                            to="/shop"
                                            className="mt-6 inline-flex items-center gap-3 bg-black px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#FF2323]"
                                        >
                                            Start Shopping
                                            <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Wishlist */}
                            {activeSection === "wishlist" && (
                                <div className="border border-black/10">
                                    <div className="border-b border-black/10 p-5 sm:p-6">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                            Wishlist
                                        </p>

                                        <p className="mt-2 text-xs text-black/40">
                                            Products you save for later will
                                            appear here.
                                        </p>
                                    </div>

                                    <div className="px-5 py-16 text-center sm:px-6">
                                        <Heart
                                            size={30}
                                            strokeWidth={1.2}
                                            className="mx-auto text-black/25"
                                        />

                                        <h3 className="mt-5 text-sm font-medium">
                                            Your wishlist is empty
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-black/40">
                                            Save your favorite Mashfaa
                                            products and find them here later.
                                        </p>

                                        <Link
                                            to="/shop"
                                            className="mt-6 inline-flex items-center gap-3 bg-black px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#FF2323]"
                                        >
                                            Explore Products
                                            <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Addresses */}
                            {activeSection === "addresses" && (
                                <div className="border border-black/10">
                                    <div className="border-b border-black/10 p-5 sm:p-6">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                            Saved Addresses
                                        </p>

                                        <p className="mt-2 text-xs text-black/40">
                                            Manage your delivery addresses.
                                        </p>
                                    </div>

                                    <div className="px-5 py-16 text-center sm:px-6">
                                        <MapPin
                                            size={30}
                                            strokeWidth={1.2}
                                            className="mx-auto text-black/25"
                                        />

                                        <h3 className="mt-5 text-sm font-medium">
                                            No saved addresses
                                        </h3>

                                        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-black/40">
                                            Your saved delivery addresses will
                                            appear here.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Settings */}
                            {activeSection === "settings" && (
                                <div className="border border-black/10">
                                    <div className="border-b border-black/10 p-5 sm:p-6">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                            Account Settings
                                        </p>

                                        <p className="mt-2 text-xs text-black/40">
                                            Manage your personal information.
                                        </p>
                                    </div>

                                    <div className="space-y-5 p-5 sm:p-6">
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em]">
                                                    First Name
                                                </label>

                                                <input
                                                    type="text"
                                                    defaultValue={user.firstName}
                                                    className="w-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black"
                                                />
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em]">
                                                    Last Name
                                                </label>

                                                <input
                                                    type="text"
                                                    defaultValue={user.lastName}
                                                    className="w-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em]">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                defaultValue={user.email}
                                                className="w-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em]">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                defaultValue={user.phone}
                                                className="w-full border border-black/10 px-4 py-3 text-sm outline-none focus:border-black"
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="bg-black px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#FF2323]"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Account;