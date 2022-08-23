import { useContext } from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";
import CartDropdown from "../CartDropdown/CartDropdown";
import "./CartIcon.styles.scss";

function CartIcon() {
  const { visibility, setVisibility, cartItems } = useContext(CartContext);

  const toggleCartDropdown = () => {
    if (!visibility) setVisibility(true);
    else setVisibility(false);
  };

  return (
    <div className="cartIcon">
      <ShoppingBagIcon
        onClick={toggleCartDropdown}
        className="cartIcon__Logo"
      />
      <span className="cartIcon__count">{cartItems.length}</span>
      {visibility && <CartDropdown />}
    </div>
  );
}

export default CartIcon;
