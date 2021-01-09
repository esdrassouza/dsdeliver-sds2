
import { Product } from './types';
import {formatPrice} from './helpers';
type Props = {
    product: Product;
    onSelectProduct: (product : Product) => void;
    isSelected:boolean;
}


const ProductsCards = ({ product, onSelectProduct, isSelected} : Props)=>{
    return(
          <section className={`order-card-container ${isSelected ? 'selected':''}`}
            onClick={ () => onSelectProduct(product)}
             >
              <h3 className="order-card-title">
                {product.name}
                  </h3>
                   <img src={product.imageUri} 
                       className="order-card-image"
                         title="Pizza de Calabresa" 
                           alt="Pizza de Calabresa"/>
                           <h3 className="order-card-price"> {formatPrice(product.price)}</h3>
                              <div className="order-card-description">
                                 <h3>Descrição</h3>
                                   <p>
                                     {product.description}
                                       </p>
                                         </div>
                                          </section>
    );
}


export default ProductsCards;