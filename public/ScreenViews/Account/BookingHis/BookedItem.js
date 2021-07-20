import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, Image} from 'react-native'
import ButtonClick from '../../../Components/Button/ButtonClick'
import { ColorLib } from '../../../Style/ColorLib'
const BookedItem = () => {
    return (
        <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../../../src/image/Service/NailsService.png')} style={{width: 60, height: 60}} resizeMode='contain'/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 16}}>Service 1</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}> 
                        <Text>bbb</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>40$</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>ccc</Text>
                        <View style={styles.box}>
                            <Text>Confirming</Text>
                        </View>
                    </View>
                    
                </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 100,
        borderColor: '#DFDFDF',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
       
    }, 
    image:{
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.2,
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70, 
        height: 70
    },
    box:{
        backgroundColor: ColorLib.buttonColor1,
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
    
})

export default BookedItem