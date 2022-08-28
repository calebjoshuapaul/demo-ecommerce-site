import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/CartContext";
import "./CheckoutPage.styles.scss";

function CheckoutPage() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkoutPage">
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} item={item} />;
          })}
          <h1>Total: {cartTotal * 75}</h1>
        </div>
      ) : (
        <h1 style={{ marginTop: "30vh", textAlign: "center" }}>
          Cart is empty, Continue shopping!
        </h1>
      )}
    </div>
  );
}

export default CheckoutPage;
