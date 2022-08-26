import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CartDropdownItem from "../CartDropdownItem/CartDropdownItem";
import "./CartDropdown.styles.scss";

function CartDropdown() {
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("./checkout");
  };

  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items">
        <CartDropdownItem />
      </div>
      <Button onClick={navigateToCheckout}>Checkout</Button>
    </div>
  );
}

export default CartDropdown;
