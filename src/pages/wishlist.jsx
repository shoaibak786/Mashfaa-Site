import { useState } from "react";
import {
    Heart,
    ShoppingBag,
    Trash2,
    Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
    const {
        wishlistItems,
        removeFromWishlist,
    } = useWishlist();

    const { addToCart } = useCart();

    const navigate = useNavigate();

    const [addedItems, setAddedItems] = useState({});

    // ================= ADD TO CART =================

    const handleAddToCart = (product) => {
        const productId = product.id ?? product._id;

        addToCart(product);

        setAddedItems((previous) => ({
            ...previous,
            [productId]: true,
        }));

        setTimeout(() => {
            setAddedItems((previous) => ({
                ...previous,
                [productId]: false,
            }));
        }, 1500);
    };

    // ================= BUY IT NOW =================

    const handleBuyNow = (product) => {
        addToCart(product);
        navigate("/checkout");
    };

    // ================= BUY IT ALL =================

    const handleBuyItAll = () => {
        if (wishlistItems.length < 2) return;

        wishlistItems.forEach((product) => {
            addToCart(product);
        });

        navigate("/checkout");
    };

    return (
        <div className="min-h-screen bg-white">

            {/* ================= NAVBAR ================= */}

            <Navbar solid />

            <main className="px-5 py-25 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    {/* ================= HEADER ================= */}

                    <div className="mb-10">
                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#FF2323]">
                            Your Collection
                        </p>

                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                            <div>
                                <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
                                    Wishlist
                                </h1>

                                <p className="mt-3 text-sm text-black/55">
                                    Products you have saved for later.
                                </p>
                            </div>

                            {wishlistItems.length > 0 && (
                                <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                                    {wishlistItems.length}{" "}
                                    {wishlistItems.length === 1
                                        ? "Item"
                                        : "Items"}
                                </p>
                            )}

                        </div>
                    </div>

                    {/* ================= EMPTY WISHLIST ================= */}

                    {wishlistItems.length === 0 ? (

                        <div className="flex min-h-[350px] items-center justify-center border border-black/10">

                            <div className="text-center">

                                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black/[0.03]">
                                    <Heart
                                        size={22}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <h2 className="text-xl font-medium text-black">
                                    Your Wishlist is Empty
                                </h2>

                                <p className="mx-auto mt-2 max-w-sm text-sm text-black/50">
                                    Save your favorite products and
                                    find them here.
                                </p>

                                <Link
                                    to="/shop"
                                    className="mt-7 inline-flex items-center gap-2 bg-black px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#FF2323]"
                                >
                                    Continue Shopping
                                </Link>

                            </div>

                        </div>

                    ) : (

                        <>

                            {/* ================= BUY IT ALL ================= */}

                            {wishlistItems.length > 1 && (
                                <div className="mb-8 flex flex-col justify-between gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-center">

                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                                            Ready to purchase?
                                        </p>

                                        <p className="mt-1 text-sm text-black/60">
                                            Purchase all your saved products at once.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleBuyItAll}
                                        className="flex w-full items-center justify-center gap-2 bg-black px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF2323] sm:w-auto"
                                    >
                                        <Zap
                                            size={14}
                                            strokeWidth={1.6}
                                        />

                                        Buy It All
                                    </button>

                                </div>
                            )}

                            {/* ================= WISHLIST PRODUCTS ================= */}

                            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">

                                {wishlistItems.map((product) => {

                                    const productId =
                                        product.id ?? product._id;

                                    const isAdded =
                                        addedItems[productId];

                                    const isBundle =
                                        product.isBundle === true;

                                    // Bundle ki teeno images
                                    const bundleImages =
                                        product.bundleProducts
                                            ?.map((item) => item.image)
                                            .filter(Boolean)
                                            .slice(0, 3) || [];

                                    // Fallback agar bundleProducts available na hon
                                    const imagesToShow =
                                        isBundle && bundleImages.length > 0
                                            ? bundleImages
                                            : [product.image].filter(Boolean);

                                    return (
                                        <div
                                            key={productId}
                                            className="group relative min-w-0"
                                        >

                                            {/* ================= PRODUCT / BUNDLE IMAGES ================= */}

                                            <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F3F3]">
                                                {isBundle && bundleImages.length >= 3 ? (
                                                    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1">
                                                        {/* Left image — 50% width and full height */}
                                                        <div className="row-span-2 overflow-hidden">
                                                            <img
                                                                src={bundleImages[0]}
                                                                alt={`${product.name} 1`}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>

                                                        {/* Right top image */}
                                                        <div className="overflow-hidden">
                                                            <img
                                                                src={bundleImages[1]}
                                                                alt={`${product.name} 2`}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>

                                                        {/* Right bottom image */}
                                                        <div className="overflow-hidden">
                                                            <img
                                                                src={bundleImages[2]}
                                                                alt={`${product.name} 3`}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : isBundle && bundleImages.length === 2 ? (
                                                    <div className="grid h-full w-full grid-cols-2 gap-1">
                                                        {bundleImages.map((image, index) => (
                                                            <div key={index} className="overflow-hidden">
                                                                <img
                                                                    src={image}
                                                                    alt={`${product.name} ${index + 1}`}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : isBundle && bundleImages.length === 4 ? (
                                                    <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1">
                                                        {bundleImages.slice(0, 4).map((image, index) => (
                                                            <div key={index} className="overflow-hidden">
                                                                <img
                                                                    src={image}
                                                                    alt={`${product.name} ${index + 1}`}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.045]"
                                                    />
                                                )}

                                                {/* Remove Wishlist button — keep your existing button here */}
                                            </div>
                                            {/* ================= PRODUCT INFO ================= */}

                                            <div className="pt-4">

                                                <div className="flex items-start justify-between gap-3">

                                                    <div className="min-w-0">

                                                        {isBundle ? (

                                                            <p className="break-words text-sm font-medium text-black">
                                                                {product.name}
                                                            </p>

                                                        ) : (

                                                            <Link
                                                                to={`/product/${productId}`}
                                                                className="block truncate text-sm font-medium text-black transition-colors hover:text-[#FF2323]"
                                                            >
                                                                {product.name}
                                                            </Link>

                                                        )}

                                                        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-black/40">
                                                            {product.category}
                                                        </p>

                                                    </div>

                                                    <div className="shrink-0 text-right">

                                                        <p className="text-sm font-medium text-black">
                                                            Rs.{" "}
                                                            {Number(
                                                                product.price || 0
                                                            ).toLocaleString()}
                                                        </p>

                                                        {product.oldPrice != null &&
                                                            Number(product.oldPrice) >
                                                            Number(product.price) && (
                                                                <p className="mt-1 text-[10px] text-black/40 line-through">
                                                                    Rs.{" "}
                                                                    {Number(
                                                                        product.oldPrice
                                                                    ).toLocaleString()}
                                                                </p>
                                                            )}

                                                    </div>

                                                </div>

                                                {/* Bundle savings */}

                                                {isBundle &&
                                                    Number(product.bundleSaving) > 0 && (
                                                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#FF2323]">
                                                            You save Rs.{" "}
                                                            {Number(
                                                                product.bundleSaving
                                                            ).toLocaleString()}
                                                        </p>
                                                    )}

                                                {/* ================= ADD TO CART ================= */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleAddToCart(product)
                                                    }
                                                    className={`mt-4 flex w-full items-center justify-center gap-2 border py-3 text-[8px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:mt-5 sm:py-3.5 sm:text-[9px] ${isAdded
                                                            ? "border-green-600 bg-green-600 text-white"
                                                            : "border-black bg-black text-white hover:bg-white hover:text-black"
                                                        }`}
                                                >
                                                    <ShoppingBag
                                                        size={13}
                                                        strokeWidth={1.5}
                                                    />

                                                    {isAdded
                                                        ? "Added! ✓"
                                                        : "Add To Cart"}
                                                </button>

                                                {/* ================= BUY IT NOW ================= */}

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleBuyNow(product)
                                                    }
                                                    className="mt-2 flex w-full items-center justify-center gap-2 border border-black/15 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:border-[#FF2323] hover:bg-[#FF2323] hover:text-white sm:py-3.5 sm:text-[9px]"
                                                >
                                                    <Zap
                                                        size={13}
                                                        strokeWidth={1.6}
                                                    />

                                                    Buy It Now
                                                </button>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Wishlist;