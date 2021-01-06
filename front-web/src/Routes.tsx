import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Orders from './Horders';
import Navabar from './Navbar';


const Routes  = () =>{

     return(
         <BrowserRouter>
            <Navabar/>
             <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/orders" component={Orders}/>
             </Switch>
         
         </BrowserRouter>
     );
}

export default Routes;