import product1 from "../assets/products/Hijabs/Hijab Maroon.png";
import product2 from "../assets/products/Abayas/Abaya Brown.png";
import product3 from "../assets/products/Hijabs/Hijab Brown.png";
import product4 from "../assets/products/Abayas/Abaya Purple.png";

const products = [
    // =========================
    // NEW ARRIVALS
    // =========================

    {
        id: 1,
        name: "Elegant Hijab",
        category: "Hijabs",
        price: 1499,
        oldPrice: null,
        image: product1,
        secondImage: product1,
        rating: 4.8,
        reviews: 24,
        badge: "New",
        isNew: true,
        bestSeller: false,
        stock: 10,
    },

    {
        id: 2,
        name: "Premium Abaya",
        category: "Abayas",
        price: 4499,
        oldPrice: null,
        image: product2,
        secondImage: product2,
        rating: 4.9,
        reviews: 18,
        badge: "New",
        isNew: true,
        bestSeller: false,
        stock: 8,
    },

    {
        id: 3,
        name: "Classic Handbag",
        category: "Handbags",
        price: 2499,
        oldPrice: null,
        image: product3,
        secondImage: product3,
        rating: 4.7,
        reviews: 31,
        badge: "New",
        isNew: true,
        bestSeller: false,
        stock: 12,
    },

    {
        id: 4,
        name: "Elegant Brooch",
        category: "Brooches",
        price: 799,
        oldPrice: null,
        image: product4,
        secondImage: product4,
        rating: 4.8,
        reviews: 15,
        badge: "New",
        isNew: true,
        bestSeller: false,
        stock: 15,
    },

    // =========================
    // BEST SELLERS
    // =========================

    {
        id: 5,
        name: "Luxury Black Abaya",
        category: "Abayas",
        price: 4999,
        oldPrice: null,
        image: product2,
        secondImage: product2,
        rating: 5.0,
        reviews: 86,
        badge: "Best Seller",
        isNew: false,
        bestSeller: true,
        stock: 6,
    },

    {
        id: 6,
        name: "Classic Black Handbag",
        category: "Handbags",
        price: 3299,
        oldPrice: null,
        image: product3,
        secondImage: product3,
        rating: 4.9,
        reviews: 72,
        badge: "Best Seller",
        isNew: false,
        bestSeller: true,
        stock: 9,
    },

    {
        id: 7,
        name: "Premium Maroon Hijab",
        category: "Hijabs",
        price: 1299,
        oldPrice: null,
        image: product1,
        secondImage: product1,
        rating: 4.9,
        reviews: 94,
        badge: "Best Seller",
        isNew: false,
        bestSeller: true,
        stock: 14,
    },

    {
        id: 8,
        name: "Signature Brooch",
        category: "Brooches",
        price: 899,
        oldPrice: null,
        image: product4,
        secondImage: product4,
        rating: 4.8,
        reviews: 63,
        badge: "Best Seller",
        isNew: false,
        bestSeller: true,
        stock: 20,
    },
];

export default products;