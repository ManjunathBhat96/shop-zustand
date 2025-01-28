import React, { useState, useEffect } from "react";
import styles from "./ProductHome.module.css";
import { productListResponse } from "../../API/Product";
import HeaderComponent from "../HeaderComponent/HeeaderComponent";
import ProductList from "../ProductList/ProductList";

export default function ProductHome() {
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
      <ProductList products={products} />
    </div>
  );
}
