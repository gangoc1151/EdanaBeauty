import React, {useContext, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { ColorLib } from '../../Style/ColorLib';



const SpecificList = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View>
            <View style={Styles.box}>
                <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            boxType='rough'
                            style={{ width: 20, height: 20 }}
                            tintColor= '#427AE3'
                            onCheckColor='#fff'
                            onTintColor='#427AE3'
                            onFillColor= '#427AE3'
                            onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                <Text style={Styles.TextItem}>Full set with clear tips – $55 </Text>
           
                   
            </View>
           
        </View>
    )
}

const Styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center'
    },
    TextItem: {
        marginLeft: 10
    }
})

export default SpecificList