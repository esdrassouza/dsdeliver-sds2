import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Orders from './Orders';
import OrdersDetails from './OrderDetails';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const Stack = createStackNavigator();



const Routes = () =>{
    return(
       <NavigationContainer>
            <Stack.Navigator headerMode="none" screenOptions={{
                  cardStyle:{
                      backgroundColor:'#fff'
                  }
              }}>
                  
                 <Stack.Screen  name="Home" component={Home}  />
                 <Stack.Screen  name="Orders" component={Orders} />
                 <Stack.Screen name="OrdersDetails" component={OrdersDetails} />
          </Stack.Navigator>
         
       </NavigationContainer>
    );

}
export default Routes;