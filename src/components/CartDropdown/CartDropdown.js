import Button from "../Button/Button";
import "./CartDropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cartDropdown">
      <div className="cartDropdown__items">Cart is empty</div>
      <Button>Checkout</Button>
    </div>
  );
}

export default CartDropdown;
