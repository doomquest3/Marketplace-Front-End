/* eslint-disable import/no-anonymous-default-export */
import api from "../../api"

export default {
    logout(){
        localStorage.removeItem("token");
    },
    async login(data){
        const result = await api.post("/auth", data);
        this.setTokenApi(result.data.token)
        return result.data;
    },

    setTokenApi(token){
        localStorage.setItem("token", token);
        api.defaults.headers.common["Authorization"] = token;
    },
};