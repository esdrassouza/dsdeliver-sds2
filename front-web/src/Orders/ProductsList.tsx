import React from 'react';
import {Link} from 'react-router-dom';
import ProductsCards from './ProductsCards';
import { Product } from './types';

type Props ={
    products: Product[];
}
const ProductsList = ({products}:Props)=>{

    return(
        <section className="orders-list-container">
             <div className="orders-list-items">
              
              {products.map( (products)=>(
                 <ProductsCards key={products.id} product={products}/>
              ))}
              

             </div>

        </section>
    )
}

export default ProductsList;