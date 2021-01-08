import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Navabar from './Navbar';
import Footer from './Footer';


const Routes  = () =>{

     return(
         <>
          <BrowserRouter>
             <Navabar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                     <Route exact path="/orders" component={Orders}/>
                  </Switch>
               <Footer/>
            </BrowserRouter>
         </>
     );
}

export default Routes;