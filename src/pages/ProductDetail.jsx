
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
    BadgeCheck,
    ChevronDown,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    RotateCcw,
    ShieldCheck,
    ShoppingBag,
    Star,
    Truck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Stars({ rating = 0, size = 12 }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    size={size}
                    strokeWidth={star <= rating ? 0 : 1.2}
                    fill={star <= rating ? "currentColor" : "none"}
                    className={
                        star <= rating
                            ? "text-black"
                            : "text-gray-300"
                    }
                />
            ))}
        </div>
    );
}

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { addToCart } = useCart();

    // Wishlist
    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    const [quantity, setQuantity] = useState(1);
    const [isZooming, setIsZooming] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({
        x: 50,
        y: 50,
    });

    const [cartMessage, setCartMessage] = useState("");

    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewName, setReviewName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviewMessage, setReviewMessage] = useState("");

    /*
     * =========================================================
     * REVIEW STORAGE
     * =========================================================
     *
     * Every product gets its own localStorage key.
     *
     * Example:
     * mashfaa_reviews_1
     * mashfaa_reviews_2
     * mashfaa_reviews_3
     */

    const reviewStorageKey = `mashfaa_reviews_${id}`;

    const [userReviews, setUserReviews] = useState(() => {
        try {
            const savedReviews = localStorage.getItem(
                `mashfaa_reviews_${id}`
            );

            return savedReviews
                ? JSON.parse(savedReviews)
                : [];
        } catch (error) {
            console.error(
                "Failed to load reviews:",
                error
            );

            return [];
        }
    });

    /*
     * If user moves from one product to another,
     * load that product's reviews.
     *
     * No design is affected.
     */

    useEffect(() => {
        try {
            const savedReviews = localStorage.getItem(
                `mashfaa_reviews_${id}`
            );

            setUserReviews(
                savedReviews
                    ? JSON.parse(savedReviews)
                    : []
            );
        } catch (error) {
            console.error(
                "Failed to load product reviews:",
                error
            );

            setUserReviews([]);
        }
    }, [id]);

    const product = useMemo(
        () =>
            products.find(
                (item) => String(item.id) === String(id)
            ),
        [id]
    );

    // Wishlist status
    const isWishlisted = product
        ? isInWishlist(product.id ?? product._id)
        : false;

    // ==========================================
    // QUANTITY
    // ==========================================

    const increaseQuantity = () => {
        if (!product) return;

        const stock = Number(product.stock ?? Infinity);

        setQuantity((prev) => {
            if (prev >= stock) {
                return prev;
            }

            return prev + 1;
        });
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => {
            if (prev <= 1) {
                return 1;
            }

            return prev - 1;
        });
    };

    // ==========================================
    // ADD TO CART
    // ==========================================

    const handleAddToCart = () => {
        if (!product) return;

        const stock = Number(product.stock ?? Infinity);

        if (stock <= 0) {
            setCartMessage("This product is currently out of stock.");

            setTimeout(() => {
                setCartMessage("");
            }, 3000);

            return;
        }

        const safeQuantity = Math.min(
            Math.max(quantity, 1),
            stock
        );

        addToCart(product, safeQuantity);

        setCartMessage(
            `${safeQuantity} ${
                safeQuantity === 1 ? "item" : "items"
            } added to your bag.`
        );

        setTimeout(() => {
            setCartMessage("");
        }, 3000);
    };

    // ==========================================
    // BUY NOW
    // ==========================================

    const handleBuyNow = () => {
        if (!product) return;

        const stock = Number(product.stock ?? Infinity);

        if (stock <= 0) {
            return;
        }

        const safeQuantity = Math.min(
            Math.max(quantity, 1),
            stock
        );

        addToCart(product, safeQuantity);

        navigate("/checkout");
    };

    // ==========================================
    // IMAGE ZOOM
    // ==========================================

    const handleImageMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x =
            ((e.clientX - rect.left) / rect.width) * 100;

        const y =
            ((e.clientY - rect.top) / rect.height) * 100;

        setZoomPosition({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
        });
    };

    // ==========================================
    // REVIEW
    // ==========================================

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        setReviewMessage("");

        if (!reviewName.trim()) {
            setReviewMessage("Please enter your name.");
            return;
        }

        if (!selectedRating) {
            setReviewMessage("Please select a rating.");
            return;
        }

        if (!reviewText.trim()) {
            setReviewMessage("Please write your review.");
            return;
        }

        /*
         * Create the new review.
         */

        const newReview = {
            id: Date.now(),
            name: reviewName.trim(),
            rating: selectedRating,
            text: reviewText.trim(),
            verified: false,
        };

        /*
         * Get the latest reviews from localStorage.
         *
         * This makes sure existing reviews are not lost.
         */

        let existingReviews = [];

        try {
            const savedReviews = localStorage.getItem(
                reviewStorageKey
            );

            existingReviews = savedReviews
                ? JSON.parse(savedReviews)
                : [];
        } catch (error) {
            console.error(
                "Failed to read saved reviews:",
                error
            );

            existingReviews = [];
        }

        /*
         * Add the new review at the beginning.
         */

        const updatedReviews = [
            newReview,
            ...existingReviews,
        ];

        /*
         * SAVE REVIEW PERMANENTLY
         *
         * This is the only new functionality.
         */

        try {
            localStorage.setItem(
                reviewStorageKey,
                JSON.stringify(updatedReviews)
            );
        } catch (error) {
            console.error(
                "Failed to save review:",
                error
            );

            setReviewMessage(
                "Unable to save your review. Please try again."
            );

            return;
        }

        /*
         * Update UI immediately.
         */

        setUserReviews(updatedReviews);

        /*
         * Clear form.
         */

        setReviewName("");
        setReviewText("");
        setSelectedRating(0);

        setReviewMessage(
            "Thank you! Your review has been submitted."
        );

        setTimeout(() => {
            setReviewMessage("");
        }, 4000);
    };

    // ==========================================
    // PRODUCT NOT FOUND
    // ==========================================

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar solid />

                <main className="flex min-h-[70vh] items-center justify-center px-5 pt-28">
                    <div className="max-w-md text-center">
                        <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                            Product Not Found
                        </span>

                        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                            This product doesn't exist
                        </h1>

                        <p className="mt-4 text-sm leading-7 text-gray-500">
                            The product you're looking for may
                            have been removed or is no longer
                            available.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-8 inline-flex bg-black px-8 py-4 text-[9px] font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#FF2323]"
                        >
                            Back To Shop
                        </Link>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }

    const discountPercentage =
        product.oldPrice &&
        product.oldPrice > product.price
            ? Math.round(
                  ((product.oldPrice - product.price) /
                      product.oldPrice) *
                      100
              )
            : null;

    const sampleReviews = [
        {
            id: "sample-1",
            name: "Ayesha K.",
            rating: 5,
            text: "Absolutely loved the quality and finishing. The product looks even better in person and the delivery was also very smooth.",
            verified: true,
        },
        {
            id: "sample-2",
            name: "Maham R.",
            rating: 5,
            text: "Beautiful design and excellent quality. I really liked the overall finish and packaging. Would definitely recommend it.",
            verified: true,
        },
        {
            id: "sample-3",
            name: "Hira S.",
            rating: 5,
            text: "Very happy with my purchase. The product feels premium and the quality is exactly what I expected.",
            verified: true,
        },
    ];

    const displayedReviews = [
        ...userReviews,
        ...sampleReviews,
    ];

    const totalReviewCount =
        product.reviews + userReviews.length;

    const userRatingTotal = userReviews.reduce(
        (total, review) => total + review.rating,
        0
    );

    const totalRatingPoints =
        product.rating * product.reviews +
        userRatingTotal;

    const averageRating =
        totalReviewCount > 0
            ? (
                  totalRatingPoints /
                  totalReviewCount
              ).toFixed(1)
            : "0.0";

    const ratingCounts = [5, 4, 3, 2, 1].map(
        (rating) => {
            const baseCount =
                product.reviews &&
                Math.round(product.rating) === rating
                    ? product.reviews
                    : 0;

            const userCount = userReviews.filter(
                (review) => review.rating === rating
            ).length;

            return {
                rating,
                count: baseCount + userCount,
            };
        }
    );

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar solid />

            <main className="mx-auto max-w-[1480px] px-5 pb-24 pt-[112px] sm:px-8 sm:pt-[128px] lg:px-12 xl:px-16">

                {/* Breadcrumb */}

                <div className="mb-8 flex items-center gap-2 text-[8px] font-medium uppercase tracking-[2.2px] text-gray-400 sm:mb-12">

                    <Link
                        to="/"
                        className="transition hover:text-black"
                    >
                        Home
                    </Link>

                    <ChevronRight
                        size={10}
                        strokeWidth={1.4}
                    />

                    <Link
                        to="/shop"
                        className="transition hover:text-black"
                    >
                        Shop
                    </Link>

                    <ChevronRight
                        size={10}
                        strokeWidth={1.4}
                    />

                    <span className="max-w-[180px] truncate text-black">
                        {product.name}
                    </span>
                </div>

                {/* Premium product area */}

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">

                    {/* Gallery */}

                    <div className="min-w-0">

                        <div className="relative">

                            <div
                                className="group relative aspect-[4/5] cursor-crosshair overflow-hidden bg-[#F4F3F0]"
                                onMouseEnter={() =>
                                    setIsZooming(true)
                                }
                                onMouseLeave={() =>
                                    setIsZooming(false)
                                }
                                onMouseMove={
                                    handleImageMouseMove
                                }
                            >

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.018]"
                                />

                                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">

                                    <div className="flex flex-wrap gap-2">

                                        <span className="border border-black/10 bg-white/95 px-3 py-2 text-[7px] font-semibold uppercase tracking-[1.8px]">
                                            {product.category}
                                        </span>

                                        {product.badge && (
                                            <span className="bg-[#FF2323] px-3 py-2 text-[7px] font-semibold uppercase tracking-[1.8px] text-white">
                                                {product.badge}
                                            </span>
                                        )}

                                    </div>

                                    <span className="bg-white/90 px-3 py-2 text-[7px] font-semibold uppercase tracking-[1.5px] shadow-sm">
                                        Mashfaa
                                    </span>

                                </div>

                                {isZooming && (
                                    <div
                                        className="pointer-events-none absolute hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/10 shadow-2xl backdrop-blur-[1px] lg:block"
                                        style={{
                                            left: `${zoomPosition.x}%`,
                                            top: `${zoomPosition.y}%`,
                                        }}
                                    />
                                )}

                                <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 bg-black/85 px-4 py-2.5 text-[7px] font-semibold uppercase tracking-[1.8px] text-white lg:flex">
                                    Move cursor to explore
                                </div>

                            </div>

                            {/* Zoom panel */}

                            <div
                                className={`absolute left-[calc(100%+28px)] top-0 hidden aspect-[4/5] w-[70%] overflow-hidden bg-[#F4F3F0] shadow-[0_30px_90px_rgba(0,0,0,0.12)] transition-all duration-300 xl:block ${
                                    isZooming
                                        ? "visible translate-x-0 opacity-100"
                                        : "invisible translate-x-5 opacity-0"
                                }`}
                            >

                                <div
                                    className="absolute inset-0 scale-[2.35] bg-cover bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${product.image})`,
                                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                    }}
                                />

                                <div className="absolute left-5 top-5 bg-white/95 px-3 py-2 text-[7px] font-semibold uppercase tracking-[1.8px] shadow-sm">
                                    Detail View
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 flex items-center justify-between border-y border-black/[0.07] py-4">

                            <p className="text-[8px] uppercase tracking-[2px] text-gray-400">
                                Mashfaa / Signature Collection
                            </p>

                            <p className="text-[8px] uppercase tracking-[2px] text-gray-400">
                                #{product.id}
                            </p>

                        </div>

                    </div>

                    {/* Information */}

                    <div className="flex min-w-0 flex-col justify-center lg:py-3">

                        <div className="flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF2323]" />

                            <p className="text-[8px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                                The Collection
                            </p>

                        </div>

                        <h1 className="mt-5 max-w-2xl text-[36px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[46px] lg:text-[52px] xl:text-[60px]">
                            {product.name}
                        </h1>

                        <div className="mt-6 flex flex-wrap items-center gap-3">

                            <Stars
                                rating={Math.round(
                                    product.rating
                                )}
                                size={12}
                            />

                            <span className="h-3 w-px bg-gray-300" />

                            <span className="text-[9px] text-gray-500">
                                {averageRating} ·{" "}
                                {totalReviewCount} Reviews
                            </span>

                            <span className="rounded-full bg-[#F4F4F1] px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[1.3px]">
                                Loved by customers
                            </span>

                        </div>

                        <div className="mt-7 flex flex-wrap items-end gap-3 border-b border-black/[0.08] pb-7">

                            <span className="text-[28px] font-semibold tracking-[-0.04em] sm:text-[31px]">
                                Rs.{" "}
                                {product.price.toLocaleString()}
                            </span>

                            {product.oldPrice && (
                                <>
                                    <span className="mb-1 text-sm text-gray-400 line-through">
                                        Rs.{" "}
                                        {product.oldPrice.toLocaleString()}
                                    </span>

                                    {discountPercentage && (
                                        <span className="mb-1 text-[8px] font-semibold uppercase tracking-[1.5px] text-[#FF2323]">
                                            Save{" "}
                                            {discountPercentage}%
                                        </span>
                                    )}
                                </>
                            )}

                        </div>

                        <p className="mt-7 max-w-xl text-[13px] leading-7 text-gray-500 sm:text-sm">
                            {product.description ||
                                "Designed with care and finished with attention to detail, this piece brings a refined touch to your everyday collection."}
                        </p>

                        <div className="mt-6 flex items-center justify-between border-y border-black/[0.08] py-4">

                            <div className="flex items-center gap-2">

                                <span
                                    className={`h-1.5 w-1.5 rounded-full ${
                                        product.stock > 0
                                            ? "bg-green-500"
                                            : "bg-[#FF2323]"
                                    }`}
                                />

                                <span
                                    className={`text-[8px] font-semibold uppercase tracking-[1.8px] ${
                                        product.stock > 0
                                            ? "text-green-600"
                                            : "text-[#FF2323]"
                                    }`}
                                >
                                    {product.stock > 0
                                        ? `${product.stock} Available`
                                        : "Out Of Stock"}
                                </span>

                            </div>

                            <span className="text-[8px] uppercase tracking-[1.5px] text-gray-400">
                                Secure checkout
                            </span>

                        </div>

                        {/* Quantity */}

                        <div className="mt-7">

                            <p className="mb-3 text-[8px] font-semibold uppercase tracking-[1.8px]">
                                Quantity
                            </p>

                            <div className="flex items-center gap-3">

                                <div className="flex h-[52px] w-[145px] items-center justify-between border border-black/15">

                                    <button
                                        type="button"
                                        onClick={
                                            decreaseQuantity
                                        }
                                        disabled={quantity <= 1}
                                        className="flex h-full w-11 items-center justify-center transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <Minus
                                            size={14}
                                            strokeWidth={1.5}
                                        />
                                    </button>

                                    <span className="text-sm font-medium">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={
                                            increaseQuantity
                                        }
                                        disabled={
                                            !product.stock ||
                                            quantity >=
                                                product.stock
                                        }
                                        className="flex h-full w-11 items-center justify-center transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <Plus
                                            size={14}
                                            strokeWidth={1.5}
                                        />
                                    </button>

                                </div>

                                {/* Wishlist */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        toggleWishlist(product)
                                    }
                                    aria-label={
                                        isWishlisted
                                            ? "Remove from wishlist"
                                            : "Add to wishlist"
                                    }
                                    className={`flex h-[52px] w-[52px] items-center justify-center border transition duration-300 ${
                                        isWishlisted
                                            ? "border-black bg-black text-white"
                                            : "border-black/15 hover:border-black hover:bg-black hover:text-white"
                                    }`}
                                >
                                    <Heart
                                        size={18}
                                        strokeWidth={1.35}
                                        fill={
                                            isWishlisted
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />
                                </button>

                            </div>

                        </div>

                        {/* CTA */}

                        <button
                            type="button"
                            disabled={!product.stock}
                            onClick={handleAddToCart}
                            className="mt-5 flex h-14 w-full items-center justify-center gap-3 bg-black text-[8px] font-semibold uppercase tracking-[2.5px] text-white transition duration-300 hover:bg-[#FF2323] disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                            <ShoppingBag
                                size={16}
                                strokeWidth={1.4}
                            />

                            {product.stock
                                ? "Add To Cart"
                                : "Out Of Stock"}
                        </button>

                        {cartMessage && (
                            <div className="mt-3 border border-black/10 bg-[#F7F7F5] px-4 py-3 text-center text-[8px] font-semibold uppercase tracking-[1.5px] text-green-600">
                                {cartMessage}
                            </div>
                        )}

                        <button
                            type="button"
                            disabled={!product.stock}
                            onClick={handleBuyNow}
                            className="mt-3 flex h-14 w-full items-center justify-center border border-black bg-white text-[8px] font-semibold uppercase tracking-[2.5px] transition duration-300 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
                        >
                            Buy It Now
                        </button>

                        {/* Benefits */}

                        <div className="mt-9 grid grid-cols-3 border-y border-black/[0.08]">

                            {[
                                {
                                    icon: Truck,
                                    title: "Fast Delivery",
                                    text: "Quick & reliable",
                                },
                                {
                                    icon: RotateCcw,
                                    title: "Easy Returns",
                                    text: "Simple process",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Secure Payment",
                                    text: "Safe checkout",
                                },
                            ].map(
                                ({
                                    icon: Icon,
                                    title,
                                    text,
                                }, index) => (
                                    <div
                                        key={title}
                                        className={`py-5 ${
                                            index
                                                ? "border-l border-black/[0.08] px-3"
                                                : "pr-3"
                                        }`}
                                    >
                                        <Icon
                                            size={17}
                                            strokeWidth={1.25}
                                            className="mb-3"
                                        />

                                        <p className="text-[7px] font-semibold uppercase tracking-[1.3px] sm:text-[8px]">
                                            {title}
                                        </p>

                                        <p className="mt-1.5 text-[8px] leading-4 text-gray-400">
                                            {text}
                                        </p>
                                    </div>
                                )
                            )}

                        </div>

                        {/* Accordions */}

                        <div className="mt-7 border-t border-black/[0.08]">

                            <details className="group border-b border-black/[0.08]">

                                <summary className="flex cursor-pointer list-none items-center justify-between py-5">

                                    <span className="text-[8px] font-semibold uppercase tracking-[2px]">
                                        Product Details
                                    </span>

                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.4}
                                        className="transition group-open:rotate-180"
                                    />

                                </summary>

                                <div className="pb-5">

                                    <p className="text-[12px] leading-7 text-gray-500">
                                        {product.description ||
                                            "Designed with care and finished with attention to detail."}
                                    </p>

                                </div>

                            </details>

                            <details className="group border-b border-black/[0.08]">

                                <summary className="flex cursor-pointer list-none items-center justify-between py-5">

                                    <span className="text-[8px] font-semibold uppercase tracking-[2px]">
                                        Product Information
                                    </span>

                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.4}
                                        className="transition group-open:rotate-180"
                                    />

                                </summary>

                                <div className="pb-5">

                                    <div className="space-y-4">

                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-gray-400">
                                                Category
                                            </span>

                                            <span>
                                                {product.category}
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-gray-400">
                                                Product ID
                                            </span>

                                            <span>
                                                #{product.id}
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-gray-400">
                                                Availability
                                            </span>

                                            <span>
                                                {product.stock > 0
                                                    ? "Available"
                                                    : "Unavailable"}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </details>

                            <details className="group">

                                <summary className="flex cursor-pointer list-none items-center justify-between py-5">

                                    <span className="text-[8px] font-semibold uppercase tracking-[2px]">
                                        Shipping & Returns
                                    </span>

                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.4}
                                        className="transition group-open:rotate-180"
                                    />

                                </summary>

                                <div className="pb-5">

                                    <p className="text-[12px] leading-7 text-gray-500">
                                        Your order will be carefully
                                        packed and prepared for
                                        delivery. Shipping and
                                        return options are available
                                        according to the store policy.
                                    </p>

                                </div>

                            </details>

                        </div>

                    </div>

                </div>
            </main>

            {/* Reviews */}

            <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#F7F6F2]">

                <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

                <div className="relative mx-auto max-w-[1480px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-16">

                    <div className="mb-14 flex flex-col justify-between gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF2323]" />

                                <p className="text-[8px] font-semibold uppercase tracking-[3px] text-[#FF2323]">
                                    Customer Reviews
                                </p>

                            </div>

                            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                                Loved, worn &amp; reviewed.
                            </h2>

                        </div>

                        <p className="max-w-sm text-[11px] leading-6 text-gray-500 sm:text-right">
                            Real experiences from customers who
                            chose this piece for their collection.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr]">

                        {/* Rating card */}

                        <div className="border border-black/10 bg-white p-7 sm:p-9">

                            <p className="text-[8px] font-semibold uppercase tracking-[2px] text-gray-400">
                                Overall Rating
                            </p>

                            <div className="mt-5 flex items-end gap-4">

                                <span className="text-6xl font-semibold leading-none tracking-[-0.07em]">
                                    {averageRating}
                                </span>

                                <span className="pb-1 text-sm text-gray-400">
                                    / 5
                                </span>

                            </div>

                            <div className="mt-5">

                                <Stars
                                    rating={Math.round(
                                        Number(
                                            averageRating
                                        )
                                    )}
                                    size={15}
                                />

                                <p className="mt-2 text-[8px] uppercase tracking-[1.5px] text-gray-400">
                                    {totalReviewCount} Total
                                    Reviews
                                </p>

                            </div>

                            <div className="mt-9 space-y-3">

                                {ratingCounts.map(
                                    ({
                                        rating,
                                        count,
                                    }) => {
                                        const percentage =
                                            totalReviewCount >
                                            0
                                                ? (count /
                                                      totalReviewCount) *
                                                  100
                                                : 0;

                                        return (
                                            <div
                                                key={
                                                    rating
                                                }
                                                className="flex items-center gap-3"
                                            >

                                                <span className="w-5 text-[9px] text-gray-500">
                                                    {rating}
                                                </span>

                                                <Star
                                                    size={10}
                                                    fill="currentColor"
                                                    strokeWidth={
                                                        0
                                                    }
                                                />

                                                <div className="h-1.5 flex-1 overflow-hidden bg-gray-100">

                                                    <div
                                                        className="h-full bg-black transition-all duration-700"
                                                        style={{
                                                            width: `${percentage}%`,
                                                        }}
                                                    />

                                                </div>

                                                <span className="w-5 text-right text-[8px] text-gray-400">
                                                    {count}
                                                </span>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                            <div className="mt-9 border-t border-black/10 pt-6">

                                <div className="flex items-center gap-3">

                                    <BadgeCheck
                                        size={16}
                                        strokeWidth={1.4}
                                    />

                                    <div>

                                        <p className="text-[8px] font-semibold uppercase tracking-[1.5px]">
                                            Trusted Feedback
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-400">
                                            Verified purchases are
                                            marked below.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Write review */}

                        <form
                            onSubmit={
                                handleReviewSubmit
                            }
                            className="border border-black/10 bg-white p-7 sm:p-9 lg:p-10"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <p className="text-[8px] font-semibold uppercase tracking-[2px] text-gray-400">
                                        Your Experience
                                    </p>

                                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                                        Tell us what you
                                        think.
                                    </h3>

                                </div>

                                <span className="hidden border border-black/10 px-3 py-2 text-[7px] font-semibold uppercase tracking-[1.5px] sm:block">
                                    Share
                                </span>

                            </div>

                            <div className="mt-8">

                                <p className="mb-3 text-[8px] font-semibold uppercase tracking-[1.5px]">
                                    Your Rating
                                </p>

                                <div className="flex items-center gap-2">

                                    {[1, 2, 3, 4, 5].map(
                                        (star) => (
                                            <button
                                                key={
                                                    star
                                                }
                                                type="button"
                                                onClick={() =>
                                                    setSelectedRating(
                                                        star
                                                    )
                                                }
                                                aria-label={`Rate ${star} stars`}
                                                className="transition duration-200 hover:scale-110"
                                            >

                                                <Star
                                                    size={
                                                        23
                                                    }
                                                    strokeWidth={
                                                        1.2
                                                    }
                                                    fill={
                                                        star <=
                                                        selectedRating
                                                            ? "currentColor"
                                                            : "none"
                                                    }
                                                    className={
                                                        star <=
                                                        selectedRating
                                                            ? "text-black"
                                                            : "text-gray-300"
                                                    }
                                                />

                                            </button>
                                        )
                                    )}

                                    {selectedRating > 0 && (
                                        <span className="ml-2 text-[9px] text-gray-400">
                                            {
                                                selectedRating
                                            }
                                            /5
                                        </span>
                                    )}

                                </div>

                            </div>

                            <div className="mt-7 grid gap-5 sm:grid-cols-2">

                                <div>

                                    <label
                                        htmlFor="review-name"
                                        className="mb-2 block text-[8px] font-semibold uppercase tracking-[1.5px]"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="review-name"
                                        type="text"
                                        value={
                                            reviewName
                                        }
                                        onChange={(e) =>
                                            setReviewName(
                                                e.target
                                                    .value
                                            )
                                        }
                                        placeholder="Enter your name"
                                        className="h-12 w-full border border-black/10 bg-[#FAFAF8] px-4 text-sm outline-none transition focus:border-black focus:bg-white"
                                    />

                                </div>

                                <div>

                                    <label className="mb-2 block text-[8px] font-semibold uppercase tracking-[1.5px]">
                                        Product
                                    </label>

                                    <div className="flex h-12 items-center border border-black/10 bg-[#FAFAF8] px-4 text-[10px] text-gray-500">
                                        {product.name}
                                    </div>

                                </div>

                            </div>

                            <div className="mt-5">

                                <label
                                    htmlFor="review-text"
                                    className="mb-2 block text-[8px] font-semibold uppercase tracking-[1.5px]"
                                >
                                    Your Review
                                </label>

                                <textarea
                                    id="review-text"
                                    rows="5"
                                    value={
                                        reviewText
                                    }
                                    onChange={(e) =>
                                        setReviewText(
                                            e.target
                                                .value
                                        )
                                    }
                                    placeholder="Tell us about the quality, fit, finish or your overall experience..."
                                    className="w-full resize-none border border-black/10 bg-[#FAFAF8] px-4 py-3 text-sm leading-6 outline-none transition focus:border-black focus:bg-white"
                                />

                            </div>

                            {reviewMessage && (
                                <p
                                    className={`mt-4 text-[9px] font-medium ${
                                        reviewMessage.includes(
                                            "Thank you"
                                        )
                                            ? "text-green-600"
                                            : "text-[#FF2323]"
                                    }`}
                                >
                                    {reviewMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 flex h-[52px] w-full items-center justify-center bg-black text-[8px] font-semibold uppercase tracking-[2.3px] text-white transition hover:bg-[#FF2323]"
                            >
                                Submit Review
                            </button>

                        </form>

                    </div>

                    {/* Review list */}

                    <div className="mt-16">

                        <div className="flex items-end justify-between border-b border-black/10 pb-5">

                            <div>

                                <p className="text-[8px] font-semibold uppercase tracking-[2px] text-gray-400">
                                    Customer Experiences
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                                    What they&apos;re
                                    saying
                                </h3>

                            </div>

                            <span className="text-[8px] uppercase tracking-[1.5px] text-gray-400">
                                {displayedReviews.length} Reviews
                            </span>

                        </div>

                        <div>

                            {displayedReviews.map(
                                (review, index) => (
                                    <article
                                        key={
                                            review.id
                                        }
                                        className={`grid gap-5 py-8 sm:grid-cols-[180px_1fr] sm:gap-10 ${
                                            index !==
                                            displayedReviews.length -
                                                1
                                                ? "border-b border-black/10"
                                                : ""
                                        }`}
                                    >

                                        <div>

                                            <Stars
                                                rating={
                                                    review.rating
                                                }
                                                size={
                                                    11
                                                }
                                            />

                                            <h4 className="mt-3 text-sm font-semibold">
                                                {
                                                    review.name
                                                }
                                            </h4>

                                            <div className="mt-2 flex items-center gap-1.5">

                                                {review.verified ? (
                                                    <>
                                                        <BadgeCheck
                                                            size={
                                                                12
                                                            }
                                                            className="text-green-600"
                                                        />

                                                        <span className="text-[7px] font-semibold uppercase tracking-[1.2px] text-green-600">
                                                            Verified
                                                            Purchase
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span className="text-[7px] font-semibold uppercase tracking-[1.2px] text-gray-400">
                                                        Customer
                                                        Review
                                                    </span>
                                                )}

                                            </div>

                                        </div>

                                        <p className="max-w-3xl text-[13px] leading-7 text-gray-500 sm:text-sm">
                                            {
                                                review.text
                                            }
                                        </p>

                                    </article>
                                )
                            )}

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </div>
    );
}

export default ProductDetail;

