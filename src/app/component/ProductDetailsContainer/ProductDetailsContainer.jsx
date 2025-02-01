import React, { useEffect, useState } from "react";
import styles from "./productDetailsContainer.module.css";
import { productDetailsResponse } from "../../API/ProductDetail";
import { useLocation } from "react-router-dom";

function ProductDetailsContainer() {
  const location = useLocation();

  const [prodDetail, setProdDetail] = useState();

  const productdetails = async () => {
    if (location?.pathname?.split("/")?.length > 0) {
      const result = await productDetailsResponse(
        location?.pathname?.split("/")?.[2]
      );
      setProdDetail(result.data);
    }
  };

  useEffect(() => {
    productdetails();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.prodImage} src={prodDetail?.image} />
      <span>{prodDetail?.category}</span>
      <span>{prodDetail?.description}</span>

      <span>{prodDetail?.price}</span>
      <span>{prodDetail?.title}</span>
      <span>{prodDetail?.rating.count}</span>
      <span>{prodDetail?.rating.rate}</span>
    </div>
  );
}

export default ProductDetailsContainer;
