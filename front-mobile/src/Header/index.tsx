import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


const Header = ()=>{
   return(
       <View style={styles.container}>
           <View style={styles.content}>
               <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                />
               <Text style={styles.titulo}>DS Deliver</Text>
           </View>
    </View>
   );
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    flexDirection:'column',
},
   content:{
    flexDirection:'row',
    paddingTop:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#da5c5c',
    height:80,
  },
  logo:{
      
  },
    titulo:{
        textAlign:'center',
        fontSize:20,
        width:100,
        fontFamily:'OpenSans_700Bold',
        letterSpacing:-0.24,
        lineHeight:25,
        marginLeft:5,
        color:'#fff',
        fontWeight:'bold',
    },

})
export default Header;