import axios from "axios";

export const key="felipe_cfraga@hotmail.com"

const api = axios.create({
    baseURL: 'https://tiao.supliu.com.br',
    headers:{
        'Authorization': key,
    },
    
})

export default api;