import React, { useState, useEffect } from "react";
import styles from "./ProductHome.module.css";
import { productListResponse } from "../../API/Product";
import HeaderComponent from "../HeaderComponent/HeeaderComponent";
import ProductList from "../ProductList/ProductList";
import useStore from "../../store/store";

export default function ProductHome() {
  const addProducts = useStore((state) => state.addProducts);

  const productList = async () => {
    const prodData = (await productListResponse()) || [];
    addProducts(prodData.data);
  };
  useEffect(() => {
    productList();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <HeaderComponent />
      <ProductList />
    </div>
  );
}
