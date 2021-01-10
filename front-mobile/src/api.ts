import axios from 'axios';

const API_URL = 'https://esdras-sds-2.herokuapp.com'

export function fetchOrders(){
     return axios (`${API_URL}/orders`);
}

export function confirmDeliver(orderId : number){
     return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}