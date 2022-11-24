import axios from "axios";
import { base_url } from "../constant";

export const  Api = axios.create({
    baseURL: base_url
});


const API = {
    getAllAds: () => Api.get('users'),
    getById: (id) => Api.get(`users/${id}`),
    deleteAdById: (id) => Api.delete(`users/${id}`),
    createAd: (data) => Api.post('users', data)
} 

export default API;