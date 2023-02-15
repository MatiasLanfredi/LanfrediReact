import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
//?Create content
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //?Products state
  const [products, setProducts] = useState([]);
  //?Fetch Products

  useEffect(() => {
    const fetchProducts = async () => {
      const queryRef = collection(db, "productsList");
      const response = await getDocs(queryRef);
      const data = response.docs.map((doc) => {
        const newDoc = {
          ...doc.data(),
        };
        return newDoc;
      });

      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
