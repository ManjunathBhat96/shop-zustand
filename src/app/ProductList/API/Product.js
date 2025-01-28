import axios from "axios";

const productListResponse = async () => {
  const retu = await axios.get("https://fakestoreapi.com/products");
  return retu;
};

export { productListResponse };
