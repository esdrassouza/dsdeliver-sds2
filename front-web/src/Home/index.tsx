import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Banner} from './main.svg';
import './styles.css';


const Home   =  () =>{
return(
<>
        <div className="home-container">
            <section className="home-content">
                <article className="home-action">
                    <h1 className="home-title"> Faça seu pedido <br/> que entregamos |
                        <br/> para você!!!
                          </h1>
                             <h3 className="home-subtitle">
                                 Escolha o seu pedido e em poucos minutos
                                   <br/>
                                     levaremos em sua porta.
                               </h3>
                           <Link to="/orders" className="home-btn-order">FAZER PEDIDO</Link>
                        </article> 
                    <figure>
                 <Banner className="home-image svg" />
             </figure>
        </section>
     </div>
</>
     );

}

export default Home;