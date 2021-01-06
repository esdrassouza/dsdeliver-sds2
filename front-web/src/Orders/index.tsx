import React, {useState, useEffect}from 'react';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { Product } from './types';
import { fetchProducts } from '../api';


const Orders = () =>{

   const [products, setProdutcts] = useState<Product[]>([]);
   console.log(products);

       useEffect(() =>{
           fetchProducts()
           .then(res => setProdutcts(res.data))
           .catch(error => console.log(error));
       }, []);

        return(
           <section className="orders-container">
              <StepsHeader />
              <ProductsList products={products}/>
           </section>    
 
           )
}
export default Orders;