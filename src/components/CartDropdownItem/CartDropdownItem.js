import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartDropdownItem.styles.scss";

function CartDropdownItem() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropdownItem">
      {cartItems.length ? (
        cartItems.map(({ id, name, price, quantity, imageUrl }) => {
          return (
            <div key={id} className="cartItem__Container">
              <div className="cartItem__Image">
                <img src={`${imageUrl}`} alt={`${name}`} />
              </div>
              <div className="cartItem__Info">
                <p>{name}</p>
                <span>
                  {quantity} X {price * 75} = {quantity * (price * 75)}Rs
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
