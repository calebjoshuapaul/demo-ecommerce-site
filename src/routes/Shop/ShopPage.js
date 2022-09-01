import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import "./ShopPage.styles.scss";

function ShopPage() {
  const { products, categories } = useContext(ProductContext);

  if (!products.length) {
    //return this
    return (
      <div className="shopPage">
        <div className="shopPage__container">
          {Object.keys(categories).map((title) => {
            return (
              <>
                <h2 className="title">{title}</h2>
                {categories[title].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="shopPage">
        <div className="shopPage__container">
          <h2 className="title">{products[0]}</h2>
          {products[1].map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default ShopPage;
