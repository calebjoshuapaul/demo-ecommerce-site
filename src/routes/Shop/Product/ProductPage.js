import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { ProductContext } from "../../../context/ProductContext";
import "./ProductPage.styles.scss";

function ProductPage() {
  const { products, setProducts, categories } = useContext(ProductContext);
  const { productName } = useParams();

  useEffect(() => {
    setProducts(categories[productName]);
  });

  return (
    <div className="productPage">
      <div className="productPage__container">
        <h2 className="title">{productName}</h2>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default ProductPage;
