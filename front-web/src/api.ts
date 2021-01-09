import axios from 'axios';
import { OrderPayload } from './Orders/types';

 const API_URL = 'https://esdras-sds-2.herokuapp.com';
 
 const mapboxToken = 'pk.eyJ1IjoiZXNkcmFzY3NvdXphIiwiYSI6ImNranFiZ210NzBneDUyeG53c3FlbXhpcXoifQ._TV38EJp8bQlNJJcdpMOXA';

export function fetchProducts(){
     return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox (local :string){
   return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}


export function saveOrder(payload: OrderPayload){
   return axios.post(`${API_URL}/orders`, payload);
}