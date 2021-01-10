import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {View , StyleSheet, StatusBar} from 'react-native';


import Route from './src/Routes';
const App = ()=>{
  let [fontsLoaded] = useFonts({
     
      OpenSans_400Regular,
      OpenSans_700Bold
  });
  if(!fontsLoaded){
  return    <AppLoading />
  }
   return(
            <Route />
        );

}

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:'#fff',
  }

});

export default App;
