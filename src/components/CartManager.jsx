import React, { useState } from 'react';

const CartManager = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      return existingItem
        ? prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return children({ cartItems, addToCart, updateQuantity, totalPrice });
};

export default CartManager;
