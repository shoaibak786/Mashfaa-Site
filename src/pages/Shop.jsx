
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
    ChevronDown,
    SlidersHorizontal,
    Search,
    X,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import products from "../data/products";

function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory = searchParams.get("category") || "All";
    const searchQuery = searchParams.get("search") || "";

    const categories = [
        "All",
        "Hijabs",
        "Abayas",
        "Brooches",
        "Handbags",
    ];

    // ================= FILTER PRODUCTS =================

    const filteredProducts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "All" ||
                product.category?.toLowerCase() ===
                    selectedCategory.toLowerCase();

            const searchableText = [
                product.name,
                product.title,
                product.category,
                product.description,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                !query || searchableText.includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // ================= SEARCH CHANGE =================

    const handleSearchChange = (value) => {
        const nextParams = new URLSearchParams(searchParams);

        if (value.trim()) {
            nextParams.set("search", value);
        } else {
            nextParams.delete("search");
        }

        setSearchParams(nextParams);
    };

    // ================= CATEGORY CHANGE =================

    const handleCategoryChange = (category) => {
        const nextParams = new URLSearchParams(searchParams);

        if (category === "All") {
            nextParams.delete("category");
        } else {
            nextParams.set("category", category);
        }

        setSearchParams(nextParams);
    };

    // ================= CLEAR FILTERS =================

    const handleClearFilters = () => {
        setSearchParams({});
    };

    return (
        <div className="min-h-screen bg-white">
            {/* ================= NAVBAR ================= */}

            <Navbar solid />

            {/* ================= SHOP HEADER ================= */}

            <section className="border-b border-black/[0.07] bg-[#F8F8F8] pt-[120px] sm:pt-[135px]">
                <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10">
                    {/* Breadcrumb */}

                    <div className="mb-6 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[2px] text-gray-400">
                        <Link
                            to="/"
                            className="transition-colors hover:text-red-600"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="text-black">Shop</span>
                    </div>

                    {/* Heading */}

                    <div className="max-w-2xl">
                        <p className="mb-3 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[3px] text-red-600">
                            <span className="h-px w-7 bg-red-600" />
                            The Collection
                        </p>

                        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
                            Shop
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-[15px]">
                            Discover our curated collection of elegant
                            accessories designed to complement your style.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SHOP CONTENT ================= */}

            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
                {/* ================= SEARCH BAR ================= */}

                <div className="mb-7 flex items-center border border-black/[0.12] bg-white px-4 transition-colors focus-within:border-black sm:max-w-md">
                    <Search
                        size={17}
                        strokeWidth={1.5}
                        className="shrink-0 text-gray-400"
                    />

                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(event) =>
                            handleSearchChange(event.target.value)
                        }
                        placeholder="Search products..."
                        aria-label="Search products"
                        className="w-full bg-transparent px-3 py-4 text-sm text-black outline-none placeholder:text-gray-400"
                    />

                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => handleSearchChange("")}
                            aria-label="Clear search"
                            className="shrink-0 text-gray-400 transition-colors hover:text-red-600"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* ================= TOP BAR ================= */}

                <div className="mb-8 flex flex-col gap-5 border-b border-black/[0.08] pb-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Categories */}

                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((category) => {
                            const isActive =
                                selectedCategory === category ||
                                (category === "All" &&
                                    !searchParams.has("category"));

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        handleCategoryChange(category)
                                    }
                                    className={`border px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[1.5px] transition-all duration-300 sm:px-5 ${
                                        isActive
                                            ? "border-black bg-black text-white"
                                            : "border-black/[0.12] bg-white text-gray-600 hover:border-black hover:text-black"
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right side */}

                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                        <span className="text-[10px] uppercase tracking-[1.5px] text-gray-400">
                            {filteredProducts.length}{" "}
                            {filteredProducts.length === 1
                                ? "Product"
                                : "Products"}
                        </span>

                        <button
                            type="button"
                            onClick={handleClearFilters}
                            className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[1.5px] text-black transition-colors hover:text-red-600"
                        >
                            <SlidersHorizontal
                                size={14}
                                strokeWidth={1.5}
                            />
                            Clear Filters
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setSearchParams(
                                    searchQuery
                                        ? { search: searchQuery }
                                        : {}
                                )
                            }
                            className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[1.5px] text-black transition-colors hover:text-red-600"
                        >
                            Sort
                            <ChevronDown size={13} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* ================= SEARCH STATUS ================= */}

                {searchQuery && (
                    <p className="mb-6 text-sm text-gray-500">
                        Search results for{" "}
                        <span className="font-medium text-black">
                            &quot;{searchQuery}&quot;
                        </span>
                    </p>
                )}

                {/* ================= PRODUCT GRID ================= */}

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    /* ================= EMPTY STATE ================= */

                    <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F5F5]">
                            <Search
                                size={20}
                                strokeWidth={1.3}
                                className="text-gray-400"
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-black">
                            No Products Found
                        </h2>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                            {searchQuery
                                ? `We couldn't find products matching "${searchQuery}". Try another search.`
                                : "We couldn't find any products in this category. Try exploring another collection."}
                        </p>

                        <button
                            type="button"
                            onClick={handleClearFilters}
                            className="mt-6 bg-black px-6 py-3 text-[9px] font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-red-600"
                        >
                            View All Products
                        </button>
                    </div>
                )}
            </main>

            {/* ================= FOOTER ================= */}

            <Footer />
        </div>
    );
}

export default Shop;
