import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckoutItem.styles.scss";

function CheckoutItem({ item }) {
  const { name, price, quantity, imageUrl } = item;
  const { addItemToCart, removeItemFromCart, setCartCount } =
    useContext(CartContext);

  const incrementQuantity = (item) => {
    setCartCount((cartCount) => cartCount + 1);
    addItemToCart(item);
  };

  const decrementQuantity = (item) => {
    setCartCount((cartCount) => cartCount - 1);
    removeItemFromCart(item);
  };

  const clearItem = () => {
    setCartCount((cartCount) => cartCount - item.quantity);
    removeItemFromCart(item, true);
  };

  return (
    <div className="checkoutItem__container">
      <div className="checkoutItem__image">
        <img src={imageUrl} alt="" height="100" />
      </div>
      <div className="checkoutItem__info">
        <h3>{name}</h3>
        <p>
          <span onClick={() => decrementQuantity(item)}> &#10094; </span>
          {quantity}
          <span onClick={() => incrementQuantity(item)}> &#10095; </span>
          <span onClick={clearItem}>&#10005;</span>
        </p>
        <p>
          {quantity} x {price * 75} = {quantity * price * 75} Rs
        </p>
      </div>
    </div>
  );
}

export default CheckoutItem;
