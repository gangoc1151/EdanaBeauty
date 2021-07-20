import React , {useState} from 'react'
import {Text, View, StyleSheet, FlatList, Image, LayoutAnimation, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { ColorLib } from '../../../Style/ColorLib';
import Modal from 'react-native-modal';
const ServiceItem = ({selectedStyle, imageSource, onPress}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <TouchableOpacity style={styles.Card} activeOpacity={1} onPress={onPress}>
            <View style={styles.serviceCard}>

                <View style={{flexDirection: 'row'}}>
                    <View style={[styles.container, selectedStyle]}>
                        <Image source={imageSource} style={{width: 50, height: 50}} resizeMode='contain'/>
                    </View>
                    <View style={{marginLeft: 6}}>
                        <Text style={{fontSize: 16}}>Service 1</Text>
                        <Text style={{fontSize: 13}}>60 minutes</Text>
                        <Text>$40</Text>
                    </View>
                </View>

                <CheckBox
                        disabled={false}
                
                        value={toggleCheckBox}
                        boxType='square'
                        style={{ width: 20, height: 20 }}
                        tintColor= '#000'
                        onCheckColor={ColorLib.headerColor2}
                        onTintColor={ColorLib.headerColor2}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)} />
            
            </View>
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        // shadowColor: "#000",
        // shadowOffset: {width: 0.5, height: 0.5},
        // shadowOpacity: 0.2,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DFDFDF',
        borderWidth: 1,
        borderRadius: 10
    },
    serviceCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginHorizontal: 8
    },
    Card: {
        marginVertical: 5
    }
})

export default ServiceItem