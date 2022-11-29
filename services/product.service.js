/* eslint-disable import/no-anonymous-default-export */
import api from "../api";

export default {
    async getProducts() {
        const result = await api.get("/products");
        if(result.data.products){
            return result.data.products.map(e=>{
                return{
                    image: "image",
                    name: e.title,
                    category: e.category,
                    price: ` R$ ${e.price},99`,
                    createdAt: new Date().toLocaleString(),
                    id: e.id
                };
            });
        }else{
            return [];
        }
    },
};