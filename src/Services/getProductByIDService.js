import axios from "axios";

export default function getProductByIDService(id) {
  return axios.get(`/api/products/${id}`);
}
