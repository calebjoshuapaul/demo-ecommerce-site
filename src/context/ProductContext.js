import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.js";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
  categories: {},
  setCategories: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCategories(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { products, setProducts, categories, setCategories };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
