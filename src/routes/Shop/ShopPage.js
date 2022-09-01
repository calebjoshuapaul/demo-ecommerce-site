import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ProductPage from "./Product/ProductPage";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ShopPage.styles.scss";

function ShopPage() {
  const { categories } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleClickTitle = (event) => {
    console.log("clicked", event.target.innerHTML);
    navigate(`/shop/${event.target.innerHTML}`);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <div className="shopPage">
            <div className="shopPage__container">
              {Object.keys(categories).map((title) => {
                return (
                  <>
                    <h2
                      onClick={(event) => handleClickTitle(event)}
                      className="title"
                    >
                      {title}
                    </h2>
                    {categories[title].slice(0, 4).map((product) => {
                      return <ProductCard key={product.id} product={product} />;
                    })}
                  </>
                );
              })}
            </div>
          </div>
        }
      />
      <Route path=":productName" element={<ProductPage />} />
    </Routes>
  );
}

export default ShopPage;
