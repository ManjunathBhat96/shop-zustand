import styles from "./ProductList.module.css";



function ProductList({ products }) {
  const productClick = (id) => {
    // router.push(`proddetails/${id}`);
  };

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
