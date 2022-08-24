import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartDropdownItem.styles.scss";

function CartDropdownItem() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropdownItem">
      {cartItems.length ? (
        cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cartItem__Container">
              <div className="cartItem__Image">
                <img src={`${cartItem.imageUrl}`} alt={`${cartItem.name}`} />
              </div>
              <div className="cartItem__Info">
                <p>{cartItem.name}</p>
                <span>
                  {cartItem.quantity} X {cartItem.price * 75} ={" "}
                  {cartItem.quantity * (cartItem.price * 75)}Rs
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <strong>Cart is empty</strong>
      )}
    </div>
  );
}

export default CartDropdownItem;
