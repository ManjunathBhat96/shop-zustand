import { Router, useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";
import useStore from "../../store/store";

function ProductList() {
  const navigate = useNavigate();
  const productClick = (id) => {
    navigate(`productdetail/${id}`);
  };
  const products = useStore((state) => state.products);
  return (
    <div className={styles.listContainer}>
      {products.map((prod) => {
        return (
          <div className={styles.listitem} key={prod.id}>
            <img
              onClick={() => productClick(prod.id)}
              className={styles.productImage}
              src={prod.image}
              alt="image"
              width={300}
              height={300}
            />
            <span
              onClick={() => productClick(prod.id)}
              className={styles.productPrice}
            >
              {" "}
              {prod.price}
            </span>
            <span
              onClick={() => productClick(prod.id)}
              className={styles.productName}
            >
              {" "}
              {prod.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
