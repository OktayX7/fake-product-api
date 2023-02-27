import {requests} from "../utils";

const productBaseURL = "products";

export const getProducts = () => {
  return requests.get(productBaseURL);
};

export const getProduct = (id) => {
  return requests.get(`${productBaseURL}/${id}`);
};
