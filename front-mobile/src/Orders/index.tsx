import React,{useEffect, useState} from 'react';
import {View,Text,  StyleSheet, ScrollView,Alert} from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import {fetchOrders} from '../api';
import {Order} from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Orders = ()=>{
 const [isLoading, setIsLoading] = useState(false);
 const [orders, setOrders] =  useState<Order[]>([]);
 const navigation = useNavigation();
const isFocused = useIsFocused();
const fetchData = () =>{
   setIsLoading(true);
   fetchOrders()
   .then(response => setOrders(response.data)) 
   .catch(() => Alert.alert('Não foi possivel listar os pedidos!'))
   .finally(() => setIsLoading(false));
}
  

 useEffect(()=>{
       
       if(isFocused){
          fetchData();
       }
 
   }, [isFocused]);
  
    const handlerOnPress = (order: Order) => {
            navigation.navigate('OrdersDetails', {
               order
            });
    }
   return(
       <>
       <Header/>
       <ScrollView  style={styles.container}>
            {isLoading ? (
               <Text>Carregando Pedidos...</Text>
            ) :(
                orders.map(order => (
                  <TouchableWithoutFeedback
                   key={order.id}
                   onPress={() => handlerOnPress(order)}>
                     <OrderCard order={order} />
                  </TouchableWithoutFeedback>
               ))
            )}
         
       </ScrollView>
       </>
   );
}
const styles = StyleSheet.create({
   container:{
     paddingRight:'5%',
     paddingLeft:'5%',
   }
});
export default Orders;