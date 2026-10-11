import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("mashfaa-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Save cart in localStorage
  useEffect(() => {
    localStorage.setItem("mashfaa-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ==========================================
  // ADD PRODUCT TO CART
  // ==========================================

  const addToCart = (product, quantity = 1) => {
    const productId = product.id ?? product._id;
    const productStock = Number(product.stock ?? Infinity);

    if (!productId || productStock <= 0) {
      return false;
    }

    const safeQuantity = Math.max(
      1,
      Math.min(Number(quantity) || 1, productStock)
    );

    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => String(item.id ?? item._id) === String(productId)
      );

      // Product already exists
      if (existingItem) {
        const currentQuantity = Number(existingItem.quantity) || 0;

        const newQuantity = Math.min(
          currentQuantity + safeQuantity,
          Number(existingItem.stock ?? productStock)
        );

        return previousItems.map((item) =>
          String(item.id ?? item._id) === String(productId)
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        );
      }

      // New product
      return [
        ...previousItems,
        {
          ...product,
          quantity: safeQuantity,
        },
      ];
    });

    return true;
  };

  // ==========================================
  // UPDATE QUANTITY
  // ==========================================

  const updateQuantity = (productId, quantity) => {
    const newQuantity = Number(quantity);

    if (!productId || !Number.isFinite(newQuantity)) {
      return;
    }

    setCartItems((items) =>
      items.map((item) => {
        const itemId = item.id ?? item._id;

        if (String(itemId) !== String(productId)) {
          return item;
        }

        const stock = Number(item.stock ?? Infinity);

        // Minimum 1
        const safeQuantity = Math.max(
          1,
          Math.min(newQuantity, stock)
        );

        return {
          ...item,
          quantity: safeQuantity,
        };
      })
    );
  };

  // ==========================================
  // REMOVE PRODUCT
  // ==========================================

  const removeFromCart = (productId) => {
    setCartItems((items) =>
      items.filter(
        (item) =>
          String(item.id ?? item._id) !== String(productId)
      )
    );
  };

  // ==========================================
  // CLEAR CART
  // ==========================================

  const clearCart = () => {
    setCartItems([]);
  };

  // ==========================================
  // TOTAL PRODUCT UNITS
  // ==========================================

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  // ==========================================
  // CART TOTAL PRICE
  // ==========================================

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}