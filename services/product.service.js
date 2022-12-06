/* eslint-disable import/no-anonymous-default-export */
import api from "../api";

export default {
  async getProducts() {
    const result = await api.get("/products");
    return result.data;
  },
};
