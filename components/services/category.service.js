/* eslint-disable import/no-anonymous-default-export */
import api from "../../api";

export default{
    async getCategories(){
        const result = await api.get("/categories");
        return result.data;
    },
};