import React from 'react';
import {formatPrice} from './helpers';
 type Props ={
    amount:number;
    totalPrice: number;
    onSubmit: () => void;
 }
 const OrderSummary = ({amount, totalPrice, onSubmit}: Props) =>{
     return(
         <div className="order-summary-container">
               <div className="order-summary-content">
                 <div>
                    <span className="amount-selectd-container">
                    PEDIDOS SELECIONADOS =
                         <strong className="amount-selected"> {amount} </strong>
                       
                    </span>
                       <span className="order-summary-total">
                          VALOR TOTAL = 
                             <strong className="amount-selected"> R$ {formatPrice(totalPrice)} </strong>
                             
                      </span>
                  </div>
                  <button className="order-summary-make-order"
                  onClick={onSubmit}
                  >
                     FAZER PEDIDO</button>
               </div>
        </div>
       )
     }
     export default OrderSummary;



