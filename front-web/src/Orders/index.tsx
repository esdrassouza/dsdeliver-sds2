import React, {useState, useEffect}from 'react';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


const Orders = () =>{

   const [products, setProdutcts] = useState<Product[]>([]);
   const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 

       useEffect(() =>{
           fetchProducts()
           .then(res => setProdutcts(res.data))
           .catch(error => console.log(error));
       }, []);

        return(
           <section className="orders-container">
              <StepsHeader />
              <ProductsList products={products}/>
               <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
           </section>    
 
           )
}
export default Orders;