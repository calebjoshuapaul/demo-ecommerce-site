import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.styles.scss";

function ProductCard({ product }) {
  const { addItemToCart, setCartCount } = useContext(CartContext);

  const addToCart = () => {
    setCartCount((cartCount) => cartCount + 1);
    addItemToCart(product);
  };
  return (
    <div className="productCard__container">
      <div className="image__container">
        <img src={product.imageUrl} alt={`${product.name}`} />
      </div>
      <div className="productCard__info">
        <span className="name">{product.name}</span>
        <span className="price">{product.price * 75} Rs</span>
      </div>
      <Button onClick={addToCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
