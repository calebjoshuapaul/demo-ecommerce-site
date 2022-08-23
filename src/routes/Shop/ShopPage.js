import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";

function ShopPage() {
  const { products } = useContext(ProductContext);

  return (
    <div className="shopPage">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ShopPage;
