import React from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import { ColorLib } from '../../Style/ColorLib'
import ButtonClick from '../Button/ButtonClick'
const BookingItem = ({text, price}) => {
    return(
        <View style={styles.container}>
           
        <Image source={require('../../src/image/Service/NailsService.png')} style={styles.image}/>

           <View style={{flex: 1, marginLeft: 10,}}>
             <Text style={styles.text}>{text}</Text>
             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.price}>$</Text>
                </View>
                <ButtonClick text='Add to cart' textStyle={styles.textStyle} style={styles.button}/>
             </View>
             
           </View>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
         marginTop: 10,
         marginBottom: 10,
        marginHorizontal: 10,
       
       },
       image:{
         width: 60, 
         height: 60,
         shadowColor: ColorLib.blue1,
         shadowOffset: {width: 0.5, height: 0.5},
         shadowOpacity: 0.5,
         borderRadius: 10,
         resizeMode: 'contain',
         borderColor: ColorLib.blue1,
        borderWidth: 0.2
       },
       text: {
         fontSize: 18,
         flexWrap: 'wrap',
         color: '#000',
         fontWeight:'500'
       },
       price: {
        marginTop: 10,
        fontSize: 18,
        flexWrap: 'wrap',
        color: ColorLib.headerColor2,
        fontWeight:'500'
       },
       textStyle:{
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
      },
      button: {
        backgroundColor: ColorLib.buttonColor1,
        width: 100,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginLeft: 50, 
      }
       
})

export default BookingItem