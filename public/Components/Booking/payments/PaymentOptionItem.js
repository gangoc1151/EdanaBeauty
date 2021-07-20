import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons'
const PaymentOptionItem = ({icon, text, color}) => {
    return (
        <View>
            <View style={styles.box}>
                <CheckBox
                        disabled={false}
                        value={true}
                        tintColor='#C5C5C5'
                        onCheckColor='#DC355E'
                        onTintColor='#DC355E'
                        boxType='circle'
                        onAnimationType='fade'
                        offAnimationType='fade'
                       lineWidth={2}
                       style={{ width: 20, height: 20 }}
                        // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                <Icon name={icon} size={30} color= {color} style={{marginLeft: 10}}/>
                <Text style={{marginLeft: 10, fontSize: 17, color: '#9A9A9A'}}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
})

export default PaymentOptionItem