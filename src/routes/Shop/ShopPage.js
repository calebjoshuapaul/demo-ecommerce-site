import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import "./ShopPage.styles.scss";

function ShopPage() {
  const { products } = useContext(ProductContext);
  console.log(products.hats);
  const { hats } = products;
  return (
    <div className="shopPage">
      <div className="shopPage__container">
        {hats.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default ShopPage;
