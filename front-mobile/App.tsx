import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import {View ,Image, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/Header';
import Home from './src/Home';
const App = ()=>{
  let [fontsLoaded] = useFonts({
     
      OpenSans_400Regular,
      OpenSans_700Bold
  });
  if(!fontsLoaded){
          return <AppLoading />
  }
   return(
     <View  style={styles.container}>
           <Header/>
           <Home/>
        
   </View>
   );

}

const styles = StyleSheet.create({
 container:{
   flex:1,
   
   marginTop:30,
 },
 banner:{

 }
});

export default App;
