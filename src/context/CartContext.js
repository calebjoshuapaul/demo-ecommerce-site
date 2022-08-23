import { createContext, useState } from "react";

export const CartContext = createContext({
  visibility: false,
  cartItems: [],
  setVisibility: () => null,
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = { visibility, setVisibility, cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
