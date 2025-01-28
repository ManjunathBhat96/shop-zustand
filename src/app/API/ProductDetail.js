import axios from "axios";

const productDetailsResponse = async (productId: string) => {
  try {
    const returnResult = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return returnResult;
  } catch (error) {
    return {};
  }
};

export { productDetailsResponse };
