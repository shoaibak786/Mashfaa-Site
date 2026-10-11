import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

function ProductCard({ product, permanentCartButton = false }) {
    const { addToCart } = useCart();
    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    const [isAdded, setIsAdded] = useState(false);

    // ================= WISHLIST STATE =================

    const isWishlisted = isInWishlist(
        product.id ?? product._id
    );

    // ================= ADD TO CART =================

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart(product);

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 1500);
    };

    // ================= WISHLIST =================

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleWishlist(product);
    };

    return (
        <article className="group min-w-0">

            {/* ================= PRODUCT IMAGE ================= */}

            <div
                className={`relative overflow-hidden bg-[#F3F3F3] ${
                    permanentCartButton
                        ? "aspect-[3/4]"
                        : "aspect-[3/4]"
                }`}
            >

                {/* Product Image */}

                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                    />

                    {/* Image Overlay */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>


                {/* ================= PRODUCT BADGE ================= */}

                {product.badge && (
                    <span
                        className={`absolute left-3 top-3 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.18em] text-white sm:left-4 sm:top-4 ${
                            permanentCartButton
                                ? "bg-black"
                                : "bg-[#FF2323]"
                        }`}
                    >
                        {product.badge}
                    </span>
                )}


                {/* ================= WISHLIST ================= */}

                <button
                    type="button"
                    aria-label={
                        isWishlisted
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                    }
                    onClick={handleWishlist}
                    className={`absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-sm transition-all duration-300 sm:right-4 sm:top-4 ${
                        permanentCartButton
                            ? "h-9 w-9 opacity-100"
                            : "h-9 w-9 opacity-0 group-hover:opacity-100"
                    } ${
                        isWishlisted
                            ? "text-[#FF2323]"
                            : "text-black hover:bg-black hover:text-white"
                    }`}
                >
                    <Heart
                        size={15}
                        strokeWidth={1.5}
                        fill={
                            isWishlisted
                                ? "currentColor"
                                : "none"
                        }
                    />
                </button>


                {/* ================= HOVER ADD TO CART ================= */}

                {!permanentCartButton && (
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className={`absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 py-3.5 text-[8px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 ${
                            isAdded
                                ? "bg-green-600 text-white"
                                : "bg-black/95 text-white hover:bg-[#FF2323]"
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
                )}

            </div>


            {/* ================= PRODUCT INFORMATION ================= */}

            <div
                className={`${
                    permanentCartButton
                        ? "pt-5 sm:pt-6"
                        : "pt-4 sm:pt-5"
                }`}
            >

                {/* Category */}

                <p className="mb-1.5 text-[8px] font-medium uppercase tracking-[0.2em] text-[#888888] sm:text-[9px]">
                    {product.category}
                </p>


                {/* Product Name */}

                <Link to={`/product/${product.id}`}>
                    <h3
                        className={`line-clamp-2 leading-5 tracking-[-0.01em] text-black transition-colors hover:text-red-600 ${
                            permanentCartButton
                                ? "text-[14px] font-semibold sm:text-[16px]"
                                : "text-[14px] font-medium sm:text-[15px]"
                        }`}
                    >
                        {product.name}
                    </h3>
                </Link>


                {/* ================= RATING ================= */}

                <div
                    className={`flex items-center gap-2 ${
                        permanentCartButton
                            ? "mt-2.5 sm:mt-3"
                            : "mt-2.5"
                    }`}
                >

                    <div className="flex items-center gap-[2px] text-black">

                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={9}
                                fill="currentColor"
                                strokeWidth={0}
                                className="sm:h-[10px] sm:w-[10px]"
                            />
                        ))}

                    </div>

                    <span className="text-[8px] text-[#777777] sm:text-[9px]">
                        {product.rating} ({product.reviews})
                    </span>

                </div>


                {/* ================= PRICE ================= */}

                <div
                    className={`${
                        permanentCartButton
                            ? "mt-2.5 sm:mt-3"
                            : "mt-2.5"
                    }`}
                >

                    <span
                        className={`font-semibold text-black ${
                            permanentCartButton
                                ? "text-[14px] sm:text-[15px]"
                                : "text-[13px] sm:text-sm"
                        }`}
                    >
                        Rs. {product.price.toLocaleString()}
                    </span>

                </div>


                {/* ================= PERMANENT ADD TO CART ================= */}

                {permanentCartButton && (
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className={`mt-4 flex w-full items-center justify-center gap-2 border py-3 text-[8px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 sm:mt-5 sm:py-3.5 sm:text-[9px] ${
                            isAdded
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
                )}

            </div>

        </article>
    );
}

export default ProductCard;