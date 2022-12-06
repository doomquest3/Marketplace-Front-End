/* eslint-disable import/no-anonymous-default-export */
import api from "/api"

export default {
    async getProducts(){
        const result = await api.get("/products");
        return result.data;
    },

    async getProduct(id){
        const result = await api.get(`/products/${id}`)
        return result.data;
    },

    async createProduct(data){
        data.createdAt = new Date().toLocaleString();

        const result = await api.post("/products", {
            image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            name: data.name,
            price: data.price,
            createdAt: new Date().toLocaleString(),
        });
        
        return result.data;
    },
    
}