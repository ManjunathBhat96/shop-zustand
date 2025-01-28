import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { productListResponse } from "./API/Product";
import HeaderComponent from "../HeaderComponent/HeeaderComponent";
// import ProductList from "@/app/components/ProductList/ProductList";
// import { productListResponse } from "@/app/API/Product";
// import HeaderComponent from "@/app/components/Header/HeaderComponent/HeaderComponent";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const productList = async () => {
    const prodData = (await productListResponse()) || [];
    setProducts(prodData.data);
  };
  useEffect(() => {
    productList();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <HeaderComponent />

      {/* <ProductList products={products} /> */}
    </div>
  );
}
