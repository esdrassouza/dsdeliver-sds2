import React from 'react';
import {Link} from 'react-router-dom';
import { checkSelected } from './helpers';
import ProductsCards from './ProductsCards';
import { Product } from './types';

type Props ={
    products: Product[];
    selectedProducts :Product[];
    onSelectProduct: (product : Product) => void;
}
const ProductsList = ({products, selectedProducts, onSelectProduct}:Props)=>{

    return(
        <section className="orders-list-container">
             <div className="orders-list-items">
              
              {products.map( (products)=>(
                 <ProductsCards 
                 key={products.id}
                 product={products}
                 onSelectProduct={onSelectProduct}
                 isSelected={checkSelected(selectedProducts, products)}
                 />
              ))}
              

             </div>

        </section>
    )
}

export default ProductsList;