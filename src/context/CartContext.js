import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems containe productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else return cartItem;
    });
  }
  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove, clear) => {
  //find if cartItems containe productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  //If found, decrement quantity
  if (existingCartItem) {
    if (clear) {
      return cartItems.filter((cartItem) => {
        return cartItem.id !== productToRemove.id;
      });
    }
    if (productToRemove.quantity === 1) {
      return cartItems.filter((cartItem) => {
        return cartItem.id !== productToRemove.id;
      });
    } else {
      return cartItems.map((cartItem) => {
        if (cartItem.id === productToRemove.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    }
  }
};

export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setCartItem: () => null,
  setCartCount: () => null,
  setCartTotal: () => null,
  //helper functions...
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, clear = false) => {
    setCartItems(removeCartItem(cartItems, productToRemove, clear));
  };

  const value = {
    cartItems,
    addItemToCart,
    cartCount,
    setCartCount,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
