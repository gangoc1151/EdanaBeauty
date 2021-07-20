import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";
import CheckBox from '@react-native-community/checkbox';
import PaymenetOptionItem from './PaymentOptionItem';
const userList = {
    "123":"Tom",
    "124":"Michael",
    "125":"Christin"
  }
const PaymentOption = () => {
    return (
        <View>
         <PaymenetOptionItem />
               
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PaymentOption