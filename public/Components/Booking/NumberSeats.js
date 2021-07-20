import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import { ColorLib } from '../../Style/ColorLib';
const NumberSeats = () => {
    return (
        <View style={{borderColor: '#DFDFDF',  borderWidth: 1,  width: 350, height: 50, alignSelf: 'center', marginTop: 10}}>
            <View style={styles.container}>
                        <Text>Number of seats</Text>
                        <NumericInput onChange={value => console.log(value)}  
                            minValue={0}
                             totalWidth={90} 
                            totalHeight={40}
                            borderColor='#fff'
                            textColor={ColorLib.headerColor2}
                            iconSize={25}
                            step={1.5}
                            rounded 
                            iconStyle={{ color: '#000', fontWeight: 'bold', fontSize: 20 }} 
                            
                            />
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10
    }
})

export default NumberSeats