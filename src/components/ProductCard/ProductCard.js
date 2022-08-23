import React from "react";
import Button from "../Button/Button";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productCard__container">
        <img src={product.imageUrl} alt={`${product.name}`} height="200" />
        <div className="productCard__info">
          <span className="name">{product.name}</span>
          <span className="price">{product.price}</span>
        </div>
        <Button buttonType="inverted">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
