import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem("mashfaa-wishlist");
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            "mashfaa-wishlist",
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        const productId = product.id ?? product._id;

        setWishlistItems((previousItems) => {
            const alreadyExists = previousItems.some(
                (item) => (item.id ?? item._id) === productId
            );

            if (alreadyExists) {
                return previousItems;
            }

            return [...previousItems, product];
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems((items) =>
            items.filter(
                (item) => (item.id ?? item._id) !== productId
            )
        );
    };

    const toggleWishlist = (product) => {
        const productId = product.id ?? product._id;

        setWishlistItems((previousItems) => {
            const alreadyExists = previousItems.some(
                (item) => (item.id ?? item._id) === productId
            );

            if (alreadyExists) {
                return previousItems.filter(
                    (item) => (item.id ?? item._id) !== productId
                );
            }

            return [...previousItems, product];
        });
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some(
            (item) => (item.id ?? item._id) === productId
        );
    };

    const wishlistCount = wishlistItems.length;

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                wishlistCount,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
                isInWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside WishlistProvider"
        );
    }

    return context;
}