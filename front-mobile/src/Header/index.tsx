
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Image } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';


const Header = ()=>{
    
    const navigation =  useNavigation();
    const handleOnPress = ()=>{
      navigation.navigate('Home');
    } 

   return(
       
        <TouchableWithoutFeedback onPress={handleOnPress}>
               <View style={styles.container}>
              <Image
                source={require('../assets/logo.png')}
                />
               <Text style={styles.text}>DS Deliver</Text>
               </View>

        </TouchableWithoutFeedback>
          
  
    
   );
}
const styles = StyleSheet.create({
   container:{
    backgroundColor:'#da5c5c',
    height:90,
    paddingTop:25,
    flexDirection:'row',
    justifyContent:'center',
},
 
    text:{
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'OpenSans_700Bold',
        letterSpacing:-0.24,
        lineHeight:25,
        marginLeft:5,
      
    },

})
export default Header;