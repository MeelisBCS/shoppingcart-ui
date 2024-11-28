import axios from "axios";

const API_URL = "http://localhost:8089/api/cart";

export function fetchCartItems() {
    return axios.get(`${API_URL}/items`).then(res => res.data);
}

export function fetchCartTotal() {
    return axios.get(`${API_URL}/total`).then(res => res.data);
}

export function addCartItem(product) {
    return axios.post(`${API_URL}/add`, product);
}

export function removeCartItem(name) {
    return axios.delete(`${API_URL}/remove/${name}`);
}