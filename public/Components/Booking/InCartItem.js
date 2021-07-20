import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image} from 'react-native'
import { ColorLib } from '../../Style/ColorLib'
import ButtonClick from '../Button/ButtonClick'
import NumericInput from 'react-native-numeric-input'
import CheckBox from '@react-native-community/checkbox';


//https://www.npmjs.com/package/react-native-numeric-input
const InCartItem = ({text, price}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <View style={styles.container}>
           <CheckBox
              disabled={false}
              value={toggleCheckBox}
              boxType='square'
              tintColor= '#000'
              onCheckColor={ColorLib.headerColor2}
              onTintColor={ColorLib.headerColor2}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
        <Image source={require('../../src/image/Service/NailsService.png')} style={styles.image}/>

           <View style={{flex: 1, marginLeft: 10,}}>
             <Text style={styles.text}>{text}</Text>
             <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.price}>$</Text>
                </View>
                <View style={{marginRight: 30}}>
                  <NumericInput onChange={value => console.log(value)}  
                  minValue={0}
                  totalWidth={90} 
                  totalHeight={30}/>
                </View>
            
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
        marginHorizontal: 5,
        alignItems: 'center',
       
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
        borderWidth: 0.2,
        marginLeft: 6
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

export default InCartItem