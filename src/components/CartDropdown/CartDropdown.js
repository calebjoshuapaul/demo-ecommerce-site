import Button from "../Button/Button";
import CartDropdownItem from "../CartDropdownItem/CartDropdownItem";
import "./CartDropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items">
        <CartDropdownItem />
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

export default CartDropdown;
